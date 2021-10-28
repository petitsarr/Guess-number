import { StatusBar } from 'expo-status-bar';
import React ,{useState}from 'react';
import { StyleSheet, View } from 'react-native'; 
import Header from './components/Header'; 
import StartGameScreen from './screens/StartGameScreen'; 
import GameScreen from './screens/GameScreen'; 
import GameOverScreen from './screens/GameScreenOver';


export default function App() {

  const  [number ,setNumber]   = useState()   ;

  // le nombre de tours qu'il a fallu pour deviner le nombre .
  const [guessrounds,setGuessRounds]   = useState(0) 


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
  contenu = <GameOverScreen   />
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

