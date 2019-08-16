const axios = require("axios");
const router = require("express").Router();

router.get("/discover", (req, res) => {
  axios
    .get("https://www.googleapis.com/", { params: req.query }, "&key=yourAPIKeyAIzaSyCsKPCFHQxqme-pztu1VLlyTuv-r_iFMRk")
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

module.exports = router;
