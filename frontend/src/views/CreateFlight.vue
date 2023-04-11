<template>
    <div class="field">
      <AddFlight />
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import AddFlight from "@/components/AddFlight.vue";
  
  export default {
    name: "CreateFlight",
    components: {
      AddFlight,
    },
  };
  </script>
  <style>.field{text-align:left}</style>
  