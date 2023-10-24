let da = new Date(2002,3,20,5,3);//Let date = new Date(year,month,day(date),Hour,min);
console.log(da.toLocaleString())
da = new Date("4-20-2002 09:03:PM");
console.log(da.toLocaleString())
console.log(da.toLocaleTimeString())

//How to Find Second in date;
console.log((Math.floor(da.getTime()/1000)+" Seconds"))