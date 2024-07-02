import { PanelGroup, Panel, PanelResizeHandle } from 'react-resizable-panels';

import Layout from '../components/ui/Layout';
import DashboardLinks from "../components/DashboardLinks";
import DashboardLibrary from "../components/DashboardLibrary";

export default function Dashboard() {
  return (
    <>
      <section className="dashboard w-full h-screen bg-black text-gray-600">
        <Layout>
          <PanelGroup direction="horizontal" autoSaveId="persistance">
            <Panel defaultSize={20} minSize={20} maxSize={30} className='space-y-2'>
              <DashboardLinks />
              <DashboardLibrary />
            </Panel>
            <PanelResizeHandle className='flex-none mx-0.5 w-[3px] relative outline-none bg-transparent active:bg-[rgba(255,255,255,0.2)] cursor-ew-resize hover:bg-[rgba(255,255,255,0.1)] transition-colors duration-100 ease-in-out' />
            <Panel minSize={30}>
              middle
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