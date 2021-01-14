//    blog.edafait.com
//    www.edafait.com

import React, { useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';


const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1 }}>
          <Text>Hi</Text>
        </View>
       <Text style={{ fontSize: 16, textAlign: 'center', color: 'grey' }}>
          NeoSoft Technologies
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
