import React, { Component } from 'react'
import { Text, View, Image,TouchableOpacity,StyleSheet} from 'react-native'
import { Container, Header, Left, Right, Body, Card, CardItem, Button, Thumbnail, Item} from 'native-base'

import { SearchBar } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';

import Headroom from 'react-native-headroom'

import data from '../data/data'
import book from '../data/book'

import HeaderBottom from '../component/HeaderBottom'


class Home extends Component {
    

    render() {
        return (
            <View style={{flex:1}}>
                <Header style={{backgroundColor:'#eeeeee'}}>
            
                    <View style={{ flexDirection: 'row', flex: 1 }}>
                        <Left style={{ flex: 9 }}>
                            <Text style={{ fontSize: 18, fontWeight: '500', color: '#9400D3' }}>
                                ReadNow
                            </Text>
                        </Left>
                        <Right style={{ flex: 1,marginRight:5}}>
                            <Button rounded style={{borderRadius:1000, width:50,height:50,flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#eeeeee'}}onPress={()=>this.props.navigation.navigate('Profile')} transparent>
                                <Image source={require('../assets/ic_profile.jpg')} style={{ width: 40, height: 40, borderRadius: 1000}}/>
                            </Button>
                         </Right>
                    </View>
               </Header>


                <Headroom style={{flex:1}}
                            headerComponent={<HeaderBottom/>}
                            ScrollableComponent = {ScrollView}
                            headerHeight ={60}
                            scrollEventThrottle={80}>
                    <View>
                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <Left style={{ flexDirection: 'row', flex: 9 }}>
                                <Text style={[style.primaryColor,style.txtHead]}>
                                    Populer
                                </Text>
                            </Left>
                            <Right style={{ justifyContent: 'center', flexDirection: 'column', flex: 2 }}>
                                <Text style={style.txtMore}>
                                    more
                                </Text>
                            </Right>
                        </View>
                        <View>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                {book.map((item,key)=>{
                                    if(key<=2) return <View key={key}/>
                                        return(
                                            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('BookDetail',{id:item.id})}} key={key} activeOpacity={1}>
                                                <Card style={style.contCard} transparent >
                                                    <CardItem style={{ flex: 8}} cardBody>
                                                        <Body>
                                                            <Image source={item.uri} style={style.imagePopuler}  />
                                                        </Body>

                                                    </CardItem>
                                                    <CardItem style={{ flex: 2}} cardBody>
                                                        <Body>
                                                            <View style={style.contName}>
                                                                <Text style={style.namePopuler}>
                                                                    {item.bookName.length==12?item.bookName:item.bookName.substring(0,12)+'...'}  
                                                                </Text>
                                                            </View>
                                                            <View style={style.contWriter}>
                                                                <Text style={style.txtWriter}>
                                                                    {item.writer}
                                                                </Text>
                                                            </View>
                                                        </Body>

                                                    </CardItem>
                                
                                                </Card>
                                            </TouchableOpacity>
                                            )})}

                            </ScrollView>
                        </View>
                        <View style={[style.secondColor,style.continer2]}>
                            <View>
                                <View style={style.contCat}>
                                    <Left style={style.contLeft}>
                                        <Text style={[style.catText,style.primaryColor]}>
                                            Category
                                        </Text>
                                    </Left>
                                    <Right >
                                        <Text style={style.moreTxt}>
                                            more
                                        </Text>
                                    </Right>
                                </View>
                            </View>

                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                {data.category.map((item,key)=>(
                                    <View style={style.contList} key={key} >
                                    
                                        <View style={style.contImage}>
                                            <Image source={item.uri} style={style.imageCat}/>
                                            <View style={{marginTop:5}}>
                                                <Body>
                                                    <Text style={style.nameCat}>
                                                        {item.name}
                                                    </Text>
                                                </Body>
                                            </View>
                                        </View>
                                </View>
                                ))}
                            </ScrollView>
                        </View>
                        <View style={style.contRec}>
                            <Text style={[style.recTxt,style.primaryColor]}>
                                Recomendation
                            </Text>
                            <ScrollView  style={style.scrollView}>
                                {data.book.map((item,key)=>{
                                    if(key>1 & key<5) {return null}else{
                                        return (
                                            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('BookDetail',{id:item.id})}} key={key} activeOpacity={1}>
                                                <Card style={style.contCardRec} >
                                                    <CardItem cardBody>
                                                        <Image source={item.uri} style={style.imageRec} />
                                                    </CardItem>
                                                    <View style={style.nameRec}>
                                                        <View>
                                                            <Text style={style.textRec}>{item.bookName}</Text>
                                                        </View>
                                                        <View>
                                                            <Text style={style.txtWriterRec}>
                                                                {item.writer}
                                                            </Text>
                                                        </View>
                                                        <View style={style.contSynopsis}>
                                                            <Text style={style.txtSynopsis}>
                                                                {item.synopsis.length==100?item.synopsis:item.synopsis.substring(0,100)+'...more'}
                                                            </Text>
                                                        </View>
                                                    </View>
                                                </Card>
                                            </TouchableOpacity>
                                                
                                                )}})}       
                            </ScrollView>
                            
                        </View>
                    </View>
                </Headroom>
            </View>   
            )}}
export default Home

const style=StyleSheet.create({
    primaryColor :{
        color:'#9400D3'
    },
    secondColor :{
        color:'#eeeeee'
    },
    txtHead:{
        fontSize: 23, 
        fontWeight: '500', 
        marginLeft: 30, 
        opacity: .70
    },
    txtMore:{
        marginRight: 20, 
        fontSize: 16, 
        fontWeight: '500', 
        opacity: .50
    },
    contCard:{
        marginLeft:20
    },
    imagePopuler:{
        width:110,
        height:170,
        flex:1
    },
    contName:{
        marginTop:10,
        marginLeft:5,
        flex:1
    },
    namePopuler:{
        fontSize:16
    },
    contWriter:{
        marginTop:5,
        marginLeft:5,
        marginBottom:10,
        flex:1
    },
    txtWriter:{
        fontSize:12,
        opacity:.50
    },
    continer2:{
        marginLeft:20
    },
    contCat:{
        flexDirection:'row',
        marginTop:5
    },
    contLeft:{
        flex:1,
        alignItems:'flex-start'
    },
    catText:{
        fontSize: 18, 
        fontWeight: '500', 
        marginLeft: 10, 
        opacity: .70,
    },
    moreTxt:{
        marginRight: 20, 
        fontSize: 16, 
        fontWeight: '500', 
        opacity: .50} 
    ,
    contList:{
        marginTop:10,
        marginRight:10
    },
    contImage:{
        marginLeft:10,
        width:60,
        height:90
    },
    imageCat:{
        borderRadius:1000, 
        width:60,
        height:60
    },
    nameCat:{
        fontWeight:'500',
        opacity:.50
    },
    contRec:{
        marginTop:20
    },
    recTxt:{
        marginLeft:30,
        fontSize: 20, 
        fontWeight: '500', 
        opacity: .70
    },
    scrollView:{
        marginTop:10
    },
    contCardRec:{
        height:170, 
        flexDirection:'row',
        marginLeft:20,
        marginRight:20
    },
    imageRec:{
        height:170,
        width:110
    },
    nameRec:{
        width:'65%',
        padding:10,
        height:170
    },
    textRec:{
        fontSize:16
    },
    txtWriterRec:{
        fontSize:12,
        opacity:.50
    },
    contSynopsis:{
        marginTop:20
    },
    txtSynopsis:{
        opacity:.50
    }

})



