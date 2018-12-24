import React,{Component} from 'react'
import {View,Text} from 'react-native'
import {Body} from 'native-base'
import { SearchBar } from 'react-native-elements'

class HeaderBottom extends Component{
    render(){
        return(
            <View style={{ flex: 1 }}>
                        <Body>
                            <SearchBar
                                inputContainerStyle={{ backgroundColor: '#fff', width: '100%', height: 40, borderRadius: 40 }}
                                containerStyle={{ backgroundColor: '#eeeeee', borderBottomColor: '#eeeeee', borderTopColor: '#eeeeee' }}
                                placeholder='Search'
                                inputStyle={{ color: '#000' }}
                                searchIcon={{ size: 25 }}
                            />


                        </Body>
                    </View>)
    }
}

export default HeaderBottom



