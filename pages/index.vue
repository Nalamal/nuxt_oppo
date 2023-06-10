<template>
  <div class="home">
    <div class="wrapper content">
      <swiper :banners="banners"></swiper>
      <tab-category
        :categorys="categorys"
        @item-click="handleItemClick"
      ></tab-category>
      <section-title title="Find X 系列"></section-title>
      <grid-view :productDetailss="categorys![1].productDetailss"></grid-view>
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
