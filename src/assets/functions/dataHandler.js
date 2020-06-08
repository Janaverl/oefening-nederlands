import jsonAppInformation from '../data/appInformation.json';
import jsonAppContent from '../data/appContent.json';
import jsonExercises from '../data/exercises.json';
import jsonExerciseTypes from '../data/exerciseTypes.json';

function getAppTitle() {
    return jsonAppInformation.title;
}

function getAppCreatedBy() {
    return jsonAppInformation.createdBy;
}

function getMenuName() {
    return jsonAppContent.menu.name;
}

function getMenuItems() {
    return jsonAppContent.menu.items;
}

function getBtnText(action) {
    return jsonAppContent.btn[action];
}

function getScoreTitle(level) {
    return jsonAppContent.score[level]['title'];
}

function getScoreMessage(level) {
    return jsonAppContent.score[level]['message'];
}

function getScoreBoardText() {
    return jsonAppContent.scoreBoard;
}

function getDescription(id) {
    const filteredList = jsonExerciseTypes.filter(function(item){
        return item.id == id;         
    })
    return {
        "long": filteredList[0]['description'],
        "short": filteredList[0]['short']
    }
}

function getExercises(id) {
    const filteredList = jsonExercises.filter(function(item){
        return item.exerciseTypeId == id;         
    })

    for (let i=0; i<filteredList.length; i++) {
        filteredList[i]['id'] = i;
    }

    return filteredList;
}

function getDate(date) {
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0');
    var yyyy = date.getFullYear();

    return dd + '/' + mm + '/' + yyyy;
}

function removeTestData(allExercises){
    for(let i=allExercises.length-1; i >= 0 ; i--){
        if(!allExercises[i].id){
            allExercises.splice(i,1)
        }
    }

    if(allExercises.length <= 0){
        return null;
    }

    return allExercises;
}

function getAllExercisesDone(){
    if (localStorage.allExercises) {
        var jsonString = localStorage.getItem("allExercises");
        const allExercises = JSON.parse(jsonString);

        return removeTestData(allExercises);
    }
    return null;
}

function postExerciseResult(exercise){
    let allExercises = getAllExercisesDone();

    if(allExercises == null){
        allExercises = [];
    }

    exercise.date = getDate(exercise.date);
    allExercises.unshift(exercise);

    localStorage.setItem("allExercises", JSON.stringify(allExercises));
}

export {
    getAppTitle,
    getAppCreatedBy,
    getMenuName,
    getMenuItems,
    getBtnText,
    getScoreTitle,
    getScoreMessage,
    getScoreBoardText,
    getExercises,
    getDescription,
    postExerciseResult,
    getAllExercisesDone
}

