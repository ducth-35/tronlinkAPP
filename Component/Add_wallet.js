import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

class AddWallet extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View>
                        <Text style={{ color: "black", fontSize: 25, fontWeight: "bold", marginBottom: 10, marginLeft: 20, marginTop: 20 }}> Import </Text>
                        <TouchableOpacity >
                            <View style={styles.button_coldwallet}>
                                <Text style={styles.buttonText_coldwallet}>Private key</Text>
                                <Image
                                    source={{ uri: 'https://cdn3.iconfinder.com/data/icons/arrow-outline-8/32/right-256.png' }}
                                    style={{ width: 20, height: 20, marginTop: 20 }} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <View style={styles.button_coldwallet}>
                                <Text style={styles.buttonText_coldwallet}>Mnemonic</Text>
                                <Image
                                    source={{ uri: 'https://cdn3.iconfinder.com/data/icons/arrow-outline-8/32/right-256.png' }}
                                    style={{ width: 20, height: 20, marginTop: 20 }} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <View style={styles.button_coldwallet}>
                                <Text style={styles.buttonText_coldwallet}>Keystore</Text>
                                <Image
                                    source={{ uri: 'https://cdn3.iconfinder.com/data/icons/arrow-outline-8/32/right-256.png' }}
                                    style={{ width: 20, height: 20, marginTop: 20 }} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <View style={styles.button_coldwallet}>
                                <Text style={styles.buttonText_coldwallet}>Watch wallet</Text>
                                <Image
                                    source={{ uri: 'https://cdn3.iconfinder.com/data/icons/arrow-outline-8/32/right-256.png' }}
                                    style={{ width: 20, height: 20, marginTop: 20 }} />
                            </View>
                        </TouchableOpacity>
                        <Text style={{ color: "black", fontSize: 25, fontWeight: "bold", marginBottom: 10, marginLeft: 20 }}> Create </Text>
                        <TouchableOpacity >
                            <View style={styles.button_coldwallet}>
                                <Text style={styles.buttonText_coldwallet}>Create Wallet</Text>
                                <Image
                                    source={{ uri: 'https://cdn3.iconfinder.com/data/icons/arrow-outline-8/32/right-256.png' }}
                                    style={{ width: 20, height: 20, marginTop: 20 }} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={{ color: "#0066ff", fontSize: 10, textAlign: "center", justifyContent: "flex-end", marginTop: 280 }}> How to recover from wallet data file ?</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default AddWallet;
const { width, height } = Dimensions.get('screen');
const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    textImpport: {
        color: "green",
        fontSize: 25,
        fontWeight: "bold",
    },
    touch: {
        backgroundColor: '#fff',
        marginBottom: 15,
        marginLeft: '2%',
        width: '100%',
        borderRadius: 10,
        shadowOpacity: 1,
        shadowColor: '#000',
        shadowOffset: {
            width: 0.5,
            height: 0.5
        }
    },
    text_opacity: {
        fontSize: 18,
        marginTop: 15,
        marginLeft: 10,
    },
    button_coldwallet: {
        flexDirection: 'row',
        borderRadius: 10,
        marginLeft: 20,
        marginRight: 20,
        height: 60,
        marginBottom: 15,
        backgroundColor: '#fff',
        shadowColor: '#bdbdbd',
        shadowOpacity: 1,
        shadowOffset: {
            width: 3,
            height: 3
        }
    },
    buttonText_coldwallet: {
        padding: 20,
        paddingBottom: 10,
        paddingTop: 18,
        color: '#000',
        fontSize: 18
    },
})
