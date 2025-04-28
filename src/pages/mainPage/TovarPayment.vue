<script setup lang="ts">
import AppFooter from '@/components/footer/appFooter.vue'
import AppHeader from '@/components/header/appHeader.vue'
</script>
<template>
  <AppHeader />
  <div class="new-page">
    <div class="catalog-items">
      <div class="catalog-item">
        <div class="placeholder"></div>
        <p>Мишка с шариком</p>
        <p>Размер: 7см</p>
        <p>Цвет: Серый</p>
        <p>Состав: Натуральная гипоаллергенная плюш</p>
        <p>1000 р.</p>
        <button class="learn-more">В корзину</button>
      </div>
      <div class="catalog-item">
        <div class="placeholder"></div>
        <p>Мишка с шариком</p>
        <p>Размер: 7см</p>
        <p>Цвет: Серый</p>
        <p>Состав: Натуральная гипоаллергенная плюш</p>
        <p>1000 р.</p>
        <button class="learn-more">В корзину</button>
      </div>
      <div class="catalog-item">
        <div class="placeholder"></div>
        <p>Мишка с шариком</p>
        <p>Размер: 7см</p>
        <p>Цвет: Серый</p>
        <p>Состав: Натуральная гипоаллергенная плюш</p>
        <p>1000 р.</p>
        <button class="learn-more">В корзину</button>
      </div>
    </div>
  </div>
  <div class="new-page">
    <div class="catalog-items">
      <div class="catalog-item">
        <div class="placeholder"></div>
        <p>Мишка с шариком</p>
        <p>Размер: 7см</p>
        <p>Цвет: Серый</p>
        <p>Состав: Натуральная гипоаллергенная плюш</p>
        <p>1000 р.</p>
        <button class="learn-more">В корзину</button>
      </div>
      <div class="catalog-item">
        <div class="placeholder"></div>
        <p>Мишка с шариком</p>
        <p>Размер: 7см</p>
        <p>Цвет: Серый</p>
        <p>Состав: Натуральная гипоаллергенная плюш</p>
        <p>1000 р.</p>
        <button class="learn-more">В корзину</button>
      </div>
      <div class="catalog-item">
        <div class="placeholder"></div>
        <p>Мишка с шариком</p>
        <p>Размер: 7см</p>
        <p>Цвет: Серый</p>
        <p>Состав: Натуральная гипоаллергенная плюш</p>
        <p>1000 р.</p>
        <button class="learn-more">В корзину</button>
      </div>
    </div>
  </div>
  <div class="new-page">
    <div class="catalog-items">
      <div class="catalog-item">
        <div class="placeholder"></div>
        <p>Мишка с шариком</p>
        <p>Размер: 7см</p>
        <p>Цвет: Серый</p>
        <p>Состав: Натуральная гипоаллергенная плюш</p>
        <p>1000 р.</p>
        <button class="learn-more">В корзину</button>
      </div>
      <div class="catalog-item">
        <div class="placeholder"></div>
        <p>Мишка с шариком</p>
        <p>Размер: 7см</p>
        <p>Цвет: Серый</p>
        <p>Состав: Натуральная гипоаллергенная плюш</p>
        <p>1000 р.</p>
        <button class="learn-more">В корзину</button>
      </div>
      <div class="catalog-item">
        <div class="placeholder"></div>
        <p>Мишка с шариком</p>
        <p>Размер: 7см</p>
        <p>Цвет: Серый</p>
        <p>Состав: Натуральная гипоаллергенная плюш</p>
        <p>1000 р.</p>
        <button class="learn-more">В корзину</button>
      </div>
    </div>
  </div>
  <AppFooter />
</template>

<style scoped>
.new-page {
  padding: 20px;

  max-width: 1200px;
  margin: 20px auto;
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
  background-color: #ffe6e6;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.placeholder {
  width: 100%;
  height: 300px;
  background-color: #e0e0e0;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.catalog-item p {
  font-size: 1em;
  color: #333;
  margin: 5px 0;
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
  margin-top: 20px;
}

.catalog-item button:hover {
  background-color: #e05a5a;
}
</style>
