import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Scoreboard from '../component/gamescrenn/scoreboard'
import Spacer from '../component/common/spacer'
import { Header } from 'react-native/Libraries/NewAppScreen'
import Card from '../component/common/card'
import IconButon from '../component/common/IconButon'
import gameInitials from '../contans/gamedeğerleri'
import Toast from "react-native-toast-message";
import { TouchableWithoutFeedback } from 'react-native-web'


const Gamescreen = (props) => {
  const {randomNumber, setRandomNumber,timer,
  setTimer,
  shot,
  setShot,gameStatus,setGameStatus,setGameResult,point,setPoint}=props;
  const [number, setfNumber] = useState("");

useEffect(() => {
setShot(gameInitials.totalShot)
setPoint(0)
setGameResult("")
const rn = Math.floor(
  Math.random() *
    (gameInitials.randomNumberUpLimit -
      gameInitials.randomNumberDownLimit) +
    gameInitials.randomNumberDownLimit
);
setRandomNumber(rn);

  setTimer(gameInitials.totalTime);
  
const interval=setInterval(()=>{
setTimer((prev)=>prev-1)
},1000)
  return () => {
    clearInterval(interval);
  }
}, [])

useEffect(() => {
  if(timer<=0){
    endGame("lost")

  }
  

},[timer])

const endGame = (result) => { 
  setGameStatus("end");
  setGameResult(result)
  setPoint(timer*shot*10);

 }
 const handleguss = () => { 
 const enteredNumber=Number(number);
 if (
  isNaN(enteredNumber) ||
  enteredNumber < gameInitials.randomNumberDownLimit ||
  enteredNumber > gameInitials.randomNumberUpLimit
) {

  Toast.show({
    type: 'error',
    text1: `You have to type number between ${gameInitials.randomNumberDownLimit} and ${gameInitials.randomNumberUpLimit}`,
  });
  return;
}

if(randomNumber === enteredNumber){
  endGame("win");
}
else if(randomNumber > enteredNumber){

  Toast.show({
    type: 'info',
    text1: `It must be greater than ${enteredNumber} `,
  });
  hanleShot()
}
else{
  Toast.show({
    type: 'info',
    text1: `It must be less than ${enteredNumber} `,
  });
  hanleShot()
}

setfNumber("");

  };

  const hanleShot = () => { 
    if(shot>0){
      setShot((prev)=>prev-1)

    }else{
      endGame("lost");
    }


   }
   const setFocus = () => { 
    
    }
  




  return (
    <View style={styles.container}>
     <Header/>
      
      <View style={styles.content}>
      <Scoreboard timer={timer} shot={shot}/>
      <Spacer/>
      </View>
      <TouchableWithoutFeedback onPress={setFocus}>
      <Card>
      <Text style={styles.text}> typ anumber</Text>
      <TextInput style={styles.input} keyboardType="number-pad" maxLength={gameInitials.randomNumberUpLimit.toString().length}
      value={number}
      onChangeText={(text)=>setfNumber(text)}
      
      />
      <IconButon title="tahmin et" icon="target" onPress={handleguss}/>


      </Card>
      </TouchableWithoutFeedback>
      

    </View>
  )
}

export default Gamescreen

const styles = StyleSheet.create({
  content:{
    padding:20,
   


  },
  container:{
    flex:1,
    backgroundColor:"blue"

  },
  text:{
    fontsize:15,
    color:"gray",
  },
  input:{
    padding:10,
    fontSize:25,


  }
})