<template>
  <div class="drt">
    <div class="field">
      <label class="label">Имя<span class="red">*</span></label>
      <div class="control">
        <input required
          class="input"
          id="name"
          type="text"
          placeholder="Name"
          v-model="clientName"  
        />
      </div>
    </div>
    <div class="field">
      <label class="label">Фамилия<span class="red">*</span></label>
      <div class="control">
        <input required
          class="input"
          id="surname"
          type="text"
          placeholder="Surname"
          v-model="clientSurname"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">Дата рождение<span class="red">*</span></label>
      <div class="control">
        <input required
          class="input"
          id="data"
          type="date"
          data-uk-datepicker="{format:'DD.MM.YYYY'}"
          placeholder="data_birsday"
          v-model="data_birsday"
        />
      </div>
    </div>
    <div class="field">
  <label class="label">Телефон<span class="red">*</span></label>
  <div class="control">
    <input 
      required
      class="input"
      type="tel"
      pattern="^(\+?\d{1,3}[\s-]?)?\d{10,14}$"
      placeholder="Phone"
      v-model="clientPhone"
    />
  </div>
  <span v-if="!clientPhone || !isValidPhone(clientPhone)">Пожалуйста, введите корректный номер телефона.</span>
</div>
    <div class="field">
  <label class="label">Почта<span class="red">*</span></label>
  <div class="control">
    <input 
      required
      class="input"
      type="email"
      pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
      v-model="clientMail"
    />
  </div>
  <span v-if="!clientMail || !isValidEmail(clientMail)">Пожалуйста, введите корректный адрес электронной почты.</span>
</div>
    <div class="field">
      <label class="label">Серия Паспорта<span class="red">*</span></label>
      <div class="control">
        <input required
          class="input"
          id="seris"
          type="text"
          placeholder="Passport Series"
          v-model="clientPS"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">ID Паспорта<span class="red">*</span></label>
      <div class="control">
        <input required
          class="input"
          id="ID"
          type="text"
          placeholder="Passport ID"
          v-model="clientPId"
        />
      </div>
    </div>
    <div class="control">
      <button class="button is-success" @click="saveClient" v-bind:disabled="!clientPId">Бронировать</button>
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
  computed: {
    isClientPIdValid() {
      return this.clientPId.trim() !== "",this.clientPS.trim() !== "", this.clientMail.trim() !== "", this.clientPhone.trim() !== "", this.data_birsday.trim() !== "", this.clientSurname.trim() !== "", this.clientName.trim() !== "";
    },
  },
  methods: {
    isValidEmail(email) {
      return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    },
    isValidPhone(phone) {
      return /^(\+?\d{1,3}[\s-]?)?\d{10,14}$/.test(phone)
    },
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
