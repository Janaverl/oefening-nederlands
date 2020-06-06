import jsonAppInformation from '../data/appInformation.json';
import jsonAppContent from '../data/appContent.json';
import jsonExercises from '../data/exercises.json';

function getAppTitle() {
    return jsonAppInformation.title;
}

function getAppCreatedBy() {
    return jsonAppInformation.createdBy;
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

function getExercises() {
    return jsonExercises;
}

function getDate(date) {
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0');
    var yyyy = date.getFullYear();

    return mm + '/' + dd + '/' + yyyy;
}

function getAllExercisesDone(){
    if (localStorage.allExercises) {
        var jsonString = localStorage.getItem("allExercises");
        const allExercises = JSON.parse(jsonString);
        return allExercises;
    }
    return [];
}

function setLastExercise(lastExercise){
    const allExercises = getAllExercisesDone();

    lastExercise.date = getDate(lastExercise.date);
    allExercises.unshift(lastExercise);

    localStorage.setItem("allExercises", JSON.stringify(allExercises));
}

export {
    getAppTitle,
    getAppCreatedBy,
    getBtnText,
    getScoreTitle,
    getScoreMessage,
    getExercises,
    setLastExercise
}

