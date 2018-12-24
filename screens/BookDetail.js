import React,{Component} from 'react'
import {Container, Header, Left,Button,Icon, Body, Item,} from 'native-base'
import {View,Text,Image,ScrollView} from 'react-native'
import data from '../data/data'
import {_} from 'lodash'

import book from '../data/book'

class BookDetail extends Component{
    render(){
        const {navigation} = this.props
        const itemId = navigation.getParam('id')

        const getId = _.find(book,{id: itemId})

        return(
            <Container style={{flexDirection:'column'}}>
                <View style={{flex:1}}>
                    <Button rounded style={{marginTop:5,marginLeft:10,height:45,width:45,backgroundColor:'white'}} onPress={()=>this.props.navigation.goBack()}>
                        <Icon name="md-arrow-back" style={{color:'#9400D3'}}/>
                    </Button>
                </View>
                <View style={{flex:4,marginTop:30,marginLeft:30,marginRight:30,flexDirection:'row'}}>
                    <Left style={{flex:4}}>
                        <Image source={getId.uri} style={{width:100,height:150,marginBottom:16}}/>
                    </Left>
                    <View style={{flex:7,marginLeft:20}}>
                        <View style={{flex:1}}>
                            <Text style={{fontSize:20,fontWeight:'700',opacity:.60}}>{getId.bookName}</Text>
                        </View>
                        <View style={{flex:1,marginTop:5}}>
                            <Text style={{fontSize:14,fontWeight:'500',opacity:.50}}>{getId.writer}</Text>
                        </View>
                        <View style={{flex:2,marginTop:10,alignItems:'center'}}>
                            <View style={{flex:1,flexDirection:'row'}}> 
                                <View style={{alignItems:'center'}}>
                                    <Text style={{fontSize:16}}>
                                        80
                                    </Text>
                                    <Text>
                                        Likes
                                    </Text>
                                </View>
                                <View style={{alignItems:'center',marginLeft:20}}>
                                    <Text style={{fontSize:16}}>
                                        100
                                    </Text>
                                    <Text>
                                        Read
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={{flex:2,marginBottom:20,marginTop:10,width:200,justifyContent:'center'}}>
                            <Body style={{alignContent:'center',flex:1}}>
                            <Button style={{width:200,backgroundColor:'#9400D3'}}>
                                    <View style={{flex:1,alignItems:'center'}}>
                                       <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Read Now</Text> 
                                    </View>
                                </Button>
                                </Body>
                                
                            </View>
                        
                    </View>
                </View>
                <View style={{flex:1,alignItems:'center',flexDirection:'row',padding:10,borderBottomWidth:1,borderTopWidth:1}}>
                    <View style={{justifyContent:'center',flex:1,alignItems:'center'}}> 
                        <Icon name='list' style={{ fontSize: 25,marginTop:15 }}/>
                        <Text style={{marginTop:5}}>Catalog</Text>
                    </View>
                    <View style={{justifyContent:'center',flex:1,alignItems:'center'}}> 
                        <Icon name='md-heart' style={{ fontSize: 25,marginTop:15 }}/>
                        <Text style={{marginTop:5}}>Like</Text>
                    </View>
                    <View style={{justifyContent:'center',flex:1,alignItems:'center'}}> 
                        <Icon name='md-share-alt' style={{ fontSize: 25,marginTop:15 }}/>
                        <Text style={{marginTop:5}}>Share</Text>
                    </View>
                    
                </View>
                <View style={{ flex:4, marginLeft: 30}}>
                    <View style={{flex:1,marginTop:10}}>
                        <Text style={{ fontSize: 23, fontWeight: '500', opacity: .70,color:'#9400D3' }}>
                            Synopsis
                        </Text>
                    </View>
                    <View style={{flex:9,marginTop:20,paddingRight:20}}>
                        <Text style={{ fontSize: 14, opacity: .70}}>
                       
                            <Text>{getId.synopsis.length <=250?getId.synopsis:getId.synopsis.substring(0,250)+'...'}</Text>
                            
                        </Text>
                    </View>

                </View>
                <View style={{flex:5,marginLeft:30}}>
                <View style={{flex:1}}>
                        <Text style={{ fontSize: 16, fontWeight: '500', opacity: .70,color:'#9400D3' }}>
                            Similar Book
                        </Text>
                    </View>
                    <View style={{flex:5,backgroundColor:'white'}}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{flex:9}}>
                    {data.book.map((item,key)=>{
                        if(key>5) return <View key={key}/>
                        return(
                            <View style={{backgroundColor:'white',height:140,width:80,marginRight:10}} key={key}>
                                                <Image source={item.uri} style={{height:110,width:80}}/>
                                                <View style={{flex:1,marginTop:10}}>
                                                    <Text style={{fontSize:12,fontWeight:'500',marginLeft:3}}>
                                                    {item.bookName.length<=10?item.bookName :item.bookName.substring(0,8)+'...'}
                                                       
                                                    </Text>
                                                </View>
                                            </View>
                        )
                        
                    })}
                 

                </ScrollView>
                    </View>
                    
                </View>
                
                
            </Container>
        )
    }
}

export default BookDetail