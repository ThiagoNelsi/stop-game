namespace ts {
    export interface IServerData {
        onlineUsers: number;
        users?: IOnlineUser[];
    }

}

interface IOnlineUser {
    id: string;
    username?: string;
}
