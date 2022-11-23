import React, { ButtonHTMLAttributes } from 'react'
import './Button.css'
import classNames from 'classnames'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{}

const Button: React.FC<ButtonProps> = ({className, children, ...props}) =><button className= {classNames('Button',className)} {...props}>{children}</button>

export default Button