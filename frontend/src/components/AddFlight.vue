<template>
    <div>
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
      <div class="field">
        <label class="label">Дата Вылета<span class="red">*</span></label>
        <div class="control">
          <input required
            class="input"
            id="data"
            type="date"
            data-uk-datepicker="{format:'DD.MM.YYYY'}"
            placeholder="Дата Вылета"
            v-model="date_departure"  
          />
        </div>
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
        <router-link :to="{ name: 'Index' }" class="button is-danger is-rounded">Назад</router-link>
          &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button margin-right:100px class="button is-success is-rounded" @click="saveFlight" v-bind:disabled="!pric" >Зарегестрировать</button>
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
        date_departure: "",
      };
    },
   
    computed: {

    },
    methods: {
      //create new product
      async saveFlight() {
        try {
          await axios.post("http://localhost:5000/flight", {
            Departure_City: this.Departure,
            Date_Departure : this.date_departure,
            Departure_time: this.d_time,
            Arrival_time: this.a_time,
            Arrival_City: this.Arrival,
            Price: this.pric,
            
            
          });
            (this.Departure = ""),
            (this.date_departure =""),
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
  .input
  {
    width: 500px;
  }
  
    
  
  
  </style>
  