let user = "manishrawat4876@gamil.com";
const pass = "Manish$789";
const fullName = "Manish Rawat".trim();
const dob = new Date();
console.table([user,pass,fullName,dob.toLocaleDateString()]); 

console.log(`User :${user} \n Password :${pass} \n Name: ${fullName} \n DOB : ${dob.getMonth()}`)