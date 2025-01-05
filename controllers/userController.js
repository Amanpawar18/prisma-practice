const prisma = require("../prisma/index");
const cookieToken = require("../utils/cookieToken");

//user sign up
exports.signup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(300).json({
        message: "All fields are required !!",
      });
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    cookieToken(user, res);
  } catch (error) {
    throw new Error(error);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) return res.status(401).json("Invalid credentails !!");

    cookieToken(user, res);
  } catch (error) {
    throw new Error(error);
  }
};

exports.logout = async (req, res) => {
  return res.status(200).clearCookie("token").json({
    message: "User logout !!",
  });
};
