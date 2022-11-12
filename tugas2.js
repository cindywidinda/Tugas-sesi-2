function greetings (name){
    //console.log(name)
    if(name === "cindy"){
        return "Hi!"
    }else{
        return "FAILED"
    }
}
const add = greetings('cindy') + ' welcome'

console.log(add)