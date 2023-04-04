<template>
  <div>
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Name"
          v-model="clientName"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Surname</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Surname"
          v-model="clientSurname"
        />
      </div>
    </div>

    <div class="control">
      <button class="button is-success" @click="updateClient">UPDATE</button>
    </div>
  </div>
</template>

<script>
//import axios
import axios from "axios";

export default {
  data() {
    return {
      clientName: "",
      clientSurname: "",
    };
  },
  created: function () {
    this.getClientById();
  },
  methods: {
    //get product by id
    async getClientById() {
      try {
        const response = await axios.get(
          `http://localhost:5000/client/${this.$route.params.id}`
        );
        this.clientName = response.data.client_name;
        this.clientSurname = response.data.client_surname;
      } catch (err) {
        console.log(err);
      }
    },

    //update product
    async updateClient() {
      try {
        await axios.put(
          `http://localhost:5000/client/${this.$route.params.id}`,
          {
            client_name: this.clientName,
            client_surname: this.clientSurname,
          }
        );
        (this.clientName = ""), (this.clientSurname = "");
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style></style>
