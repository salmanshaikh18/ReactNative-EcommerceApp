import jwt from "jsonwebtoken";

export const generateTokens = (user) => {
  const accessToken = jwt.sign(
    { userId: user?._id },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "2d" }
  );

  const refreshToken = jwt.sign(
    { userId: user?._id },
    process.env.REFRESH_ACCESS_TOKEN,
    { expiresIn: "2d" }
  );

  return { accessToken, refreshToken };
};
