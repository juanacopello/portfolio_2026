'use client'
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
    image: '/images/lista/pope.png'
  },
  {
    id: 'fidelidad',
    year: '2024',
    title: "Visual Map of Governors' Loyalty to Milei",
    role: 'Data Visualization Developer',
    publishedAt: 'La Nación',
    url: 'https://www.lanacion.com.ar/politica/mapa-de-fidelidad-mileista-el-sinuoso-juego-de-los-gobernadores-en-la-era-del-no-hay-plata-nid18102024/',
    image: '/images/lista/fidelidad.png'

  },
  {
    id: 'data-collection',
    year: '2024',
    title: 'The Data Collection',
    role: 'Full-Stack Developer',
    publishedAt: 'European Council on Foreign Relations',
    url: 'https://datacollection.ecfr.eu/',
    image: '/images/lista/data-collection.png'
  },
  {
    id: 'dengue',
    year: '2024',
    title: 'Dengue Epidemic',
    role: 'Content Producer',
    publishedAt: 'La Nación',
    url: 'https://www.lanacion.com.ar/sociedad/dengue-viaje-al-interior-de-la-epidemia-asi-actua-el-virus-dentro-de-tu-cuerpo-y-asi-se-propaga-nid11042024/#/',
    image: '/images/lista/dengue.png'

  },
  {
    id: 'milei',
    year: '2023',
    title: "Economic Analysis of Milei's Votes",
    role: 'Data Visualization Developer',
    publishedAt: 'La Nación',
    url: 'https://www.lanacion.com.ar/sociedad/quien-eligio-a-milei-el-analisis-economico-del-voto-libertario-y-el-grafico-revelador-que-implosiono-nid07092023/#/',
    image: '/images/lista/correlacion.png'

  },
  {
    id: 'artemis',
    year: '2022',
    title: 'Artemis Missions',
    role: 'Content Producer',
    publishedAt: 'La Nación',
    url: 'https://www.lanacion.com.ar/sociedad/primero-la-luna-luego-marte-medio-siglo-despues-del-apolo-11-estados-unidos-quiere-volver-a-nid28082022/#/',
    image: '/images/lista/artemis.png'

  },
  {
    id: 'covid19',
    year: '2021',
    title: 'Covid-19 in Public Transport',
    role: 'Writer & Content Producer',
    publishedAt: 'La Nación',
    url: 'https://www.lanacion.com.ar/sociedad/simulacion-asi-se-puede-propagar-el-virus-en-el-transporte-nid11042021/#/',
    image: '/images/lista/transport.png'

  },
  {
    id: 'plaza',
    year: '2021',
    title: 'Plaza de Mayo in Flames',
    role: 'Content Producer',
    publishedAt: 'La Nación',
    url: 'https://www.lanacion.com.ar/politica/plaza-de-mayo-en-llamas-asi-ocurrieron-las-cinco-muertes-que-cambiaron-la-historia-de-la-argentina-nid19122021/#/',
    image: '/images/lista/plaza-mayo.png'

  },
];

export default function ProjectTable() {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="overflow-x-auto my-8 mx-auto max-w-[1350px] relative"
      onMouseMove={handleMouseMove}
    >
      <h2 className="font-sans-serif text-[35px] tracking-tighter font-[400] border-b-2 mb-[70px]">
        Other Works
      </h2>

      <table className="w-full text-left my-[30px]">
        <thead>
          <tr className="border-b  border-zinc-200 ">
            <th className="py-2 uppercase font-sans-serif font-[200] text-sm">Date</th>
            <th className="py-2 px-4 uppercase font-sans-serif font-[200] text-sm">Project Title</th>
            <th className="py-2 px-4 uppercase font-sans-serif font-[200] text-sm">Role</th>
            <th className="py-2 px-4 uppercase font-sans-serif font-[200] text-sm">Place Published</th>
            <th className="py-2 px-4 uppercase font-sans-serif font-[200] text-sm"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-200 text-sm">
          {PROJECTS_DATA.map((project) => (
            <tr
              key={project.id}
              onMouseEnter={() => setHoveredImage(project.image)}
              onMouseLeave={() => setHoveredImage(null)}
              className="hover:bg-[#e4ef75] transition-colors cursor-pointer"
            >
              <td className="py-5 font-sans-serif font-[100] text-[18px] tracking-tight">
                {project.year}
              </td>
              <td className="py-5 px-4 font-sans-serif font-[400] text-[18px] text-[#3a3838] tracking-tight">
                {project.title}
              </td>
              <td className="py-5 px-4 font-sans-serif font-[100] text-[18px] tracking-tight">
                {project.role}
              </td>
              <td className="py-5 px-4 font-sans-serif font-[100] text-[18px] tracking-tight">
                {project.publishedAt}
              </td>
              <td className="py-5 px-4 font-sans-serif font-[200] text-[18px] tracking-tight">
                <Link href={project.url} className="text-black hover:underline">
                  <img
                    src='/arrow.svg'

                  />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Floating Hover Image Preview */}
      {hoveredImage && (
        <div
          className="fixed pointer-events-none z-50 transition-opacity duration-150 ease-out -translate-x-1/2 -translate-y-1/2 w-50 h-auto rounded-lg overflow-hidden shadow-2xl border border-black/10 bg-zinc-100 hidden md:block"
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
    </div>
  );
}