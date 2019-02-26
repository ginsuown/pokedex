import React from 'react'
import ReactDOM from 'react-dom'
import App from './src/App.jsx'
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
    uri: 'localhost:4000/pokemon'
})

const Pokedex = () => (
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>
)

ReactDOM.render(<Pokedex />, document.getElementById('app'))