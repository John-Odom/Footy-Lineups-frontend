import {UPDATE_PLAYERS_ON_TEAM} from './types'

export function updatePlayersOnTeam (players) {
    console.log("here")
    return{
        type: UPDATE_PLAYERS_ON_TEAM,
        players: players
    }
}