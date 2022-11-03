<template>
  <div class="home">
    <h1 class="center">Project Planner</h1>
    <FilterNavbar @filteredValue="current = $event" :current="current"></FilterNavbar>
    <div v-for="project in filteredProjects" :key="project.id">
      <Project :project="project" @completeProject="completeProject" @delete="deletePro"></Project>
    </div>
  </div>
</template>

<script>
import FilterNavbar from '../components/FilterNavbar'
import Project from '../components/Project'
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
    FilterNavbar,
    Project,
  },
  // props: ['filteredValue'],
  data() {
    return {
      api: "http://localhost:3000/projects",
      projects: [],
      current: "all"
    }
  },
  methods: {
    completeProject(id) {
      let findProject = this.projects.find(project => {
        return project.id === id;
      })
      findProject.complete = !findProject.complete;
    },
    deletePro(id) {
      this.projects = this.projects.filter(project => {
        return project.id != id;
      })
    }
  },
  computed: {
    filteredProjects() {
      if(this.current === "complete" ) {
        return this.projects.filter(project => {
          return project.complete;
        })
      }
      if(this.current === "ongoing" ) {
        return this.projects.filter(project => {
          return !project.complete;
        })
      }
      return this.projects;
    }
  },
  mounted() {
    fetch(this.api)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.projects = data;
    })
    .catch((err) => {
      console.error(err.message());
    })
  }

}
</script>

<style>
.center {
  color: #777;
  text-align: center;
}

</style>