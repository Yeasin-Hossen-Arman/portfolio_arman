import React from 'react'

function Hero() {
  return (
    <div>
        {/* <!-- component -->
<style>
  .bg-dots{
    background-image: url(https://assets-global.website-files.com/5b5a66e9f3166b36708705fa/5dea7a12bb83ab1f13040de5_cx-dots.svg);
    background-repeat: no-repeat
  }
</style> */}

<div class="m-auto max-w-6xl p-12">
   <div class="flex flex-col md:flex-row">
      <div class="md:w-1/2 max-w-md flex flex-col justify-center">
         <div class="md:text-5xl text-2xl uppercase font-black">Yeasin Hossen Arman</div>
         <div class="text-xl mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
         <div class="my-5 h-16">
            <div class="shadow-md font-medium py-2 px-4 text-yellow-100
               cursor-pointer bg-yellow-600 hover:bg-yellow-500 rounded text-lg text-center w-48">Hire me</div>
         </div>
      </div>
      <div class="flex md:justify-end w-full md:w-1/2 -mt-5 ">
         <div class="bg-dots">
            <div class="flex flex-col justify-center shadow-2xl max-w-md z-10 rounded-full mt-6 ml-4 ">
               <img alt="card img" width="150px" height="20px" class="rounded-t ml-24" src="https://github.com/Yeasin-Hossen-Arman/ML_Course_SKITBI/blob/main/Src/file.png?raw=true" /> 
               <div class="text-2xl p-10 bg-white">I'm passionate with Python, Django, Flask, Machine learning, Deep learning, Computer vision and image processing</div>
            </div>
         </div>
      </div>
   </div>
</div>
    </div>
  )
}

export default Hero