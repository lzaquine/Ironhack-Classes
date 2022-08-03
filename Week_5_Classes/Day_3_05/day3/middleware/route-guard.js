const isLoggedIn = (req, res, next) => {
    if(!req.session.currentUser) {
        return res.redirect('/login')
    } else {
        next()
    }
} 

const isLoggedOut = (req, res, next) => {
    if(req.session.currentUser) {
        return res.redirect('/')
    }
}

module.exports = {
    isLoggedIn,
    isLoggedOut,
};