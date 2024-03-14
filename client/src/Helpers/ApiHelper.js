import {post, del, get} from "./AxiosHelper.js";
import {
    ADD_PIN_REQ_URL,
    GET_PINS_REQ_URL,
    REMOVE_PIN_REQ_URL
} from "./UrlHelper";

export const handleGetPins = async () => {
    return await get(GET_PINS_REQ_URL);
}

export const handleAddPin = async (pin) => {
    return await post(ADD_PIN_REQ_URL, pin);
}

export const handleRemovePin = async (pinId) => {
    return await del(REMOVE_PIN_REQ_URL, {id: pinId});
}