// react a 2 doron er component use kora jay class component & functional component 
// amra react a functional component use kori karon class component er update bondho kore desi react thake class component use korle code onek boro hoye jay
// useState react er 1 ta hook ata use korle UI automatic re-render hoy
// const [count, setCount] = useState(initialValue) => ata holo useState er syntax
// akhan a count = current value ; setCount = value change করার function ; initialValue = first value
// useState use kora hoy Counter make korte, Form input value store korte, Toggle (show/hide) korte, Dark/Light mode korte, API data store korte
import { useState } from "react"
// onClick 1 ta js er event 
const Banner = () => {

    let [count, setCount] = useState(0)
    let handelIncrement = () => {
        if (count < 10) {
            setCount(count + 1)
            // or setCount( ++count )
        }
    }
    let handelDecrement = () => {
        if (count > 0) {
            setCount(count - 1)
            // or setCount( --count )
        }
    }

    return (
        <>
            {/* Step One */}
            <div className="my-10 w-[550px] p-5 rounded-2xl border-3 border-gray-300 mx-auto flex items-center justify-around">
                <button onClick={handelDecrement} className="py-2 px-4 rounded-[100px] bg-[#FF7628] text-white font-semibold border-2 disabled:hover:text-[#FF7628]/50 disabled:text-[#FF7628]/50 disabled:bg-white disabled:hover:border-[#FF7628]/50 disabled:border-[#FF7628]/50 border-[#FF7628] hover:bg-white hover:text-[#FF7628] duration-500 cursor-pointer" disabled={count == 0} >Decrement</button>
                {/*  1 line a o use kora jay =>> <button onClick={()=>setCount(--count)} disabled={count ? 0 : true}> Decrement </button > */}
                <h1 className="text-2xl font-bold uppercase pb-1"> Count <span className="text-red-600 text-3xl">{count}</span></h1>
                <button onClick={handelIncrement} className="py-2 px-4 rounded-[100px] bg-[#FF7628] text-white font-semibold border-2 disabled:hover:text-[#FF7628]/50 disabled:text-[#FF7628]/50 disabled:bg-white disabled:hover:border-[#FF7628]/50 disabled:border-[#FF7628]/50 border-[#FF7628] hover:bg-white hover:text-[#FF7628] duration-500 cursor-pointer" disabled={count == 10} >Increment</button>
            </div >
            {/* Step One */}
        </>
    )
}

export default Banner
