import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class SearchScreen extends React.Component {
    render(){
    return (
      <View >
     

        <Text style={styles.container}>Facebook</Text>
      </View>
    );
    }
  }


  const styles = StyleSheet.create({
    container: {
    

       marginLeft:'50%',
    fontSize:22,
      marginTop:300,
    },
  });