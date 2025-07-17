import axios from "axios";
import type {GameDto} from "@/models/GameDto.ts";
import type {GameFinished} from "@/models/GameFinished.ts";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

export async function createGame(payload: GameFinished): Promise<GameDto> {
    const res = await api.post('/games', payload)
    console.log('sending post request')
    return res.data
}