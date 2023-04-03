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

    <div class="field">
      <label class="label">data_birsday</label>
      <div class="control">
        <input
          class="input"
          type="date"
          data-uk-datepicker="{format:'DD.MM.YYYY'}"
          placeholder="data_birsday"
          v-model="data_birsday"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Phone</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Phone"
          v-model="clientPhone"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Mail</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Mail"
          v-model="clientMail"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Passport Series</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Passport Series"
          v-model="clientPS"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Passport ID</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Passport ID"
          v-model="clientPId"
        />
      </div>
    </div>
    

    

    <div class="control">
      <button class="button is-success" @click="saveClient">SAVE</button>
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
      data_birsday: "",
      clientPhone: "",
      clientMail: "",
      clientPS: "",
      clientPId: "",
    };
  },
  methods: {
    //create new product
    async saveClient() {
      try {
        await axios.post("http://localhost:5000/client", {
          client_name: this.clientName,
          client_surname: this.clientSurname,
          Date_birth: this.data_birsday,
          phone_client: this.clientPhone,
          mail_client: this.clientMail,
          passport_series: this.clientPS,
          passport_id: this.clientPId,

        });
        (this.clientName = ""), (this.clientSurname = ""),(this.data_birsday = ""),(this.clientPhone = ""),(this.clientMail = ""), (this.clientPS = ""), (this.clientPId = "");
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style></style>
