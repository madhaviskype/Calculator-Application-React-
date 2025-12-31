import React, { use, useState } from 'react'

const Calculator = () => {
    let [input,setinput]=useState("")
    let [result,setresult]=useState(0)

    const inputdata=(e)=>{
        setinput(e.target.value)
    }
  return (
    <div>
       
        <input type='text' placeholder='enter calculatin data' onChange={inputdata} name="input" value={input}/><br/>
        <button onClick={(e)=>setresult(eval(input))}>Result</button><br/>
        <h3>Result:{result}</h3>

        <button onClick={(e)=>setinput('1')}>1</button>
        <button onClick={(e)=>setinput(input+'2')}>2</button>
        <button onClick={(e)=>setinput(input+'3')}>3</button>
        <button onClick={(e)=>setinput(input+'4')}>4</button>
        <button onClick={(e)=>setinput(input+'5')}>5</button>
        <br/>
        <button onClick={(e)=>setinput(input+'6')}>6</button>
        <button onClick={(e)=>setinput(input+'7')}>7</button>
        <button onClick={(e)=>setinput(input+'8')}>8</button>
        <button onClick={(e)=>setinput(input+'9')}>9</button>
        <button onClick={(e)=>setinput(input+'10')}>10</button>
        <br/>
        <button onClick={(e)=>setinput(input+'+')}>+</button>
        <button onClick={(e)=>setinput(input+'-')}>-</button>
        <button onClick={(e)=>setinput(input+'*')}>*</button>
        <button onClick={(e)=>setinput(input+'/')}>/</button>
        <button onClick={(e)=>setinput('')}>clr</button>
        
        
    </div>
  )
}

export default Calculator