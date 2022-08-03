const session = require('express-session')
const MongoStore = require('connect-mongo')
const mongoose = require('mongoose')

module.exports = (app) => {
    app.set('trust proxy', 1)

    app.use(session({
        secret: process.env.SECRET,
        resave: true,
        saveUninitialized: false,
        cookie: {
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
            secure: process.env.NODE_ENV === 'production',
            httpOnly: true,
            maxAge: 60000, // milisegundos
        },
        store: MongoStore.create({
            mongoUrl: process.env.MONGODB_URI || "mongodb://localhost/day3",
            ttl: 60 * 60 * 24 * 14, // '14d' talvez seja aceito // quando fizermos esse, podemos tirar o maxAge do cookie
        })
    }))




}