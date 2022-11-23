import React from 'react'
import './Sidebar.css'
import classNames from 'classnames'
import NavLink from '../NavLink/NavLink'
import { BrowserRouter, Link } from 'react-router-dom'
import { authService } from '../../store/auth-service'

interface SidebarProps {
    className?: string
}


const Sidebar: React.FC<SidebarProps> = ({ className }) => {

    return (
        <div className={classNames('Sidebar', className)}>
            <Link to={`profile/${authService.currentUser.id}`}><span className='Sidebar__element Sidebar-element'>Profile</span></Link>
            <Link to={'messenger'}><span className='Sidebar__element Sidebar-element'>Messenger</span></Link>
            <Link to={'users'}><span className='Sidebar__element Sidebar-element'>Users</span></Link>
            <Link to={'friends'}><span className='Sidebar__element Sidebar-element'>Friends</span></Link>
        </div>
    )
}

export default Sidebar 