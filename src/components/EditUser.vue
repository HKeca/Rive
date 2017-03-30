<template>
    <div class="edit">
        <div class="navbar">
            <h1 class="logo">RIVE</h1>
            <ul class="nav">
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link to="/about">About</router-link>
                </li>
            </ul>
            <!-- ./nav -->
        </div>
        <!-- ./navbar -->
        <h1 class="loading" v-if="isLoading == true">Loading...</h1>
        <div class="editor">
            <form class="editor-form">
                <h1 style="text-align: center;">User Id:<br>{{ userData.uid }} </h1>
                <div class="form-group">
                    <label for="firstName">First Name:</label>
                    <input type="text" class="editor-text" id="firstName" :value="userData.firstname">
                </div>
                <div class="form-group">
                    <label for="lastName">First Name:</label>
                    <input type="text" class="editor-text" id="lastName" :value="userData.lastname">
                </div>
                <div class="form-group">
                    <label for="dob">Date of birth:</label>
                    <input type="text" class="editor-text" id="dob" :value="userData.dob">
                </div>
                <div class="form-group">
                    <label for="zip">Zip Code:</label>
                    <input type="text" class="editor-text" id="dob" :value="userData.zip">
                </div>
            </form>
        </div>
        <!-- ./editor -->
    </div>
</template>

<script>
    export default {
        name: 'EditUser',
        data() {
            return {
                userData: [],
                isLoading: true
            }
        },
        methods: {
            getUser() {
                var p = this.$route.params.u;
                this.fetchPerson(p);
            },

            fetchPerson(person) {
                this.$http.get('http://localhost:8000/public/uid/' + person)
                    .then(function (response) {
                        this.userData = response.body;
                        this.isLoading = false;
                    });
            },
        },
        created: function () {
            this.getUser();
        }
    }

</script>

<style scoped>
    .form-group {
        padding: 20px;
        display: flex;
        justify-content: center;
    }

    .editor-form h1 {
        font-family: 'Arial';
        font-size: 1.7em;
        font-weight: 400;
    }

    .editor-form label {
        padding: 20px;
        font-size: 1.5em;
        color: #2ECC71;
    }

    .editor-form input {
        font-size: 1.4em;
    }

    .editor-form {
        padding: 30px;
        
    }
    .editor {
        background: white;
        margin: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
</style>