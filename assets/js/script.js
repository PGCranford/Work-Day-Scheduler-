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

var addTask = function (taskText) {
    var taskLi = $("#textArea");
    .text()

}

now();











// dayHour()






















