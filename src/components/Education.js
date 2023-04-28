import React from 'react'


export default function Education() {
  return (
    <>
      {/* <!-- Work --> */}
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div id="education" className="bg-[#393e46] h-auto my-6 py-8 rounded-lg border-4">
      <div className="flex justify-center">
        <h3 className="border-4 w-30 text-black bg-[#f2e7d3] mb-2 text-bold text-2xl rounded px-4 py-4">Education</h3>
      </div>
    
      <details className="px-6 py-4">
        <summary className="font-bold text-xl text-stone-100">Cuttington University</summary>
        <p className='text-stone-200 mt-2'>I acquired a Bachelor of Science Degree in Plant and Soil Science and Accounting minor 
            from Cuttington University in July 2016. I enrolled at Cuttington University in 2012 on 
            the USAID EHELD Scholarship. I chose to study Plant and Soil Science because I believe Liberia
            needs to feed herself. I studied Accounting as a minor. I graduated as the second (2nd) dux of 
            the University in 2016.
        </p>
      </details>
    
      <details className="px-6 py-4">
        <summary className="font-bold text-xl text-stone-100">Starz College of Science and Technology</summary>
        <p className='text-stone-200 mt-2'>I obtained a Certificate in Computer Hardware and Operating Systems (A+) from Starz College of Science 
            and Technology. The training lasted for three (3) months. I learned about hardware components of a
            computer
        </p>
      </details>

      <details className="px-6 py-4">
        <summary className="font-bold text-xl text-stone-100">
          Monrovia Meetup Computer Science Academy (Orange Digital Center)</summary>
        <p className='text-stone-200 mt-2'>I obtained a Certificate in Introduction to Python Programming. This was a six (6)
        months intensive training in fundamental concepts of Python. Topics covered were variables, strings, lists,
        dictionaries, functions, classes and the Flask Framework.
        </p>
      </details>
    
      <details className="px-6 py-4">
        <summary className="font-bold text-xl text-stone-100">
          Orange Digital Center</summary>
        <p className='text-stone-200 mt-2'>I'm anticipating obtaining a Certificate in Programming using React.js 
        by December 16, 2022. The program commenced on the 19th of October 2022. This is a 2-month training which 
        is highly practical. Programming of real world applications are being taught. 
        </p>
      </details>
    </div>
    </div>
    </>
  )
    }
