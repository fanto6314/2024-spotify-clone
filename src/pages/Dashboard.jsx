import React, { useState } from 'react';
import { PanelGroup, Panel, PanelResizeHandle } from 'react-resizable-panels';
import CollapseContext from '../contexts/CollapseContext';

import Layout from '../components/ui/Layout';

import DashboardLinks from "../components/DashboardLinks";
import DashboardLibrary from "../components/DashboardLibrary";
import DashboardHero from "../components/DashboardHero";
import DashboardArtist from "../components/DashboardArtist";

export default function Dashboard() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  function handleLeftPanelCollapse() {
    setIsCollapsed(true);
  }

  function handleLeftPanelExpand() {
    setIsCollapsed(false);
  }

  return (
    <CollapseContext.Provider value={{ isCollapsed, setIsCollapsed }}>
      <section className="dashboard w-full h-screen bg-black text-gray-600">
        <Layout>
          <PanelGroup direction="horizontal" autoSaveId="persistance" className='panel-group-custom'>
            <Panel defaultSize={20} minSize={20} maxSize={30} collapsible={true} collapsedSize={4} className='space-y-2 h-full flex flex-col' onCollapse={handleLeftPanelCollapse} onExpand={handleLeftPanelExpand}>
              <DashboardLinks />
              <div className='h-full w-full'>
                <DashboardLibrary />
              </div>
            </Panel>
            <PanelResizeHandle className='flex-none mx-0.5 w-[3px] relative outline-none bg-transparent active:bg-[rgba(255,255,255,0.2)] cursor-ew-resize hover:bg-[rgba(255,255,255,0.1)] transition-colors duration-100 ease-in-out' />
            <Panel minSize={30}>
              <DashboardHero />
            </Panel>
            <PanelResizeHandle className='flex-none mx-0.5 w-[3px] relative outline-none bg-transparent active:bg-[rgba(255,255,255,0.2)] cursor-ew-resize hover:bg-[rgba(255,255,255,0.1)] transition-colors duration-100 ease-in-out' />
            <Panel defaultSize={15} minSize={15} maxSize={20} collapsible={true}>
              <DashboardArtist />
            </Panel>
          </PanelGroup>
        </Layout>
      </section>
    </CollapseContext.Provider>
  );
}