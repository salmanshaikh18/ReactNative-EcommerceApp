import { User } from "../models/user.js";
import { errorHandler } from "../utils/errorHandler.js";
import { generateTokens } from "../utils/generateTokens.js";

export const authController = async (req, res) => {
  try {
    const { phone, address } = req.body;

    let user = await User.findOne({ phone });

    if (!user) {
      user = new User({ address, phone });
      user.save()
    } else {
      user.address = address;
      await user.save();
    }

    const { accessToken, refreshToken } = generateTokens(user.toObject());

    console.log("createdUser: ", user)

    res.status(200).json({
      success: true,
      user,
      accessToken,
      refreshToken,
    });
  } catch (error) {
    errorHandler(error, "authController", res);
  }
};
