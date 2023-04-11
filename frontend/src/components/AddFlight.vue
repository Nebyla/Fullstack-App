<template>
    <div class="drt">
      <label class="label">Рейс </label>
      <div class="field">
        <label class="label">Город Вылета<span class="red">*</span></label>
        <div class="control">
          <input required
            class="input"
            id="name"
            type="text"
            placeholder="Город Вылета"
            v-model="Departure"  
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Время вылета<span class="red">*</span></label>
        <div class="control">
          <input required
            class="input"
            id="surname"
            type="time"
            placeholder="Время вылета"
            v-model="d_time"
          />
        </div>
      </div>
      <div class="field">
    <label class="label">Время прилета<span class="red">*</span></label>
    <div class="control">
      <input 
        required
        class="input"
        type="time"
        placeholder="Время прилета"
        v-model="a_time"
      />
    </div>
  </div>
      <div class="field">
    <label class="label">Город прилета<span class="red">*</span></label>
    <div class="control">
      <input 
        required
        class="input"
        type="text"
        placeholder="Город прилета"
        v-model="Arrival"
      />
    </div>
  </div>
      <div class="field">
        <label class="label">Цена<span class="red">*</span></label>
        <div class="control">
          <input required
            class="input"
            id="seris"
            type="text"
            placeholder="Цена"
            v-model="pric"
          />
        </div>
      </div>
      <div class="control">
        <router-link :to="{ name: 'Index' }" class="button is-danger">Назад</router-link>
        <button margin-right:100px class="button is-success" @click="saveFlight" v-bind:disabled="!pric" >Зарегестрировать</button>
      </div>
    </div>
  </template>
  
  <script>
  //import axios
  import axios from "axios";
  export default {
    data() {
      return {
        Departure: "",
        d_time: "",
        a_time: "",
        Arrival: "",
        pric: "",
      };
    },
    computed: {

    },
    methods: {
      //create new product
      async saveFlight() {
        try {
          await axios.post("http://localhost:5000/flight", {
            Departure: this.Departure_City,
            d_time: this.Departure_time,
            a_time: this.Arrival_time,
            Arrival: this.Arrival_City,
            pric: this.Price,
          });
            (this.Departure = ""),
            (this.d_time = ""),
            (this.a_time = ""),
            (this.Arrival = ""),
            (this.pric = ""),
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
    left: -450px;
    position:relative;
  }
  .input
  {
    width: 500px;
  }
  label{left: px;
    position:relative;}
  
    
  
  
  </style>
  