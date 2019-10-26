const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json(
        {
            data:'upload'
        }
    );
});

router.get('/user-image', (req, res) => {
    res.json(
        {
            data:'user-image-upload'
        }
    );
});

module.exports = router;