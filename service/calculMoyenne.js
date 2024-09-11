export function calculMoyenne(grpFondTab, grpCompTab, grpAutreTab) {

    const tabMoy = [calculMoyenneParGrp(grpFondTab), calculMoyenneParGrp(grpCompTab), calculMoyenneParGrp(grpAutreTab) ]
    return [...tabMoy, isValidSemester(tabMoy)]
}

function calculMoyenneParGrp (grp) {
    const noteWithECTsCoef = grp.map(line => (line.Note !== undefined && line.ECTs !== undefined) ? parseFloat(line.Note) *parseFloat(line.ECTs): 0)
    if (noteWithECTsCoef.every(item => item === 0)) {
        return 0
    }
    const sumNote = noteWithECTsCoef.reduce((acc, item) => {return acc + item})
    const sumECTsCoeff = (grp.map(line => line.ECTs !== undefined ? parseFloat(line.ECTs): 0)).reduce((acc, item) => acc +item)
    return [sumNote / sumECTsCoeff, sumECTsCoeff]
}

function isValidSemester(tabMoy) {
    //tabMoy[0] = moyenne du groupe de fond / tabMoy[1] = moyenne du groupe complémentaire / tabMoy[2] = moyenne groupe autre
    if (tabMoy[0][0] < 10 || tabMoy[2][0] < 10) {
        return false;
    }
    const denominateurMoyenneSuperGroupe = tabMoy[0][0] * tabMoy[0][1] + tabMoy[1][0] * tabMoy[1][1]
    const diviseurMoyenneSuperGroupe = tabMoy[0][1] + tabMoy[1][1]
    const moyenneSuperGroupe = denominateurMoyenneSuperGroupe / diviseurMoyenneSuperGroupe
    return (moyenneSuperGroupe >= 10)
}