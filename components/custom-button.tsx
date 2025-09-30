import { useThemeColor } from "@/hooks/use-theme-color";
import { MaterialIcons } from "@expo/vector-icons";
import { GestureResponderEvent, Pressable, StyleSheet, Text, TextStyle, ViewStyle } from "react-native";

type CustomButtonProps = {
    children: string,
    lightBackgroundColor?: string,
    darkBackgroundColor?: string,
    style?: ViewStyle,
    textStyle?: TextStyle,
    onPress: (event: GestureResponderEvent) => void,
    iconName?: any //Permet de ne pas avoir a mettre a jour le type a chaque fois 
}

/**
 * If no background color is provided, the default one (buttonContainer) from the theme will be used
 * (@/constants/Colors.ts)
 * 
 * @param lightBackgroundColor (optional) Background color to use in light mode 
 * @param darkBackgroundColor (optional) Background color to use in dark mode
 * @returns 
 */
export default function CustomButton({
    children,
    lightBackgroundColor,
    darkBackgroundColor,
    style,
    textStyle,
    onPress,
    iconName }: CustomButtonProps) {

    const backgroundColor = useThemeColor(
        {
            light: lightBackgroundColor,
            dark: darkBackgroundColor
        },
        'buttonContainer');

    return (
        <Pressable
            onPress={onPress}
            style={[
                styles.container,
                { backgroundColor },
                style]}>
            {iconName ? <MaterialIcons
                name={iconName}
                size={textStyle?.fontSize ?? 16}
                color={textStyle?.color ?? 'white'} /> : null}
            <Text style={[styles.text, textStyle]}>
                {children}
            </Text>
        </Pressable>
    )

}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 16,
    },
    container: {
        flexDirection: 'row',
        gap: 5,
        borderRadius: 5,
        padding: 10,
        backgroundColor: "green",
        alignSelf: 'flex-start' // Shrink to fit content
    }
})


