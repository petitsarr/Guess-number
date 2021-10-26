import React from 'react' ;
import {StyleSheet , View , Text ,TextInput, Button} from 'react-native'

 const StartGameScreen = () => {
    return (
       <View style = {styles.screen}>
       <Text style = {styles.title}> Start A new Game </Text>
       <View style = {styles.inputContainer}>
       <TextInput/> 
       <View style = {styles.buttonContainer}>
       <Button title = "Reset" onPress = {()=>{}} /> 
       <Button title ='Confirmation'  onPress = {()=>{}} />
       </View>
       </View>
       </View>
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
 shadowColor : "black" ,
 shadowOffset : {
    width : 3 ,
    height : 5
 } ,
 elevation : 8  ,
 shadowRadius : 6 ,
 shadowOpacity : 0.8 ,
 padding  : 20 ,
 borderRadius : 10 ,
 backgroundColor :"white",
 marginTop : 15
   },
   buttonContainer : {
  flexDirection :"row" ,
  width : "100%" ,
  justifyContent :"space-between" ,
 
   } ,
   title : {
   fontSize : 20  , 
   marginVertical : 10 
   }
})  
export default StartGameScreen ;
