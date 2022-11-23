import { makeAutoObservable, runInAction } from "mobx"
import { Chat } from "./models/chat"
import { Message } from "./models/message"

class MessengerService {
    
    private _messages: Message[] = []

    private _wsChannel: WebSocket | null = null

    private _updated = true;

    constructor() {
        makeAutoObservable(this)
    }

    makeChannel() {
        
        this._wsChannel = new WebSocket(`wss://social-network.samuraijs.com/handlers/ChatHandler.ashx`)

        this.subscribeSocketEventHandlers()
    }

    private onDataHandler(e: MessageEvent<string>) 
    {
        console.log("On data handler")

        const data = JSON.parse(e.data) as Message[]

        runInAction(()=> {
            this._messages = data.sort((mes1, mes2) => {
                return mes1.userId - mes2.userId
            })
        })

        
    }

    get chats(): Chat[] {

        let result: Chat[] = []

        let messagesBuffer: Message[] = []

        let currentUserId = 0

        for(let i = 0; i < this._messages.length; i++)
        {
            if(this._messages[i].userId !== currentUserId && messagesBuffer.length > 0)
            {
                result.push(new Chat(messagesBuffer[0].userName, messagesBuffer))

                messagesBuffer = []
            }

            currentUserId = this._messages[i].userId

            messagesBuffer.push(this._messages[i])
        }

        if(messagesBuffer.length > 0)
        {
            result.push(new Chat(messagesBuffer[0].userName,messagesBuffer))
        }
            

        return result
    }

    private onOpenHandler(e: Event) 
    {
        console.log(e)
    }

    private onErrorHandler(e: Event) 
    {
        this.unsubscribeSocketEventHandlers()
    }

    private onCloseHandler(e: CloseEvent) 
    {
        console.log(e)

        this.unsubscribeSocketEventHandlers()
    }

    private subscribeSocketEventHandlers() 
    {
        this._wsChannel!.addEventListener("message", (e) => this.onDataHandler(e))

        this._wsChannel!.addEventListener("open", (e) => this.onOpenHandler(e))

        this._wsChannel!.addEventListener("error", (e) => this.onErrorHandler(e))

        this._wsChannel!.addEventListener("close", (e) => this.onCloseHandler(e))
    }

    private unsubscribeSocketEventHandlers() 
    {
        // this._wsChannel!.removeEventListener("message", (e) => this.onDataHandler(e))

        // this._wsChannel!.removeEventListener("open", (e) => this.onOpenHandler(e))

        // this._wsChannel!.removeEventListener("error", (e) => this.onErrorHandler(e))

        // this._wsChannel!.removeEventListener("close", (e) => this.onCloseHandler(e))
    }
}

export default new MessengerService

