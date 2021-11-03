function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
    }

function mondayWork (objective = "go to the office") {
    return `This Monday, I will ${objective}.`
}

function wrapAdjective (flair ="*") {
    const innerFunction = function (adj = "special") {
        return `You are ${flair}${adj}${flair}!`;
    }
    return innerFunction;
}
