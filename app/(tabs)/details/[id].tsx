import BasicView from "@/components/basic-view";
import { Item } from "@/models/Item";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function DetailsScreen() {

    const { id } = useLocalSearchParams(); //recupere les parametres de l'url

    const [task, setTask] = useState<Item | null>(null)

    useEffect(() => {
        setTask(null);
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts/' + id)
                .then((response) => response.json())
                .then((post) => setTask(post))
        }, 2000);
    }, [id])

    return (
        task ? (
            <BasicView title={task.title} >
                <Text>{task.body}</Text>
            </BasicView>)
            : (<View style={styles.loader}>
                <Text>Loading...</Text>
            </View>)

    )
}

const styles = StyleSheet.create({
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
