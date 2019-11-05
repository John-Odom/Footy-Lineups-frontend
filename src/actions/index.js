import {STORE_TEAMS} from './types'
import {SELECTED_CLUB} from './types'

export function storeTeams (clubs) {
    return{
        type: STORE_TEAMS,
        clubs: clubs
    }
}

export function selectedClub (club) {
    return{
        type: SELECTED_CLUB,
        club: club
    }
}