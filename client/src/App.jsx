import React from 'react'
import Search from './Search/Search.jsx'
import Profile from './Profile/Profile.jsx'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedPokemon: {},
        }
        this.onHandleSelect = this.onHandleSelect.bind(this)
    }

    onHandleSelect(selectedPokemon) {
        console.log('SELECTED', selectedPokemon);
        this.setState({
            selectedPokemon
        })
    }

    render() {
        return (
            //Update to grid system
            //Card needs to be queried and rendered here
            <div>
                <Search 
                    onHandleSelect={this.onHandleSelect}
                    value={this.state.selectedPokemon}
                />
                <Profile search={this.state.selectedPokemon}/>
            </div>
        )
    }
}

export default App