import React from 'react';
import './App.css';
import NormalCall from './NormalCall';
import CachedCall from './CachedCall';
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  
  let queryClient=new QueryClient();


  return (
    <QueryClientProvider client={queryClient}>
    <div className="app">
      <Routes>
        <Route path="/normal-call" element={<NormalCall />}></Route>
        <Route path="/cached-call" element={<CachedCall />}>
        </Route>
      </Routes>
    </div>
    </QueryClientProvider>
  )
}



export default App;
