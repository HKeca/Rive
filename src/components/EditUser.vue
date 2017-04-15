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
        <h1 style="text-align: center; color: #2ECC71; padding-top: 15px;" class="loading" v-if="isLoading == true">Loading...</h1>
        <div class="editor">
            <form class="editor-form">
                <div class="form-group">
                    <label for="userId">User ID:</label>
                    <input type="text" class="editor-text" v-model="userId" disabled>
                </div>
                <div class="form-group">
                    <label for="firstName">First Name:</label>
                    <input type="text" class="editor-text" v-model="firstName">
                </div>
                <div class="form-group">
                    <label for="lastName">First Name:</label>
                    <input type="text" class="editor-text" v-model="lastName">
                </div>
                <div class="form-group">
                    <label for="dob">Date of birth:</label>
                    <input type="text" class="editor-text" v-model="dob">
                </div>
                <div class="form-group">
                    <label for="zip">Zip Code:</label>
                    <input type="text" class="editor-text" v-model="zipCode">
                </div>
                <div class="form-group">
                    <button class="btn btn-save" v-on:click="savePerson">Save</button>
                    <router-link to="/" class="btn btn-cancel">Cancel</router-link>
                </div>
            </form>
            <!-- ./form -->
        </div>
        <!-- ./editor -->
    </div>
</template>

<script>
    export default {
        name: 'EditUser',
        data() {
            return {
                // User data
                userId: '',
                firstName: '',
                lastName: '',
                dob: '',
                zipCode: '',
                // is loading?
                isLoading: true,
            }
        },
        methods: {
            getUser() {
                // Get user id
                var p = this.$route.params.userId;

                // Get the user data
                this.fetchPerson(p);
            },

            fetchPerson(person) {
                this.$http.get('http://localhost:8000/uid/' + person)
                    .then(function (response) {
                        // store user data
                        let userData = response.body;
                        // set user data to vars
                        this.userId = userData.uid;
                        this.firstName = userData.firstname;
                        this.lastName = userData.lastname;
                        this.dob = userData.dob;
                        this.zipCode = userData.zip;
                        // Not loading anymore
                        this.isLoading = false;
                    }).catch(err => {
                        console.log(err);
                    });
            },

            savePerson() {
                let updateData = {
                    uid: this.userId,
                    firstname: this.firstName,
                    lastname: this.lastName,
                    dob: this.dob,
                    zip: this.zipCode
                };

                this.$http.put('http://localhost:8000/update', this.updateData, {
                    emulateJSON: true
                }).then(response => {
                    console.log(response);
                }).catch(err => {
                    console.log(err);
                });
            },
        },
        created: function () {  
            this.getUser();
        }
    }

</script>

<style scoped>
    /* I know its bad :( */


    .form-group {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .editor-form h1 {
        font-family: 'Arial';
        font-size: 1.7em;
        font-weight: 400;
    }

    .editor-form label {
        padding: 15px;
        font-size: 1.5em;
        color: #2ECC71;
        text-align: left !important;
    }

    .editor-form input:focus {
        outline: none;
        border: 2px solid #2ECC71;
    }

    .editor-form input {
        font-size: 1.4em;
    }

    .editor-form {
        padding: 30px;
        
    }
    .editor {
        border: 2px solid #2ECC71;
        background: white;
        margin: 20px;
    }

    .btn {
        border: none;
        background: transparent;
        font-size: 25px;
        padding: 0 25px;
    }

    .btn-save {
        border: 2px solid #2ECC71;
        color: #2ECC71;
        cursor: pointer;
        padding: 5px 15px;
    }

    .btn-save:hover {
        background: #2ECC71;
        color: white;
    }

    .btn-cancel {
        text-decoration: none;
        cursor: pointer;
        color: #C0392B;
    }
</style>