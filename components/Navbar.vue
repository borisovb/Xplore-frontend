<template>
  <div>
    <nav class="grid md:grid-cols-3 grid-cols-2 h-16 w-full my-3">
      <div class="pl-5 md:pl-12 max-w-full max-h-full">
        <img
          class="object-contain h-14 max-w-full max-h-full mt-1"
          src="@/static/xplore-white.png"
        />
      </div>
      <div class="md:flex content-center flex-wrap hidden">
        <div class="relative mx-auto w-full text-gray-800 max-h-full">
          <input
            class="bg-input w-full h-10 px-5 py-2 pr-16 rounded-full shadow-md text-sm focus:outline-none"
            type="search"
            placeholder="Search"
          />
          <button
            type="submit"
            class="absolute right-0 top-0 mt-2 mr-4 text-blue-500"
          >
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
      <div class="flex content-center justify-end flex-wrap pr-5 md:pr-12">
        <a class="mx-3" href="#">Login</a>
        <a class="mx-3" href="#">Sign Up</a>
      </div>
    </nav>
    <div class="flex content-center flex-wrap mx-10 md:hidden">
      <div class="relative mx-auto w-full text-gray-800 max-h-full">
        <input
          class="bg-input w-full h-10 px-5 py-2 pr-16 rounded-full shadow-md text-sm focus:outline-none"
          type="search"
          placeholder="Search"
        />
        <button
          type="submit"
          class="absolute right-0 top-0 mt-2 mr-4 text-blue-500"
        >
          <i class="fas fa-search"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
