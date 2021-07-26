namespace ts {
    export interface IServerData {
        onlineUsers(): number;
        users?: IOnlineUser[];
    }

    // Mongoose Schemas
    export interface IRoomSchema {
        name: string;
        columns: string[];
        maxPlayers?: number;
        privacy: 'private' | 'public';
        password?: string;
        turnTime: number;
        score?: IScore[];
    }
}

interface IOnlineUser {
    id: string;
    username?: string;
}

interface IScore {
    user: string;
    score: number;
}