import React, { useState } from "react";
import { SearchIcon } from "@heroicons/react/outline";
import UserServices from "./../services/UserServices";
import FollowCard from "./FollowCard";

function Searchbar() {
  const [query, setquery] = useState("");
  const [result, setresult] = useState([]);
  console.log(result);

  const onChangeHandler = (e) => {
    let value = e.target.value;
    setquery(value);
    UserServices.search(query).then((res) => {
      setresult(res.data);
    });
  };

  return (
    <>
      <div className="w-full h-10 sm:border border-gray-600 rounded-full flex items-center relative">
        <input
          type="text"
          className="ml-3 flex-grow outline-none text-gray-600 placeholder:text-gray-400"
          placeholder="Search..."
          value={query}
          onChange={onChangeHandler}
        />
        <SearchIcon className="hidden sm:inline h-8 bg-black text-white rounded-full p-2 mx-2 cursor-pointer" />
      </div>

      {query && (
        <div className="w-full h-auto z-10 absolute bg-gray-50 p-3 mt-4 rounded-xl -mr-3">
          {result ? (
            <>
              {result.map((user) => (
                <FollowCard user={user} />
              ))}
            </>
          ) : (
            "Loading"
          )}
        </div>
      )}
    </>
  );
}

export default Searchbar;
