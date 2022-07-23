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