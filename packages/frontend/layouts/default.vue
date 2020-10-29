<template>
  <div>
    <Header/>

    <b-container>
      <Nuxt/>
    </b-container>
  </div>
</template>
<script>
import Header from "../components/header/Header";
export default {
  components: {Header}
}
</script>
