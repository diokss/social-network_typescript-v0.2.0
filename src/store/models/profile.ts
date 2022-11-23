export interface Contacts {
    facebook: string | null |undefined,
    website: string | null |undefined,
    vk: string | null |undefined,
    twitter: string | null |undefined ,
    instagram: string | null |undefined,
    youtube: string |null |undefined,
    github: string |null |undefined,
    mainLink: string |null |undefined
}

export interface Profile {
    aboutMe: string
    contacts: Contacts
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos:{
        small:string,
        large:string
    }
}