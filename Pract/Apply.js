function Super(){
    return (()=>{
        return "Hello"
    });
}
console.log(Super().apply())
