import {useEffect, useState} from "react";
import {TextInput, View} from "react-native";
import {s} from './CardGrp.style'
import {TabLine} from '../TabLine/TabLine'
import {Parameters} from '../Parameters/Parameters'
import {AddButton} from "../AddButton/AddButton";

export function CardGrp({setTab}){
    const [currentTab, setCurrentTab] = useState([
        { id: 0, Name: '', ECTs: undefined, Note: undefined },
        { id: 1 , Name: '', ECTs: undefined, Note: undefined },
        { id: 2, Name: '', ECTs: undefined, Note: undefined },
    ]);
    function updateLine (ue, newText, modifType) {
        let lineUpdated = {}
        switch (modifType) {
            case 'ECTs' :
                lineUpdated = {
                    ...ue,
                    ECTs : newText,
                }
                break;
            case 'Note' :
                 lineUpdated = {
                    ...ue,
                    Note : newText,
                }
                break;
            case 'Name' :
                lineUpdated = {
                    ...ue,
                    Name : newText,
                }
                break;
        }
        const updatedTab = [...currentTab];
        updatedTab[ue.id] = lineUpdated;
        setCurrentTab(updatedTab);
        setTab(updatedTab)
    }
    function addLines (){
        let inOfNewLine = currentTab.length
        let newLine = { id: inOfNewLine, Name: '', ECTs: undefined, Note: undefined }
        setCurrentTab([...currentTab, newLine])
        setTab([...currentTab, newLine])
    }
    function renderTab(){
        return currentTab.map((ueItem) => (
            <View style={s.lineContainer} key={ueItem.id}>
                <TabLine ue={ueItem} updateLine={updateLine}/>
            </View>
        ));
    }

    return <>
        <View style={s.tabContainer}>
            <Parameters />
            {renderTab()}
        </View>
        <AddButton addLine={addLines}/>
    </>
}