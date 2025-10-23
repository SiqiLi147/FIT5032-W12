<template>

    <div id="app">
        <h1>Book Counter</h1>
        <button @click="getBookCount">Get Book Count</button>
        <p v-if="count !== null">Total number of books: {{ count }}</p>
        <p v-if="error !== null">Error: {{ error }}</p>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            count: null,
            error: null
        }
    },
    methods: {
        async getBookCount() {
            try {
                const response = await axios.get('https://countbooks-is2i6uh2rq-uc.a.run.app')
                this.count = response.data.count;
                this.error = null;
            } catch (error) {
                this.error = error;
                this.count = null;
            }
        },
    },
};
</script>