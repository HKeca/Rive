<template>
  <div class="Home">
    <div class="navbar">
      <h1 class="logo">RIVE</h1>
      <ul class="nav">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
      <!-- ./nav -->
    </div>
    <!-- ./navbar -->

    <div class="content">
      
      <table class="rive-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of birth</th>
            <th>Zip Code</th>
            <th class="col-manage">Manage</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="person in persons">
            <td>{{ person.firstname }}</td>
            <td>{{ person.lastname }}</td>
            <td>{{ person.dob }}</td>
            <td>{{ person.zip }}</td>
            <td class="col-manage"><router-link class="rive-table-edit" :to="{ name: 'EditUser', params: { u: person.uid}}">Edit</router-link> <a href="#" class="rive-table-remove">Remove</a></td>
          </tr>
        </tbody>
      </table>
      <!-- ./rive-table -->
      <h1 class="loading" v-if="isLoading == true">Loading...</h1>
    </div>
    <!-- ./content -->
  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        persons: [],
        isLoading: true
      }
    },
    methods: {
      fetchPersons() {
        this.$http.get('http://localhost:8000/persons')
          .then(function(response) {
            this.persons = response.body;
            this.isLoading = false;
          });
      }
    },

    created: function() {
      this.fetchPersons();
    }
  }

</script>


<style scoped>
  @import url("../assets/home.css");

  .loading {
    font-size: 36px;
    color: #2ECC71;
    font-weight: 100;
    text-align: center;
    padding: 25px;
  }
</style>