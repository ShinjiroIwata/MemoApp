import { View, Text, StyleSheet } from 'react-native'
const Header = () => {
    return (
        <View style={styles.header}>
            <View style={styles.headerInner} >
                <Text style={styles.headerTitle} >Memo App</Text>
                <Text style={styles.headerRight} >ログアウト</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

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
    }
})

export default Header