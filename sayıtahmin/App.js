
import { useState } from 'react';
import { StyleSheet, Text, View,StatusBar } from 'react-native';
import gameInitials from "./contans/gamedeğerleri"
import Gamescreen from './screens/gamescreen';
import Sonscreen from './screens/sonscreen';
import Welcomescreen from './screens/welcomescreen';
import Toast from "react-native-toast-message";

export default function App() {
  const [gameStatus, setGameStatus] = useState("welcome"); //welcome | start | end
  const [randomNumber, setRandomNumber] = useState();
  const [timer, setTimer] = useState(gameInitials.totalTime);
  const [shot, setShot] = useState(gameInitials.totalShot);
  const [gameResult, setGameResult] = useState(""); // win | lost
  const [point, setPoint] = useState(0);

  return (
    <View style={styles.container}>
      {gameStatus === "welcome" ? (
        <Welcomescreen setGameStatus={setGameStatus}/>
      ) : gameStatus === "start" ? (
        <Gamescreen 
        randomNumber={randomNumber}
        setRandomNumber={setRandomNumber}
        timer={timer}
        setTimer={setTimer}
        shot={shot}
        setShot={setShot}
        gameStatus={gameStatus}
        setGameStatus={setGameStatus}
        setGameResult={setGameResult}
        point={point}
        setPoint={setPoint}

        />
      ) : (
        <Sonscreen setGameStatus={setGameStatus}
        gameResult={gameResult}
        point={point}
        />
      )}
      <Toast visibilityTime={2000}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
