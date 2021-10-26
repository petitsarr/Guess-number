import React from 'react' ;
import {StyleSheet , View , Text ,TextInput} from 'react-native'

 const StartGameScreen = () => {
    return (
       <View style = {styles.screen}>
       <Text> The Game Screen </Text>
       </View>
    )
}
const styles = StyleSheet.create ({
   screen : {
       flex : 1  ,
       padding : 1 ,
       alignItems  : "center"
   }
})  
export default StartGameScreen ;
