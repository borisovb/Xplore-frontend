<template>
  <div>
    <div class="vertical-center justify-center">
      <div class="text-center">
        <!-- <i class="fa fa-bug fa-beat fa-10x fa-beat mb-3"></i> -->
        <i class="fas fa-exclamation-circle fa-beat fa-10x mb-3"></i>
        <div>
          <p class="text-3xl uppercase">{{ error.message }}</p>
          <nuxt-link to="/"
            >Go back to the home page
            <i class="fas fa-arrow-circle-right align-middle"></i>
          </nuxt-link>
        </div>
      </div>
    </div>
    <nuxt-link to="/">
      <span class="logo">
        <img class="w-24" src="~/static/xplore-white.png" />
      </span>
    </nuxt-link>
    <span class="errorCode">
      <h6>Error [{{ error.statusCode }}]</h6>
    </span>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'clean'
}
</script>
<style scoped>
body {
  background: #373f51 !important;
  color: #fff;
}
a {
  color: #58a4b0;
}
a:hover {
  color: #4a8891;
}
h2 {
  color: #fff;
  text-transform: uppercase;
}
.vertical-center {
  min-height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
}
.logo {
  opacity: 0.8;
  position: fixed;
  left: 20px;
  bottom: 20px;
}
.logo:hover {
  opacity: 1;
}
.errorCode {
  opacity: 0.6;
  position: fixed;
  right: 20px;
  bottom: 20px;
}

.fa-beat {
  -webkit-animation: fa-beat 1s infinite linear;
  animation: fa-beat 1s infinite linear;
}

@-webkit-keyframes fa-beat {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  50% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes fa-beat {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  50% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@media (min-width: 1200px) {
  .modal-xl {
    max-width: 1300px !important;
  }
}
</style>
