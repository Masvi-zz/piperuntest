<template>
  <div class="container">
    <sidebar></sidebar>
    <activities></activities>
  </div>
</template>

<script>
import Sidebar from "./Sidebar";
import Activities from "../Activities";

export default {
  components: {
    sidebar: Sidebar,
    activities: Activities
  },
  name: "Home",
  data() {
    return {};
  },
  filters: {},
  methods: {}
};
</script>
