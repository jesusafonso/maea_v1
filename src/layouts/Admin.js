import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import Sidebar from "../components/Sidebar/Sidebar.js";

// Placeholder component for admin pages
const AdminPlaceholder = ({ title }) => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-blueGray-800 mb-4">{title}</h1>
      <p className="text-blueGray-600">Esta página está em desenvolvimento.</p>
    </div>
  </div>
);

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/admin/dashboard" exact render={() => <AdminPlaceholder title="Dashboard" />} />
            <Route path="/admin/maps" exact render={() => <AdminPlaceholder title="Maps" />} />
            <Route path="/admin/settings" exact render={() => <AdminPlaceholder title="Settings" />} />
            <Route path="/admin/tables" exact render={() => <AdminPlaceholder title="Tables" />} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
        </div>
      </div>
    </>
  );
}
