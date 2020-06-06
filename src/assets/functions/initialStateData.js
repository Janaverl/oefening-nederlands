function initialStateExercises (){
    return {
        progress: {
            i: 0,
            current: 1,
            total: null,
            track: null,
            score: 0
        },
        isAnswering:  true,
        answer: null,
        isCorrectAnswer: false,
        isLastOne: false,
        btnText: null,
    }
}

function initialStateAppContent (){
    return {
        playing: true,
        endScore: {
          score: null,
          total: null,
          percentage: null
        }
    }
}

export {
    initialStateExercises
}