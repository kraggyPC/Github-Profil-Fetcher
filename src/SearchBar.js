import { useState } from "react";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="h-3/4 min-h-screen  flex items-center">
      <input
        className="w-4/6 h-10 text-black ml-5 rounded-full border-none"
        type="text"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      ></input>
    </div>
  );
};
export default SearchBar;
