import "./App.css";
import React, { createContext, useState } from "react";
import CompA from "./components/CompA";

const Mycontext = createContext({
  User: {
    firstname: "",
    Lastname: ""
  },
  handleSetUser: () => {}
});

function App() {
  const [User, setUser] = useState({
    firstname: "",
    Lastname: "",
  });
  const handleSetUser = (firstname, Lastname) => {
    setUser({
      firstname: firstname,
      Lastname: Lastname
    })
  }
  return (
    <>
      <Mycontext.Provider value={{User, handleSetUser}}>
        <CompA />
      </Mycontext.Provider>
    </>
  );
}

export default App;
export { Mycontext };