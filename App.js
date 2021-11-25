import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={{width: '25%', height: '70%',backgroundColor: 'white'}}>

        <View style={{width: '100%', height: '20%',backgroundColor: 'lightblue'}}>
          <Text>Hello World!</Text>
          <Text>First React Native App</Text>
          <Text>This is a pragraph explaining what this app is all about. As you can see there are already many components including text, images and buttons</Text>
        </View>
          
        <View style={{width: '100%', height: '5%',backgroundColor: 'white'}}>
          <Text>What would you like to get out of this course?</Text>
        </View>

        <View style={{width: '60%', height: '20%',backgroundColor: 'lightblue'}}>
          <Text>Help</Text>
        </View>

        <View style={{width: '100%', height: '40%',backgroundColor: 'white'}}>
          <Text>An emoji describing how you are feeling about the course:</Text>
          <Image style={{width: 100, height: 100, resizeMode: 'contain'}} source={{uri: 'data:image/png;base64,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'}} />
        </View>

        <Button
          title="Submit"
          onPress={() => console.log("Button was pressed")}
        /> 

      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    height: 10000,
  },

});
