import {STORE_TEAMS} from '../actions/types'
    const clubs = (state=[], action) => {
        switch(action.type){
            case STORE_TEAMS:
                return state = [...action.clubs]
            default:
              return state
        }
    }

export default clubs