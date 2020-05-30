<template>
  <div class="grid grid-cols-3 m-12">
    <div>
      <div class="relative pb-9/16">
        <div
          class="h-16 rounded-t-lg w-5/6 bg-gray-900 flex items-center justify-around"
        >
          <div>
            <button
              class="h-8 w-24 rounded-full bg-teal-500 hover:bg-teal-700 active:bg-teal-800 focus:outline-none focus:shadow-outline text-sm"
            >
              <i class="fas fa-play mr-1"></i>
              Trailer
            </button>
          </div>
          <div>
            <button
              class="h-8 w-24 rounded-full bg-gray-700 focus:outline-none focus:shadow-outline text-sm"
            >
              <i class="fas fa-gift mr-1"></i> Wishlist
            </button>
          </div>
          <div>
            <button
              class="h-8 w-24 rounded-full bg-gray-700 focus:outline-none focus:shadow-outline text-sm"
            >
              <i class="fas fa-plus mr-1"></i> Favourite
            </button>
          </div>
        </div>
        <img
          class="absolute h-5/6 w-5/6 rounded-b-lg object-fit"
          src="portal2.jpg"
        />
      </div>
    </div>
    <div class="ml-8" style="margin-left: -24px">
      <h1 class="text-4xl font-bold">{{ name }}</h1>
      <div class="flex">
        <h3 class="text-2xl font-light">10 Nov 2015</h3>
        <i class="xl:ml-4 fab fa-windows text-3xl"></i>
      </div>
      <h3 class="text-2xl font-light">Action, Adventure</h3>
      <h2 class="font-bold text-3xl">About</h2>
      <p class="text-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at augue
        turpis. Etiam interdum at mauris eget facilisis. Praesent rutrum
        lobortis ex sit amet tempus. Nunc a faucibus mi. Proin lobortis, dui
        consequat dignissim porttitor, magna leo rhoncus augue, in venenatis
        ligula est id tortor. Pellentesque tincidunt auctor lobortis.Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Sed at augue turpis. Etiam
        interdum at mauris eget facilisis. Praesent rutrum lobortis ex sit amet
        tempus. Nunc a faucibus mi. Proin lobortis, dui consequat dignissim
        porttitor, magna leo rhoncus augue, in venenatis ligula est id tortor.
        Pellentesque tincidunt auctor lobortis.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
      </p>
    </div>
    <div class="ml-12">
      <h1 class="text-3xl font-bold mb-4">Where to play?</h1>
      <div
        class="relative flex items-center rounded-md bg-gray-700 hover:bg-gray-600 h-12 w-64 mb-2"
      >
        <i class="text-2xl fab fa-steam pl-3"></i>
        <span class="pl-3 font-semibold">
          Steam
        </span>
        <span class="absolute xl:right-0 pr-4">
          $30,99
        </span>
      </div>
      <div
        class="relative flex items-center rounded-md bg-gray-700 hover:bg-gray-600 h-12 w-64 mb-2"
      >
        <i class="text-2xl fab fa-xbox pl-3"></i>
        <span class="pl-3 font-semibold">
          XBOX
        </span>
        <span class="absolute xl:right-0 pr-4">
          $30,99
        </span>
      </div>
      <div
        class="relative flex items-center rounded-md bg-gray-700 hover:bg-gray-600 h-12 w-64 mb-2"
      >
        <i class="text-2xl fab fa-playstation pl-3"></i>
        <span class="pl-3 font-semibold">
          Playstations
        </span>
        <span class="absolute xl:right-0 pr-4">
          $30,99
        </span>
      </div>
      <h1 class="text-3xl mt-10 font-bold">Rating</h1>
      <div class="flex mt-4 w-4/5">
        <div
          class="rounded-l-full w-1/3 bg-green-600 opacity-50 hover:opacity-100  h-10"
        ></div>
        <div class="w-1/4 bg-blue-600 opacity-50 hover:opacity-100  h-10"></div>
        <div
          class="w-1/5 bg-yellow-600 opacity-50 hover:opacity-100 h-10"
        ></div>
        <div
          class="rounded-r-full w-1/6 bg-red-600 hover:opacity-100 opacity-50 h-10"
        ></div>
      </div>
      <div
        class="items-center justify-start mt-4 grid grid-rows-2 grid-flow-col gap-4"
      >
        <div
          class="rounded-lg h-10 w-48 bg-green-600 flex flex-col justify-center text-center"
        >
          Awesome 😲
        </div>
        <div
          class="rounded-lg h-10 w-48 bg-yellow-600 flex flex-col justify-center text-center"
        >
          Meh 😑
        </div>
        <div
          class="rounded-lg h-10 w-48 bg-blue-600 flex flex-col justify-center text-center"
        >
          Good 👍
        </div>
        <div
          class="rounded-lg h-10 w-48 bg-red-600 flex flex-col justify-center text-center"
        >
          Yuck 🤮
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { createRouter } from '../.nuxt/router'
export default {
  name: 'GameDetailsComponent',
  props: ['name']
}
</script>

<style scoped></style>
