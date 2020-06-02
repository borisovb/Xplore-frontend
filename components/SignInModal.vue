<template>
  <modal
    name="signin"
    transition="pop-out"
    height="auto"
    :adaptive="true"
    :scrollable="true"
    @before-close="toggleSignUpModal(false)"
  >
    <div class="flex justify-between text-black">
      <div
        class="flex-1 background hidden md:block"
        :style="{
          background:
            'url(' +
            require('@/assets/img/register.jpg') +
            ') no-repeat center center / cover'
        }"
      ></div>
      <div class="flex-1 p-5">
        <form>
          <div class="text-3xl text-center h-full text-gray-800 mb-5">
            SIGN UP
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
              <p
                v-if="!$v.username.between"
                class="text-red-500 text-xs italic mt-1"
              >
                The username must be a least 4 characters
              </p>
            </div>
          </div>

          <div class="mb-2">
            <label class="label" for="email">Email </label>
            <input
              id="email"
              v-model="$v.email.$model"
              class="field"
              :class="{ 'border-red-500': $v.email.$error }"
              type="email"
              placeholder="Email"
            />
            <div v-if="$v.email.$error && $v.email.$dirty">
              <p
                v-if="!$v.email.required"
                class="text-red-500 text-xs italic mt-1"
              >
                This field is required.
              </p>
              <p
                v-if="!$v.email.email"
                class="text-red-500 text-xs italic mt-1"
              >
                The provided email is not valid
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
              <p
                v-if="!$v.password.minLength"
                class="text-red-500 text-xs italic mt-1"
              >
                The password must be a least 8 characters
              </p>
            </div>
          </div>

          <div class="mb-2">
            <label class="label" for="repeatPassword">Repeat Password</label>
            <input
              id="repeatPassword"
              v-model="$v.repeatPassword.$model"
              class="field"
              :class="{ 'border-red-500': $v.repeatPassword.$error }"
              type="password"
              placeholder="******************"
            />
            <div v-if="$v.repeatPassword.$error && $v.repeatPassword.$dirty">
              <p
                v-if="!$v.repeatPassword.required"
                class="text-red-500 text-xs italic mt-1"
              >
                This field is required.
              </p>
              <p
                v-if="!$v.repeatPassword.sameAsPassword"
                class="text-red-500 text-xs italic mt-1"
              >
                The passwords does not match
              </p>
            </div>
          </div>

          <div class="flex items-center justify-center mt-5 mb-2">
            <Btn highlighted class="p-2" :disabled="loading" @click="onSubmit">
              <i v-show="!loading" class="fas fa-user-plus"></i>
              <i v-show="loading" class="fas fa-spinner fa-spin"></i> SIGN UP
            </Btn>
          </div>
        </form>
      </div>
    </div>
  </modal>
</template>
<script>
import { required, email, sameAs, minLength } from 'vuelidate/lib/validators'
import { mapActions } from 'vuex'
export default {
  name: 'SignInModal',
  data() {
    return {
      username: null,
      email: null,
      password: null,
      repeatPassword: null,
      loading: false
    }
  },
  mounted() {
    this.$modal.show('signin')
  },
  validations: {
    username: { required, minLength: minLength(4) },
    email: { required, email },
    password: { required, minLength: minLength(8) },
    repeatPassword: { required, sameAsPassword: sameAs('password') }
  },
  methods: {
    ...mapActions('auth', ['login', 'toggleSignUpModal']),
    async onSubmit() {
      this.loading = true
      this.$v.$touch()
      if (!this.$v.$invalid) {
        try {
          await this.$api.users.signup(this.username, this.email, this.password)
          await this.login({ username: this.username, password: this.password })
          this.$toast.open({
            message:
              '<i class="fas fa-check-circle"></i> Your account was successfully created.',
            duration: 5000,
            type: 'success',
            position: 'top-right'
          })
          this.$modal.hide('signin')
        } catch (error) {
          this.$toast.open({
            message:
              '<i class="fas fa-times-circle"></i> Something went wrong.',
            duration: 5000,
            type: 'error',
            position: 'top-right'
          })
          this.$modal.hide('signin')
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
