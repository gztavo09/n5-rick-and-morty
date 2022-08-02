import React from "react";
import { createBrowserHistory } from "history";

/* Components */
import BannerOfList from "./components/Banner/BannerOfList";
import ListOfCharacters from "./components/List/ListOfCharacters";

const defaultHistory = createBrowserHistory();

const App = ({ history = defaultHistory }) => {
  return (
    <React.Fragment>
      <p>sadasd asdasdsa</p>
      <BannerOfList />
      <ListOfCharacters />
    </React.Fragment>
  );
}

export default App;
