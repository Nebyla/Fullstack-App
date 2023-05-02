<template>
  <div style="font-family: Arial, sans-serif; padding: 30px; border: 1px solid #ccc; width: 400px;  margin: 0 auto;">
    <h1 style="text-align: center; font-size: 28px;">Авиабилет</h1>
    <hr style="border-top: 2px solid #ccc;">
    <div style="display: flex; justify-content: space-between;">
      <div>
        <p style="font-size: 18px; margin-bottom: 5px;">{{ itemsi.Departure_City }}</p>
        <p style="font-size: 14px; color: #777;">Вылет</p>
        <p style="font-size: 18px; font-weight: bold; margin-bottom: 5px;">{{ itemsi.Date_Departure }}</p>
        <p style="font-size: 14px; color: #777;">{{ itemsi.Departure_time }}</p>
      </div>
      <div>
        <p style="font-size: 18px; margin-bottom: 5px;">{{ itemsi.Arrival_City }}</p>
        <p style="font-size: 14px; color: #777;">Прибытие</p>
        <p style="font-size: 18px; font-weight: bold; margin-bottom: 5px;">{{ itemsi.Date_Departure }}</p>
        <p style="font-size: 14px; color: #777;">{{ itemsi.Arrival_time }}</p>
      </div>
    </div>
    <hr style="border-top: 2px solid #ccc;">
    <div style="display: flex; justify-content: space-between; margin-top: 10px;">
      <p style="font-size: 18px;">{{ items.Client_Name }} {{ items.Client_Surname }}</p>
      <p style="font-size: 18px;">Место № {{ random_number }}</p>
    </div>
    <hr style="border-top: 2px solid #ccc;">
    <div style="display: flex; justify-content: space-between; margin-top: 10px;">
      <div>
        <p style="font-size: 16px;">Билет № {{ items.Client_code }}</p>
        <p style="font-size: 16px;">Серия паспорта:</p>
        <p style="font-size: 16px; margin-top: 5px;">{{ items.Passport_Series }}</p>
      </div>
      <div>
        <img src="https://e7.pngegg.com/pngimages/586/576/png-clipart-airplane-computer-icons-farm-don-carlo-small-boat-anchors-ebay-blue-computer-network.png" alt="Airplane Icon" style="width: 50px; height: 50px;">
      </div>
    </div>
  </div>
  <router-link :to="{ name: 'Index' }" class="button is-danger is-rounded">Назад</router-link>
  <a href="data:text/html;charset=utf-8," download="Ticket.vue">
  <button class="button is-success is-rounded" style="float: right;">Скачать авиабилет</button>
</a>
</template>

<script>
import axios from "axios";

export default { 
  data() {
    return {
        random_number: Math.floor(Math.random() * 56) + 1,
        items: [],
        itemsi: [],
    };
  },
  created() {
    this.getClientTicket();
    this.getFlight();
  },
  methods: {
    //get all products
    async getClientTicket() {
      try {
        const response = await axios.get("http://localhost:5000/ticket");
        this.items = response.data;
        console.log(this.items);
      } catch (err) {
        console.log(err);
      }
    },
    async getFlight() {
      try {
        const response = await axios.get("http://localhost:5000/flight/8");
        this.itemsi = response.data;
        console.log(this.items);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>