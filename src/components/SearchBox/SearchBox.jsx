import { useId } from "react";

import css from "./SearchBox.module.css";

const SearchBox = ({ search, onSearch }) => {
  const searchId = useId();

  return (
    <div className={css.searchInput}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        type="text"
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        id={searchId}
      />
    </div>
  );
};

export default SearchBox;
