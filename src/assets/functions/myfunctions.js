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

function getDate(date) {
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0');
    var yyyy = date.getFullYear();

    return mm + '/' + dd + '/' + yyyy;
}

function saveLastGame(lastGame){
    let allGames = [];

    if (localStorage.allGames) {
        var jsonString = localStorage.getItem("allGames");
        allGames = JSON.parse(jsonString);
    }
    lastGame.date = getDate(lastGame.date);
    allGames.unshift(lastGame);

    localStorage.setItem("allGames", JSON.stringify(allGames));
}

function getAllGames(){
    if (localStorage.allGames) {
        var jsonString = localStorage.getItem("allGames");
        const allGames = JSON.parse(jsonString);
        console.log(allGames);
        return allGames;
    }
    return [];
}

export {
    shuffleArray,
    getPercentage,
    isLastExercise,
    saveLastGame,
    getAllGames
}