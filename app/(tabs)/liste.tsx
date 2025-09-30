import { ThemedView } from "@/components/themed-view";
import { Item } from "@/models/Item";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ListeScreen() {

    const DATA: Item[] = [
        { id: '1', title: 'Item 1' },
        { id: '2', title: 'Item 2' },
        { id: '3', title: 'Item 3' },
    ]

    const renderItem = ({ item }: { item: Item }) => (
        <View style={styles.itemContainer}>
            <Text>{item.title}</Text>
        </View>
    );


    return (
        <ThemedView style={[styles.container]}>
            <SafeAreaView>
                <FlatList style={styles.listContainer} data={DATA} renderItem={renderItem}>
                </FlatList>
            </SafeAreaView>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    listContainer: {
        borderColor: 'gray',
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        margin: 10,
    },
    itemContainer: {
        padding: 20,
        borderColor: 'gray',
        borderBottomWidth: 1
    }

})