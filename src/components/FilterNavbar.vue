<template>
  <div>
    <div class="filter-nav">
      <button :class="{active : current === 'all'}" @click="filterBy('all')">All</button>
      <button :class="{active : current === 'complete'}" @click="filterBy('complete')">Completed</button>
      <button :class="{active : current === 'ongoing'}" @click="filterBy('ongoing')">Ongoing</button>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'current'
  ],
  data() {
    return {

    }
  },
  methods: {
    filterBy(value) {
      this.$emit("filteredValue", value);
    }
  }
}
</script>

<style>

.filter-nav button {
  border: none;
  background: none;
  color: #777;
  padding: 0 0.785rem;
  cursor: pointer;
  margin: 1rem 0;
  font-size: 1rem;
  font-weight: 700;
}
.filter-nav button:hover {
  color: #555;
}
.active {
  color: #333555 !important;
}

</style>