import React, { useState, useEffect } from "react";
import {useTranslation} from 'react-i18next';

export default function Footer() {

  const [t] = useTranslation("global");

    function toggleFooterSection(e) {
        const list = e.target.parentElement.parentElement.querySelector(
          "article"
        );
        if (list.classList.contains("h-0")) {
          list.classList.remove("h-0");
        } else {
          list.classList.add("h-0");
        }
      }

  return (
    <footer className="mt-16">
      <div className="border-t md:px-4 md:pt-10 md:pb-5">
        <div className="flex flex-wrap md:max-w-screen-lg mx-auto">
          <section className="relative text-gray-700 font-light font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/4">
            <div className="md:hidden">
              <button
                onClick={toggleFooterSection}
                className="uppercase text-xs font-bold tracking-wider text-pink-700 focus:outline-none border-t border-white py-4 w-full text-left"
                type="button"
              >
                Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas
                mattis
              </button>
            </div>
            <p
              className="uppercase text-xs font-bold tracking-wider text-black-700 hidden md:block"
            >
              {t("footer.rrss")}
            </p>
            <article className="h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden">
              <ul className="my-5 text-sm tracking-wide">
                <li className="my-3 tracking-wide">
                  <a href="https://www.instagram.com/brum_brum_game/">Instagram</a>
                </li>
              </ul>
            </article>
          </section>
          <section className="relative text-gray-700 font-light font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/4">
            <div className="md:hidden">
              <button
                onClick={toggleFooterSection}
                className="uppercase text-xs font-bold tracking-wider text-black-700 focus:outline-none border-t border-white py-4 w-full text-left"
                type="button"
              >
                Ut porta
              </button>
            </div>
            <p
              className="uppercase text-xs font-bold tracking-wider text-black-700 hidden md:block"
            >
              {t("footer.links")}
            </p>
            <article className="h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden">
              <ul className="my-5 text-sm tracking-wide">
                <li className="my-3 tracking-wide">
                  <a href="https://www.lasallegracia.cat/">Web La Salle Grácia</a>
                </li>
              </ul>
            </article>
          </section>
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto border-none px-4">
        <section className="flex flex-col md:flex-row md:justify-between md:border-solid md:border-t text-gray-700 font-light text-sm pt-4 pb-6 md:pt-5 md:pb-6 w-full">
          <div>
            <p className="leading-8 tracking-wide">
              &copy; SteveWoz, Plaça del Nord, 14, 08024 Barcelona
            </p>
          </div>
          <div>
            <p className="leading-8 tracking-wide">{t("footer.policy")}</p>
          </div>
        </section>
      </div>
    </footer>
  );
}
