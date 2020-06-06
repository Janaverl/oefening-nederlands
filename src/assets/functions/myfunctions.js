function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}

function getPercentage(current, total) {
    return ((current / total)*100);
}

function isLastExercise(currentNr, total){
    if(currentNr == total){
      return true;
    }
    return false;
}

export {
    shuffleArray,
    getPercentage,
    isLastExercise
}