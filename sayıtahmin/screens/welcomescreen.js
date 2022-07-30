import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header } from 'react-native/Libraries/NewAppScreen'
import IconButon from '../component/common/IconButon'
import Spacer from '../component/common/spacer'
import gameInitials from '../contans/gamedeğerleri'
import colors from "../contans/color";

const Welcomescreen = ({ setGameStatus }) => {
  return (
    <View style={styles.container}>
      <Header title="Welcome" />
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to the game</Text>
        <Spacer />
        <Text style={styles.desc}>
          Guess the number between {gameInitials.randomNumberDownLimit} to{" "}
          {gameInitials.randomNumberUpLimit} in {gameInitials.totalTime}{" "}
          seconds. You have {gameInitials.totalShot} shots.
        </Text>
        <Spacer />
        <IconButon
          title="Start The Game"
          icon="gamepad-variant-outline"
          onPress={() => setGameStatus("start")}
        />
      </View>
    </View>
  )
}

export default Welcomescreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
  },
  desc: {
    fontSize: 18,
    fontStyle: "italic",
    color: colors.color1,
    textAlign: "center",
  },
})