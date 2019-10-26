const express = require('express');
const router = express.Router();

router.get('/token', (req, res) => {
    res.json(
        {
            data:'token'
        }
    );
});

router.get('/refresh-token', (req, res) => {
    res.json(
        {
            data:'refresh-token'
        }
    );
});

router.get('/login', (req, res) => {
    res.json(
        {
            data:'login'
        }
    );
});

router.get('/sign-up', (req, res) => {
    res.json(
        {
            data:'sign-up'
        }
    );
});

router.get('/forgot-password', (req, res) => {
    res.json(
        {
            data:'forgot-password'
        }
    );
});

router.get('/logout', (req, res) => {
    res.json(
        {
            data:'logout'
        }
    );
});

router.get('/self', (req, res) => {
    res.json(
        {
            data:'self'
        }
    );
});

module.exports = router;