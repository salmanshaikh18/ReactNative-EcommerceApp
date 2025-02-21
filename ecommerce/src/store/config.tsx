import { Platform } from "react-native";

// FOR EMULATOR OR SIMULATOR DEVICE
export const BASE_URL = Platform.OS == "android" ? 'http://10.0.2.2:3000' : 'http://localhost:3000'


// for physical device use your network ip or hosted url 