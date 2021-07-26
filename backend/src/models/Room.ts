import mongoose from 'mongoose';

const ScoreSchema = new mongoose.Schema({
    user: String,
    score: Number,
});

const RoomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    columns: [{
        type: String,
        required: true,
    }],
    maxPlayers: Number,
    privacy: {
        type: String,
        enum: ['private', 'public'],
        required: true,
        default: 'public',
    },
    password: String,
    turnTime: Number,
    score: [ScoreSchema],

});

const Room = mongoose.model<ts.IRoomSchema>('Room', RoomSchema);

export default Room;