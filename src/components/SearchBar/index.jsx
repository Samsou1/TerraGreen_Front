import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetAtom } from "jotai";
import { searchAtom } from "../../store/search";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const setGlobalSearch = useSetAtom(searchAtom);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search && search !== "") {
      navigate(`/projects?search=${search}`);
      setGlobalSearch(search);
      setSearch("");
    } else {
      navigate(`/projects`);
      setGlobalSearch(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-container-form">
      <div className="input-container">
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text"
          id="search"
          placeholder="Location"
        />
      </div>
    </form>
  );
};

export default SearchBar;
