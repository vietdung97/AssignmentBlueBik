import { MMKV } from "react-native-mmkv";
export enum STORAGE_KEYS {
  TOKEN = '@@TOKEN',
  TOKEN_ID = 'TOKEN_ID',
}
export const storage = new MMKV();
