let decrement_btn = document.getElementById("Decrement_btn")
let display_value = document.getElementById("display_value")
let Increment_btn = document.getElementById("Increment_btn")
let reset_btn = document.getElementById("reset_btn")

decrement_btn.addEventListener("click", () =>{
    let value = Number(display_value.innerText)
    if(value>0){
        display_value.innerText=value-1
    }
    else
    alert("value is less than 1")
})


Increment_btn.addEventListener("click", () => {
    let value2 = Number(display_value.innerText)
    if (value2 <= 20){
        display_value.innerText = value2 + 1
    }
    else 
    alert("value is greater than 20")
})

reset_btn.addEventListener("click" , () => {
    display_value.innerText= 0
})
