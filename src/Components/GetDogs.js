import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_DOGS } from "../GraphQL/Queries";

function GetUsers() {
  const { error, loading, data } = useQuery(LOAD_DOGS);
  const [dogs, setDogs] = useState([]);
  useEffect(() => {
    if (data) {
      console.log(data.dogs);
      setDogs(data.dogs);
    }
  }, [data]);

  return (
    <div>
      {dogs.map((val) => {
        return <h1> {val.name}</h1>;
      })}
    </div>
  );
}

export default GetUsers;
