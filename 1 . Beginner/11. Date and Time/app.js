// year , month , day , hour , minutes , second , millisecond
const currentDate = new Date(2025,6,22,10,30,0,0);
console.log(currentDate)


const newDate = new Date();

const currentYear = newDate.getFullYear();
console.log(`Year : ${currentYear}`)


const currentMonth = newDate.getMonth();
console.log(`Month : ${currentMonth}`)

const currentDay = newDate.getDay();
console.log(currentDay);

const cuurentDate = newDate.getDate();
console.log(currentDate);

const currentHour = newDate.getHours()
console.log(currentHour)

const cuurentMinute = newDate.getMinutes();
console.log(cuurentMinute)

const currentMillisecond = newDate.getMilliseconds();
console.log(currentMillisecond)


const Daate = new Date();
console.log(Daate.toDateString())
console.log(Daate.toISOString())
console.log(Daate.toLocaleDateString())

Daate.setDate(Daate.getDate()+1)
console.log(Daate)