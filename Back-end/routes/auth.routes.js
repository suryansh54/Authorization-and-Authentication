const express = require('express');
const router = express.Router();

router.get('/token', (req, res) => {
    res.json(
        {
            token:'token'
        }
    );
});

router.get('/refresh-token', (req, res) => {
    res.json(
        {
            token:'refresh-token'
        }
    );
});

router.get('/login', (req, res) => {
    res.json(
        {
            token:'login'
        }
    );
});

router.get('/sign-up', (req, res) => {
    res.json(
        {
            token:'sign-up'
        }
    );
});

router.get('/forgot-password', (req, res) => {
    res.json(
        {
            token:'forgot-password'
        }
    );
});

module.exports = router;