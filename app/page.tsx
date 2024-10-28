"use client"

import Header from "./components/Header";
import SectionCasal from "./components/SectionCasal";
import SectionInicio from "./components/SectionInicio";
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
      const handleHashChange = () => {
          const hash = window.location.hash;
          if (hash) {
              const element = document.querySelector(hash);
              if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
              }
          }
      };
      window.addEventListener('hashchange', handleHashChange);
      return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <>
      <Header />
      <main>
        <SectionInicio />
        <SectionCasal />
      </main>
    </>
  );
}
