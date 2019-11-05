import {SELECTED_CLUB} from '../actions/types'
    const club = (state=[], action) => {
        switch(action.type){
            case SELECTED_CLUB:
                return state = action.club
            default:
              return state
        }
    }

export default club