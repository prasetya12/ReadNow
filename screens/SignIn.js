import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Container, Content, Item, Input, Form, Button, Body, Left, Right } from 'native-base'



class SignIn extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <View style={styles.contImage}>
                        <Image source={require('../assets/ic.png')} style={styles.image} />
                        <Text style={styles.txt}>
                            ReadNow
                        </Text>
                    </View>
                    <View style={styles.contForm}>
                        <Text style={styles.signTxt}>
                            Sign in
                        </Text>
                        <Form style={styles.form}>
                            <Item style={styles.formUser}>
                                <Input placeholder='Username' style={styles.input} placeholderTextColor='grey' />
                            </Item>
                            <Item style={styles.formPass}>
                                <Input placeholder='Password' style={styles.input} placeholderTextColor='grey' />
                            </Item>
                        </Form>
                        <View style={{ marginTop: 30 }}>
                            <Body style={{ alignItems: 'center' }}>

                                <Button style={styles.button} onPress={()=>this.props.navigation.push('Home')}>
                                    <Body style={{ justifyContent: 'center' }}>
                                        <View style={{ alignItems: 'center' }}>
                                            <Text style={styles.txtBtn}>Sign In</Text>
                                        </View>
                                    </Body>
                                </Button>
                            </Body>
                            <View style={{ alignItems: 'center', marginTop: 10 }}>
                                <Text>or sign in with</Text>
                            </View>

                            <View style={{ flexDirection: 'row', marginTop:20,marginBottom:20}}>
                                <Left style={{flex:1}}>

                                </Left>
                                <Body style={{ flexDirection: 'row' ,flex:3}}>
                                    <View style={{ flex: 1, justifyContent: 'center'}}>
                                        <Button style={{ height: 50, width: 50, borderRadius: 2000, backgroundColor: '#fff', padding: 20, justifyContent: 'center' }}>
                                            <Image source={require('../assets/ic-fb.png')} style={{ width: 30, height: 30, paddingTop: 20 }} />
                                        </Button>
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <Button style={{ height: 50, width: 50, borderRadius: 2000, backgroundColor: '#fff', padding: 20, justifyContent: 'center' }}>
                                            <Image source={require('../assets/ic-twitter.png')} style={{ width: 30, height: 30, paddingTop: 20 }} />
                                        </Button>
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <Button style={{ height: 50, width: 50, borderRadius: 2000, backgroundColor: '#fff', padding: 20, justifyContent: 'center' }}>
                                            <Image source={require('../assets/ic-google.png')} style={{ width: 30, height: 30, paddingTop: 20 }} />
                                        </Button>
                                    </View>
                                </Body>
                                <Right style={{flex:1}}>

                                </Right>



                            </View>


                        </View>
                    </View>

                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    contImage: {
        alignItems: 'center',
        marginTop: 50
    },
    image: {
        width: 100,
        height: 100
    },
    txt: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#9400D3',
    },
    signTxt: {
        fontSize: 18,
        fontWeight: '500',
        color: '#9400D3',
        marginLeft: 20
    },
    contForm: {
        marginTop: 40
    },
    form: {
        marginRight: 20
    },
    input: {
        borderWidth: 1,
        borderColor: '#9400D3',
    },
    button: {
        backgroundColor: '#9400D3',
        padding: 20,
        width: '90%',
        borderRadius: 20,


    },
    txtBtn: {
        color: '#fff',
        fontSize: 16
    },
    formUser:{
        borderWidth: 1, 
        marginTop: 10
    },
    formPass:{
        borderWidth: 1, 
        marginTop: 20
    }

})


export default SignIn

