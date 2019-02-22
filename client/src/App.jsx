import React from 'react'
import Search from './Search/Search.jsx'

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const suggestions = [
            { label: 'Afghanistan' },
            { label: 'Aland Islands' },
            { label: 'Albania' },
            { label: 'Algeria' },
            { label: 'American Samoa' },
            { label: 'Bouvet Island' },
            { label: 'Brazil' },
            { label: 'British Indian Ocean Territory' },
            { label: 'Brunei Darussalam' },
          ].map(suggestion => ({
            value: suggestion.label,
            label: suggestion.label,
          }));
        return (
            <div>
                <Search suggestions={suggestions}/>
            </div>
        )
    }
}

export default App