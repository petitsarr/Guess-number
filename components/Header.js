import React from 'react' ;
import  {View ,Text ,StyleSheet}  from "react-native" ; 
import theme from '../constants/Color';
export const Header = ( {title}) => {
    return (
        <View style = {styles.header} > 
        <Text style = {styles.headerTitle}> {title}</Text>
        </View>
    )
} 

const styles = StyleSheet.create({
 header : {
     width : "100%" ,
     height : 90 ,
     paddingTop  : 36 , 
     backgroundColor : theme.colors.primary,
     alignItems  : "center" ,
     justifyContent : "center"
 } ,
 headerTitle : {
     fontSize : 18  ,
     color : 'black'
 }
})  
export default Header ;
