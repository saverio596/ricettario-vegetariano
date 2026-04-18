import React, { useState } from 'react';
import { cercaRicetteVeg } from '../services/api'; // Importiamo la funzione
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const [testoCercato, setTestoCercato] = useState("");
  const [ricette, setRicette] = useState([]); // Qui salveremo l'elenco delle ricette
  const [caricamento, setCaricamento] = useState(false);

  const gestisciRicerca = async () => {
    if (!testoCercato.trim()) return;

    setCaricamento(true);
    const dati = await cercaRicetteVeg(testoCercato);
    setRicette(dati); // Salviamo le ricette trovate!
    setCaricamento(false);
  };

  return (
    <>
    <div className="header-section">
        <div className="hero-content">
          <h1 className="title-page">Trova le ricette vegetariane perfette per te</h1>
          <div className="desc-page">Chi ha detto che mangiare vegetariano significa rinunciare al gusto?Trova le ricette vegetariane perfette per te!</div>
        </div>
    </div>
    <div className="bg-gray-100 p-8">
      
      {/* Barra di ricerca */}
      <div className="w-full mx-auto max-w-2xl mt-10 mb-10 barra-ricerca">
      <div className="flex items-center bg-[#F1F3F0] rounded-full p-1.5 pr-2 shadow-md border border-white/20">
        
        {/* Icona Lente */}
        <div className="pl-5 pr-2 text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </div>

        {/* Input */}
        <input 
          type="text" 
          placeholder="Cosa cucini oggi?" 
          className="flex-grow bg-transparent text-gray-700 placeholder:text-gray-400 text-sm py-3 outline-none"
          value={testoCercato}
          onChange={(e) => setTestoCercato(e.target.value)}
        />

        {/* Bottone Explore */}
        <button 
          onClick={gestisciRicerca}
          className="bg-[#064E3B] hover:bg-[#065F46] text-white text-xs font-extrabold uppercase tracking-widest px-8 py-3.5 rounded-full transition-all active:scale-95"
        >
          Ricerca
        </button>
      </div>
    </div>

      {/* Griglia delle ricette */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {ricette.map((ricetta) => (
          <Link 
              to={`/recipe/${ricetta.id}`} 
              key={ricetta.id} 
              className="group"
            >
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-4 border border-gray-200">
            <img 
              src={ricetta.image} 
              alt={ricetta.title} 
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="font-bold text-gray-800 text-sm h-10 overflow-hidden">
              {ricetta.title}
            </h3>
            <span className="mt-4 text-green-600 text-sm font-semibold hover:underline">
              Vedi ricetta →
            </span>
          </div>
          </Link>
        ))}
      </div>

      {ricette.length === 0 && !caricamento && (
        <p className="text-center text-gray-400">Nessuna ricetta trovata. Prova a cercare!</p>
      )}
    </div>
    </>
  );
}

export default Home;