import React, { useState } from "react";
import { CREATE_USER_MUTATION } from "../GraphQL/Mutations";
import { useMutation } from "@apollo/client";

function Form() {
  const [name, setName] = useState("");

  const [createDog, { error }] = useMutation(CREATE_USER_MUTATION);

  const addDog = () => {
    createDog({
      variables: {
        name: name,
      },
    });

    if (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="First Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={addDog}> Create Dog</button>
    </div>
  );
}

export default Form;
