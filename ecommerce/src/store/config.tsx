import { Platform } from "react-native";

// FOR EMULATOR OR SIMULATOR DEVICE
export const BASE_URL = Platform.OS == "android" ? 'http://10.0.2.2:5000' : 'http://localhost:5000'


// for physical device use your network ip or hosted url 