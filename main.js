const display1E1=document.querySelector('.display1');
const display2E1=document.querySelector('.display2');
const numbersE1=document.querySelectorAll('.number');
const operationE1=document.querySelectorAll('.operation');
const equalE1=document.querySelector('.equal');
const clearE1=document.querySelector('.allclear');
const clearLastE1=document.querySelector('.lastentity_clear');
let dis1Num ='';
let dis2Num ='';
let result=null;
let lastOperation='';
let haveDot= false;

numbersE1.forEach(number => {
    number.addEventListener('click',(e)=> {
        if(e.target.innerText ==='.'&& !haveDot){
            haveDot = true;
        }else if(e.target.innerText === '.' && haveDot){
            return;
        }
        dis2Num+=e.target.innerText;
        display2E1.innerText=dis2Num;
    })
});
operationE1.forEach(operation =>{
    operation.addEventListener('click',(e)=>{
        if(!dis2Num)result;
        haveDot=false;
        const operationName=e.target.innerText;
        if(dis1Num && dis2Num && lastOperation){
            mathOperation();
        }else{
            result=parseFloat(dis2Num);
        }
        clearVar(operationName);
        lastOperation=operationName;
         console.log(result);    
    })
});
function clearVar(name=''){
    dis1Num+=dis2Num+ ' '+ name + ' ';
    display1E1.innerText=dis1Num;
    display2E1.innerText='';
    dis2Num='';
    display2E1.innerText=result;
}
function mathOperation(){
    if(lastOperation === 'x'){
        result=parseFloat(result)*parseFloat(dis2Num);
    }else if(lastOperation === '+'){
        result=parseFloat(result)+parseFloat(dis2Num);
    }else if(lastOperation === '-'){
        result=parseFloat(result)-parseFloat(dis2Num);
    }else if(lastOperation === '/'){
        result=parseFloat(result)/parseFloat(dis2Num);
    }else if(lastOperation === '%'){
        result=parseFloat(result)%parseFloat(dis2Num);
    }
}