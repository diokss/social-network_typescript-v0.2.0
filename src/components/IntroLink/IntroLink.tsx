import React from 'react'

interface IntroLinkProps{
    to:string,
    children:React.ReactNode
}

const IntroLink: React.FC<IntroLinkProps> = ({to,children}) => {
    return <a href={to} target={'_blank'}>{children}</a>
}

export default IntroLink