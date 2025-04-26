<script setup lang="ts">
import AppFooter from '@/components/footer/appFooter.vue'
import AppHeader from '@/components/header/appHeader.vue'
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
        <div class="placeholder"></div>
      </div>
    </section>
  </main>

  <section class="catalog">
    <h2>Каталог</h2>
    <p>Здесь представлены лучшие товары, которые вы можете заказать, заполнив анкету.</p>
    <div class="catalog-items container" id="catalog-items">
      <!-- Первая страница -->
      <div class="catalog-page" id="page1">
        <div class="catalog-item">
          <div class="placeholder"></div>
          <p>Мишка с шариком</p>
          <button>1000 р.</button>
        </div>
        <div class="catalog-item">
          <div class="placeholder"></div>
          <p>Мишка с шариком</p>
          <button>1000 р.</button>
        </div>
        <div class="catalog-item">
          <div class="placeholder"></div>
          <p>Мишка с шариком</p>
          <button>1000 р.</button>
        </div>
        <div class="catalog-item">
          <div class="placeholder"></div>
          <p>Мишка с шариком</p>
          <button>1000 р.</button>
        </div>
        <div class="catalog-item">
          <div class="placeholder"></div>
          <p>Мишка с шариком</p>
          <button>1000 р.</button>
        </div>
        <div class="catalog-item">
          <div class="placeholder"></div>
          <p>Мишка с шариком</p>
          <button>1000 р.</button>
        </div>
      </div>
      <!-- Вторая страница -->
      <div class="catalog-page" id="page2" style="display: none">
        <div class="catalog-item">
          <div class="placeholder"></div>
          <p>Заяц с морковкой</p>
          <button>1500 р.</button>
        </div>
        <div class="catalog-item">
          <div class="placeholder"></div>
          <p>Заяц с морковкой</p>
          <button>1500 р.</button>
        </div>
        <div class="catalog-item">
          <div class="placeholder"></div>
          <p>Заяц с морковкой</p>
          <button>1500 р.</button>
        </div>
        <div class="catalog-item">
          <div class="placeholder"></div>
          <p>Заяц с морковкой</p>
          <button>1500 р.</button>
        </div>
        <div class="catalog-item">
          <div class="placeholder"></div>
          <p>Заяц с морковкой</p>
          <button>1500 р.</button>
        </div>
        <div class="catalog-item">
          <div class="placeholder"></div>
          <p>Заяц с морковкой</p>
          <button>1500 р.</button>
        </div>
      </div>
      <!-- Третья страница -->
      <div class="catalog-page" id="page3" style="display: none">
        <div class="catalog-item">
          <div class="placeholder"></div>
          <p>Ежик с яблоком</p>
          <button>1200 р.</button>
        </div>
        <div class="catalog-item">
          <div class="placeholder"></div>
          <p>Ежик с яблоком</p>
          <button>1200 р.</button>
        </div>
        <div class="catalog-item">
          <div class="placeholder"></div>
          <p>Ежик с яблоком</p>
          <button>1200 р.</button>
        </div>
        <div class="catalog-item">
          <div class="placeholder"></div>
          <p>Ежик с яблоком</p>
          <button>1200 р.</button>
        </div>
        <div class="catalog-item">
          <div class="placeholder"></div>
          <p>Ежик с яблоком</p>
          <button>1200 р.</button>
        </div>
        <div class="catalog-item">
          <div class="placeholder"></div>
          <p>Ежик с яблоком</p>
          <button>1200 р.</button>
        </div>
      </div>
      <!-- Четвертая страница -->
      <div class="catalog-page" id="page4" style="display: none">
        <div class="catalog-item">
          <div class="placeholder"></div>
          <p>Лиса с вишней</p>
          <button>1800 р.</button>
        </div>
        <div class="catalog-item">
          <div class="placeholder"></div>
          <p>Лиса с вишней</p>
          <button>1800 р.</button>
        </div>
        <div class="catalog-item">
          <div class="placeholder"></div>
          <p>Лиса с вишней</p>
          <button>1800 р.</button>
        </div>
        <div class="catalog-item">
          <div class="placeholder"></div>
          <p>Лиса с вишней</p>
          <button>1800 р.</button>
        </div>
        <div class="catalog-item">
          <div class="placeholder"></div>
          <p>Лиса с вишней</p>
          <button>1800 р.</button>
        </div>
        <div class="catalog-item">
          <div class="placeholder"></div>
          <p>Лиса с вишней</p>
          <button>1800 р.</button>
        </div>
      </div>
    </div>
    <div class="pagination">
      <button id="page1-btn" class="active">1</button>
      <button id="page2-btn">2</button>
      <button id="page3-btn">3</button>
      <button id="page4-btn">4</button>
      <button id="next-btn">Дальше</button>
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
        удобный вам спосособ, ставите галочку, появляются необходимые реквизиты. Доставка: 1.
        доставка курьером по СПб осуществляется по указанному в Вашей анкете адресу 2. доставка
        курьером СДЕК из рук в руки по Ленобласти,а так же в 87 регионах РФ. 3. доставка в Пункты
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
        <button class="learn-more"><span>Подробнее</span></button>
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
  background-color: #e0e0e0;
  border: 1px solid #ddd;
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

.catalog-page {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.catalog-item {
  text-align: center;
  width: 300px;
}

.placeholder {
  width: 300px;
  height: 300px;
  background-color: #e0e0e0;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
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
