let router = require("express").Router();
let connection = require("../db/connection");

router.get("/api/tables", function(req, res) {
    connection.query("SELECT * FROM tables", function(err, data) {
      res.json(data);
    });
});

router.get("/api/reservations", function(req, res) {
    connection.query("SELECT * FROM tables WHERE isWaiting = 1", function(err, data) {
      res.json(data);
    });
});
  
router.post("/api/reserve", function(req, res) {
    console.log("req.body:", req.body);
  
    connection.query("INSERT INTO tables SET ?", req.body, function(err, result) {
      if (err) throw err;
  
      res.json(result);
    });
});

module.exports = router;
