
<template>
  
  <div class="drt" id="root">
    <div class="field">
      <label class="label">Имя<span class="red">*</span></label>
      <div class="control">
        <input required
        
          class="input"
          id="name"
          type="text"
          placeholder="Name"
          v-model="clientName"
          v-for="(item, index) in inputs"
         
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
          v-for="(item, index) in inputs"
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
          v-for="(item, index) in inputs"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">Телефон<span class="red">*</span></label>
      <div class="control">
        <input required
          class="input"
          id="tel"
          type="number"
          pattern="\(+?(\d{3})\)?[-\.\s]?(\d{3})[-\.\s]?(\d{4})"
          placeholder="Phone"
          v-model="clientPhone"
          v-for="(item, index) in inputs"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">Почта<span class="red">*</span></label>
      <div class="control">
        <input required
          class="input"
          id="em"
          type="email"
          pattern="(\w\.?)+@[\w\.-]+\.\w{2,4}."
          placeholder="Mail"
          v-model="clientMail"
          v-for="(item, index) in inputs"
        />
      </div>
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
          v-for="(item, index) in inputs"
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
          v-for="(item, index) in inputs"
        />
      </div>
    </div>
    <div class="control">
      <button  class="button is-success" id="but" @click="saveClient" :disabled="!isButtonEnabled">Бронировать</button>
    </div>
  </div>
</template>

<script>

 
//import axios
import axios from "axios";
export default {
  el: "#root",
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
    inputs:[
    { value: '' },
    { value: '' },
    { value: '' },
    { value: '' },
    { value: '' },
    { value: '' },
    { value: '' },
    ]
  },
  computed: {
    isButtonEnabled() {
      return this.inputs.every(input => input.value !== '');
    },
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
