import React from "react";
import PropTypes from "prop-types";
import {
  StyleSearchContainer,
  StyleSearchIcon,
  StyleInputSearch
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";

const SearchTask = props => {
  return (
    <StyleSearchContainer>
      <StyleInputSearch
        type="search"
        onChange={event => props.setSearchWord(event.target.value)}
        placeholder="Search a task"
      />
      <StyleSearchIcon>
        <FontAwesomeIcon icon={faSearch} color="white" />
      </StyleSearchIcon>
    </StyleSearchContainer>
  );
};

SearchTask.propTypes = {
  setSearchWord: PropTypes.func
};

export default SearchTask;
