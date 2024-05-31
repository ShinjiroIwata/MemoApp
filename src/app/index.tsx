import { View, Text, StyleSheet } from 'react-native'
const Index = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerInner} >
                    <Text style={styles.headerTitle} >Memo App</Text>
                    <Text style={styles.headerRight} >ログアウト</Text>
                </View>
            </View>
            <View>
                <View style={styles.memoListItem}>
                    <View>
                        <Text style={styles.memoListItemTitle}>買い物リスト</Text>
                        <Text style={styles.memoListItemDate}>2023年10月1日　10:00</Text>
                    </View>
                    <View>
                        <Text>×</Text>
                    </View>
                </View>
                <View style={styles.memoListItem}>
                    <View>
                        <Text style={styles.memoListItemTitle}>買い物リスト</Text>
                        <Text style={styles.memoListItemDate}>2023年10月1日　10:00</Text>
                    </View>
                    <View>
                        <Text>×</Text>
                    </View>
                </View>
                <View style={styles.memoListItem}>
                    <View>
                        <Text style={styles.memoListItemTitle}>買い物リスト</Text>
                        <Text style={styles.memoListItemDate}>2023年10月1日　10:00</Text>
                    </View>
                    <View>
                        <Text>×</Text>
                    </View>
                </View>
            </View>
            <View style={styles.circleButton}>
                <Text style={styles.circleButtonLabel}>+</Text>
            </View>
        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#fff'
    },
    header: {
        // flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: '#467fd3',
        height: 104
    },
    headerInner: {
        alignItems: 'center',

    },
    headerRight: {
        position: 'absolute',
        right: 16,
        bottom: 16,
        color: 'rgba(255,255,255,.7)',
    },
    headerTitle: {
        marginBottom: 8,
        fontSize: 22,
        lineHeight: 32,
        fontWeight: 'bold',
        color: '#fff'
    },
    memoListItem: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 19,
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,.15)'

    },
    memoListItemTitle: {
        fontSize: 16,
        lineHeight: 32
    },
    memoListItemDate: {
        fontSize: 12,
        lineHeight: 16,
        color: 'rgba(0,0,0,.7)'
    },
    circleButton: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#467fd3',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 40,
        bottom: 40,
        shadowColor: '#000',
        shadowOpacity: .25,
        shadowRadius: 8,
        shadowOffset: { width: 8, height: 8 },
        elevation: 8
    },
    circleButtonLabel: {
        color: '#fff',
        fontSize: 40,
        lineHeight: 48
    }
})
export default Index