import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const AppButton = ({ onPress, title, segmentEvent, segmentDetail }) => {
  const onPressButton = () => {
    Segment.identifyWithTraits(segmentEvent, segmentDetail);
    onPress();
  };
  return (
    <TouchableOpacity onPress={onPressButton}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({});
