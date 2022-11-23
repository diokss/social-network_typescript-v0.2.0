import { makeAutoObservable } from "mobx";
import { Message } from "./models/message";

class NetworkSevice {
    private _socket = new WebSocket(`wss://social-network.samuraijs.com/handlers/ChatHandler.ashx`)

    constructor() {
        makeAutoObservable(this)
    }

    get socket(): WebSocket {
        return this._socket
    }
}

export default new NetworkSevice();