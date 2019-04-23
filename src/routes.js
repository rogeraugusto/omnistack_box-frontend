import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Lib de rotas
// Permite chamar duas rotas ao mesmo tempo quando chamar um componente

import Main from "./pages/Main";
import Box from "./pages/Box";

const Routes = () => (
  // BrowserRouter - Usado para a escrita da url, que deixa ela apenas com o controller
  // Switch -Garante que cada endereço chame sua rota apenas
  // Route - caminho que será redirecionado - exact garante que seja o caminho correto
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/box/:id" component={Box} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
