import React, { useState, useEffect } from 'react'
import styles from './Message.module.css'

function Message({msgText, type}) {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if(!msgText){
            setVisible(false)
            return
        }

        setVisible(true)

        const timer = setTimeout(() => {
            setVisible(false)
        }, 3000)

        return () => clearTimeout(timer)
    }, [msgText])
    
    return (
        <>
            {visible && (<div className={`${styles.message} ${styles[type]}`}>
                <p>{msgText}</p>
            </div>)}
        </>
    )
}

export default Message