import { Message } from "./message";

export class Chat {
    
    constructor(userName: string, messages: Message[]) {
        this.messages = messages
        this.userName = userName
    }

    userName: string

    messages: Message[]
}