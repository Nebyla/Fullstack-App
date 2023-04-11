<template>
  <div>
    <router-link :to="{ name: 'About' }" class="button is-success mt-5"
      >Клиенты</router-link
    >
    <router-link :to="{ name: 'CreateFlight' }" class="button is-success mt-5"
      >Добавление Рейсов</router-link
    >
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>Город вылета</th>
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
          <td>{{ item.Departure_time }}</td>
          <td>{{ item.Arrival_time }}</td>
          <td>{{ item.Arrival_City }}</td>
          <td>{{ item.Price }}</td>
          <td class="has-text-centered">
            <router-link
              :to="{ name: 'Create', params: { id: item.Client_code } }"
              class="button is-info is-small"
              >Бронировать</router-link
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
    this.getFlight();
  },
  methods: {
    //get all products
    async getFlight() {
      try {
        const response = await axios.get("http://localhost:5000/flight");
        this.items = response.data;
        console.log(this.items);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style></style>
