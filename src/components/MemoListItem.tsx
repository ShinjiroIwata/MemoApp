import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from './Icon'
const MemoListItem = (): JSX.Element => {
    return (

        <View style={styles.memoListItem}>
            <View>
                <Text style={styles.memoListItemTitle}>買い物リスト</Text>
                <Text style={styles.memoListItemDate}>2023年10月1日　10:00</Text>
            </View>
            <TouchableOpacity>
                <Icon name='delete' size={32} color='#b0b0b0' />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

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
    }
})


export default MemoListItem