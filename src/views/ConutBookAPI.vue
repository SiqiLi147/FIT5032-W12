<template>
<<<<<<< HEAD
    
=======
    <!--
>>>>>>> 14b434c19a44f3e82443fc96ac5a5e09a0a3f166
    <div id="app">
        <h1>Book Counter</h1>
        <button @click="getBookCount">Get Book Count</button>
        <p v-if="count !== null">Total number of books: {{ count }}</p>
        <p v-if="error !== null">Error: {{ error }}</p>
    </div>
<<<<<<< HEAD
    
=======
    -->
>>>>>>> 14b434c19a44f3e82443fc96ac5a5e09a0a3f166
    <pre>{{ jsondata }}</pre>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            jsondata: null,
            error: null
        }
    },
    mounted() {
        this.getBookCountAPI();
    },
    methods: {
        async getBookCountAPI() {
            try {
                const response = await axios.get('https://countbooks-is2i6uh2rq-uc.a.run.app')
                this.jsondata = response.data.count;
                this.error = null;
            } catch (error) {
                this.error = error;
                this.count = null;
            }
        },
    },
};
</script>