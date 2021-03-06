import React from 'react'
import FilterUsers from './FilterUsers'
import AddUserContainer from './AddUserContainer'
import FolloweesContainer from './FolloweesContainer'
import FollowersContainer from './FollowersContainer'
import { Search } from 'semantic-ui-react'

class RenderUsers extends React.Component {
    state={
        usersList:[],
        currentFollowers:[],
        search: ""
    }
    
     componentDidMount() { 
         fetch("http://localhost:3000/users")
         .then(res=>res.json())
         .then(users => {
             const otherUsers=users.filter( user => {
                 return user.id !== this.props.user.id
             })
             const currentUser=users.find(user => {
                 return user.id === this.props.user.id
             })
             this.setState({usersList:otherUsers,
                 currentFollowers: currentUser.followers,
                })
         })
    }

    getSearchValue = (value) => {
        this.setState({search: value})
        this.filterUsers()
    }

    filterUsers = () => {
        let filteredUsers = this.state.usersList.filter (user => {
            return user.username.toLowerCase().startsWith(this.state.search.toLowerCase())
        })
        console.log("filterred users", filteredUsers)
        return filteredUsers
    }

    callList = () => {
        return this.state.search ? this.filterUsers() : this.state.usersList 
    }

    render(){
        return(
            <div id="friends-page-container">
                <div id="add-user-container">
                    <div id="search-follow">
                    <Search onSearchChange={(e)=>this.getSearchValue(e.target.value)} showNoResults={false} value={this.state.search} className="searchbar"/>
                    <AddUserContainer 
                    currentFollowees={this.props.currentFollowees} 
                    addToFollowers={this.props.addToFollowers}
                    unFollow={this.props.unFollow} 
                    usersList={this.callList()}
                    />
                    </div>
                </div>
                <div id="followers-and-followees">
                <FollowersContainer currentFollowers={this.state.currentFollowers}/>
                <FolloweesContainer currentFollowees={this.props.currentFollowees}/>
                </div>
            </div>
        )
    }
}
export default RenderUsers