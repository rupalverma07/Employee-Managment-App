const jwt = require("jsonwebtoken");
// const { User } = require("../models/user.model");

const auth = async (req, res, next) => {
  // console.log(req);
  try {
    // const token = req.cookies.jwt;
    // const token = req.headers["autorization"];
    const token = req.headers.authorization;
    // console.log(token, "token");
    const verifyUser = jwt.verify(token, process.env.JWT_SECRET);
    console.log(verifyUser, "verify");
    if (verifyUser) {
      // const user = await User.findOne({ _id: verifyUser });
      req.userId = verifyUser.sub;
      next();
    } else {
       console.log("Please authenticate");
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = auth;
