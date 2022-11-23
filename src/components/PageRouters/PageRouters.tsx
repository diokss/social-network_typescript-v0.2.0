import React from 'react'
import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom'
import classNames from 'classnames'
import ProfilePage from '../../pages/ProfilePage/ProfilePage'
import Messenger from '../../pages/MessengerPage/MessengerPage'
import { AuthGuard } from '../../guards/AuthGuard'
import { authService } from '../../store/auth-service'
import UsersPage from '../../pages/UsersPage/UsersPage'
import AuthorizationPage from '../../pages/AuthorizationPage/AuthorizationPage'
import FollowingPage from '../../pages/FriendsPage/FriendsPage'


interface PageRoutersProps {
    className: string
}



const PageRouters: React.FC<PageRoutersProps> = ({ className }) => {
    return (
        <div className={classNames('Page-routers', className)}>
            <Routes>
                <Route
                    path='profile/:id'
                    element={
                        <AuthGuard
                            resolve={<ProfilePage></ProfilePage>}
                            reject={<Navigate to={"/login"}></Navigate>}
                        />}
                />
                <Route path='messenger'
                    element={
                        <AuthGuard
                            resolve={<Messenger></Messenger>}
                            reject={<Navigate to="/login"></Navigate>}
                        ></AuthGuard>
                    }
                />
                <Route
                    path='users'
                    element={<AuthGuard
                        resolve={<UsersPage />}
                        reject={<Navigate to={'/login'}></Navigate>}
                    />}
                />
                <Route
                    path='friends'
                    element={<AuthGuard
                        resolve={<FollowingPage />}
                        reject={<Navigate to={'/login'}></Navigate>}
                    />}
                />
                <Route path='login'
                    element={<AuthGuard
                        resolve={<Navigate to={`/profile/${authService.isAuth() ? authService.currentUser.id : ""}`}/>}
                        reject={<AuthorizationPage/>}
                    />}
                />
                <Route path='*' element={<Navigate to={`/login`}></Navigate>}></Route>
            </Routes>
        </div>

    )
}

export default PageRouters