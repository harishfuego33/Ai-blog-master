const dotenv = require("dotenv");
dotenv.config();

module.exports.mongourl = process.env.DB;
module.exports.PORT = process.env.PORT || 5000;
module.exports.globalVariables = (req, res, next) => {
  res.locals.success_message = req.flash("success-message");
  res.locals.error_message = req.flash("error-message");
  res.locals.user = req.user || null;
  next();
};
