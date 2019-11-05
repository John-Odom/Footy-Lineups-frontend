import { combineReducers } from 'redux'
import clubs from './teams'
import club from './selectedTeam'
import name from './setName'
import players from './updatePlayersOnTeam'

export default combineReducers({
  clubs,
  club,
  name,
  players
})