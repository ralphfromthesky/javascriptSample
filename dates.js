const thisDate = (date = new Date()) => {
  var thisDay = date.getDate();
  var thisMonth = date.getMonth() + 1;
  var thisYear = date.getFullYear();
  var thisTime = date.getTime();
  console.log(`${thisDay}-${thisMonth}-${thisYear}`);
};
thisDate();

const time = new Date();
const seconds = time.getMinutes();
console.log(seconds);

const newTime = (time = new Date()) => {
  var hour = time.getHours();
  var minutes = time.getMinutes();
  var period = hour >= 12 ? "pm" : "am";
  hour = (hour % 12) || 12;

   minutes = minutes < 10 ? "0" + minutes : minutes;

  console.log(hour + ':' + minutes + ' ' + period);
};
newTime();
