import React from "react";
import { useFetch } from "./useFetch";
const Test = () => {
  console.log(useFetch("https://jsonplaceholder.typicode.com/todos"));
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  return (
    <div>
      {loading && "loading"}
      {error}
      {data.map((d) => {
        return (
          <>
            <h1 style={{backgroundColor:'blue',textAlign:'center'}}>{d.title}</h1>
          </>
        );
      })}
    </div>
  );
};

export default Test;
