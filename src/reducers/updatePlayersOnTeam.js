import {UPDATE_PLAYERS_ON_TEAM} from '../actions/types'

    const players = (state=[], action) => {
        console.log(action)
        switch(action.type){
            case UPDATE_PLAYERS_ON_TEAM:
                return state = [...action.players]
            default:
              return state
        }
    }

export default players