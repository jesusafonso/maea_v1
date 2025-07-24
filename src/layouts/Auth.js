import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import Navbar from "../components/Navbars/AuthNavbar.js";
import FooterSmall from "../components/Footers/FooterSmall.js";

// views

// Remover uso de Login e Register nas rotas
// <Route path="/auth/login" exact component={Login} />
// <Route path="/auth/register" exact component={Register} />
// Remover backgroundImage ausente
// style={{
//   backgroundImage:
//     "url(" + require("../assets/img/register_bg_2.png").default + ")",
// }}

export default function Auth() {
  return (
    <>
      <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
          ></div>
          <Switch>
            <Redirect from="/auth" to="/auth/login" />
          </Switch>
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
