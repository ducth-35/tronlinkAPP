import React, { Component } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';


class AddWallet extends Component {
    render() {
        return (
            <SafeAreaView style={styles.containe}>
                    <View style={styles.container}>
                        <ScrollView>
                            <Text style={{ color: "black", fontSize: 25, fontWeight: "bold", marginBottom: 10 }}> Import </Text>
                            <View >
                                <TouchableOpacity style={styles.touch}>
                                    <Text style={styles.text_opacity}> Private key </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.touch}>
                                    <Text style={styles.text_opacity}> Mnemonic </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.touch}>
                                    <Text style={styles.text_opacity}> Keystore </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.touch}>
                                    <Text style={styles.text_opacity}> Watch wallet </Text>
                                </TouchableOpacity>
                                <Text style={{ fontSize: 25, fontWeight: "bold", marginBottom: 10 }}>Create</Text>
                                <TouchableOpacity style={styles.touch}>
                                    <Text style={styles.text_opacity}> Create Wallet </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={{ color: "#0066ff", fontSize: 10, textAlign: "center", justifyContent: "flex-end" }}> How to recover from wallet data file ?</Text>
                            </View>
                        </ScrollView>
                    </View>
            </SafeAreaView>
        );
    }
}

export default AddWallet;
const { width, height } = Dimensions.get('screen');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    },
    containe: {
        height: '100%',
        width: width,
    },
    textImpport: {
        color: "green",
        fontSize: 25,
        fontWeight: "bold",
    },
    touch: {
        backgroundColor: '#fff',
        marginBottom: 15,
        width: 400,
        height: 60,
        borderRadius: 10,
        shadowOpacity: 3,
        shadowColor: '#000',
        shadowOffset: {
            width: 3,
            height: 3
        }
    },
    text_opacity: {
        fontSize: 18,
        marginTop: 15,
        marginLeft: 10,
    },

})
