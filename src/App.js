import React, { useState } from "react";
import { hot } from "react-hot-loader";
import { debounce } from "lodash";

import GlobalStyles from "./globalStyles";
import SearchBar from './components/SearchBar';
import Table from "./components/Table";

function App() {
    const ms = 1000;
    const [repos, setRepos] = useState([]);

    function fetchRepos(query) {
        const url = `https://api.github.com/search/repositories?q=${query}`;
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => setRepos(result.items),
                (error) => {
                    console.log(error);
                }
            )
    }

    return (
        <>
            <GlobalStyles/>
            <SearchBar callback={debounce(value => fetchRepos(value), ms)}/>
            <Table repos={repos}/>
        </>
    );
}

export default hot(module)(App);