import React from 'react'

const Create = () => {
  return (
    <div>
    <form className='bg-gray-900'>
  <div class="space-y-12">
    <div class="border-b flex flex-col justify-items-center border-gray-900/10 pb-12 ml-10">
    <br />
    <br />
      <p class="mt-1  text-white text-center font-semibold text-3xl font-serif ">Upload your recipie</p>

      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-4">
          <label for="username" class="block  text-white font-medium">Username</label>
          <div class="mt-2">
            <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
              
              <input type="text" name="username" id="username" class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="janesmith"/>
            </div>
          </div>
        </div>
        <div class="sm:col-span-4">
          <label for="username" class="block text-white  font-medium">Recipie Title</label>
          <div class="mt-2">
            <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
              
              <input type="text" name="title" id="title" class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" />
            </div>
          </div>
        </div>

        <div class="col-span-full">
          <label for="about" class="block text-white font-medium">Recipie</label>
          <div class="mt-2">
            <textarea name="recipie" id="recipie" rows="3" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"></textarea>
          </div>
          <p class="mt-3 text-sm/6 text-white">Write the detailed recipie.</p>
        </div>
        <div class="col-span-full">
          <label for="about" class="block  font-medium text-white">Ingredients</label>
          <div class="mt-2">
            <textarea name="ingredients" id="ingredients" rows="3" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"></textarea>
          </div>
        </div>
        <div class="col-span-full">
          <label for="about" class="block  font-medium text-white">Steps</label>
          <div class="mt-2">
            <textarea name="steps" id="steps" rows="3" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"></textarea>
          </div>
        </div>
        <div class="sm:col-span-4">
          <label for="username" class="block text-white font-medium">Cooking time</label>
          <div class="mt-2">
            <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
              
              <input type="Number" name="time" id="time" class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" />
            </div>
          </div>
        </div>
        
    </div>

    </div>
    </div>
    <div class="flex items-center justify-center gap-x-6">
    <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
  </div>
</form>
    </div>
  )
}

export default Create