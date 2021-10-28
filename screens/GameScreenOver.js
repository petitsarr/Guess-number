import React from 'react';
import { View, Text, StyleSheet, Button ,Image } from 'react-native';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style= {{fontSize : 18}}>Le Jeu est Terminé</Text>
      <Image source= {require('../assets/img.png')}/>
      <Text  style= {{fontSize : 18}}>Le nombre de rounds est: {props.guessrounds}</Text>
      <Text  style= {{fontSize : 18}}>Le Numéro était : {props.userNumber}</Text>
      <Button title="NEW GAME" onPress={props.NewGame} />
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
