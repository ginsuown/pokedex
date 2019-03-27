import React from 'react'
import Search from './Search/Search.jsx'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedPokemonId: ''
        }
    }

    render() {
        return (
            <div>
                <Search/>
            </div>
        )
    }
}

export default App