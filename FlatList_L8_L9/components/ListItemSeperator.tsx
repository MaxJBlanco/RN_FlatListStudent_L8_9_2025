import { StyleSheet, View, ViewStyle } from "react-native";
import React from "react";
import colors from "@/styles/colors";

type propsType = {
  color ?: string; // optional color
}

const ListItemSeparator:React.FC<propsType> = ({color}) => {
  return <View 
  style={[styles.separator,
    {backgroundColor: color || colors.theme.light.text}
  ]}/>;
};

export default ListItemSeparator;

const styles = StyleSheet.create({
  separator: {
    height: 3,
    width: '100%', //100% of the width of a flatlist
  } as ViewStyle,
});
