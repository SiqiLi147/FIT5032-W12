<template>
  <div class="container mt-5 text-center">
    <div v-if="isLoggedIn">
      <h1>About Our Library</h1>
      <p>Welcome to our digital library! We're dedicated to providing a vast collection of books and resources to our community.</p>
      <p>This page is only accessible to authenticated users.</p>
    </div>

    <div v-else>
      <h1>Access Denied</h1>
      <p>You must log in to view this page.</p>
      <button class="btn btn-primary mt-3" @click="goToLogin">Login</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { isLoggedIn } from '../isLoggedIn.js'

const router = useRouter()

// click button to login view
const goToLogin = () => {
  router.push('/login')
}
</script>


<style scoped>

</style>