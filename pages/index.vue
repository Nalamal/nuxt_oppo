<template>
  <div class="home">
    <div class="wrapper content">
      <swiper :banners="banners"></swiper>
      <tab-category
        :categorys="categorys"
        @item-click="handleItemClick"
      ></tab-category>

      <template v-for="category in categorys" :key="category.id">
        <section-category :category="category"></section-category>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useHomeStore } from "~/store/home";
import type { ICategory } from "~/store/home";

const homeStore = useHomeStore();
const { navbars, banners, categorys } = storeToRefs(homeStore);

function handleItemClick(item: ICategory) {
  console.log(item.title);
}
</script>

<style lang="scss" scoped>
.home {
  background-color: $bgGrayColor;
}
</style>
