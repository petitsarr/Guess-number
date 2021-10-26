import React from 'react'  
import {View , StyleSheet}   from "react-native"

 const Card = ({children,style}) => {
    return (
       <View  style = {{...styles.card,...style}}>
        {children}
       </View>
    )
}

const styles = StyleSheet.create({
    card : {
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
    }
})

export default Card ;
