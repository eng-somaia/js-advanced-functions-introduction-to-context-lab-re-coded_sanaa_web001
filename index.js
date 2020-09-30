function createEmployeeRecord(x){
  let timeIn = [];
  let timeOut = [];
  let obj = {
    firstName: x[0],
    familyName: x[1],
    title: x[2],
    payPerHour: x[3],
    timeInEvents: timeIn,
    timeOutEvents: timeOut
  }
  return obj;
}

function createEmployeeRecords(x){

  let newArray = x.map(createEmployeeRecord);
  return newArray;
}

function createTimeInEvent(x,y){
  let z = Array.from(y);
  let date1 = z.slice(0,10);
  date1 = date1.join("");
  let hour1 = z.slice(11,15);
  hour1 = parseInt(hour1.join(""),10);
  let obj2 = {
    type: "TimeIn",
    hour: hour1,
    date: date1
  }
  x.timeInEvents.push(obj2);
  return x;
}

function createTimeOutEvent(x,y){
  let z = Array.from(y);
  let date1 = z.slice(0,10);
  date1 = date1.join("");
  let hour1 = z.slice(11,15);
  hour1 = parseInt(hour1.join(""),10);
  let obj2 = {
    type: "TimeOut",
    hour: hour1,
    date: date1
  }
  x.timeOutEvents.push(obj2);
  return x;

}

function hoursWorkedOnDate(x,y){
  let z=0;
  if (y === x.timeOutEvents[0].date)
   z = (x.timeOutEvents[0].hour)/100 - (x.timeInEvents[0].hour)/100;
    return z;
   }

function wagesEarnedOnDate(a,b){
  let z=0;
  if (b === a.timeOutEvents[0].date)
 z = hoursWorkedOnDate(a,b) * a.payPerHour;
 return parseFloat(z.toString());
}

function allWagesFor(c){
  let eligibleDates = c.timeInEvents.map(function(e){
          return e.date
      })

      let payable = eligibleDates.reduce(function(memo, d){
          return memo + wagesEarnedOnDate(c, d)
      }, 0)

      return payable;
}

function findEmployeeByFirstName(i,j){
return  i.find(ele => ele.firstName === j)

}

function calculatePayroll(v){
   let z = v.reduce((accum, sum) =>  accum + allWagesFor(sum),0)
return z;
}
