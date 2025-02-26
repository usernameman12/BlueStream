// logger.js – a simple logging endpoint for debugging
module.exports = (req, res) => {
    console.log("Logger hit:", new Date().toISOString());
    res.status(200).json({ status: "Logged" });
  };
// i hate debugging loggers. - auto™[version; jailbroken]  