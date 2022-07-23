const inputArea = document.querySelector("#one");
const outputArea = document.querySelector("#two");

const btnformat = document.querySelector(".format");
const btnclear = document.querySelector(".clear");


btnformat.addEventListener("click",()=>
{
   // console.log(inputArea.value);
   try{
    const formatted = JSON.stringify(JSON.parse(inputArea.value), null , 4);
    outputArea.value = formatted;
   }catch(err)
   {
       outputArea.value=err;
   }
   // console.log(formatted);
});

btnclear.addEventListener("click",()=>
{
    inputArea.value="";
    outputArea.value="";
})

var count=1;

inputArea.addEventListener("keyup",(e)=>
{
    if(e.keyCode === 13)
    {
    const newspan = document.createElement('span');
    count++;
    newspan.textContent=count;
    const divsec = document.querySelector(".number");
    divsec.append(newspan);
    }
})