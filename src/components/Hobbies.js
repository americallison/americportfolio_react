import React from 'react'


export default function Hobbies() {
  return (
    <>
      {/* <!-- Work --> */}
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div id="hobbie" className="bg-[#393e46] h-auto my-6 py-8 rounded-lg border-4">
      <div className="flex justify-center">
        <h3 className="border-4 w-30 text-black bg-[#f2e7d5] mb-2 text-bold text-2xl rounded px-4 py-4">Hobbies</h3>
      </div>
    
      <details className="px-6 py-4">
        <summary className="font-bold text-xl text-stone-100">Reading</summary>
        <p className="text-stone-200 mt-2">I love to read books on a variety of subjects ranging from programming, 
        business, intelligence, etc. Some of the most touching books I have read are: 
        <ul>
          <li>Think and Grow Rich by Napoleon Hill</li>
          <li>The Richest Man in Babylon by George S. Clason</li>
          <li>The Truth Shall Set You Free by David Icke</li>
        </ul>
        </p>
      </details>
    
      <details className="px-6 py-4">
        <summary className="font-bold text-xl text-stone-100">Playing Sports</summary>
        <p  className="text-stone-200 mt-2">I play soccer, basketball, lawn tennis and volleyball. I 
        played soccer and basketball at 3rd division levels. I played soccer for Pepper Football Club
        for three (3) seasons in the Gardnersville Sub Committee at Tusa Field. I also played 2 seasons
        for Barnersville Snipers in the Liberia Basketball Association (LBA) 3rd division league.
        </p>
      </details>

      <details className="px-6 py-4">
        <summary className="font-bold text-xl text-stone-100">Exercise</summary>
        <p  className="text-stone-200 mt-2">I love to perform aerobic exercises including jogging, pushups, pullups, and situps. 
        These help keep me active and energized.
        </p>
      </details>
    
    
    </div>
    </div>
    </>
  )
    }
