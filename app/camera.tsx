import BasicView from '@/components/basic-view';
import CustomButton from '@/components/custom-button';
import { ThemedText } from '@/components/themed-text';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import { useRef, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

export default function CameraScreen() {

    const cameraRef = useRef<CameraView>(null);
    const [permission, requestPermission] = useCameraPermissions();

    const [facing, setFacing] = useState<CameraType>('back');
    const [enableTorch, setEnableTorch] = useState<boolean>(false);

    function takePhoto() {
        if (cameraRef.current) {
            cameraRef.current
                .takePictureAsync()
                .then(photo => console.log(photo))
        }
    }

    if (!permission) {
        // Camera permissions are still loading.
        return <View />;
    }
    if (!permission.granted) {
        // Camera permissions are not granted yet.
        return (
            <BasicView title="Caméra">
                <ThemedText>L'application a besoin d'utiliser votre appareil photo</ThemedText>
                <CustomButton onPress={requestPermission}>
                    Autoriser l'application à utiliser l'appareil photo
                </CustomButton>
            </BasicView>
        );
    }

    return (
        <View style={styles.container}>
            <CameraView ref={cameraRef} facing={facing} enableTorch={enableTorch} style={styles.cameraContainer}>
            </CameraView>
            <View style={styles.bottomActionsCamera}>
                <Pressable style={styles.boutonTakePhoto} onPress={() => takePhoto()}>
                </Pressable >
            </View>
            <View style={styles.rightActionsCamera}>
                <Pressable onPress={() => setFacing(facing === 'back' ? 'front' : 'back')}>
                    <MaterialIcons name="flip-camera-android" size={40} color="white" />
                </Pressable >
                <Pressable onPress={() => setEnableTorch(!enableTorch)}>
                    <MaterialIcons name="flash-on" size={40} color="white" />
                </Pressable >
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    rightActionsCamera: {
        position: 'absolute',
        right: 5,
        width: 40,
        height: "100%",
        justifyContent: 'center',
        gap: 40
    },
    boutonTakePhoto: {
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 4,
        borderColor: 'white',
        backgroundColor: 'red'
    },
    bottomActionsCamera: {
        position: 'absolute',
        bottom: 40,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    container: {
        flex: 1
    },
    cameraContainer: {
        flex: 1
    }
})