let Processing=document.getElementById('Processing')
let Successful=document.getElementById('Successful')
let Failed=document.getElementById('Failed')
let button=document.getElementById('paybutton')


    Processing.style.display='none'
    Successful.style.display='none'
    Failed.style.display='none'
     
 
let result=Math.random()<0.5
function mypayment()
{
return new Promise((resolve, reject) => {
    

setTimeout(() => {
   
        if(result)
        {
         resolve()
        }
        else{
         reject()
        }
    },2000)
});
}

function processingUI()
{
  Processing.style.display='block'
}
function SuccessfulUI()
{
  Processing.style.display='none'
  Successful.style.display='block'
  button.style.display='none'
}
function failedUI()
{
Processing.style.display='none'
  Failed.style.display='block'
  button.style.display='none'
}
function paybutton()
{
processingUI()
mypayment()
.then(()=>{
SuccessfulUI()
})
.catch(()=>{
failedUI()
})
}