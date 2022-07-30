import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = ({cardStyle,children}) => {
  return (
    <View style={[styles.card,cardStyle]}>
      {children} 
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    card:{
        backgroundColor:"white",
        padding:20,
        borderWidth:1,
        borderColor:"gray",
        borderRadius:10,


    }
})