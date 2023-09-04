import { alertNy } from "./export.js"
const textToTyoe  =[ 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quod, blanditiis corrupti obcaecati eius asperiores consectetur nulla officiis sapiente omnis ipsam ullam provident iste totam quam repellat. Id, animi at']
const speedType  = 3

const inputAlso = document.getElementById('input')
const AnimatedText = (text,speed,index=0)=>{
const textVoid = document.querySelector('#main')
alertNy(textVoid)
console.log(textToTyoe)
if(index <text.length){
    console.log(text.charAt(index))
    textVoid.innerHTML +=  `<span id='mains' style='font-size:30px; font-family:cursive ; color:darkkhaki'>${text.charAt(index)}</span>
    `
    setTimeout(()=>{
        AnimatedText(text,speed,index+1),speed
    },70)
}

}
const Added = false
const finalInput =false
localStorage.setItem('new',false)
inputAlso.addEventListener("keydown",(event)=>{
    console.log(event)
    if (event.key  == 'Enter') {
        localStorage.setItem('inputKey',inputAlso.value)
localStorage.setItem('new',true)
    }
});
const state  = localStorage.getItem('new')

console.log(state)
 const alwaysOnInput = localStorage.getItem('inputKey')
 if(alwaysOnInput===null){
    localStorage.setItem('new',false)
 }
 console.log(alwaysOnInput)
document.addEventListener('DOMContentLoaded',()=>{
    AnimatedText(state? alwaysOnInput : textToTyoe,speedType)
}) 
const randName = '5597 Sabrina Crescent'
console.log(randName)