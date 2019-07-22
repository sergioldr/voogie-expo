import { Platform } from "react-native";
import {
  ANDROID_CLIENT_ID_FOR_EXPO,
  IOS_REVERSE_CLIENT_ID,
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_DATABASE_URL,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
} from "react-native-dotenv";

export default {
  ANDROID_CLIENT_ID_FOR_EXPO,
  IOS_REVERSE_CLIENT_ID,
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_DATABASE_URL,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
};

// EXAMPLE
// export default {
//   API_URL,
//   ANALYTICS_KEY: Platform.select({
//     ios: IOS_ANALYTICS_KEY,
//     android: ANDROID_ANALYTICS_KEY
//   })
// };