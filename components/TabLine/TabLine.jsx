import {Alert, TextInput} from "react-native";
import {s} from './TabLine.style'
import {View} from "react-native";

export function TabLine({ue, updateLine}) {
    const onChangeTextVerif = (ue, newText, type) => {
        if (newText > 20 || newText < 0) {
            Alert
        }
    }
    return <View style={s.container}>
        <TextInput style={s.nameInput} placeholder={'Algebre'} onChangeText={(newText) => onChangeTextVerif(ue, newText, 'Name')}/>
        <TextInput keyboardType="numeric" style={s.ECTS} placeholder={'3'} onChangeText={(newText) => updateLine(ue, newText, 'ECTs')}/>
        <TextInput keyboardType="numeric" style={s.Note} placeholder={'12'} onChangeText={(newText) => updateLine(ue, newText, 'Note')}/>
        </View>
}