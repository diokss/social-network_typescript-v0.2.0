import classNames from 'classnames'
import React from 'react'
import './Header.css'
import {Icon} from '@iconify/react'
import SearchInput from '../Inputs/SearchInput/SearchInput'
import HeaderProfileLink from '../HeaderUser/HeaderUser'
import {observer} from 'mobx-react-lite'
import {authService} from '../../store/auth-service'

interface HeaderProps {
  className?: string
}

const Header: React.FC<HeaderProps> = observer((
  { className }
) => {
  return (
    <header className={classNames("Header", className)}>
      <div className="Wrapper">
        <div className="Header__logo Header__element">
          <div className="Header__logo-icon"><Icon fontSize={30} icon="fluent-mdl2:swift-logo" color="#377dff"/></div>
          <div className="Header__logo-title">Meetmax</div>
        </div>
        { authService.isAuth() ? 
          <>
          <div className="Header__search-input-container Header__element"><SearchInput placeholder='Seach for something...'/></div>
          <div className="Header__user Header__element"><HeaderProfileLink login={authService.currentUser.login}/></div>
          </> 
          : ""
        }
      </div>
      
    </header>
  )
})


export default Header