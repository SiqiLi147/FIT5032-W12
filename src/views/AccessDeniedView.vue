<template>
  <div class="container mt-5 text-center">
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6">
        <div class="card border-danger">
          <div class="card-header bg-danger text-white">
            <h2><i class="bi bi-exclamation-triangle"></i> Access Denied</h2>
          </div>
          <div class="card-body">
            <h4 class="card-title text-danger">Authentication Required</h4>
            <p class="card-text">
              You must be logged in to access this page. Please log in with your credentials to continue.
            </p>
            <div class="d-grid gap-2 d-md-block">
              <router-link to="/login" class="btn btn-primary me-md-2">
                <i class="bi bi-box-arrow-in-right"></i> Go to Login
              </router-link>
              <router-link to="/" class="btn btn-secondary">
                <i class="bi bi-house"></i> Back to Home
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No additional logic needed for this view
</script>

<style scoped>
.card {
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card-header {
  border-radius: 15px 15px 0 0 !important;
}

.bi {
  margin-right: 8px;
}
</style>

