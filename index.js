// code your solution here
function saturdayFun(arg='roller-skate') {
    return `This Saturday, I want to ${arg}!`
}

const mondayWork = function (activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*") {
    return function (adj="special") {
        return `You are ${flair}${adj}${flair}!`;
    }
}
