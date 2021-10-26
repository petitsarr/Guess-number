import React from 'react' ;
import {View ,StyleSheet,TextInput} from 'react-native'   ;


 const Input = ({value,onChangeText}) => {
    return (
       <TextInput
       blurOnSubmit ={true}
       autoCapitalize = "none"
        style = {styles.input} 
        autoCorrect = {false} 
        keyboardType ="number-pad" 
        maxLength = {2} 
       value = {value} 
       onChangeText = {onChangeText}
        />
    )
}

const styles = StyleSheet.create({
    input : {
        height : 30 ,
        borderBottomColor : 'black' ,
        borderBottomWidth : 0.5 ,
        marginVertical : 10 ,
        width : 250  ,  
        textAlign : "center"
       
    }
})
export default  Input
