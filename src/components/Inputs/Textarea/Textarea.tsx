import React, { TextareaHTMLAttributes } from 'react'
import './Textarea.css'
import classNames from 'classnames'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>{
    className?:string
    value?:string,
    onChange?:() => void;
}

const Textarea: React.FC<TextareaProps> = ({className,...props}) => {
    return <textarea placeholder={props.placeholder} className={classNames('Textarea',className)}
    />
}
export default Textarea