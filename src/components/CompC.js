import React, { useState } from "react";
import { Mycontext } from "../App";

function CompC() {
  const [name1, setName1] = useState({
    firstname: "",
    Lastname: "",
    signedIn: false,
  });
  const handleonchange1 = (e) => {
    setName1({
      ...name1,
      firstname: e.target.value,
    });
  };
  const handleonchange2 = (e) => {
    setName1({
      ...name1,
      Lastname: e.target.value,
    });
  };

  return (
    <>
      <Mycontext.Consumer>
        {({ User, handleSetUser }) => {
          return (
            <div>
              {name1.signedIn ? (
                <h2>
                  My First name is: {User.firstname} and Lastname is :
                  {User.Lastname}
                </h2>
              ) : (
                <>
                  Firstname:
                  <input
                    type="text"
                    value={name1.firstname}
                    onChange={(e) => handleonchange1(e)}
                  />
                  <br />
                  Lastname:
                  <input
                    type="text"
                    value={name1.Lastname}
                    onChange={(e) => handleonchange2(e)}
                  />
                  <br />
                  <button
                    onClick={() => {
                      handleSetUser(name1.firstname, name1.Lastname);
                      setName1({ ...name1, signedIn: true });
                    }}
                  >
                    Submitt
                  </button>
                </>
              )}
            </div>
          );
        }}
      </Mycontext.Consumer>
    </>
  );
}

export default CompC;
