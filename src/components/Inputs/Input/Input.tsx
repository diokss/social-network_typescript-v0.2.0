import React from 'react'
import classNames from 'classnames'
import './Input.css'

enum InputType{
    text = 'text',
    password = 'password'
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}




export const Input:React.FC<InputProps>=React.memo((
    {className, ...props}
)=>{
  return <input value={props.value} onChange={props.onChange} className={classNames('Input',className)} {...props} />
})
