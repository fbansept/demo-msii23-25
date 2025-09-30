import CustomButton from "@/components/custom-button";
import { StyleSheet, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AboutScreen() {

    const theme = useColorScheme()

    console.log(theme);

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme === 'dark' ? "red" : "blue" }]}>

            <CustomButton
                onPress={(e) => { console.log(e) }}>
                Example button
            </CustomButton>

            <CustomButton
                iconName="check"
                onPress={() => { }}>
                Example button avec icone
            </CustomButton>

            <CustomButton
                iconName="check"
                textStyle={{ color: "red" }}
                onPress={() => { }}>
                Example button avec icone
            </CustomButton>

            <CustomButton
                onPress={() => { console.log("Press 2 !") }}
                style={{ padding: 50 }}
                textStyle={{ color: 'white', fontWeight: 'bold' }}
                lightBackgroundColor="green">
                Example button custom
            </CustomButton>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})