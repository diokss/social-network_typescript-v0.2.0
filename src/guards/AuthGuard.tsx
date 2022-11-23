import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import { authService } from '../store/auth-service'

type AuthGuardProps = {
    resolve: React.ReactNode,
    reject: React.ReactNode
}

export const AuthGuard: FC<AuthGuardProps> = observer((props)=> {
    if(authService.isAuth()) {
        return <>{props.resolve}</>
    }
    return <>{props.reject}</>
})