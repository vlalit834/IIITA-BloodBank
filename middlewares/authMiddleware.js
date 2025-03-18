import JWT from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        res.status(401).send({
          sucess: false,
          message: "Error in verification authMiddleware",
          error,
        });
      } else {
        req.body.userID = decode.userID;
        next();
      }
    });
  } catch (error) {
    console.log("authMiddleware error:".bgRed.black, error);
    //401 Unauthorized access
    res.status(401).send({
      sucess: false,
      message: "Error in authMiddleware",
      error,
    });
  }
};

export { authMiddleware };