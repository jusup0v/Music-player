import React, { useRef, useState } from 'react';
import '../../App.css'

const Ref = () => {
    const inputRef = useRef(null);
    const [input, inputState] = useState({ key1: '', key2: '' })
    const [active, setActive] = useState(false);

    const onBlur = onkeydown = (e, v) => {
        const newInput = {
            key1: v === 'key1' ? e === '' ? 'red' : 'green' : input.key1,
            key2: v === 'key1' ? e === '' ? 'red' : 'green' : input.key2
        }
        inputState(newInput)
    }
    return (
        <div className="app">
            <input className={input.key1} onBlur={(e) => onBlur(e.target.value, 'key1')} type="text" />
            <input className={input.key2} onBlur={(e) => onBlur(e.target.value, 'key2')} ref={inputRef} type="text" />
            <button>focus</button>
            <video src="https://youtu.be/Uw5OLnN7UvM"></video>
        </div>
    )
}

export default Ref