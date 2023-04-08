<template>
  <div class="drt">
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
      <label class="label">Дата рождение</label>
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
      <button class="button is-success" @click="updateClient">Обновить</button>
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
        this.clientName = response.data.Client_Name;
        this.clientSurname = response.data.Client_Surname;
        this.data_birsday = response.data.Date_birth;
        this.clientPhone = response.data.Phone_Client;
        this.clientMail = response.data.Mail_Client;
        this.clientPS = response.data.Passport_Series;
        this.clientPId = response.data.Passport_ID;

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
          Client_Name: this.clientName,
          Client_Surname: this.clientSurname,
          Date_birth: this.data_birsday,
          Phone_Client: this.clientPhone,
          Mail_Client: this.clientMail,
          Passport_Series: this.clientPS,
          Passport_ID: this.clientPId,
        });
        (this.clientName = ""), (this.clientSurname = ""),(this.data_birsday = ""),(this.clientPhone = ""),(this.clientMail = ""), (this.clientPS = ""), (this.clientPId = "");
        this.$router.push("/about");

      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style>
.drt{
  left: -190px;
  position:relative;

}
.input
{
  width: 500px;
}
label{left: px;
  position:relative;}
  </style>
