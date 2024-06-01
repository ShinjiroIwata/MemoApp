import {
    View, Text, StyleSheet, TouchableOpacity,
    type ViewStyle

} from 'react-native'
interface Props {
    children: JSX.Element,
    style?: ViewStyle
}
const CircleButton = (props: Props) => {
    const { children, style } = props
    return (

        <TouchableOpacity style={[styles.circleButton, style]}>
            <Text style={styles.circleButtonLabel}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

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

export default CircleButton