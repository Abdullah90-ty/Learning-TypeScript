import {number} from "@inquirer/prompts";
import { select } from "@inquirer/prompts"; 
async function calculator(){
let num1=await number({
    message:"Enter First Number ....",
    
})
let num2=await number(
{
    message:"Enter Second Number ...."
})
let operation=await select({
    message:"Enter opperation .....",
    choices:[
        {value:"Addition",
        name:"Addition"
    },{
        value:"Subtraction",
        name:"Subtraction"
    },{
        value:"Multiplication",
        name:"Multiplication"
    },{
        value:"Division",
        name:"Diviion"
    }
    ]
})

console.log(num1)
console.log(num2)
console.log(operation)
}
calculator()