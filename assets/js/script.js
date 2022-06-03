var buttonSave = document.getElementById("saveBtn");
var tasks = {};


//set current day 
var today =
    moment().format("dddd MMMM Do YYYY HH:mm a");

$("#currentDay").append(today);

var hours = moment().format("HH:00");
console.log(hours);



//checking time of day for block
var now = function () {
    if ($("#dayHour") < hours) {
        document.getElementById("textArea").setAttribute("past")


    }
    else ($("#dayHour") > today); {
        $("#textArea").css(".future")
    }
};

//creating tasks 
var addTask = function (tasks) {
    var input = $("#textArea")
        .text(tasks)



    //input.append(taskText);

    $("#textArea" + tasks).append(input);
};

//getting user input

function getInputValue() {
    var inputVal = document.getElementById("textArea").value;

    alert(inputVal);

};

//save tasks
//button not an EL
buttonSave.addEventListener("click", function () {

    var tasks = inputVal.concat(tasks);
    localStorage.setItem("textArea", JSON.stringify(tasks));
});

var loadTask = function () {
    tasks = JSON.parse(localStorage.getItem("tasks"));
};

saveTasks();

now();












// dayHour()






















