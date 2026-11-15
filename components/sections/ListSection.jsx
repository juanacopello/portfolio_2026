'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const PROJECTS_DATA = [
  {
    id: 'pope',
    year: '2025',
    title: 'How a New Pope is Elected',
    role: 'Content Producer',
    publishedAt: 'La Nación',
    url: 'https://www.lanacion.com.ar/el-mundo/paso-a-paso-como-se-elige-a-un-papa-nid22042025/',
    image: '/images/lista/pope.png',
  },
  {
    id: 'fidelidad',
    year: '2024',
    title: "Visual Map of Governors' Loyalty to Milei",
    role: 'Data Visualization Developer',
    publishedAt: 'La Nación',
    url: 'https://www.lanacion.com.ar/politica/mapa-de-fidelidad-mileista-el-sinuoso-juego-de-los-gobernadores-en-la-era-del-no-hay-plata-nid18102024/',
    image: '/images/lista/fidelidad.png',
  },
  {
    id: 'data-collection',
    year: '2024',
    title: 'The Data Collection',
    role: 'Full-Stack Developer',
    publishedAt: 'European Council on Foreign Relations',
    url: 'https://datacollection.ecfr.eu/',
    image: '/images/lista/data-collection.png',
  },
  {
    id: 'dengue',
    year: '2024',
    title: 'Dengue Epidemic',
    role: 'Content Producer',
    publishedAt: 'La Nación',
    url: 'https://www.lanacion.com.ar/sociedad/dengue-viaje-al-interior-de-la-epidemia-asi-actua-el-virus-dentro-de-tu-cuerpo-y-asi-se-propaga-nid11042024/#/',
    image: '/images/lista/dengue.png',
  },
  {
    id: 'milei',
    year: '2023',
    title: "Economic Analysis of Milei's Votes",
    role: 'Data Visualization Developer',
    publishedAt: 'La Nación',
    url: 'https://www.lanacion.com.ar/sociedad/quien-eligio-a-milei-el-analisis-economico-del-voto-libertario-y-el-grafico-revelador-que-implosiono-nid07092023/#/',
    image: '/images/lista/correlacion.png',
  },
  {
    id: 'artemis',
    year: '2022',
    title: 'Artemis Missions',
    role: 'Content Producer',
    publishedAt: 'La Nación',
    url: 'https://www.lanacion.com.ar/sociedad/primero-la-luna-luego-marte-medio-siglo-despues-del-apolo-11-estados-unidos-quiere-volver-a-nid28082022/#/',
    image: '/images/lista/artemis.png',
  },
  {
    id: 'covid19',
    year: '2021',
    title: 'Covid-19 in Public Transport',
    role: 'Writer & Content Producer',
    publishedAt: 'La Nación',
    url: 'https://www.lanacion.com.ar/sociedad/simulacion-asi-se-puede-propagar-el-virus-en-el-transporte-nid11042021/#/',
    image: '/images/lista/transport.png',
  },
  {
    id: 'plaza',
    year: '2021',
    title: 'Plaza de Mayo in Flames',
    role: 'Content Producer',
    publishedAt: 'La Nación',
    url: 'https://www.lanacion.com.ar/politica/plaza-de-mayo-en-llamas-asi-ocurrieron-las-cinco-muertes-que-cambiaron-la-historia-de-la-argentina-nid19122021/#/',
    image: '/images/lista/plaza-mayo.png',
  },
  {
    id: 'vaccines',
    year: '2020',
    title: 'Covid-19 Vaccines: A Global Hope',
    role: 'Content Producer',
    publishedAt: 'La Nación',
    url: 'https://www.lanacion.com.ar/sociedad/vacunas-covid-19-cuales-llegaran-argentina-que-resultados-nid2526910/',
    image: '/images/lista/pope.png',
  },
];

export default function ProjectTable() {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const handleRowClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      className="px-6 py-8 md:py-12 mx-auto max-w-[1400px] relative"
      onMouseMove={handleMouseMove}
    >
      <h2 className="font-sans-serif text-2xl sm:text-3xl md:text-[35px] tracking-tighter font-[400] leading-tight border-b-2 pb-2 mb-8 md:mb-14">
        Other Works
      </h2>

      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-zinc-200">
            <th className="hidden md:table-cell py-2 pr-4 uppercase font-sans-serif font-[200] text-xs lg:text-sm">
              Date
            </th>
            <th className="py-2 pr-3 md:px-4 uppercase font-sans-serif font-[200] text-xs lg:text-sm">
              Project Title
            </th>
            <th className="py-2 px-3 md:px-4 uppercase font-sans-serif font-[200] text-xs lg:text-sm">
              Role
            </th>
            <th className="hidden md:table-cell py-2 px-4 uppercase font-sans-serif font-[200] text-xs lg:text-sm">
              Place Published
            </th>
            <th className="py-2 pl-3 md:pl-4 uppercase font-sans-serif font-[200] text-xs lg:text-sm">
              <span className="sr-only">Link</span>
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-zinc-200">
          {PROJECTS_DATA.map((project) => (
            <tr
              key={project.id}
              onClick={() => handleRowClick(project.url)}
              onMouseEnter={() => setHoveredImage(project.image)}
              onMouseLeave={() => setHoveredImage(null)}
              className="hover:bg-[#dcfe52] active:bg-[#dcfe52] transition-colors cursor-pointer"
            >
              {/* Date (Desktop only) */}
              <td className="hidden md:table-cell py-4 lg:py-5 pr-4 whitespace-nowrap font-sans-serif font-[100] text-base lg:text-[18px] tracking-tight">
                {project.year}
              </td>

              {/* Project Title (Mobile + Desktop) */}
              <td className="py-4 lg:py-5 pr-3 md:px-4 font-sans-serif font-[400] text-base lg:text-[18px] text-[#3a3838] leading-snug tracking-tight">
                {project.title}
              </td>

              {/* Role (Mobile + Desktop) */}
              <td className="py-4 lg:py-5 px-3 md:px-4 font-sans-serif font-[100] text-sm sm:text-base lg:text-[18px] leading-snug tracking-tight">
                {project.role}
              </td>

              {/* Place Published (Desktop only) */}
              <td className="hidden md:table-cell py-4 lg:py-5 px-4 font-sans-serif font-[100] text-base lg:text-[18px] tracking-tight">
                {project.publishedAt}
              </td>

              {/* Arrow Link (Mobile + Desktop) */}
              <td className="py-4 lg:py-5 pl-3 md:pl-4 whitespace-nowrap text-right">
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center justify-end text-black"
                >
                  <img src="/arrow.svg" alt={project.title} className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Floating Hover Image Preview (Desktop only) */}
      {hoveredImage && (
        <div
          className="fixed pointer-events-none z-50 transition-opacity duration-150 ease-out -translate-x-1/2 -translate-y-1/2 w-56 h-auto rounded-lg overflow-hidden shadow-2xl border border-black/10 bg-zinc-100 hidden md:block"
          style={{
            top: `${cursorPos.y + 20}px`,
            left: `${cursorPos.x + 20}px`,
          }}
        >
          <img
            src={hoveredImage}
            alt="Project Preview"
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </section>
  );
}