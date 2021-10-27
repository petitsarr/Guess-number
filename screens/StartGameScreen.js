import React, { useState } from 'react' ;
import {StyleSheet , View , Text ,TextInput, Button,TouchableWithoutFeedback ,Keyboard,Alert} from 'react-native' ; 
import Input from '../components/Input';
import Card from '../components/Card'; 
import theme from '../constants/Color'; 
import { FontAwesome } from '@expo/vector-icons';
 const StartGameScreen = () => { 
    const [enterevalue ,setEnteredValue] = useState(" ") ;
    const [confirmed,setConfirmed] = useState(false) ;
    const  [selected ,setSelected]  = useState(" ")

    const resetInputHandler = ()=>{
       setEnteredValue("")
       setConfirmed(false)
    }

    const confirmeInputHandler = () =>{

      const mynumber = parseInt(enterevalue) 

      if(isNaN(mynumber)  || mynumber <= 0 || mynumber > 100) {
         Alert.alert("Numero invalide" , "Le numéro à choisir doit etre compris entre 0 et 100 "  , [
            {
               text :"okay" ,
               style : "destructive" ,
               onPress : resetInputHandler
            }
         ])
         return ;
      }
 
       setConfirmed(true)  

       setSelected(parseInt(mynumber))

       setEnteredValue("") 
       Keyboard.dismiss()
     
    }  
    let confirmedInpout  ;
    if(confirmed) {
       confirmedInpout = <Card  mystyle = {styles.mybutton}>
       <Text> Le numéro que vous avez choisi est  {selected}</Text>
       <Button onPress = {() => console.log("bouton started clicked")} title =   "Commencez le jeux svp !" />
       </Card>
    
       
    }
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
                  <Button title = "Reset" onPress = {()=>{
                     resetInputHandler() ;
                  }}
                   color = {theme.colors.accent}
                    />
               </View>
            <View  style  = {styles.button}> 
                 <Button title ='Confirmation'  onPress = {()=>{
                    confirmeInputHandler()
                 }} color = {theme.colors.primary} /> 
                 
              </View>
          </View>
        </Card>
        {confirmedInpout }
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
   } ,
   mybutton : {

      marginTop : 80 ,
      padding : 20
   }
   
})  
export default StartGameScreen ;
