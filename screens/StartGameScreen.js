import React, { useState } from 'react' ;
import {StyleSheet , View , Text ,TextInput, Button,TouchableWithoutFeedback ,Keyboard} from 'react-native' ; 
import Input from '../components/Input';
import Card from '../components/Card'; 
import theme from '../constants/Color';
 const StartGameScreen = () => { 
    const [enterevalue ,setEnteredValue] = useState("")

const handleChangeText = (txt) =>{
   setEnteredValue(txt.replace(/[^0-9]/g,''))
}

    return (    
      <TouchableWithoutFeedback onPress = {()=>{
         console.log("utilisation du composant TouchableWithoutFeedback ")
      //   l'api Keyboard.dismiss() ferme mon clavier 
         Keyboard.dismiss() 
      }}>
      <View style = {styles.screen}>
      <Text style = {styles.title}> Start A new Game </Text>
         <Card style = {styles.inputContainer}>
         <Text style = {{textAlign : "center"}}> Select A Number</Text>
        <Input 
        value = {enterevalue}
        onChangeText = {handleChangeText}
        />
            <View style = {styles.buttonContainer}>
               <View style  = {styles.button}>
                  <Button title = "Reset" onPress = {()=>{}} color = {theme.colors.accent} />
               </View>
            <View  style  = {styles.button}> 
                 <Button title ='Confirmation'  onPress = {()=>{}} color = {theme.colors.primary} /> 
                 
              </View>
          </View>
        </Card>
   </View>
      </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create ({
   screen : {
       flex : 1  ,
       padding : 1 ,
       alignItems  : "center"
   } ,
   inputContainer : {
 width : 300 ,
 maxWidth : "80%" ,
 
   },
   buttonContainer : {
  flexDirection :"row" ,
  width : "100%" ,
  justifyContent :"space-between" ,
 
   } ,
   title : {
   fontSize : 20  , 
   marginVertical : 10 
   } ,
   button : {
      width : 120
   }
   
})  
export default StartGameScreen ;
