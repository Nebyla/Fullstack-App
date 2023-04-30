<template>
  <div>
    <h1>Введите пароль для доступа к админ-панели:</h1>
    <form @submit.prevent="submitPassword">
      <input type="password" v-model="password">
      <button type="submit">Отправить</button>
    </form>
    <div>
    <router-link :to="{ name: 'Index' }" class="button is-danger mt-3 is-rounded">Назад</router-link>
  </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      password: '',
      isAuthorized: false,
    }
  },
  methods: {
  submitPassword() {
    if (this.password === 'admin') {
      this.isAuthorized = true;
      localStorage.setItem('password',JSON.stringify(this.isAuthorized));
      this.$emit('password-entered', this.password);
      this.$router.push('/');
      console.log(this.password)
    } else {
      alert('Неправильный пароль')
    }
  }
}
}
</script>
