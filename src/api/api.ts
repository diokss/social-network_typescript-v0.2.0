import axios from "axios";

const instance = axios.create({
    baseURL: ' https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        // 'API-KEY': 'f0934ec8-89c9-4f73-ac0f-348ecfeb036f'
    }
});


export const AuthorizationApi = {
    async getAuthUser() {
        return (await instance.get('auth/me')).data
    },

    async login(email: string, password: string, rememberMe: boolean) {
        return (await instance.post("auth/login", {
            email,
            password,
            rememberMe
        })).data
    },

    async logout() {
        return (await instance.delete('auth/login')).data
    }
}

export const ProfileApi = {
    async getProfile(id: string) {
        return (await instance.get(`profile/${id}`)).data
    },

    async getStatus(id: string) {
        return (await instance.get(`profile/status/${id}`)).data
    }
}

export const UserApi = {
    async getUsers(currentPage:number) {
        return (await instance.get(`users?count=51&page=${currentPage}`)).data
    },
    async getFollowings(currentPage:number) {
        return (await instance.get(`users?friend=true&count=51&page=${currentPage}`)).data
    },

    async unfollow(id: any) {
        return (await instance.delete(`follow/${id}`)).data
    },

    async follow(id: number) {
        return (await instance.post(`follow/${id}`)).data
    }

}

export const Messenger ={
    async putMessage(userId:number){
        
    }
}