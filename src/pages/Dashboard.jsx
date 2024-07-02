import React from "react";

import Layout from '../components/ui/Layout';
import DashboardLinks from "../components/DashboardLinks";
import DashboardLibrary from "../components/DashboardLibrary";

export default function Dashboard() {
  return (
    <>
      <section className="dashboard w-full h-screen bg-black text-gray-600">
        <Layout>
          <DashboardLinks />
          <DashboardLibrary />
        </Layout>
      </section>
    </>
  );
}