import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Image as FastImage } from "react-native-expo-image-cache";

const AppFastImage = () => {
  const preview = {
    uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
  };
  const uri =
    "https://firebasestorage.googleapis.com/v0/b/react-native-e.appspot.com/o/b47b03a1e22e3f1fd884b5252de1e64a06a14126.png?alt=media&token=d636c423-3d94-440f-90c1-57c4de921641";
  return (
    <>
      <Image style={{ height: 100, width: 100 }} source={preview} />

      <FastImage style={{ height: 100, width: 100 }} {...{ preview, uri }} />
    </>
  );
};

export default AppFastImage;

const styles = StyleSheet.create({});
