import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import colors from "@/styles/colors";
import { dataType } from "@/data/appData";
import { useState } from "react";
// declare data type for props here

/*
  I am giving this ListItem component the data it needs to
  display, the status of what is selected, and the ability
  to update the selected status when clicked on
*/

export default function Index() {

  // create a simple function telling me what was selective
  const selectedList = (item: dataType) => {
    console.log(item.title);
    setSelectedId(item.id);
  };

  const [selectedId, setSelectedId] = useState<string>("1");

type propsType = {
  item: dataType;
  isSelected: boolean;
  onPress: (item: dataType) => void;
}
const ListItem:React.FC<propsType> = ({item, isSelected, onPress}) => {
  return (<TouchableOpacity onPress = {() => selectedList(item)}>
                <View style={[styles.flatlistRow,
                  {
                    backgroundColor: item.id === selectedId
                    ? colors.primary
                    : colors.secondary,


                  }
                ]}>
                  <Text style = {[styles.titleText,
                    {
                    color: item.id === selectedId
                    ? colors.text.light
                    : colors.text.dark,
                    }
                  ]}>
                    {item.title}
                  </Text>
                </View>

              </TouchableOpacity>);
};
}
export default ListItem;

const styles = StyleSheet.create({
  list: {
    backgroundColor: colors.secondary,
    padding: 5,
    height: 60,
    width: 350,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginTop: 5,
  },
  text: {
    color: colors.text.dark,
    fontSize: 20,
  },
  flatlist: {
    alignItems: "center",
  },
  flatlistRow: {
    alignItems: "center",
    backgroundColor: colors.secondary,
    marginBottom: 5,
    padding: 5,
    width: 300,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  titleContainer: {
    marginTop: 5,
    width: 300,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  titleText: {
    fontSize: 24,
    padding: 10,
  },
});
