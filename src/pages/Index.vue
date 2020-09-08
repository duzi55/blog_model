<template>
  <div>
    <Sidebar  />
    <Header  />
    <SettingSide/>
    <router-view/>
  </div>
</template>

<script>
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SettingSide from "../components/SettingSide";
export default {
  components: {
    Header,
    Sidebar,
    SettingSide
  },
};
</script>

<style>
</style>