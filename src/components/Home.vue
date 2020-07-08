<template lang="html">

  <section class="components-home col-sm-12 mt-4">
    <h1>Trade or view your portfolio</h1>
    <h6>You may Save and Load Data</h6>
    <h6>Click on 'End Day' to begin a 'New Day'</h6>
    <hr>
    <p>Your Funds: {{ funds | currency }}</p>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'components-home',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {
      funds() {
        return this.$store.getters.funds;
      }
    }
}


</script>

<style scoped lang="scss">
  .components-home {

  }
</style>
