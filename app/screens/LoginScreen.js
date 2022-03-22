import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { userSignedUpAnalytic } from "@Utility/segment";
import AppButton from "@Components/AppButton";
import AppFastImage from "../components/AppFastImage";

const LoginScreen = ({ navigation }) => {
  const submitLoginHandler = () => () => {
    navigation.navigate("Home");
    userSignedUpAnalytic({ name: "KaixuanTan", date: new Date() });
  };

  return (
    <View>
      <Text>LoginScreen</Text>
      <AppFastImage />
      <AppButton onPress={submitLoginHandler} title="Click Here to Login" />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
