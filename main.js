const displayContent=(content)=>{
    calcScreen.value+=content
}

const clearCalScreen=()=>{
    calcScreen.value=''
    calcScreen.placeholder="0"

}

const showResult=()=>{
    try {
        calcScreen.value=eval(calcScreen.value)
    
    } catch{
        calcScreen.value=''
        calcScreen.placeholder="Invalid expression!!"
    }finally{
        console.log("finally block");
    }
}

const removeLast=()=>{
    calcScreen.value=calcScreen.value.slice(0,-1)
}

