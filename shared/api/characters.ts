import axios from "axios";
import { CharactersList } from "shared/types/character.type";

export const CHARACTERS_URL = process.env.BASE_RICK_AND_MORTY_API_URI + '/characte'

export const getAllCharacter = async ( ): Promise<CharactersList | []> => {
    try {
        return await axios.get(CHARACTERS_URL)
    } catch (e) {
        return []
    }
}
