import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from '../common/card'
import MCIcon from "@expo/vector-icons/MaterialCommunityIcons"

const Scoreboard = ({timer,shot}) => {
  return (
    <View style={styles.container}>
      <Card cardStyle={styles.cardLeft}>
        <Text style={styles.text}>
          <MCIcon name="progress-clock" size={20} /> {timer}
        </Text>
      </Card>

      <Card cardStyle={styles.cardRight}>
        <Text style={styles.text}>
          <MCIcon name="heart-multiple"  size={20}/> {shot}
        </Text>
      </Card>
    </View>
  )
}

export default Scoreboard

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-evenly",
    },
    text:{
        fontSize:20,
        
    },
    cardleft:{
        flex:1,

    },
    cardright:{
        flex:1,

    }
})