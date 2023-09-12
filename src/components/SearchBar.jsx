import Card from "./Card";
export default function SearchBar(props) {
   return (
      <div className="searchWrapper">
         <input id='search' type='search' />
         <button onClick={()=>
            props.onSearch('este es el ids')}>Agregar</button>
      </div>
   );
}
