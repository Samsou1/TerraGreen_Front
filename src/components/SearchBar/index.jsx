import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetAtom } from "jotai";
import { searchAtom } from "../../store/search";
import Errors from "../Errors";
import { validateDataSearch } from "../../services/validateDataSearch";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const setGlobalSearch = useSetAtom(searchAtom);
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    setErrors([]);
    e.preventDefault();
    if (search && search !== "" && validateDataSearch(search)) {
      navigate(`/projects?search=${search}`);
      setGlobalSearch(search);
      setSearch("");
    } else {
      setErrors([{message:"Please only use letters"}])
      navigate(`/projects`);
      setGlobalSearch(null);
    }
  };

  return (
    <>
      <Errors errors={errors} />
      <form onSubmit={handleSubmit} className="searchForm">
      <i class="fa-solid fa-magnifying-glass"></i>
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text"
          id="search"
          placeholder="Location"
        />
      </form>
    </>
  );
};

export default SearchBar;
