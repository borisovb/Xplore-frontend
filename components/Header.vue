<template>
  <nav
    class="flex items-center justify-between flex-wrap bg-grey-500 px-4 py-3"
  >
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <svg
        class="fill-current h-8 w-8 mr-2"
        width="54"
        height="54"
        viewBox="0 0 54 54"
        xmlns="http://www.w3.org/2000/svg"
      ></svg>
      <span class="font-semibold text-xl tracking-tight">XPlore</span>
    </div>
    <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white rounded-full"
      >
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>

    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a
          href=""
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >
          Home
        </a>
        <a
          href="#responsive-header"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >
          Games
        </a>
        <a
          href="#responsive-header"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
        >
          Platforms
        </a>
      </div>

      <div class="searchBox px-3">
        <input class="searchInput" type="text" name="" placeholder="Search" />
        <button class="searchButton" href="#">
          <i class="material-icons">
            search
          </i>
        </button>
      </div>

      <div>
        <a
          href="#"
          class="rounded-full inline-block text-sm px-4 py-2 mr-3 leading-none border rounded text-white border-teal hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >Sign Up</a
        >
      </div>
      <div>
        <a
          href="login"
          class="rounded-full inline-block text-sm px-4 py-2 leading-none border rounded text-white border-teal hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >Login</a
        >
      </div>
    </div>
  </nav>
</template>

<style scoped>
searchBox {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  background: #2f3640;
  height: 40px;
  border-radius: 40px;
  padding: 10px;
}

.searchBox:hover > .searchInput {
  width: 240px;
  padding: 0 6px;
}

.searchBox:hover > .searchButton {
  background: white;
  color: #2f3640;
}

.searchButton {
  color: white;
  float: right;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #2f3640;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
}

.searchInput {
  border: none;
  background: none;
  outline: none;
  float: left;
  padding: 0;
  color: white;
  font-size: 16px;
  transition: 0.4s;
  line-height: 40px;
  width: 0px;
}

@media screen and (max-width: 620px) {
  .searchBox:hover > .searchInput {
    width: 150px;
    padding: 0 6px;
  }
}
</style>
