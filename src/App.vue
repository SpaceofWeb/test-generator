<template>
  <div id="app">
    <b-navbar class="navbar" toggleable="lg" type="dark" variant="dark">
      <b-container>
        <router-link to="/"><b-navbar-brand>Test Generator</b-navbar-brand></router-link>
        <b-navbar-nav class="ml-auto">
           <router-link to="/create"><b-button variant="outline-light">Создать тест</b-button></router-link>
        </b-navbar-nav>
      </b-container>
    </b-navbar>

    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
@media print {
  .navbar{
    display: none; 
  }
}
</style>
