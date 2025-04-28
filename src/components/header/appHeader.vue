<template>
  <header>
    <div class="logo">
      <router-link to="/"
        ><img class="phr" src="/src//assets/img/Бирка-Photoroom 1.png" alt="Логотип Camelia"
      /></router-link>
    </div>
    <nav>
      <ul class="logo2">
        <li><a href="#">О нас</a></li>
        <li>
          <router-link to="/tovar"><a href="#">Каталог</a></router-link>
        </li>
        <li><router-link to="/oplata">Доставка и оплата</router-link></li>
        <li><a href="#">Контакты</a></li>
      </ul>
    </nav>
  </header>
</template>
<style scoped>
header {
  padding: 20px;
  display: flex;
  align-items: center;
}

.logo img {
  height: 120px;
}

.logo2 {
  margin-left: 300px;
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
