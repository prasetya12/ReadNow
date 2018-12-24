import React,{Component} from 'react'
import {Container,Content, Left, Icon,Header, Thumbnail,Fab,Button, Body, Right, Card, CardItem} from 'native-base'
import {View,Text,Image,TouchableOpacity,StyleSheet} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

import data from '../data/data'






class Profile extends Component{
    render(){
        return(
            <Container>
                <View style={{flex:1}}>
                    <View style={styles.contHeader}>
                        <View style={{flex:1}}>
                                <Button rounded style={styles.contButton} onPress={()=>this.props.navigation.goBack()}>
                                    <Icon name="md-arrow-back" style={styles.icon}/>
                                </Button>
                        </View>

                        <View style={{flex:3,flexDirection:'row'}}>
                                <Left  style={{flex:1,marginLeft:20}}>
                                    <View>
                                        <Text style={{color:'white',fontSize:25,fontWeight:"500"}}>
                                            My Profile
                                        </Text>
                                        <Text style={{color:'white',fontSize:16, opacity:.60}}>
                                            Last Login 2 hours ago
                                        </Text>
                                    </View>
                                </Left>
                                <Right style={{marginRight:10}}> 
                                    <Thumbnail source={require('../assets/ic_profile.jpg')} style={{width:80,height:80,borderRadius:1000}}/>
                                </Right>
                        </View>
                        
                        

                        
                    </View>
                    <View style={{flex:9}}>
                        <ScrollView>
                    
                        <Card style={{marginLeft:20,marginRight:20}} rounded >
                            <CardItem bordered style={{borderBottomWidth:1}}>
                                <Text style={{fontSize:20,fontWeight:'500',color:'#9400D3'}}>Account</Text>
                            </CardItem>

                            <CardItem bordered style={{borderBottomWidth:1}}>
                                <Left style={{flex:1}}>
                                    <Thumbnail source={require('../assets/ic_user.png')} style={{width:30,height:30}}/>
                                </Left>
                                <Body style={{flex:8,marginLeft:20}}>
                                    <Text style={{fontSize:16,color:'#000'}}>
                                        Name
                                    </Text>
                                    <Text style={{fontSize:14,color:'#000',opacity:.50}}>
                                        Samuel Zidane
                                    </Text>
                                </Body>
                                <Right style={{flex:1}}>
                                    <Thumbnail source={require('../assets/ic_right_arrow.png')} style={{width:16,height:16}}/>
                                </Right>
                            </CardItem>

                            <CardItem bordered style={{borderBottomWidth:1}}>
                                <Left style={{flex:1}}>
                                    <Thumbnail source={require('../assets/ic_mail.png')} style={{width:30,height:30}}/>
                                </Left>
                                <Body style={{flex:8,marginLeft:20}}>
                                    <Text style={{fontSize:16,color:'#000'}}>
                                        Email
                                    </Text>
                                    <Text style={{fontSize:14,color:'#000',opacity:.50}}>
                                        samuel_samuel@outlook.com
                                    </Text>
                                </Body>
                                <Right style={{flex:1}}>
                                    <Thumbnail source={require('../assets/ic_right_arrow.png')} style={{width:16,height:16}}/>
                                </Right>
                            </CardItem>

                            <CardItem bordered style={{borderBottomWidth:1}}>
                                <Left style={{flex:1}}>
                                    <Thumbnail source={require('../assets/ic_phone.png')} style={{width:30,height:30}}/>
                                </Left>
                                <Body style={{flex:8,marginLeft:20}}>
                                    <Text style={{fontSize:16,color:'#000'}}>
                                        Phone
                                    </Text>
                                    <Text style={{fontSize:14,color:'#000',opacity:.50}}>
                                        +62858901982973
                                    </Text>
                                </Body>
                                <Right style={{flex:1}}>
                                    <Thumbnail source={require('../assets/ic_right_arrow.png')} style={{width:16,height:16}}/>
                                </Right>
                            </CardItem>
                            

                        </Card>
                        <Card style={{marginLeft:20,marginRight:20,paddingBottom:10}}>
                        <View style={{marginLeft:20,marginTop:10}}>
                                <Text style={{fontSize:20,fontWeight:'500',color:'#9400D3'}}>
                                
                                    Last Reading
                                </Text>
                            </View>
                            <ScrollView horizontal='true' style={{marginLeft:20,marginTop:10}} showsHorizontalScrollIndicator={false}>
                            {data.book.map((item,key)=>{
                                    if(key >= 5) return <View key={key} />
                                    return (
                                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('BookDetail',{id:item.id})}}  key={key} activeOpacity={1}>
                                            <View style={{backgroundColor:'white',height:140,width:80,marginRight:10}}>
                                            <Image source={item.uri} style={{height:110,width:80}}/>
                                            <View style={{flex:1,marginTop:10}}>
                                                <Text style={{fontSize:12,fontWeight:'500'}}>
                                                    {item.bookName}
                                                </Text>
                                            </View>
                                        </View>
                                        </TouchableOpacity>
                                        
                                    )
                                }
                            )} 
                            
                            </ScrollView>
                        </Card>
                        
                            
                            


                        
                        </ScrollView>  
                    </View>
                    
                </View>
                    


            </Container>
        )
    }
}

export default Profile

const styles= StyleSheet.create({
    contHeader:{
        flex:6,
        flexDirection:'column',
        backgroundColor:'#9400D3'
    },
    contButton:{
        marginTop:10,
        marginLeft:10,
        height:45,
        width:45,
        backgroundColor:'white'
    },
    icon:{
        color:'#9400D3'
    },
    

})