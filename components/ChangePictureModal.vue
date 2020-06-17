<template>
  <modal
    name="change-picture"
    transition="pop-out"
    height="auto"
    :adaptive="true"
    :scrollable="true"
    @before-close="toggleChangePictureModal(false)"
  >
    <div class="text-lg font-normal text-gray-900">
      <div class="text-3xl font-normal m-5">
        <i class="far fa-id-badge text-gray-600"></i> Change Profile Picture
      </div>
    </div>
    <div class="h-10 m-10 flex">
      <label class="field" for="image">
        <i class="fas fa-upload"></i>
        {{ !!file ? file.name : 'Upload image' }}</label
      >
      <input
        id="image"
        ref="uploadedImage"
        type="file"
        class="hidden"
        @change="onImageUpload"
      />
      <div>
        <p v-if="!!errorMsg" class="text-red-500 text-xs italic mt-1">
          {{ errorMsg }}
        </p>
      </div>
    </div>
    <div class="flex mx-10 my-5">
      <div class="ml-auto flex">
        <Btn class="mx-2" @click="toggleChangePictureModal(false)">Cancel</Btn>
        <Btn highlighted @click="onSubmit">Upload</Btn>
      </div>
    </div>
  </modal>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'ChangePictureModal',
  data() {
    return {
      file: '',
      errorMsg: ''
    }
  },
  mounted() {
    this.$modal.show('change-picture')
  },
  methods: {
    ...mapActions('auth', ['toggleChangePictureModal', 'changeProfilePic']),
    onImageUpload() {
      this.file = this.$refs.uploadedImage.files[0]
    },
    async onSubmit() {
      try {
        const formData = new FormData()
        if (this.setupImage !== null) {
          formData.append('file', this.file)
        } else {
          this.errorMsg = 'Please upload a file first.'
        }
        const payload = await this.$api.users.changePicture(
          this.$store.state.auth.user.name,
          formData
        )
        this.$emit('changedProfilePic', payload.image)
        this.changeProfilePic(payload.image)
        this.$toast.open({
          message: `<i class="fas fa-check-circle"></i> You successfully updated your profile picture.`,
          duration: 5000,
          type: 'success',
          position: 'top-right'
        })
        this.toggleChangePictureModal(false)
      } catch (error) {
        this.$toast.open({
          message: '<i class="fas fa-times-circle"></i> Something went wrong.',
          duration: 5000,
          type: 'error',
          position: 'top-right'
        })
      }
    }
  }
}
</script>

<style scoped></style>
