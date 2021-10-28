import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button ,Alert } from 'react-native';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

// La fonction pour generer un nombre aléatoire
const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};



const GameScreen = ({OneGameOver,userChoice}) => {


  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, userChoice)
  );

  const [rounds, setRounds] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100); 
  
console.log("le nombre choisi par l'utilisateur est ",userChoice)


useEffect(() => {
  if(currentGuess === userChoice) {
    OneGameOver(rounds)
  }
},[currentGuess ,userChoice , OneGameOver])


//fonction pour controller mes deux boutons inférieur et superieur par rapport au nombre nombre deviné 
 //Le hook useRef permet definir une valeur qui survi aux restitutions des composants cad 
//  une mis maj de mon ref ne provoque pas un re-rendu de mon composant

const devineNombre = (direction) => {
    if((direction ==="inferieur" && userChoice > currentGuess) || (direction ==="superieur" && userChoice < currentGuess)) { 
        Alert.alert("Heyy ne mens pas" , " C'est faux tu le sais bien   "  , [
            {
               text :"sorry" ,
               style : "cancel" 
              
            }
         ])
         return ;
    }
    if (direction === "inferieur") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess; 
    }   
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );

    setCurrentGuess(nextNumber);
    setRounds(curRounds => curRounds + 1);

  
}


  return (
    <View style={styles.screen}>
      <Text style = {{fontSize : 16}}>Le nombre deviné par l'ordi est : </Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title="INFERIEUR" onPress={devineNombre.bind(this ,"inferieur")} />
        <Button title="SUPERIEUR" onPress={devineNombre.bind(this ,"superieur")} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%'
  }
});

export default GameScreen;
