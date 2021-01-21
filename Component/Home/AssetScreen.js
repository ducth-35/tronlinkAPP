import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import image from '../../assets/image';

class AssetScreen extends React.Component {
    render() {
        return (
            <ScrollView>
                <View style={{ flex: 1 }}>
                    <View style={styles.container}>
                        <LinearGradient colors={["#0099FF", "#0033FF"]} style={styles.buttonContainer}>
                            <View style={styles.view_gradient}>
                                <Text style={styles.text_gradient}>Duc123</Text>
                                <Image
                                    source={image.icon_arrow}
                                    style={{ width: 20, height: 20, marginTop: 12, marginLeft: 10 }} />
                                <TouchableOpacity style={{ marginLeft: 10 }}>
                                    <View style={styles.MainChain}>
                                        <Text style={styles.Text_mainchain}>MainChain</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Text style={{ color: '#63B8FF', marginTop: 30, fontSize: 18 }}>Total assets</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ color: 'white', fontSize: 40, fontWeight: 'bold', marginTop: 20 }}>0</Text>
                                    <Text style={{ color: 'white', fontSize: 40, marginLeft: 10, fontWeight: 'bold', marginTop: 20 }}>TRX</Text>
                                </View>
                                <Text style={{ color: '#63B8FF', marginTop: 10, fontSize: 20 }}>0</Text>
                            </View>
                            <View style={styles.view_gradient}>
                                <TouchableOpacity style={{ marginLeft: 10 }}>
                                    <View style={styles.Send}>
                                        <Text style={styles.Text}>Send</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ marginLeft: 10 }}>
                                    <View style={styles.Send}>
                                        <Text style={styles.Text}>Recevie</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </LinearGradient>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
export default AssetScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    buttonContainer: {
        padding: 15,
        alignItems: "center",
        height: 400,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50
    },
    view_gradient: {
        flexDirection: 'row',
    },
    text_gradient: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
    MainChain: {
        backgroundColor: '#63B8FF',
        borderRadius: 15,
        marginTop: 12,
        height: 25,
        width: 70
    },
    Text_mainchain: {
        color: 'white',
        fontSize: 10,
        textAlign: 'center',
        padding: 5
    },
    Send: {
        backgroundColor: 'white',
        borderRadius: 40,
        marginTop: 12,
        height: 45,
        width: 150
    },
    Text: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 5,
    }
})