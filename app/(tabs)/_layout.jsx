import { Tabs } from 'expo-router';
import React, {useEffect, useState} from 'react';
import { StyleSheet } from "react-native";
import {PopResultArea} from "../../components/PopResultArea/PopResultArea";
import {calculMoyenne} from "../../service/calculMoyenne";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import {Text, View, KeyboardAvoidingView} from "react-native";
import {Home} from "../../components/Home/Home"
import {ResultPage} from  "../../components/ResultPage/ResultPage"

export default function TabLayout() {
    const [grpFondTab, setGrpFondTab] = useState([])
    const [grpCompTab, setGrpCompTab] = useState([])
    const [grpAutreTab, setGrpAutreTab] = useState([])
    const [showResult, setShowResult] = useState(false)
    const [result, setResult] = useState([])
    const [isFirstRender, setIsFirstRender] = useState(true)

    useEffect(() => {
        if (isFirstRender) {
            setIsFirstRender(false)
        }
        else {
            console.log("Layout sur envoi fonction--------------------------")
            console.log(grpFondTab)
            console.log(grpCompTab)
            console.log(grpAutreTab)
            //console.log(calculMoyenne(grpFondTab, grpCompTab, grpAutreTab))
            setResult(calculMoyenne(grpFondTab, grpCompTab, grpAutreTab));
            console.log("------------------")
        }
    }, [showResult])
  return <>
      <SafeAreaProvider>
      <SafeAreaView style={s.app} edges={['right', 'left', 'top']}>

          {!showResult ?
              <Home setGrpFondTab={setGrpFondTab} setGrpCompTab={setGrpCompTab} setGrpAutreTab={setGrpAutreTab}/> :
              <ResultPage result={result} setShowResult={setShowResult}/>}
      </SafeAreaView>
    </SafeAreaProvider>
      {!showResult && <View style={s.footer}>
          <PopResultArea style={s.footer} setShowResult={setShowResult}/>
      </View>}
  </>
}

const s = StyleSheet.create({
    app: {
        flex: 1,
        backgroundColor : '#F9F9F9'
    },
    footer : {
        position : "absolute",
        bottom : 0.1,
        height : 100,
        width : '100%',
    }
});



