import axios, { AxiosError } from 'axios';
import { User } from "./models/user"
import { AuthorizationApi } from '../api/api'
import { UnathorizationException } from './exceptions/unauthorization-exception';
import { runInAction, makeAutoObservable } from 'mobx';

class AuthService {

    private _user: User | undefined = undefined

    private _loading: boolean = false

    constructor() {
        this._loading = true
        makeAutoObservable(this)
        AuthorizationApi.getAuthUser()
            .then(result => {
                runInAction(() => {

                    this._loading = false

                    if (result.resultCode === 1) {
                        return
                    }

                    this._user = result.data
                })
            })
    }

    get currentUser(): User {
        if (!this._user) {
            throw new UnathorizationException('kki')
            
        }
        return this._user;
    }

    isAuth(): boolean {
        if (!this._user) {
            return false
        }
        return true
    }

    async login(email: string, password: string, rememberMe: boolean) {
        const { resultCode } = await AuthorizationApi.login(email, password, rememberMe)

        if (resultCode === 1) {
            throw new UnathorizationException()
        }

        const user: User = (await AuthorizationApi.getAuthUser()).data

        this._user = user
    }

    async logout() {
        const {resultCode} = (await AuthorizationApi.logout()).data

        if(resultCode === 1){
            throw new UnathorizationException()
        }
        
        runInAction(()=>{
            this._user = undefined
        })
    }

    get isLoading() {
        return this._loading
    }
}

export const authService = new AuthService()