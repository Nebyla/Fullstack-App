<template>
  <div>
    <router-link :to="{ name: 'Create' }" class="button is-success mt-5"
      >Add New</router-link
    >
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th class="has-text-centered">Tickets</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.Client_code">
          <td>
            {{ item.client_name }}
          </td>
          <td>{{ item.client_surname }}</td>
          <td class="has-text-centered">
            <router-link
              :to="{ name: 'Edit', params: { id: item.Client_code } }"
              class="button is-info is-small"
              >Edit</router-link
            >
            <a
              class="button is-danger is-small"
              @click="deleteClient(item.Client_code)"
              >Delete</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
//import axios
import axios from "axios";

export default {
  data() {
    return {
      items: [],
    };
  },
  created() {
    this.getClient();
  },
  methods: {
    //get all products
    async getClient() {
      try {
        const response = await axios.get("http://localhost:5000/client");
        this.items = response.data;
        console.log(this.items);
      } catch (err) {
        console.log(err);
      }
    },
    //delete product
    async deleteClient(code) {
      try {
        await axios.delete(`http://localhost:5000/client/${code}`);
        this.getClient();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style></style>
