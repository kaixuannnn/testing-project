import * as Segment from "expo-analytics-segment";

export const userSignedUpAnalytic = (userDetail) => {
  Segment.identifyWithTraits("UserSignedUp", userDetail);
};
