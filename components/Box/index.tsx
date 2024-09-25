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

function PartyBox(){
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.Bold16}>밥먹으러 가실분</Text>
                <View style={styles.clockContainer}>
                    <Image source={require('../../assets/Clock.png')} style={styles.iconMargin}/>
                    <Text style={styles.Medium}>2024.03.19</Text>
                    <Text style={styles.Medium}>16:40</Text>
                    <Text style={styles.Medium}>~</Text>
                    <Text style={styles.Medium}>19:50</Text>
                </View>
                <View style={styles.locationContainer}>
                    <Image source={require('../../assets/Location.png')} style={styles.iconMargin}/>
                    <Text style={styles.Medium}>대전광역시</Text>
                </View>
            </View>
            <View style={styles.profileDetail}>
                <Image source={require('../../assets/Cat.png')}/>
                <View style={styles.detail}>
                    <Text style={styles.Bold12}>상세보기</Text>
                    <Image source={require('../../assets/Arrow.png')} style={styles.iconMargin}/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderColor: '#EEEEEE',
        borderWidth: 1,
        width: '87%',
        height: 97,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'relative',
        borderRadius: 8,
    },
    Bold16: {
        fontSize: 16,
        fontWeight: '700',
        color: '#000'
    },
    Medium: {
        fontSize: 12,
        fontWeight: '500',
        color: '#737373',
    },
    Bold12: {
        fontSize: 12,
        fontWeight: '700',
        color: '#737373',
    },
    clockContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '74%',
        justifyContent: 'space-between',
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '32%',
        justifyContent: 'space-between',
    },
    detail: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 25,
        width: 60,
    },
    iconMargin: {
        marginTop: 3,
    },
    profileDetail: {
        alignItems: 'flex-end',
    },
})

export default PartyBox