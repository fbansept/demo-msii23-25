import BasicView from "@/components/basic-view";
import { Item } from "@/models/Item";
import { Href, router } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

export default function ListeScreen() {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((posts) => setTasks(posts))
    }, [])

    const renderItem = ({ item }: { item: Item }) => (
        <Pressable style={styles.itemContainer} onPress={() => { router.push(`/details/${item.id}` as Href) }}>
            <View style={styles.itemContent}>
                <Text>{item.title}</Text>
            </View>
        </Pressable>
    );

    return (
        <BasicView title="List items">
            <FlatList numColumns={2} style={styles.listContainer} data={tasks} renderItem={renderItem}>
            </FlatList>
        </BasicView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    listContainer: {
        borderColor: 'gray',
        // borderTopWidth: 1,
        // borderLeftWidth: 1,
        // borderRightWidth: 1,
        margin: 10,
    },
    itemContainer: {
        padding: 5,
        // borderColor: 'gray',
        // borderBottomWidth: 1

        width: '50%'
    },
    itemContent: {
        padding: 5,
        borderColor: 'gray',
        borderWidth: 1,
        minHeight: 100
    }

})