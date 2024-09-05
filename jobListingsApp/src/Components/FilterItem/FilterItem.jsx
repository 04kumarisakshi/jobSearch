import { Button } from "@mui/material";
import React from "react";
import "./filteritem.css";
import ClearIcon from "@mui/icons-material/Clear";
import {data} from "../../data.js"

function FilterItem({languages, tools, roles, levels, filterItem, jobs, setJobs}) {

  function handleOnChange(event) {
    const newItem = data.filter(newVal => {
        return newVal.role === event.target.value
      });

    setJobs(newItem);
  }

  function handleOnChangeLevels(event) {
    const newItem = data.filter(newVal => {
        return newVal.level === event.target.value
      });

    setJobs(newItem);
  }

  function handleOnChangeTools(event) {
    const newItem = data.filter(newVal => {
        return newVal.tools.includes(event.target.value)
      });

    setJobs(newItem);
  }

  function handleOnChangeLanguages(event) {
    const newItem = data.filter(newVal => {
        return newVal.languages.includes(event.target.value)
      });

    setJobs(newItem);
  }

  return (
    <div className="filterItemContainer">
      {/* <p>{props.item}</p> */}
      <select name="languages" id="languages" onChange={handleOnChangeLanguages}>
        {languages.map((language, id) => {
          return (
            <option key={id} value={language}>{language}</option>
          )
        })} 
      </select>
      <select onChange={handleOnChangeTools}>
      {tools.map((tool, id) => {
          return (
            <option key={id} value={tool}>{tool}</option>
          )
        })} 
      </select>
      <select onChange={handleOnChange}>
      {roles.map((role, id) => {
          return (
            <option key={id} value={role}>{role}</option>
          )
        })} 
      </select>
      <select onChange={handleOnChangeLevels}>
      {levels.map((level, id) => {
          return (
            <option key={id} value={level}>{level}</option>
          )
        })} 
      </select>

      {/* <button
        className="clear"
      >
        <ClearIcon className="clearicon"/>
      </button> */}
    </div>
  );
}

export default FilterItem;
