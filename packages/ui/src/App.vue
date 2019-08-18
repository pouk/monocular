<template lang="pug">
  div#app.box
    nav#nav.row.row-header
      div
        router-link(to="/") Home
      div
        router-link(to="/about") About
    router-view.row.row-content
    footer.row.row-footer
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

html,
body {
  height: 100%;
  margin: 0
}

.box {
  display: flex;
  flex-flow: column;
  height: 100%;
}

.box .row {
  outline: 1px dotted grey;
}

.box .row.row-header {
  flex: 0 1 auto;
  /* The above is shorthand for:
  flex-grow: 0,
  flex-shrink: 1,
  flex-basis: auto
  */
}

.box .row.row-content {
  flex: 1 1 auto;
}

.box .row.row-footer {
  flex: 0 1 40px;
}
</style>
