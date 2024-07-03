import { PanelGroup, Panel, PanelResizeHandle } from 'react-resizable-panels';

import Layout from '../components/ui/Layout';
import DashboardLinks from "../components/DashboardLinks";
import DashboardLibrary from "../components/DashboardLibrary";
import DashboardHero from "../components/DashboardHero";

export default function Dashboard() {
  return (
    <>
      <section className="dashboard w-full h-screen bg-black text-gray-600">
        <Layout>
          <PanelGroup direction="horizontal" autoSaveId="persistance" className='panel-group-custom'>
            <Panel defaultSize={20} minSize={20} maxSize={30} collapsible={true} collapsedSize={4} className='space-y-2 h-full flex flex-col'>
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
            <Panel defaultSize={15} minSize={10} maxSize={15} collapsible={true}>
              right
            </Panel>
          </PanelGroup>
        </Layout>
      </section>
    </>
  );
}