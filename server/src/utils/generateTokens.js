import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

console.log("ACCESS_TOKEN_SECRET: ",  process.env.ACCESS_TOKEN_SECRET)
console.log("REFRESH_ACCESS_TOKEN: ", process.env.REFRESH_TOKEN_SECRET)

export const generateTokens = (user) => {
  const accessToken = jwt.sign(
    { userId: user?._id },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "2d" }
  );

  const refreshToken = jwt.sign(
    { userId: user?._id },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "2d" }
  );

  return { accessToken, refreshToken };
};
