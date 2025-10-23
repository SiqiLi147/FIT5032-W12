
<template>
  <div class="main-container">  
    <header>
      <BHeader />
    </header>

    <main>
      <!-- <LibraryRegistrationForm /> -->
      <!-- <JSONLab /> -->
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import JSONLab from './components/JSONLab.vue'
import BHeader from './components/BHeader.vue'
import ConutBookAPI from './views/ConutBookAPI.vue';
// import LibraryRegistrationForm from './components/LibraryRegistrationForm.vue'

export default {
  name: 'App',
  components: {
    BHeader,
    ConutBookAPI
  },
  computed: {
    showHeader() {
      return this.$route.name !== 'CountBookAPI';
    }
  }
};

</script>


<style scoped>
</style>

<style>
.container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 80vw;
  margin: 0 auto;
  padding: 20px;
  /* background-color: #e0bfbf; */
  border-radius: 10px;
}
.about {
  text-align: center;
}
</style>