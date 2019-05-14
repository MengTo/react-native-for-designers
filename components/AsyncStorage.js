import { AsyncStorage } from "react-native";

export const saveState = async state => {
  try {
    const serializedState = JSON.stringify(state);
    await AsyncStorage.setItem("state", serializedState);
  } catch (error) {}
};
