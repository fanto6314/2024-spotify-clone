import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-screen'>
      <main className='flex-grow mx-2 mt-2 space-y-2'>
        {children}
      </main>
      <Footer />
    </div>
  );
}