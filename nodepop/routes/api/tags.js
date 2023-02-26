var express = require('express');
var router = express.Router();

// GET tags permitidos
router.get('/', (req, res, next)=>{
    try {
      res.json({results: ["work", "lifestyle", "mobile", "motor"]})
    } catch (error) {
      next(error)
    }
  });

module.exports = router;