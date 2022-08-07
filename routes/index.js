const router = require("express").Router();

const apiRoutes = requires("./api");

router.use("/api", apiRoutes);

router.use((req, res) => {
  res.status(404).send("<h1>404 ERROR!<h1>");
});

module.exports = router;
