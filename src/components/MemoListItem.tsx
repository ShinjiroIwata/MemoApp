import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import Icon from "./Icon";
import { Link } from "expo-router";
import { type Memo } from "../../types/memo";
import { deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../config";
interface Props {
  memo: Memo;
}
const handlePress = (id: string): void => {
  if (auth.currentUser === null) {
    return;
  }
  const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id);
  Alert.alert("メモを削除します", "宜しいですか？", [
    {
      text: "キャンセル",
    },
    {
      text: "削除する",
      style: "destructive",
      onPress: () => {
        deleteDoc(ref).catch((error) => {
          Alert.alert("削除に失敗しました。");
        });
      },
    },
  ]);
};
const MemoListItem = (props: Props): JSX.Element => {
  const { memo } = props;
  const { bodyText, updatedAt } = memo;
  if (bodyText === null || updatedAt === null) {
    return null as any;
  }
  const dateString = memo.updatedAt.toDate().toLocaleString("ja-JP");
  return (
    <Link href={{ pathname: "/memo/detail", params: { id: memo.id } }} asChild>
      <TouchableOpacity style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle} numberOfLines={1}>
            {memo.bodyText}
          </Text>
          <Text style={styles.memoListItemDate}>{dateString}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            handlePress(memo.id);
          }}
        >
          <Icon name="delete" size={32} color="#b0b0b0" />
        </TouchableOpacity>
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 19,
    borderBottomWidth: 1,
    borderColor: "rgba(0,0,0,.15)",
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: "rgba(0,0,0,.7)",
  },
});

export default MemoListItem;
