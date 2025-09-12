import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import colors from "@/styles/colors";
import defaultStyles from "@/styles/defaultStyles";
import { useState } from "react";

export default function Index() {

  type dataType = {
    id: string; // refer to the unique identifier
    title: string; // text we'll show in the list
  }

  // using all caps cause data will never change during use
  const DATA: dataType[] = [
    {id: "1", title: "First Item"},
    {id: "2", title: "Second Item"},
    {id: "3", title: "Third Item"},
    {id: "4", title: "Fourth Item"},
  ];

  // create a simple function telling me what was selective
  const selectedList = (item: dataType) => {
    console.log(item.title);
    setSelectedId(item.id);
  };

  const [selectedId, setSelectedId] = useState<string>("1");

  return (
    <View style={defaultStyles.container}>
      <View style={defaultStyles.titleContainer}>
        <Text style={defaultStyles.title}>Insert Title Here</Text>
      </View>
      <View style={[defaultStyles.textContainer, { flex: 1 }]}>
        <View style={styles.flatlistRow}>
          <FlatList
            data = {DATA}
            keyExtractor = {(item: dataType) => item.id}
            renderItem = {({  item }) => (
              <TouchableOpacity onPress = {() => selectedList(item)}>
                <View style={styles.flatlist}>
                  <Text>
                    {item.title}
                  </Text>
                </View>

              </TouchableOpacity>
            )}


            />
          <Text>This is where our list will go</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flatlist: {
    alignItems: "center",
  },
  flatlistRow: {
    alignItems: "center",
    backgroundColor: colors.secondary,
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
