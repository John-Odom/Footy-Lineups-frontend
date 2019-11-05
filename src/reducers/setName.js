import {SET_NAME} from '../actions/types'

    const clubs = (state="", action) => {
        switch(action.type){
            case SET_NAME:
                return state = action.name
            default:
              return state
        }
    }

export default clubs