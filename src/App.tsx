import { hot } from "react-hot-loader/root";
import * as React from "react";
import { useState, useCallback } from "react";
import { debounce } from "lodash";

import GlobalStyles from "./globalStyles";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";

function App() {
  const ms = 1000;
  const [repos, setRepos] = useState([]);
  const callback = useCallback(
    debounce((value: string) => fetchRepos(value), ms),
    []
  );

  function fetchRepos(query: string) {
    const url = `https://api.github.com/search/repositories?q=${query}`;
    fetch(url)
      .then((res) => res.json())
      .then((result) => setRepos(result.items))
      .catch((error) => console.log(error));
  }

  return (
    <>
      <GlobalStyles />
      <SearchBar callback={callback} />
      <Table repos={repos} />
    </>
  );
}

export default hot(App);
