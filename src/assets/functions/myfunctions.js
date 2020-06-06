function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}

function hasEqualCleanString(myAnswer, answer) {
    if(myAnswer.toLowerCase().trim() === answer.toLowerCase().trim()) {
        return true;
    }
    return false;
}

function getPercentage(current, total) {
    return ((current / total)*100);
}

function isLastExercise(currentNr, total){
    if(currentNr === total){
      return true;
    }
    return false;
}

function getDate(date) {
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0');
    var yyyy = date.getFullYear();

    return mm + '/' + dd + '/' + yyyy;
}

function saveLastExercise(lastExercise){
    let allExercises = [];

    if (localStorage.allExercises) {
        var jsonString = localStorage.getItem("allExercises");
        allExercises = JSON.parse(jsonString);
    }
    lastExercise.date = getDate(lastExercise.date);
    allExercises.unshift(lastExercise);

    localStorage.setItem("allExercises", JSON.stringify(allExercises));
}

function getAllExercises(){
    if (localStorage.allExercises) {
        var jsonString = localStorage.getItem("allExercises");
        const allExercises = JSON.parse(jsonString);
        console.log(allExercises);
        return allExercises;
    }
    return [];
}

export {
    shuffleArray,
    getPercentage,
    isLastExercise,
    saveLastExercise,
    getAllExercises,
    hasEqualCleanString
}