import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "./Icon";
import { Link } from "expo-router";
import { type Memo } from "../../types/memo";
interface Props {
  memo: Memo;
}
const MemoListItem = (props: Props): JSX.Element => {
  const { memo } = props;
  const dateString = memo.updatedAt.toDate().toLocaleString("ja-JP");
  return (
    <Link href="/memo/detail" asChild>
      <TouchableOpacity style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle} numberOfLines={1}>
            {memo.bodyText}
          </Text>
          <Text style={styles.memoListItemDate}>{dateString}</Text>
        </View>
        <TouchableOpacity>
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
