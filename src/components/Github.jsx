import React, { useState, useEffect } from "react";
import GithubInput from "./GithubInput";
import useFetch from "../hooks/useFetch";
import Show from "./Show";

function Github() {
  const [url, setUrl] = useState("");
  const { loading, data, fetchRequest } = useFetch(url);
  useEffect(() => {
    fetchRequest();
  }, [url]);
  console.log(data);
  const handleTaskCreate = (text) => {
    let link = `https://api.github.com/search/users?q=${text}`;
    setUrl(link);
  };
  return (
    <div>
      <GithubInput onTaskCreate={handleTaskCreate} />
      <div>{loading && "LOADING"}</div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap"
        }}
      >
        {!loading &&
          data?.items?.map((item) => (
            <Show
              key={item.id}
              avatar={item.avatar_url}
              link={item.html_url}
              userName={item.login}
            />
          ))}
      </div>
    </div>
  );
}

export default Github;
