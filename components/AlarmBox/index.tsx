import React from "react";
import {
    Image,
    SafeAreaView,
    StyleSheet,
    useColorScheme,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
} from 'react-native';

function AlarmBox(){
    return(
        <View style={styles.container}>
            <View>
                <View style={styles.user}>
                    <Image source={require('../../assets/Cat.png')}/>
                    <Text style={styles.Bold12}>이태윤</Text>
                </View>
                <Text style={styles.Medium12}>대충 누군가가 파티에 들어왔다는 이야기를 한번 거창하게 쓰게 되었습니다</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderColor: '#EEEEEE',
        borderWidth: 1,
        width: "87%",
        padding: 20,
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        position: "relative",
        borderRadius: 8,
    },
    user: {
        flexDirection: "row",
        width: "25%",
        justifyContent: "space-between",
        alignItems: "center",
    },
    Bold12: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#727272"
    },
    Medium12: {
        fontSize: 12,
        fontWeight: "medium",
        color: "#727272",
        marginTop: 3
    }
})

export default AlarmBox;