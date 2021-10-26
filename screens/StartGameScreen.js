import React from 'react' ;
import {StyleSheet , View , Text ,TextInput, Button} from 'react-native' ;
import Card from '../components/Card'; 
import theme from '../constants/Color';
 const StartGameScreen = () => {
    return (
       <View style = {styles.screen}>
          <Text style = {styles.title}> Start A new Game </Text>
             <Card style = {styles.inputContainer}>
             <Text style = {{textAlign : "center"}}> Select A Number</Text>
              <TextInput /> 
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
