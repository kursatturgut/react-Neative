import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IconButon from '../component/common/IconButon'
import { Header } from 'react-native/Libraries/NewAppScreen';
import Spacer from '../component/common/spacer';
import Card from '../component/common/card';

const Sonscreen = (props) => {
  const {setGameStatus,gameResult,point}=props;
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
      <Text>
        {gameResult==="win"? "🏆🏆kazandın🏆🏆🏆🏆":"👎👎  Badkaybettin👎 👎 "}
      </Text>
      <Spacer/>
      <Card>
        <Text>{point}</Text>
        <Text>puan</Text>
      </Card>
      <Spacer/>

      <View>
      <Text>puan</Text>
      <Text>tahmin sayı:{randumnumber}</Text>
      <Text>timer:{timer}</Text>
      <Text>shot:{shot}</Text>

      </View>

      <IconButon
          title="Start The Game"
          icon="gamepad-variant-outline"
          onPress={() => setGameStatus("start")}
        />
        </View>
    </View>
  )
}

export default Sonscreen

const styles = StyleSheet.create({
  container:{
    flex:1,

  },
  content:{
    flex:1,
    justifyContent:"center"
  }
})