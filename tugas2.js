function greetings (name){
    if(name === "cindy"){
        return "Hi!"
    }else{
        return "FAILED"
    }
}
const bio = {
    firstName: "Welcome to ",
    lastName: "my world!",
    greetings: function(greets){
        const a = this.firstName
        const b = this.lastName
        console.log(a+b + greets)
    }
}
const add = greetings('cindy')
console.log(add)
bio.greetings(" Enjoy~")