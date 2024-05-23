'use client'

import { useTheme } from "next-themes";
import MODEL1 from "../Button/testegratis";
import MODEL2 from "../Button/model2";
import { useState } from "react";

const Header = () => {

  //TEMA DARK MODE SWITHCER
  const [currentTheme, setCurrentTheme] = useState('light');
  const { setTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setCurrentTheme(newTheme);
    setTheme(newTheme);
  };

  //MENU DE PRODUTO E ACESSIBILIDADE

  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);


  return (
    <header className="flex items-center media-1200:flex-col media-1200:items-center media-1200:w-[150px]">
      <div className="flex items-center h-[90px] ml-[50px] mr-[30px] media-1200:ml-[0px] media-1200:mr-[0px]">
        <a href="/"><img src="/img/logo.png" className="w-[100px]" /></a>
      </div>

      <div className="flex flex-auto justify-start text-center text-secondary font-bold dark:text-white relative media-1200:flex-col media-1200:items-center">
        <li
          onMouseEnter={() => setIsSubMenuOpen(true)}
          onMouseLeave={() => setIsSubMenuOpen(false)}
          className="mr-[50px] list-none hover:text-primary transition-all media-1200:mr-[0px]">
          <a role="button">Produtos</a>
          <div className="flex flex-col min-w-[200px]  bg-secondary shadow-2xl absolute rounded-2xl text-white text-start p-[10px]"
            style={{
              visibility: isSubMenuOpen ? 'visible' : 'hidden',
              opacity: isSubMenuOpen ? 1 : 0,
              transition: 'opacity 0.3s ease-in-out, visibility 0.3s ease-in-out'
            }}>

            <a href="https://www.salesforce.com/br/data/" className="p-[10px] hover:outline rounded-lg transition-all">Data Cloud</a>
            <a href="https://www.salesforce.com/br/artificial-intelligence/" className="p-[10px] hover:outline rounded-lg transition-all">Einstein</a>
            <a href="https://www.salesforce.com/br/marketing/" className="p-[10px] hover:outline rounded-lg transition-all">Marketing Cloud</a>
            <a href="https://www.salesforce.com/br/sales/" className="p-[10px] hover:outline rounded-lg transition-all">Sales Cloud</a>
          </div>
        </li>

        <li className="mr-[50px] list-none hover:text-primary transition-all media-1200:mr-[0px]">
          <a>Trailhead</a>
        </li>



      </div>
      <div>
        <button onClick={toggleTheme} className="text-secondary p-button font-bold border-2 border-secondary rounded-full dark:text-white  dark:border-white">{currentTheme === 'light' ? 'Dark' : 'Light'}</button>
      </div>

      <div className="flex justify-end mr-[50px] media-1200:flex-col media-1200:mr-[0px]">
        <MODEL2 name="Suporte" />
        <MODEL1 name="Login" color="#3A8B54" href="./Login/" />
      </div>

    </header>
  );
};


export default Header;