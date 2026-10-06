'use client'
import React, { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
  return (
    <div
      className="overflow-x-auto my-8 mx-auto max-w-[1350px] relative"
    >
      <h2 className="text-[#0057ae] font-serif text-[50px] font-[500] uppercase">
        How to contact me
      </h2>


     <p className="font-sans-serif font-[300] text-[#0057ae] tracking-[-1px] text-[25px]">
      send me an email or message me via linkedin
      </p>
    </div>
  );
}