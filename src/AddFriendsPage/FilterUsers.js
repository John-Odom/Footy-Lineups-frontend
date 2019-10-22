import React from 'react'

const FilterUsers = (props) => {
    console.log("props", props)
        return(
            <div>
                <div className="ui search">
                  <div className="ui icon input">
                    <input className="prompt" type="text" value={props.inputValue} onChange={(e)=> props.filterUsers(e)} placeholder="Search users..." />
                    <i className="search icon"></i>
                  </div>
                  <div className="results"></div>
                </div>
            </div>
        )
    }
export default FilterUsers
// import _ from 'lodash'
// import faker from 'faker'
// import React, { Component } from 'react'
// import { Search, Grid, Header, Segment } from 'semantic-ui-react'

// const initialState = { isLoading: false, results: [], value: '' }

// const source = _.times(5, () => ({
//   username: faker.company.companyName(),
//   description: faker.company.catchPhrase(),
//   image: faker.internet.avatar(),
//   price: faker.finance.amount(0, 100, 2, '$'),
// }))

// // const source = _.times(5, () => ({
// //     username: faker.company.companyName(),
// //     description: faker.company.catchPhrase(),
// //     image: faker.internet.avatar(),
// //     price: faker.finance.amount(0, 100, 2, '$'),
// //   }))

// const newSource = []

// export default class SearchExampleStandard extends Component {
//     state = initialState
  
//     handleResultSelect = (e, { result }) => this.setState({ value: result.username })
  
//     handleSearchChange = (e, { value }) => {
//       this.setState({ isLoading: true, value })
  
//       setTimeout(() => {
//         if (this.state.value.length < 1) return this.setState(initialState)
  
//         const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
//         const isMatch = (result) => re.test(result.username)
  
//         this.setState({
//           isLoading: false,
//           results: _.filter(source, isMatch),
//         //   results: _.filter(source, isMatch),
//         })
//       }, 300)
//     }
  
//     render() {
//       const { isLoading, value, results } = this.state
//         console.log("source", source)
//       return (
//         <Grid>
//           <Grid.Column width={6}>
//             <Search
//               loading={isLoading}
//               onResultSelect={this.handleResultSelect}
//               onSearchChange={_.debounce(this.handleSearchChange, 500, {
//                 leading: true,
//               })}
//               results={results}
//               value={value}
//               {...this.props.usersList}
//             />
//           </Grid.Column>
// {/* 
//           <Grid.Column width={10}>
//             <Segment>
//               <Header>State</Header>
//               <pre style={{ overflowX: 'auto' }}>
//                 {JSON.stringify(this.state, null, 2)}
//               </pre>
//               <Header>Options</Header>
//               <pre style={{ overflowX: 'auto' }}>
//                 {JSON.stringify(source, null, 2)}
//               </pre>
//             </Segment>
//           </Grid.Column> */}
//         </Grid>
//       )
//     }
//   }