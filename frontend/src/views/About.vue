<template>
  <div>
    <ClientList />
  </div>
</template>

<script>
// @ is an alias to /src
import ClientList from "@/components/ClientList.vue";

export default {
  name: "About",
  components: {
    ClientList,
  },
};
</script>