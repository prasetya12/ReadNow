import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { Container, Header, Content, Item, Button, Body } from 'native-base';


class Begin extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <View style={{ alignItems: 'center' }}>
                        <View style={styles.contImage}>
                            <Image source={require('../assets/ic.png')} style={styles.image} />
                        </View>
                        <View style={styles.contTxt}>
                            <Text style={styles.txt}>
                                ReadNow
                            </Text>
                        </View>

                        <View style={{ alignItems: 'center', marginTop: 120 }}>
                            <Button style={styles.btn} onPress={()=>this.props.navigation.navigate('SignIn')}>
                                <Body style={{ justifyContent: 'center' }}>
                                    <Text style={styles.btnTxt}>Sign In</Text>
                                </Body>
                            </Button>

                            <Button style={styles.btn2} onPress={()=>this.props.navigation.navigate('SignUp')} >
                                <Body style={{ justifyContent: 'center' }}>
                                    <Text style={styles.btnTxt}>Sign Up</Text>
                                </Body>
                            </Button>


                        </View>

                    </View>
                </Content>
            </Container>


        )
    }


}

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150,
        display: 'flex',
        marginTop: 50
    },
    contImage: {
        alignItems: 'center'
    },
    contTxt: {
        alignItems: 'center'
    },
    txt: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#9400D3'
    },
    btn: {
        padding: 50,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#9400D3',
        width: 200,
        borderRadius: 10

    },
    btn2: {
        padding: 50,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#9400D3',
        marginTop: 30,
        width: 200,
        borderRadius: 10
    },
    contBtn: {
        alignItems: 'center'
    },
    btnTxt: {
        color: '#9400D3',
        fontSize: 20,

    }
})

export default Begin