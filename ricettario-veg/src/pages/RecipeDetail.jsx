import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ottieniDettagliRicetta } from '../services/api'; // Importiamo la funzione
import './RecipeDetail.css';

import {ricettaEsempio} from '../mockData';
import userIcon from '../assets/user.png';
import clockIcon from '../assets/clock.png';

function RecipeDetail() {
  
  /*const { id } = useParams();  
  const [ricetta, setRicetta] = useState(null);
  const [caricamento, setCaricamento] = useState(true);  

useEffect(() => {
    const caricaDati = async () => {
      setCaricamento(true);
      const dati = await ottieniDettagliRicetta(id);
      setRicetta(dati);
      setCaricamento(false);
    };
    caricaDati();
  }, [id]);

  if (caricamento) {
    return <div className="text-center p-20 text-xl font-semibold">Caricamento ricetta... 🍳</div>;
  }

  if (!ricetta) {
    return (
      <div className="text-center p-20">
        <p className="text-red-500 mb-4">Ops! Non abbiamo trovato questa ricetta.</p>
        <Link to="/" className="text-green-600 underline">Torna alla Home</Link>
      </div>
    );
  }*/

    const ricetta = ricettaEsempio;

  return (
    <>
    <div className="detail-recipe">
        <div className="md:container mx-auto grid grid-cols-1 md:grid-cols-12 gap-2 md:p-8">
            <div className="md:col-span-6 p-4">
            <img 
                src={ricetta.image} 
                alt={ricetta.title} 
                className="w-full rounded-3xl shadow-lg object-cover h-80 img-ricetta"
            />
            </div>
            <div className="md:col-span-6 p-4">
                <Link to="/" className="btn-return flex">
            ← Torna alla ricerca
        </Link>
                <h1 className="text-3xl font-black text-gray-800 mb-6 leading-tight text-left">
                {ricetta.title}
            </h1>
            <div className="mt-6 flex gap-4 flex-col">
                <span className="flex gap-3 items-center">
                <img src={clockIcon} alt="user" className="icona-info" /> <span className="txt-info-receip">{ricetta.readyInMinutes} min</span>
                </span>
                <span className="flex gap-3 items-center">
                <img src={userIcon} alt="user" className="icona-info" /> <span className="txt-info-receip">{ricetta.servings} porzioni</span>
                </span>
            </div>
            </div>
        </div>
    </div>

    <div className="content-recipe">
    <div className="md:container mx-auto grid grid-cols-1 md:grid-cols-12 gap-2 md:p-8">
     <div className="md:col-span-4 p-4">
        <div className="box-ingredienti">
          <h2 className="text-xl font-bold text-green-700 mb-4 text-left">
            Ingredienti
          </h2>
          <ul className="space-y-3 pt-4">
            {ricetta.extendedIngredients.map((ingrediente) => (
              <li key={ingrediente.id} className="flex items-start text-ingredienti text-gray-700 border-b border-gray-100 pb-2">
                <span className="mr-3 text-green-500 font-bold">✓</span>
                <div className="text-left">{ingrediente.original}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="md:col-span-8 p-4">
        <div className="box-procedimento">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-left">Procedimento</h2>
            <div 
            className="prose max-w-none text-gray-700 text-left"
            dangerouslySetInnerHTML={{ __html: ricetta.instructions || "Nessuna istruzione disponibile per questa ricetta." }} 
            />
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default RecipeDetail;