import {Image, Text, View, TouchableOpacity} from "react-native";
import {s} from "./ResultPage.style"
import {useState} from "react";
import {Header} from "../Header/Header";
import {CheckCircleOutlined} from "@ant-design/icons";
import { IconFill, IconOutline } from "@ant-design/icons-react-native";
const validImg = require('../../assets/images/checkImg.png');
const invalidImg = require('../../assets/images/uncheck.png');
import {Ionicons} from "@expo/vector-icons";

export function ResultPage({result, setShowResult}){
    const isValidSemester = () => {
        console.log(result[3])
        switch (result[3]) {
            case true:
                return <Text>Bravo, tu valides ton semestre !</Text>
            case false:
                return <Text>Aie, tu ne valides pas ton semestre... </Text>
            default:
                return <Text>Valeur non reconnue</Text>;
        }
    };
    if (!result || result.length < 3) {
        return <Text>Chargement des résultats...</Text>;
    }
    //result[0][0]
    const [moyenneGrpFond, setMoyenneGrpFond] = useState(result[0][0])
    const [moyenneGrpComp, setMoyenneGrpComp] = useState(result[1][0])
    const [moyenneGrpAutres, setMoyenneGrpAutres] = useState(result[2][0])
    const [test, setTest] = useState(false)

    return <View style={s.page}>
        <View style={s.backPageContainer}>
            <TouchableOpacity onPress={() => setShowResult(false)} >
                <Ionicons name="chevron-back" size={24} color="black" />
            </TouchableOpacity>
        </View>
        <View style={s.imgContainer}>
            <Image source={result[3] ? validImg : invalidImg} style={s.image} />
            {isValidSemester()}
        </View>
        <View style={s.resultTxtArea}>
            <View style={s.resultCard}>
                <Text style={s.resultTitle}>Moyenne groupe fondamental :</Text>
                <Text style={[s.resultValue, (moyenneGrpFond >= 10) ? s.valid : s.invalid]}>
                    {moyenneGrpFond}
                </Text>
            </View>

            <View style={s.resultCard}>
                <Text style={s.resultTitle}>Moyenne groupe complémentaire :</Text>
                <Text style={[s.resultValue, (moyenneGrpComp >= 10) ? s.valid : s.invalid]}>
                    {moyenneGrpComp}
                </Text>
            </View>

            <View style={s.resultCard}>
                <Text style={s.resultTitle}>Moyenne groupe autres :</Text>
                <Text style={[s.resultValue, (moyenneGrpAutres >= 10) ? s.valid : s.invalid]}>
                    {moyenneGrpAutres}
                </Text>
            </View>
        </View>
    </View>
}