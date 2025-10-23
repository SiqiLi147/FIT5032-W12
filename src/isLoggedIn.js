import { ref } from 'vue'

export const isLoggedIn = ref(false)

// check if user is already logged in
const checkStoredAuth = () => {
  const stored = localStorage.getItem('isLoggedIn')
  if (stored === 'true') {
    isLoggedIn.value = true
  }
}

// initialise authentication state
checkStoredAuth()

//  login function
export const login = () => {
  isLoggedIn.value = true
  localStorage.setItem('isLoggedIn', 'true')
}

// logout function
export const logout = () => {
  isLoggedIn.value = false
  localStorage.removeItem('isLoggedIn')
}