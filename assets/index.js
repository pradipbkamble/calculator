const input=document.getElementById('calculator');
const buttons=document.querySelectorAll('button')


let string= ""; //store button nodelist

let arr=Array.from(buttons); // node list convert into array 
arr.forEach(button=>{
    button.addEventListener('click',(e)=>{
        console.log(e.target.innerHTML)
        if(e.target.innerHTML== '='){
            string=eval(string);// eval is predifine function in js
            input.value=string;
        }
        else if(e.target.innerHTML== 'AC'){
            string=""; //string empty
            input.value=string  // input will empty
        }
        else if(e.target.innerHTML=='DEL'){
string=string.substring(0,string.length-1);
input.value=string

        }
        else{
           string +=e.target.innerHTML;
           input.value = string;
        }
        

        
    })
})

