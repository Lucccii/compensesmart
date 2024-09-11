import {TouchableOpacity, View, Text} from "react-native";
import {s} from './PopResultArea.style'

export function PopResultArea({setShowResult}){
    return <View style={s.container}>
        <TouchableOpacity style={s.button} onPress={() => setShowResult(true)}>
            <Text style={s.txt}>Simuler mon semestre</Text>
        </TouchableOpacity>
    </View>;
}