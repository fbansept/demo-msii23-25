
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";

type BasicViewProps = {
    title: string,
    children?: React.ReactNode
}

export default function BasicView({ title, children } : BasicViewProps) {
    return (
        <ThemedView style={[styles.container]}>
            <SafeAreaView>
                <ThemedText type="title">{title}</ThemedText>
                {children}
            </SafeAreaView>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})