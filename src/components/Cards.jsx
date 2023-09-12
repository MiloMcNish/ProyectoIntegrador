import React from 'react';
import Card from './Card';



export default function Cards({characters}) {
   
   return (
      <div className='cardWrapper'>
         {characters.map(char=>{
            
            return(<Card 
               key={char.id} 
               name={char.name} 
               status={char.status} 
               species={char.species} 
               gender={char.gender} 
               origin ={char.origin} 
               image={char.image} 
               onClose={() => window.alert('Emulamos que se cierra la card')} />);
         })}
      </div>
   );
}

