<script setup lang="ts">
import { ref } from 'vue'
import AppFooter from '@/components/footer/appFooter.vue'
import AppHeader from '@/components/header/appHeader.vue'

const currentPage = ref(0)
const pages = ref([
  [
    { name: 'Ежик с яблоком', price: '1200 р.' },
    { name: 'Ежик с яблоком', price: '1200 р.' },
    { name: 'Ежик с яблоком', price: '1200 р.' },
    { name: 'Ежик с яблоком', price: '1200 р.' },
    { name: 'Ежик с яблоком', price: '1200 р.' },
    { name: 'Ежик с яблоком', price: '1200 р.' },
  ],
  [
    { name: 'Заяц с морковкой', price: '1500 р.' },
    { name: 'Заяц с морковкой', price: '1500 р.' },
    { name: 'Заяц с морковкой', price: '1500 р.' },
    { name: 'Заяц с морковкой', price: '1500 р.' },
    { name: 'Заяц с морковкой', price: '1500 р.' },
    { name: 'Заяц с морковкой', price: '1500 р.' },
  ],
  [
    { name: 'Мишка с шариком', price: '1000 р.' },
    { name: 'Мишка с шариком', price: '1000 р.' },
    { name: 'Мишка с шариком', price: '1000 р.' },
    { name: 'Мишка с шариком', price: '1000 р.' },
    { name: 'Мишка с шариком', price: '1000 р.' },
    { name: 'Мишка с шариком', price: '1000 р.' },
  ],
  [
    { name: 'Лиса с вишней', price: '1000 р.' },
    { name: 'Лиса с вишней', price: '1800 р.' },
    { name: 'Лиса с вишней', price: '1300 р.' },
    { name: 'Лиса с вишней', price: '1700 р.' },
    { name: 'Лиса с вишней', price: '1100 р.' },
    { name: 'Лиса с вишней', price: '1800 р.' },
  ],
])

const nextPage = () => {
  currentPage.value = (currentPage.value + 1) % pages.value.length
}

const setPage = (index) => {
  currentPage.value = index
}
</script>

<template>
  <AppHeader />
  <main>
    <section class="hero">
      <div class="hero-content">
        <h1>Магазин игрушек Camelia</h1>
        <p>Волшебный мир игрушек, подарки своему ребенку радость и веселье.</p>
        <p>Россия, Ростов-на-Дону</p>
      </div>
      <div class="hero-image">
        <div class="placeholder">
          <img src="/src/assets/img/images.jpeg" alt="Изображение игрушки" />
        </div>
      </div>
    </section>
  </main>

  <section class="catalog">
    <h2>Каталог</h2>
    <p>Здесь представлены лучшие товары, которые вы можете заказать, заполнив анкету.</p>
    <div class="catalog-items container">
      <div class="catalog-item" v-for="(item, index) in pages[currentPage]" :key="index">
        <div class="placeholder"></div>
        <p>{{ item.name }}</p>
        <button>{{ item.price }}</button>
      </div>
    </div>
    <div class="pagination">
      <button
        v-for="(page, index) in pages"
        :key="index"
        :class="{ active: currentPage === index }"
        @click="setPage(index)"
      >
        {{ index + 1 }}
      </button>
      <button @click="nextPage">Дальше</button>
    </div>
  </section>

  <section class="delivery">
    <div class="delivery-content container">
      <h2>Доставка и оплата</h2>
      <p>
        На выбор предложены следующие способы оплаты: <br />
        1. банковским переводом на наш расчётный счёт <br />
        2. банковским переводом с карты на карту <br />
        Информация по каждому способу оплаты предоставлена в форме при оформлении заказа, выбираете
        удобный вам способов, ставите галочку, появляются необходимые реквизиты. Доставка: 1.
        доставка курьером по СПб осуществляется по указанному в Вашей анкете адресу 2. доставка
        курьером СДЕК из рук в руки по Ленобласти, а также в 87 регионах РФ. 3. доставка в Пункты
        Выдачи товаров СДЕК - самовывоз
        <a
          target="_blank"
          rel="noopener noreferrer nofollow"
          title="нажмите, что бы посмотреть карту офисов SDEK"
          href="https://www.cdek.ru/ru/offices/"
          >курьерской компании Сдек – более 5000 сервисных точек по России.</a
        >
      </p>
      <span>Доставка осуществляется на следующий день после вашей заявки.</span>
      <div class="but">
        <router-link to="/oplata">
          <button class="learn-more"><span>Подробнее</span></button>
        </router-link>
      </div>
    </div>
    <AppFooter />
  </section>
</template>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 50px 20px;
  background-color: #fff;
}

.hero-content {
  text-align: center;
  max-width: 500px;
}

.hero h1 {
  font-size: 2.5em;
  margin-bottom: 10px;
  color: black;
}

.hero p {
  font-size: 1.2em;
  color: #666;
  margin-bottom: 10px;
}

.hero-image {
  margin-left: 20px;
}

.placeholder {
  width: 379px;
  height: 420px;

  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.placeholder img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.footer-content p {
  font-size: 1.2em;
  color: #666;
  margin-bottom: 20px;
}

.footer-content button {
  background-color: #ff6b6b;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.footer-content button:hover {
  background-color: #000000;
}

.footer-map img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.catalog h2 {
  font-size: 2em;
  margin-bottom: 10px;
  text-align: center;
}

.catalog p {
  font-size: 1.2em;
  color: #666;
  text-align: center;
  margin-bottom: 20px;
}

.catalog-items {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.catalog-item {
  text-align: center;
  width: calc(33.333% - 20px); /* 3 items per row */
  box-sizing: border-box;
}

.catalog-item .placeholder {
  width: 100%;
  height: 300px;
  background-color: #e0e0e0;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.catalog-item .placeholder img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.catalog-item button {
  background-color: #ff6b6b;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  border-radius: 20px;
  transition: background-color 0.3s ease;
}

.catalog-item button:hover {
  background-color: #e05a5a;
}

.pagination {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}

.pagination button {
  background-color: #ff6b6b;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.pagination button.active {
  background-color: #e05a5a;
}

.pagination button:hover {
  background-color: #e05a5a;
}

/* доставка и оплата */
.delivery {
  margin-top: 65px;
}

.delivery-content h2 {
  margin-bottom: 42px;
  font-size: 2.25em;
  font-weight: 600;
  color: #1e1e1e;
  letter-spacing: -5%;
}

.delivery-content p {
  font-size: 1.625em;
  font-weight: 400;
  letter-spacing: -5px;
}

.delivery-content a {
  color: #1e1e1e;
}

.delivery-content span {
  margin-top: 30px;
}

.but {
  width: 100%;
  display: flex;
  justify-content: end;
  margin-top: 75px;
}

.but button {
  background-color: #d8a6b8;
  border: none;
  border-radius: 20px;
  text-align: center;
  padding: 20px 60px;
}

.but button span {
  color: #1e1e1e;
  font-weight: 400;
  font-size: 1.25em;
  letter-spacing: -5px;
  font-family: 'Klee One';
}
</style>
