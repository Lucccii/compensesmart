import {Image, View} from "react-native";
import {Text} from "react-native";
import {s} from './Body.style'
import {CardGrp} from '../CardGrp/CardGrp'
import {AddButton} from "../AddButton/AddButton";

export function Body ({setGrpAutreTab, setGrpCompTab, setGrpFondTab}){
    return <View>
        <View style={s.grpContainer}>
            <Text style={s.nomGrpe}>Groupe Fondamental :</Text>
            <CardGrp setTab={setGrpFondTab}/>
        </View>
        <View style={s.grpContainer}>
            <Text style={s.nomGrpe}>Groupe Complémentaire :</Text>
            <CardGrp setTab={setGrpCompTab}/>
        </View>
        <View style={s.grpContainer}>
            <Text style={s.nomGrpe}>Autres :</Text>
            <CardGrp setTab={setGrpAutreTab}/>
        </View>
    </View>;
}