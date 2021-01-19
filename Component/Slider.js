import React from 'react';
import { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Dimensions,
    Image,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import { images } from '../assets/Data';

const { width, height } = Dimensions.get('window');


export default class Slider extends Component {
    state = {
        active: 0,
    };

    changes = ({ nativeEvent }) => {
        const slide = Math.ceil(
            nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
        );
        if (slide !== this.state.active) {
            this.setState({ active: slide });
        }
    };

    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.container}>
                    <ScrollView
                        pagingEnabled
                        horizontal
                        onScroll={this.changes}
                        style={{ width }}
                        showsHorizontalScrollIndicator={false}>
                        {images.map((data, index) => (
                            <View style={{ width }}
                                key={index}>
                                <Image
                                    source={{ uri: data.url }}
                                    style={styles.imgUrlCss}
                                />
                                <Text style={styles.titleCss}>{data.title}</Text>
                                <Text style={styles.lasttextCss}>{data.lasttext}</Text>
                                <Text style={styles.descriptionCss}>{data.description}</Text>
                            </View>
                        ))}
                    </ScrollView>

                    <View style={styles.view}>
                        {images.map((i, k) => (
                            <Text
                                key={k}
                                style={
                                    k == this.state.active
                                        ? styles.paddingActiveText
                                        : styles.paddingText
                                }>
                                ⬤
                            </Text>
                        ))}
                    </View>
                </View>
                <View>
                    <View style={styles.view_slider}>
                        <TouchableOpacity onPress={() => { navigation.navigate('Creat Acount') }}>
                            <View style={styles.button_createaccount}>
                                <Text style={styles.buttonText}>Create Account</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate('Add Wallet') }}>
                            <View style={styles.button_importaccout}>
                                <Text style={styles.buttonText}>Import Account</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.cold_wallet} onPress={() => { this.setState({ show: true }); }}>
                            {/* <Modal
                                transparent={true}
                                visible={this.state.show}>
                                <View style={{ backgroundColor: "#000000aa", flex: 1 }}>
                                    <View style={{ backgroundColor: "#ffffff", flex: 1, marginTop: 150, marginLeft: 70, marginRight: 70, marginBottom: 150, borderRadius: 20 }}>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold', alignItems: 'center', marginTop: 30, marginLeft: 15 }}>Cold wallet mode description</Text>
                                        <Text style={{ color: 'red', marginTop: 30, marginLeft: 15 }}>It is detected that your curent device is connected the network. Please disconect before creating/importing accounts.</Text>
                                        <Text style={{ marginTop: 5, marginLeft: 15, marginRight: 15 }}>1.The cold wallet is used for offline singin and needs to be used in conjunction with the obsevation wallet.</Text>
                                        <Text style={{ marginTop: 5, marginLeft: 15, marginRight: 15 }}>2. The cold wallet never touches the net.</Text>
                                        <Text style={{ marginTop: 5, marginLeft: 15, marginRight: 15 }}>3. The hot and cold mode cannot be swichted. Once the cold mode is selected, it cannot be change.</Text>
                                        <View style={{ marginTop: 120 }}>
                                            <TouchableOpacity onPress={() => { this.setState({ show: false }); }}>
                                                <View style={styles.button_importaccout}>
                                                    <Text style={styles.buttonText}>I Know</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </Modal> */}
                            <View style={styles.button_coldwallet}>
                                <Text style={styles.buttonText_coldwallet}>Cold Wallet</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 100,
        width,
        height,
        flex: 2,
    },
    view: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    paddingText: {
        fontSize: width / 30,
        color: '#CCCCCC',
        padding: 3,
    },
    paddingActiveText: {
        fontSize: width / 30,
        color: '#3333FF',
        padding: 3,
    },
    button: {
        backgroundColor: '#888',
    },
    /* component */
    imgUrlCss: {
        width,
        height: 180,
        resizeMode: 'contain',
        marginBottom: 40,
    },
    titleCss: {
        fontSize: 20,
        textAlign: 'center',
    },
    lasttextCss: {
        fontSize: 20,
        color: '#3333FF',
        textAlign: 'center',
        marginTop: 5,
    },
    descriptionCss: {
        fontSize: 15,
        color: '#888888',
        textAlign: 'center',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 15,
    },
    view_slider: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    button_createaccount: {
        borderRadius: 15,
        margin: 20,
        height: 50,
        marginBottom: 20,
        alignItems: 'center',
        backgroundColor: '#CCCC00'
    },
    button_importaccout: {
        borderRadius: 15,
        margin: 20,
        height: 50,
        marginBottom: 20,
        alignItems: 'center',
        backgroundColor: '#3366cc'
    },
    buttonText: {
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        fontWeight: 'bold',
        color: 'white',
        fontSize: 18
    },
    button_coldwallet: {
        borderRadius: 15,
        marginLeft: 20,
        marginRight: 20,
        height: 50,
        marginBottom: 30,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    button_colse: {
        padding: 20,
        paddingBottom: 10,
        paddingTop: 10,
        fontWeight: 'bold',
        color: '#0033ff',
        fontSize: 18
    },
    buttonText_coldwallet: {
        padding: 20,
        paddingBottom: 10,
        paddingTop: 10,
        fontWeight: 'bold',
        color: '#0033ff',
        fontSize: 18
    },
    touch: {
        backgroundColor: '#fff',
        marginBottom: 15,
        width: 400,
        height: 60,
        borderRadius: 8,
        shadowOpacity: 3,
        shadowColor: '#000',
        shadowOffset: {
            width: 3,
            height: 3
        }
    },
});