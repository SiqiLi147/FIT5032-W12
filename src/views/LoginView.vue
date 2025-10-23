<template>
  <div class="container mt-5">
    <h1 class="text-center">Library Login</h1>
    <form @submit.prevent="login" class="mt-4">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input id="email" v-model="email" type="email" class="form-control" />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input id="password" v-model="password" type="password" class="form-control" />
      </div>
      <div class="text-center">
        <button type="submit" class="btn btn-primary">Login via Firebase</button>
      </div>
      <div v-if="error" class="text-danger text-center mt-2">{{ error }}</div>
      <div class="text-center mt-3">
        <router-link to="/register">Create an account</router-link>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { isLoggedIn } from '../isLoggedIn.js'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

const login = async () => {
  error.value = ''
  const auth = getAuth()
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value)
    isLoggedIn.value = true
    router.push('/about')
  } catch (e) {
    error.value = e.code || 'Login failed'
  }
}

</script>
