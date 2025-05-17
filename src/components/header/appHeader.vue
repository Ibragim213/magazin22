<template>
  <header>
    <div class="logo">
      <img class="phr" src="/src/assets/img/Бирка-Photoroom 1.png" alt="Логотип Camelia" />
    </div>
    <nav>
      <ul class="logo2">
        <li><router-link to="/">О нас</router-link></li>
        <li><router-link to="/tovar">Каталог</router-link></li>
        <li><router-link to="/oplata">Доставка и оплата</router-link></li>
        <li><router-link to="/favorites">Избранное</router-link></li>
        <li><router-link to="/contact">Контакты</router-link></li>
        <li><router-link to="/cart">Корзина</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.logo img {
  height: 120px;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
}

nav ul li {
  margin: 0;
}

nav ul li a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  transition: color 0.3s ease;
}

nav ul li a:hover {
  color: #e05a5a;
}
</style>
