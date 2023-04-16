import React, { useState } from "react";
/**
 * Componente que muestra un input para hacer búsquedas por nombre entre un listado de objetos. Al introducir un dato muestra debajo los datos coincidentes con el valor del input
 * @param {Array} suggestions Un array de objetos que contengan las propiedades "nombre" y "_id"
 * @returns
 */
const SearchBox = ({ suggestions }) => {
  const [value, setValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  /**
   *Retorna un array con los objetos cuya propiedad "nombre" coincida con el parámetro de búsqueda "value".No hace distinción entre valores en mayúsculas y minúsculas
   * @param {String} value valor de búsqueda
   * @returns {Array}
   */
  const getSuggestions = (value) => {
    return suggestions.filter((suggestion) =>
      suggestion.nombre.toLowerCase().includes(value.toLowerCase())
    );
  };

  /**
   * Almacena los cambios realizados en el input en el estado "value" y almacena las coincidencias resultantes en el estado "filteredSuggestions"
   * @param {*} event
   */
  const onInputChange = (event) => {
    const value = event.target.value;
    setValue(value);
    setFilteredSuggestions(getSuggestions(value));
  };
  /**
   * Al hacer click sobre alguna de las sugerencias coincidentes con el valor del input, coge dicha selección y la almacena finalmente en el estado "value" y "filteredSuggestions"
   * @param {*} suggestion
   */
  const onSuggestionClick = (suggestion) => {
    setValue(suggestion);
    setFilteredSuggestions([]);
  };

  return (
    <>
      <div className="search-box">
        <input
          className="input"
          type="text"
          value={value}
          onChange={onInputChange}
          placeholder="Alumno"
        />
        <span className="m-2">
          <img src="/icono_vocablo.svg" alt="icono" width={30}></img>
        </span>
        {filteredSuggestions.length > 0 && (
          <ul className="suggestions">
            {filteredSuggestions.map((suggestion) => (
              <li
                key={suggestion._id}
                onClick={() => onSuggestionClick(suggestion.nombre)}
              >
                {suggestion.nombre}
              </li>
            ))}
          </ul>
        )}
      </div>
      <style>{`
        .search-box {
          position: relative;
        }
        .input{
          border:3px solid #247c8c;
          min-width:15%;
          
        }

        .suggestions {
          position: absolute;
          min-width:15%;
          top: 100%;
          left: 0;
          right: 0;
          background-color: #fff;
          border: 1px solid #ccc;
          border-top: none;
          list-style-type: none;
          margin: 0;
          padding: 0;
        }

        .suggestions li {
          padding: 10px;
        }

        .suggestions li:hover {
          background-color: #f2f2f2;
        }
    `}</style>
    </>
  );
};

export default SearchBox;
