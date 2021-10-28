import { StatusBar } from 'expo-status-bar';
import React ,{useState}from 'react';
import { StyleSheet, View } from 'react-native'; 
import Header from './components/Header'; 
import StartGameScreen from './screens/StartGameScreen'; 
import GameScreen from './screens/GameScreen'; 
import GameOverScreen from './screens/GameScreenOver';

// Utilisation du police personnalisé avec le package expo-font
import * as Font from "expo-font"   ;
import {AppLoading} from "expo"


const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans" : require('./assets/fonts/OpenSans-Regular.ttf') ,
    "open-sans-bold" : require('./assets/fonts/OpenSans-Bold.ttf')
  })
}


export default function App() {

  const  [number ,setNumber]   = useState()   ;
  const [dataLoaded ,setDataLoaded] = useState(false)

  // le nombre de tours qu'il a fallu pour deviner le nombre .
  const [guessrounds,setGuessRounds]   = useState(0)   

  
  // if (!dataLoaded) {
  //   return (
  //     <AppLoading
  //       startAsync={fetchFonts}
  //       onFinish={() => setDataLoaded(true)}
  //       onError={(err) => console.log(err)}
  //     />
  //   );
  // }

// La fonction pour configurer un nouveua jeu  
const NewGame = ()=> {
  setGuessRounds(0) ;
  setNumber(null)
}




  const handleGameOver = (g) =>{
    setGuessRounds(g)
  }

  const StartGame = ( num) =>{
 setNumber(num) 
 setGuessRounds(0)
 
  }  

  let contenu =    <StartGameScreen StartGame = { StartGame}/>
if(number  && guessrounds <= 0) {
  contenu = <GameScreen  OneGameOver ={handleGameOver }   userChoice = {number} />
}
else if( guessrounds > 0)   {
  contenu = <GameOverScreen guessrounds = {guessrounds} userNumber = {number} NewGame = {NewGame}  />
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

