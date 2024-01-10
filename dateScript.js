function getdatYesturday() {
    var date = new Date();
    date.setDate(date.getDate() - 1);
    let month = date.getUTCMonth() + 1;
    let day = date.getUTCDate();
    let year = date.getUTCFullYear();
    newdate = year + "-" + month + "-" + day;
    return newdate;
  }

  console.log(getdatYesturday())
  
  function getDatetoday() {
    var date = new Date();
    let month = date.getUTCMonth() + 1;
    let day = date.getUTCDate();
    let year = date.getUTCFullYear();
    newdate = year + "-" + month + "-" + day;
    return newdate;
  }
  console.log(getDatetoday())

  function datebeforeyesturday() {
    var date = new Date();
    date.setDate(date.getDate() - 2);
    let month = date.getUTCMonth() + 1;
    let day = date.getUTCDate();
    let year = date.getUTCFullYear();
    newdate = year + "-" + month + "-" + day;
    return newdate;
  }
  
  function lastWeek() {
    var date = new Date();
    var to = date.setTime(
      date.getTime() - (date.getDay() ? date.getDay() : 7) * 24 * 60 * 60 * 1000
    );
  
    var from = date.setTime(date.getTime() - 6 * 24 * 60 * 60 * 1000);
  
    var date2 = new Date(from);
    date2.setDate(date2.getDate() - 1);
    let month = date2.getUTCMonth() + 1;
    let day = date2.getUTCDate();
    let year = date2.getUTCFullYear();
    fromDate = year + "-" + month + "-" + day;
  
    var date3 = new Date(to);
    date3.setDate(date3.getDate() - 1);
    let month2 = date3.getUTCMonth() + 1;
    let day2 = date3.getUTCDate();
    let year2 = date3.getUTCFullYear();
    var toDate = year2 + "-" + month2 + "-" + day2;
    return [fromDate, toDate];
  }
  function thisWeek() {
    var date = new Date();
  
    var from = date.setTime(date.getTime());
  
    var date2 = new Date(from);
    date2.setDate(date2.getDate());
    let month = date2.getUTCMonth() + 1;
    let day = date2.getUTCDate();
    let year = date2.getUTCFullYear();
    fromDate = year + "-" + month + "-" + day;
  
    var to = date.setTime(date2.getTime() + 2 * 24 * 60 * 60 * 1000);
    var date3 = new Date(to);
    date3.setDate(date3.getDate() - 1);
    let month2 = date3.getUTCMonth() + 1;
    let day2 = date3.getUTCDate();
    let year2 = date3.getUTCFullYear();
    var toDate = year2 + "-" + month2 + "-" + day2;
    return [fromDate, toDate];
  }
  function lastMonth() {
    var date = new Date();
  
    // console.log(x.setMonth(x.getMonth()-1))
  
    // console.log()
    // var from = date.setTime(date.getTime() );
    var from = date.setTime(date.getTime());
    var x = new Date();
    var date2 = new Date(from);
    date2.setDate(x.setMonth(x.getMonth() - 1));
    let month = date2.getUTCMonth() + 1;
    let day = date2.getUTCDate();
    let year = date2.getUTCFullYear();
    fromDate = year + "-" + month + "-" + day;
  
    var to = date.setTime(date2.getTime() + 2 * 24 * 60 * 60 * 1000);
    var date3 = new Date(to);
    date3.setDate(date3.getDate() - 1);
    let month2 = date3.getUTCMonth() + 1;
    let day2 = date3.getUTCDate();
    let year2 = date3.getUTCFullYear();
    var toDate = year2 + "-" + month2 + "-" + day2;
    return [fromDate, toDate];
  }
  