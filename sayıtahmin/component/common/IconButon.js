import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import MCIcon from "@expo/vector-icons/MaterialCommunityIcons";

const IconButon = (props) => {


const buttonTitle=props.title?props.title:"iconbutton";
const buttonIcon=props.icon?props.icon:"magnify-scan";

  return (

    <TouchableHighlight style={[styles.button,props.buttonStyle]} {...props}>
        <>
    <MCIcon name={buttonIcon} style={styles.icon}/>
        <Text style={[styles.text,props.textStyle]}>{buttonTitle}</Text>
        </>
        
    </TouchableHighlight>
  )
}

export default IconButon

const styles = StyleSheet.create({
    button:{
        flexDirection:"row",
        backgroundColor:"red",
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:10,
        alignItems:"center",
    },
    text:{
        color:"white",
        fontSize:18,
    },
    icon:{
        fontSize:25,
        marginLeft:10,
        
    }
})