<template>
  <div>
    <router-link :to="{ name: 'Index' }" class="button is-danger mt-5 is-rounded" >Назад</router-link>
    <div class="filters">
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Телефон:</label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control is-expanded">
              <input class="input" type="tel" v-model="Telephone" style="width: 85%;"/>

            </p>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Серия Паспорта:</label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control is-expanded">
              <input class="input" type="number" v-model="filterPS" style="width: 85%;"/>
            </p>
          </div>
        </div>
      </div>
      <button class="button is-primary is-rounded is-pulled-right" @click="multiplyActions(),searchTelGenre()">Фильтр</button>

    </div>
    <table class="table is-striped is-bordered mt-4 is-fullwidth" style="width: 100%; max-width: 1200px;">
      <thead>
        <tr>
          <th>Имя</th>
          <th>Фамилия</th>
          <th>Дата рождение</th>
          <th>Телефон</th>
          <th>Почта</th>
          <th>Серия Паспорта</th>
          <th>ID Паспорта</th>
          <th class="has-text-centered">Обновить</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.Client_code">
          <td>{{ item.Client_Name }}</td>
          <td>{{ item.Client_Surname }}</td>
          <td>{{ item.Date_birth }}</td>
          <td>{{ item.Phone_Client }}</td>
          <td>{{ item.Mail_Client }}</td>
          <td>{{ item.Passport_Series }}</td>
          <td>{{ item.Passport_ID }}</td>
          <td class="has-text-centered">
            <router-link :to="{ name: 'Edit', params: { id: item.Client_code } }" class="button is-info is-small is-rounded">Обновить</router-link>
            <a class="button is-danger is-small is-rounded" @click="deleteClient(item.Client_code)">Delete</a>
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
    multiplyActions() {
    this.searchPSGenre();
    this.searchTelGenre();
    this.searchPSGenre();
    },
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
    async deleteClient(id) {
      try {
        await axios.delete(`http://localhost:5000/client/${id}`);
        this.getClient();
      } catch (err) {
        console.log(err);
      }
    },
    async searchTelGenre(){
      try{
        this.items = []
        const response = await axios.get(`http://localhost:5000/telgenre?q=${this.Telephone}`)
        this.items = response.data
        console.log(this.items)
        console.log(this.telgenre);
      } catch (err){
        console.log(err)
      }
    },
    async searchPSGenre(){
      try{
        this.items = []
        const response = await axios.get(`http://localhost:5000/psgenre?q=${this.filterPS}`)
        this.items = response.data
        console.log(this.items)
        console.log(this.psgenre);
      } catch (err){
        console.log(err)
      }
    },
  },
};
</script>

<style>
table {
  width: 100%;
  max-width: 1200px;
}
tbody
{
  width: 100%;
  max-width: 1200px;
}
</style>
