import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {BrowserRouter, Routes, Route} from "react-router-dom"

import Invoices from './routes/invoices';
import Expenses from './routes/expenses';
import Invoice from './routes/invoice';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}> 
        <Route path="expenses" element={<Expenses />}/>
        <Route path="invoices" element={<Invoices />}>
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select an invoice</p>
              </main>
            }
          />
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
</Routes>

  </BrowserRouter>
 
);

//a 18-as sorban a parent elementet / nem zarjuk le azert h megjelenjen, csak a legvegen a Rountes elott zarjuk