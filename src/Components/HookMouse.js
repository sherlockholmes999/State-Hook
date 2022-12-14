import React, { useState,useEffect } from 'react';

function HookMouse(props) {
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)

    const logMousePosition = (e) => {
        console.log('mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect (() => {
        console.log('use effect ')
        window.addEventListener('mousemove',logMousePosition)

       return () => {
        console.log('component unmounted')
        window.removeEventListener('mousemove',logMousePosition)
       }
        
    },[])

    return (
        <div>
            X - {x}  Y - {y}
        </div>
    );
}

export default HookMouse;