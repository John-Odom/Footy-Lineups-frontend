import {SET_NAME} from './types'

export function setName (name) {
    return{
        type: SET_NAME,
        name: name
    }
}