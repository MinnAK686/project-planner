<template>
  <div>
    <nav class="navbar">
      <router-link :to="{name: 'home'}">Projects</router-link>
      <router-link :to="{name: 'add-project'}">Add Project</router-link>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style>

.navbar {
  display: flex;
  justify-content: space-between;
}
.navbar a {
  color: #777;
  text-decoration: none;
  font-size: 1.2rem;
  
}

</style>