import React, { ReactNode } from 'react'
import './NavLink.css'
import {Link} from 'react-router-dom'


interface NavLinkProps{
    url:string
    children:ReactNode
}

const NavLink:React.FC<NavLinkProps>=({url,children})=>{
  return(
      <Link to=''>
         {children}
     </Link>
  )
}

export default NavLink