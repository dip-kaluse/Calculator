let arr=[]
let Display =document.getElementById("display");
let Buttons =Array.from(document.getElementsByClassName("button"));
let History1 = localStorage.getItem("one")
let Hist =document.getElementById("hist");
// let Clr = document.getElementById("clr")
if (History1) {
    arr = JSON.parse(History1)
    his(arr)
}
Buttons.map(button => {
    button.addEventListener('click',(e)=>{
        switch (e.target.innerText) {
            case 'C':
                Display.innerText='';
                break;
            case '←':
                if (Display.innerText) {
                    Display.innerText=Display.innerText.slice(0,-1);    
                }
                break;
            case '=':
                try{
                    if (Display.innerText) {
                    let d=Display.innerText
                    Display.innerText=eval(Display.innerText)
                    show(d,Display.innerText)
                     } }
                    catch{
                        Display.innerText="NaN!";
                    } 
                     break;
            default:
                Display.innerText +=e.target.innerText;
                break;
        }
    })
    
})

function show(t,m) {
    let s= JSON.stringify(t+"="+m)
    
    arr[arr.length] = {note:s}
    localStorage.setItem("one",JSON.stringify(arr))
    his(arr)
}
function his(r) {
    {

        let a = ""
        for (let i = 0; i < r.length; i++) {
    
            a += `<tr><td>${r[i].note}</td></tr>
    `
        }
        Hist.innerHTML = a
    }
}

function clearr(){
    console.log("clear")
    arr= []
    Hist.innerHTML = arr
    localStorage.clear("note")  
}