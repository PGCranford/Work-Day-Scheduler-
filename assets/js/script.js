//set current day 
var today =
    moment().format("dddd MMMM Do YYYY hh:mm a");

$("#currentDay").append(today);

var currentHour = moment().hour();
console.log(currentHour);

//checking time of day for block
var getHourClass = function (hour) {


    if (hour < currentHour) {
        return "past"
    }
    else if (hour > currentHour) {
        return "future"
    }
    else {
        return "present"
    }

};

var setUpHourBlock = function (hourBlock) {
    //console.log(hourBlock)

    var hourId = Number.parseInt(hourBlock.id, 10)
    console.log(hourId)

    var saveButton = hourBlock.querySelector(".saveBtn")
    console.log(saveButton)

    var textInputArea = hourBlock.querySelector("input")
    var hourClass = getHourClass(hourId)
    textInputArea.classList.add(hourClass)

    var saveTasks = localStorage.getItem(hourId)
    console.log(saveTasks)
    textInputArea.value = saveTasks

    saveButton.addEventListener("click", function () {
        let taskInput = textInputArea.value;
        console.log(taskInput)
        localStorage.setItem(hourId, (taskInput));

    })
}

document.querySelectorAll("#hourRows>.row").forEach(setUpHourBlock)

loadTask();






















