<template>
  <div class="container">
    <sidebar></sidebar>
    <activities></activities>
  </div>
</template>

<script>
import Activities from "./Activities";
import Sidebar from "../components/main/Sidebar";
import CreateActivities from "../components/CreateActivities";

export default {
  components: {
    sidebar: Sidebar,
    activities: Activities,
    createActivities: CreateActivities
  },
  name: "Home",
  data() {
    return {};
  },
  filters: {},
  methods: {}
};
</script>



