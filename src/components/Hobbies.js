import React from 'react'


export default function Hobbies() {
  return (
    <>
      {/* <!-- Work --> */}
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div id="hobbie" className="bg-[#B2B2B2] h-auto my-6 py-8 rounded-lg border-4">
      <div className="flex justify-center">
        <h3 className="border-4 w-30 bg-sky-900 text-white border-dashed px-4 py-4">Hobbies</h3>
      </div>
    
      <details className="px-6 py-4">
        <summary className="font-bold text-2xl text-gray-800">Reading</summary>
        <p>I love to read books on a variety of subjects ranging from programming, business, intelligence, etc.
        </p>
      </details>
    
      <details className="px-6 py-4">
        <summary className="font-bold text-2xl text-gray-800">Playing Sports</summary>
        <p>I play soccer, basketball, lawn tennis and volleyball.
        </p>
      </details>

      <details className="px-6 py-4">
        <summary className="font-bold text-2xl text-gray-800">Exercise</summary>
        <p>I love to perform aerobic exercises including jogging, pushups, pullups, and situps. These help keep me active
            and energized.
        </p>
      </details>
    
    
    </div>
    </div>
    </>
  )
    }
