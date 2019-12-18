import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

// import Colors from '../constants/colors';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text >Game Over!</Text>
      <Text>Number of rounds: {props.roundsNumber}</Text>
      <Text>Number was: {props.userNumber}</Text>
      <Button title="NEW GAME?" onPress={props.onRestart}/>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  }
});

export default GameOverScreen;
