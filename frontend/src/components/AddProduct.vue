<template>
  <div>
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
      placeholder="Email"
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
      <router-link :to="{ name: 'Index' }" class="button is-danger is-rounded">Назад</router-link>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button margin-right:100px class="button is-success is-rounded" @click="saveClient" v-bind:disabled="!clientPId" >Бронировать</button>
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
        (this.clientName = ""),
          (this.clientSurname = ""),
          (this.data_birsday = ""),
          (this.clientPhone = ""),
          (this.clientMail = ""),
          (this.clientPS = ""),
          (this.clientPId = "");
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
.input
{
  width: 500px;
}
.control {
  margin-bottom: -6px; /* уменьшить отступ между .field элементами */
}
  


</style>
