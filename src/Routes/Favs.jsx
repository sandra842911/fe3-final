import React, {useReducer, useEffect} from "react";

import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/ContextGlobal";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

function Favs(){
 const {detail} = ContextGlobal();
 const {favs, dispacthFavs}=useReducer(useReducer, []);
 useEffect(() => {
  
  const savedFavorites = JSON.parse(localStorage.getItem('favs')) || [];
  dispacthFavs({ type: 'SET_FAVS', payload: savedFavorites });
}, []);

useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(favs));
}, [favs]);


  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>

  );
};

export default Favs;
