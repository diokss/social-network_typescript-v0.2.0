import React, { useCallback, useDeferredValue, useEffect, useRef, useState } from 'react'
import { UserApi } from '../../api/api'
import Button from '../../components/Button/Button'
import ScrollDetector from '../../components/ScrollDetector/ScrollDetector'
import UserCard, { UserCardProps } from '../../components/UserCard/UserCard'
import './UserPage.css'

interface UsersPageType {
    error: string
    items: UserCardProps[],
    isLoding: boolean,
    totalCount: number
}

const UsersPage: React.FC = () => {

    const [usersPage, setUsersPage] = useState<UsersPageType>({
        error: '',
        isLoding: true,
        items: [],
        totalCount: 0
    })


    let pages = Math.ceil(usersPage.totalCount / 51)

    const [currentPage, setCurrentPage] = useState<number>(1)

    useEffect(() => {
        UserApi.getUsers(currentPage).then(res => {
            setUsersPage({ ...res, isLoding: false })
        })
    }, [])

    const downloadUsers = () => {
        setCurrentPage(prev => {
            const nextPage = prev + 1
            UserApi.getUsers(nextPage).then(res => {
                console.log(res.items)
                setUsersPage({
                    ...usersPage,
                    items: [...usersPage.items, ...res.items]
                })
            })
            return nextPage
        })
    }

    const userList = usersPage.items.map(user => <div key={user.id} className='Users-page__user'>
        <UserCard
            followed={user.followed}
            name={user.name}
            id={user.id}
            photos={user.photos}
            status={user.status}
        /></div>)


    return (
        <div className='Users-page'>
            <div className="Users-page__container">
                {userList}
            </div>
            <Button onClick={downloadUsers} style={{ height: 30, marginBottom: 10 }} className='primary'>Показать еще</Button>
            {currentPage >= pages ? null :
                <div className='User-page__scroll-detector-1'>
                    <ScrollDetector
                        className='User-page__scroll-detector-1'
                        onScroll={downloadUsers}
                        whenIsIntersecting={true}
                    ></ScrollDetector>
                </div>
            }
        </div>
    )
}

export default UsersPage