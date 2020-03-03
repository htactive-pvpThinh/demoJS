function checkWeekend(date){
    return date.getDay() == 0 ? true : false;
}

var date = new Date("2020-03-01");
checkWeekend(date) ? console.log("This is weekend") : console.log("This is not a weekend");
