import React from 'react'
import './Checkbox.css'

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement>{}

const Checkbox:React.FC<CheckboxProps> = React.memo((props) => {
    
    return (
        <input onChange={props.onChange} checked={props.checked} className='Checkbox' type={'checkbox'}/>
    )
})

export default Checkbox