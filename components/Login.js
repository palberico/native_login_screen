import React, { Component } from 'react';
import MyForm from './MyForm';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';

export default class Login extends Component {
  render () {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image 
            style={styles.logo}
            source={require('./images/header-logo.png')}
          />
          <Text style={styles.title}>A simple shopping App</Text>
        </View>
        <View style={styles.myForm}>
          <MyForm />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const deviceY = Dimensions.get('window').height;
const deviceX = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: deviceX,
  },
  logoContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: deviceY/ 20,
    width: deviceX/ 2,
  },
  myForm: {
    flex: 1,
  },
  title: {
    color: '#000',
    marginTop: 10,
  },
});