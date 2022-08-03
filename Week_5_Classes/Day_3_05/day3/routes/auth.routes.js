const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { default: mongoose } = require('mongoose');
const User = require('./models/User.model')
const {isLoggedIn, isLoggedOut} = require('./middleware/route-guard')

router.get('/signup', isLoggedOut, (req, res, next) => {
    res.render('auth/signup')
});

router.post('/signup', isLoggedOut, (req, res, next) => {
    const { username, email, password } = req.body;

    if(!username || !email || !password) {
        res.render('/auth/signup', {
            errorMessage: 'Please complete all fields.'
        });
        return;
    }

    bcrypt.genSalt(10)
    .then((salt) => bcrypt.hashSync(password, salt))
    .then((hashedPassword) => {
        return User.create({username, email, password: hashedPassword})
    })
    .then(() => res.redirect('/profile'))
    .catch((err) => {
        if (err instanceof mongoose.Error.ValidationError) {
            res.status(500).render('auth/signup', { errorMessage: err.message})
        } else if (err.code === 11000) {
            res.status(500).render('auth/signup', { errorMessage: 'Please provide a unique username or email. The one you chose is already taken'})
        } else {
            next(err)
        }
    });
})

router.get('/login', isLoggedOut, (req, res, next) => res.render('auth/login'));

router.post('/login', isLoggedOut, (req, res, next) => {
    const {email, password} = req.body;

    if(!email || !password) {
        res.render('/auth/login', {
            errorMessage: 'Please complete all fields.'
        });
        return;
    }

    User.findOne({email})
    .then((user) => {
        if(!user) {
            res.render('/auth/login', {
                errorMessage: 'email was not found.'
            });
            return;
        } else if (bcrypt.compareSync(password, user.password)) {
            
            req.session.currentUser = user;
            
            // here password is the one coming from the frontend form, user.password is the hashed password we have stored in the db
            res.redirect('/profile');
        } else {
            res.render('auth/profile', {
                errorMessage: 'Incorrect password.'
            })
        }
    })
    .catch((err) => next(err));

})

router.get('/profile', isLoggedIn, (req, res, next) => res.render('auth/profile'));
// dps podemos usar res.render('auth/profile', {user: req.session.currentUser})

router.get('/logout', isLoggedIn, (req, res, next) => {
    req.session.destroy((err) => {
        if(err) next(err)
        res.redirect('/')
    })
})

module.express = router;