const thisDate = (date = new Date()) => {
    var thisDay = date.getDate();
    var thisMonth = date.getMonth() + 1;
    var thisYear = date.getFullYear();
    console.log(`${thisDay}-${thisMonth}-${thisYear}`);

}
thisDate();