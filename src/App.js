import "./App.css";
import * as React from "react";
import Navbar from "./components/shared/Navbar";
import SearchForm from "./components/shared/SearchForm";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import BooksList from "./components/Books/BooksList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Provider store={store}>
        <SearchForm />
        <BooksList />
      </Provider>
    </div>
  );
}

export default App;
