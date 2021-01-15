import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
  TextInput,
  Button, TouchableOpacity, ColorPropType,
} from 'react-native';
import Colors from "./Colors"

export default class Setting extends Component {
    constructor() {
        super();
        this.state = {
          data:[]
        }
      }
      onSignOutPressButton = () => {
        this.props.navigation.navigate('login')
    
      }
      componentDidMount () {
        this.apiCall();
      }
      async apiCall() {
        let resp = await fetch('https://reactnative.dev/movies.json')
        let respJson = await resp.json()
        console.warn(respJson)
        this.setState({data: respJson.movies})
      }
  render() {
    return (
        <View>
            <View alignItems='flex-end'>
           <Button title='Logout' onPress={this.onSignOutPressButton}/>
             </View>
           <Text style={{fontSize:30}}>List</Text>
          <FlatList
          data = {this.state.data}
          renderItem = {({item}) =>
        <Text style={{fontSize:20,backgroundColor:'gray',margin:15}}>{item.title}</Text>
        }
      />
        </View>
      )
  }
}
