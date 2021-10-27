import { StatusBar } from 'expo-status-bar';
import React ,{useState}from 'react';
import { StyleSheet, View } from 'react-native'; 
import Header from './components/Header'; 
import StartGameScreen from './screens/StartGameScreen'; 
import GameScreen from './screens/GameScreen';


export default function App() {

  const  [number ,setNumber]   = useState()   ;

  const StartGame = ( num) =>{
 setNumber(num)
  }  

  let contenu =    <StartGameScreen StartGame = { StartGame}/>
if(number ) {
  contenu = <GameScreen/>
}

  
    return (
      <View  style = {styles.screen}>
       <Header title = "Guess a number"/> 
      
  {contenu}
  
      </View>
    );

   
 
 
}  
const styles  = StyleSheet.create({
  screen : {
    flex : 1 ,

  }
})

