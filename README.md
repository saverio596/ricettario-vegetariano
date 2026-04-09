# 🥦 Ricettario Vegetariano

Applicazione web sviluppata in **React** che permette di cercare e visualizzare **ricette vegetariane** tramite l'API di Spoonacular.

---

## 📌 Descrizione

Ricettario Vegetariano è un'app pensata per utenti che seguono una dieta vegetariana e vogliono scoprire nuove ricette in modo semplice e veloce.

L'app consente di:

* cercare ricette tramite una barra di ricerca
* visualizzare risultati con immagini e titoli
* accedere a una pagina di dettaglio per ogni ricetta

---

## 🚀 Funzionalità

* 🔍 Ricerca dinamica di ricette vegetariane
* 🖼️ Visualizzazione lista ricette (titolo + immagine)
* 📄 Pagina dettaglio ricetta
* 🔁 Navigazione tra pagine con React Router
* 📱 Design responsive

---

## 🛠️ Tecnologie utilizzate

* ⚛️ React
* 🎣 React Hooks (`useState`, `useEffect`)
* 🔁 React Router
* 📡 Axios
* 🧠 Redux (opzionale)

---

## 🔗 API utilizzata

Spoonacular Food API
https://spoonacular.com/food-api/docs

Le richieste vengono filtrate utilizzando il parametro:

diet=vegetarian

---

## ⚙️ Installazione

1. Clona il repository:

git clone https://github.com/saverio596/ricettario-vegetariano.git

2. Accedi alla cartella:

cd ricettario-vegetariano

3. Installa le dipendenze:

npm install

4. Crea un file `.env` nella root del progetto:

REACT_APP_API_KEY=la_tua_api_key

5. Avvia l'app:

npm start

---

## 📁 Struttura del progetto

src/
│── components/
│   ├── SearchBar.jsx
│   ├── RecipeCard.jsx
│
│── pages/
│   ├── Home.jsx
│   ├── RecipeDetails.jsx
│
│── services/
│   ├── api.js
│
│── App.js
│── index.js

---

## 🔄 Routing

* `/` → Home (ricerca + lista ricette)
* `/recipe/:id` → Pagina dettaglio

---

## 📡 Esempio chiamata API

import axios from "axios";

axios.get("https://api.spoonacular.com/recipes/complexSearch", {
params: {
apiKey: process.env.REACT_APP_API_KEY,
query: searchTerm,
diet: "vegetarian"
}
});

---

## 🎨 UI / UX

* Interfaccia semplice e intuitiva
* Navigazione chiara
* Layout responsive
* Focus sull’esperienza utente


---

## 👨‍💻 Autore

Saverio
https://github.com/saverio596

---

## 📄 Licenza

Questo progetto è a scopo didattico.
