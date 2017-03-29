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

        <div class="editor">
            <h1>Edit user: {{ userData.firstname }}</h1><br>
            <h1>Last name: {{userData.lastname}}</h1><br>
            <h1>Date of birth: {{userData.dob}}</h1><br>
            <h1>Zip Code: {{userData.zip}}</h1><br>
        </div>
        <!-- ./editor -->
    </div>
</template>

<script>
    export default {
        name: 'EditUser',
        data() {
            return {
                userData: []
            }
        },
        methods: {
            getUser() {
                var p = this.$route.query.userName;
                this.fetchPerson(p);
            },

            fetchPerson(person) {
                this.$http.get('http://localhost:8000/public/uid/' + person)
                    .then(function (response) {
                        this.userData = response.body;
                        console.log(response.body);
                    });
            },
        },
        created: function () {
            this.getUser();
        }
    }

</script>

<style scoped>
    h1 {
        text-align: center;
    }
</style>