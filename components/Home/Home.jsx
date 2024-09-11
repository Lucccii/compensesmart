import {ScrollView, View, KeyboardAvoidingView, Platform} from "react-native";
import {Header} from '../Header/Header'
import {Body} from "../Body/Body";
import {PopResultArea} from "../PopResultArea/PopResultArea"
import {s} from './Home.style'

export function Home ({setGrpFondTab, setGrpAutreTab, setGrpCompTab}) {
    return <>
        <View style={s.header}>
            <Header />
        </View>
        <View style={s.body}>
            <KeyboardAvoidingView style={s.keyboardAvoidingViewStyle}
                                  behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Ajuster le comportement en fonction de la plateforme
                                  keyboardVerticalOffset={120} >
                <ScrollView>
                    <Body setGrpFondTab={setGrpFondTab} setGrpCompTab={setGrpCompTab} setGrpAutreTab={setGrpAutreTab}/>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
        <View style={s.deadZone}></View>
    </>
}