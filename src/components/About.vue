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
      <h1 class="about-head">About</h1>
      <p>
        Rive is a simple data managment tool.<br><br>
        The tech stack<br><br>
        <ul>
          <li>+ NodeJS</li><br>
          <li>+ VueJs</li><br>
          <li>+ Python</li><br>
          <li>+ MySQL</li>
        </ul>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'About Page'
    }
  }
}
</script>

<style scoped>
  .content {
    height: 500px;
    overflow: hidden;
  }

  h1 {
    padding: 25px;
    text-align:center;
    font-weight: normal;
    color: #2ECC71;
    font-size: 50px;
  }

  p {
    padding: 5px;
    text-align: center;
    font-size: 25px;
  }

  .logo {
    font-size: 60px;
    padding: 25px 30px;
    font-weight: 100;
  }
</style>