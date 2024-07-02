import React from "react";

import Layout from '../components/ui/Layout';

export default function Dashboard() {
  return (
    <>
      <section className="dashboard w-full h-screen bg-black text-gray-600">
        <Layout>
          <h1>Dashboard</h1>
        </Layout>
      </section>
    </>
  );
}