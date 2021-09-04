import React, { useState } from 'react'

const Hooks = () => {
    let [count, setCount] = useState(0)
    const [active, setActive] = useState(false)
    const [arr, setArr] = useState([])
    const onAdd = () => {
        let a = prompt('Имя')
        let b = +prompt('Возраст')
        const newItem = {
            name: a,
            age: b
        }
        const newArr = [...arr, newItem]
        setArr(newArr)
    }
    const x = (i) => {
            const index = arr.findIndex((elem, index) => index === i);
            const newArr = [...arr.slice(0, index), ...arr.slice(index + 1)];
            setArr(newArr)
        }
    // const onPlus = ()=>{
    //     setCount(count + 1)
    // }
    // const onMinus = ()=>{
    //     setCount(count - 1)
    //     if(count === 0){
    //         setCount(count)
    //     }
    // }

    // const onName = () => {
    //     setActive(!active)
    // }
    return (
        <div>
            <button onClick={onAdd}>add</button>
            <ul>
                {
                    arr.map((elem, index) => {
                        return (
                            <>
                                <li>{`${elem.name} ${elem.age}`}</li>
                                <button onClick={() => x(index)}>x</button>
                            </>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Hooks