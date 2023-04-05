<template>
  <div>
    <div class="field">
      <label class="label">Имя<span class="red">*</span></label>
      <div class="control">
        <input required
          class="input"
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
        <input required
          class="input"
          type="number"
          pattern="\(+?(\d{3})\)?[-\.\s]?(\d{3})[-\.\s]?(\d{4})"
          placeholder="Phone"
          v-model="clientPhone"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">Почта<span class="red">*</span></label>
      <div class="control">
        <input required
          class="input"
          type="email"
          pattern="(\w\.?)+@[\w\.-]+\.\w{2,4}."
          placeholder="Mail"
          v-model="clientMail"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">Серия Паспорта<span class="red">*</span></label>
      <div class="control">
        <input required
          class="input"
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
          type="text"
          placeholder="Passport ID"
          v-model="clientPId"
        />
      </div>
    </div>
    <div class="control">
      <button class="button is-success" @click="saveClient">Бронировать</button>
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

<style>
div{
  left: -32px;
  position:relative;

}
.input
{
  width: 500px;
}
label{left: -32px;
  position:relative;}

</style>
