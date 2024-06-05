import { View, StyleSheet, Text } from "react-native";
import MemoListItem from "../../components/MemoListItem";
import CircleButton from "../../components/CircleButton";
import { useEffect } from "react";
// import { Feather } from '@expo/vector-icons'
import Icon from "../../components/Icon";
import { router, useNavigation } from "expo-router";
import LogOutButton from "../../components/LogOutButton";
const handlePress = (): void => {
  router.push("/memo/create");
};
const List = (): JSX.Element => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <LogOutButton />;
      },
    });
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <MemoListItem></MemoListItem>
        <MemoListItem></MemoListItem>
        <MemoListItem></MemoListItem>
      </View>
      <CircleButton onPress={handlePress}>
        <Icon name="plus" size={40} color="#fff"></Icon>
      </CircleButton>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
export default List;
