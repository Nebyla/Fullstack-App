<template>
  
<div>
    <router-link
  :to="{ name: 'PasswordInput' }"
  class="button is-info is-small "
  @click="toggleButtons"
  v-if="Showbotton"
>Вход админа</router-link>
    <button class="button is-danger is-small" @click="logout()" type="submit" 
    v-if="ShowLogout" >Выйти из админа</button>

    <div class="filters">
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Город вылета:</label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control is-expanded">
              <input class="input" type="text" v-model="Departure" />

            </p>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Цена:</label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control is-expanded">
              <input class="input" type="number" v-model="filterPrice" />
            </p>
          </div>
        </div>
      </div>
      <button class="button is-primary is-rounded" @click="searchGenre(),searchDataGenre()">Фильтр</button>

    </div>

<table class="table is-striped is-bordered mt-2 is-fullwidth">
  <thead>
    <tr>
      <th>Город вылета</th>
      <th>Дата вылета</th>
      <th>Время вылета</th>
      <th>Время прилета</th>
      <th>Город прилета</th>
      <th>Цена</th>
      <th class="has-text-centered">Бронировать</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in items" :key="item.Flight_code">
      <td>{{ item.Departure_City }}</td>
      <td>{{ item.Date_Departure }}</td>
      <td>{{ item.Departure_time }}</td>
      <td>{{ item.Arrival_time }}</td>
      <td>{{ item.Arrival_City }}</td>
      <td>{{ item.Price }}</td>
      <td class="has-text-centered">
        <router-link
          :to="{ name: 'Create', params: { id: item.Client_code } }"
          class="button is-info is-small is-rounded"
          >Бронировать</router-link
        >
        <a v-if="this.isAuthorized" class="button is-danger is-small is-rounded" @click="deleteFlight(item.Flight_Code)">Delete</a>
      </td>
    </tr>
  </tbody>
</table>
<div v-if="this.isAuthorized">
      <router-link :to="{ name: 'About' }" class="button is-success is-rounded"
        >Клиенты</router-link>
      <router-link :to="{ name: 'CreateFlight' }" class="button is-success is-rounded" style="float: right;"
        >Добавление Рейсов</router-link>
    </div>

</div>
</template>
<script>
import axios from "axios";

export default {
  
  data() {
    return {
      items: [],
      user:null,
      Departure: "",
      filterPrice: "",
      isAuthorized: false, // добавляем переменную для флага отображения кнопок
      Showbotton: true,
      ShowLogout: false,
      
    };
  },
  created() {
    this.getFlight();
  },
  mounted()
  {
    const StoredUser = localStorage.getItem('password')
    if (StoredUser) {
      this.isAuthorized = true
      this.Showbotton = false
      this.ShowLogout = true
    }
  },
  methods: {
    logout() {
      this.isAuthenticated = false;
      this.user = null;
      location.reload();
      localStorage.removeItem('password');
      this.$router.push("/");
      this.Showbotton = true;
      this.ShowLogout = false;
    },
    async getFlight() {
      try {
        const response = await axios.get("http://localhost:5000/flight");
        this.items = response.data;
        console.log(this.items);
      } catch (err) {
        console.log(err);
      }
    },
    async deleteFlight(id) {
      try {
        await axios.delete(`http://localhost:5000/flight/${id}`);
        this.getFlight();
      } catch (err) {
        console.log(err);
      }
    },
    async searchGenre(){
        try{
        this.items = []
        const response = await axios.get(`http://localhost:5000/genre?q=${this.Departure}`)
        this.items = response.data
        console.log(this.items)
        console.log(this.genre);
        } catch (err){
        console.log(err)
        }
        },
        async searchDataGenre(){
        try{
        this.items = []
        const response = await axios.get(`http://localhost:5000/datagenre?q=${this.filterPrice}`)
        this.items = response.data
        console.log(this.items)
        console.log(this.datagenre);
        
        } catch (err){
        console.log(err)
        }
        }
        
  },
};
</script>
<style>
button {
  border-radius: 20px;
}
table {
  border-radius: 10px;
}
</style>