const s = "hello";
console.log(s.charAt(0))
console.log(s.concat(" Zoom"))
console.log(s.startsWith("he"));
console.log(s.endsWith(`lo`));
console.log(s.includes('f'));
console.log(s.indexOf('h'));
console.log(s.lastIndexOf('l'));
console.log(s.padStart('12',"Suresh "));
console.log(s.padEnd('12'," Suresh"));
console.log(s.repeat(3));
console.log(s.replaceAll('l','g'))// Two Method replace and replaceall.
console.log(s.search('f'));
console.log(s.slice(1,4))
console.log(s.split(''))
console.log(s.substring(1,6))
console.log(s.toLowerCase())
console.log(s.length)
console.log(s.toUpperCase())
console.log("king   ".trimEnd().length)
console.log("  Mohit   ".trim().length)
console.log("  Mhaot".trimStart().length)