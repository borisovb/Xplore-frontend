<template>
  <modal
    name="login"
    transition="pop-out"
    height="auto"
    :adaptive="true"
    :scrollable="true"
    @before-close="toggleLoginModal(false)"
  >
    <div class="flex justify-between text-black">
      <div
        class="flex-1 background hidden md:block"
        :style="{
          background:
            'url(' +
            require('@/assets/img/login.jpg') +
            ') no-repeat center center / cover'
        }"
      ></div>
      <div class="flex-1 p-5">
        <form>
          <div class="text-3xl text-center h-full text-gray-800 mb-5">
            LOGIN
          </div>
          <div class="mb-2">
            <label class="label" for="username">Username</label>
            <input
              id="username"
              v-model="$v.username.$model"
              class="field"
              :class="{ 'border-red-500': $v.username.$error }"
              type="text"
              placeholder="Username"
            />
            <div v-show="$v.username.$error && $v.username.$dirty">
              <p
                v-if="!$v.username.required"
                class="text-red-500 text-xs italic mt-1"
              >
                This field is required.
              </p>
            </div>
          </div>

          <div class="mb-2">
            <label class="label" for="password">Password</label>
            <input
              id="password"
              v-model="$v.password.$model"
              class="field"
              :class="{ 'border-red-500': $v.password.$error }"
              type="password"
              placeholder="******************"
            />
            <div v-if="$v.password.$error">
              <p
                v-if="!$v.password.required && $v.password.$dirty"
                class="text-red-500 text-xs italic mt-1"
              >
                This field is required.
              </p>
            </div>
          </div>
          <div v-if="errors !== null">
            <p
              v-for="error in errors"
              :key="error"
              class="text-red-500 text-xs italic mt-1 text-center mt-5"
            >
              {{ error }}
            </p>
          </div>
          <div class="flex items-center justify-center mt-5 mb-2">
            <Btn highlighted class="p-2" :disabled="loading" @click="onSubmit">
              <i v-show="!loading" class="fas fa-user-plus"></i>
              <i v-show="loading" class="fas fa-spinner fa-spin"></i> LOGIN
            </Btn>
          </div>
        </form>
      </div>
    </div>
  </modal>
</template>
<script>
import { required } from 'vuelidate/lib/validators'
import { mapActions } from 'vuex'
export default {
  name: 'LoginModal',
  data() {
    return {
      username: null,
      password: null,
      loading: false,
      errors: null
    }
  },
  mounted() {
    this.$modal.show('login')
  },
  validations: {
    username: { required },
    password: { required }
  },
  methods: {
    ...mapActions('auth', ['login', 'toggleLoginModal']),
    async onSubmit() {
      this.loading = true
      this.$v.$touch()
      if (!this.$v.$invalid) {
        try {
          await this.login({ username: this.username, password: this.password })
          this.$toast.open({
            message:
              '<i class="fas fa-check-circle"></i> Your account was successfully created.',
            duration: 5000,
            type: 'success',
            position: 'top-right'
          })
          this.$modal.hide('login')
        } catch (error) {
          this.errors = error.response.data.non_field_errors
        }
      }
      this.loading = false
    }
  }
}
</script>
<style lang="postcss">
.field {
  @apply appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight;
}
.label {
  @apply block text-gray-700 text-sm font-bold mb-2;
}
</style>
