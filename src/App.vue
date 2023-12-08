<template>
  <div id="app">
    <b-nav pills align="center" class="mb-4">
      <b-nav-item to="/" exact-active-class="active">Home</b-nav-item> |
      <b-nav-item to="/browse" exact-active-class="active"> Browse Vehicles </b-nav-item> |
      <b-nav-item to="/sell" exact-active-class="active"> Sell Your Car </b-nav-item> |
      <b-nav-item to="/myinfo" exact-active-class="active"> My Info </b-nav-item>
    </b-nav>
    <router-view class="container-xl" />
  </div>
</template>
<script setup lang="ts">
</script>
