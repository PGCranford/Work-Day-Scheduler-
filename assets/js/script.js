//var buttonSave = document.getElementById("saveBtn");


var loadTask = function () {
    input = JSON.parse(localStorage.getItem("tasks"));
};

//set current day 
var today =
    moment().format("dddd MMMM Do YYYY hh:mm a");

$("#currentDay").append(today);

var hours = moment().format("HH");
console.log(hours);



//checking time of day for block
var now = function () {
    if (3 < hours) {
        document.getElementById("textArea").setAttribute("col-md-9", "past")


    }
    //     else ($("#dayHour") > hours); {
    //         document.getElementById("textArea").setAttribute(".future")
    //     }
};

//creating tasks 
var addTask = function (event) {
    event.preventDefault();
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
function saveText() {
    let input = document.getElementById("textArea").value;
    alert(input)

    if (input === true)
        localStorage.setItem("textArea", JSON.stringify(input));


};

loadTask();

now();




















