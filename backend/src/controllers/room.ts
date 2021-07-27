import { Request, Response } from 'express';
import Room from "../models/Room";

export default {

    async search(req: Request, res: Response) {
        const query = String(req.query.q);

        try {

            const rooms = await Room.find({
                $or: [
                    { name: { $regex: new RegExp(query, 'g') }  },
                    { columns: { $regex: new RegExp(query, 'g') } },
                ],
            });

            rooms.forEach(room => room.password = undefined);

            return res.json(rooms);

        } catch (err) {
            console.log(err);
            return res.status(500).json({ error: 'Internal error' });
        }

    }

}