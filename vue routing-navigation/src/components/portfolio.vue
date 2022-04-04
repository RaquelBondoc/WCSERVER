<template>
  <div class="portfolio">
    <br>
    <div class="container my-2"></div>
      <div class="section-title">
          <h2>PORTFOLIO</h2>
      </div>
      <br>
      <div class="container">
          
          <img src="../assets/port (1).jpg" alt="">
          <img src="../assets/port (2).jpg" alt="">
          <img src="../assets/port (3).jpg" alt="">
          <img src="../assets/port (4).jpg" alt="">
          <img src="../assets/port (5).jpg" alt="">
          <img src="../assets/port (6).jpg" alt="">
          <img src="../assets/port (7).jpg" alt="">
          <img src="../assets/port (8).jpg" alt="">
  
      </div>
      <br>
  </div>
</template>

<script>
export default {
  name: 'portfolio',
  data () {
    return {
      title:'Portfolio'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*================ PORTFOLIO ===============*/
/*SECTION TITLE*/
.section-title h2{
    text-align: center;
}

.section-title h2::after {
    content: "";
    position: relative;
    margin: 10px auto;
    display: block;
    width: 60px;
    height: 3px;
    background: rgb(84,136,224);
    background: linear-gradient(90deg, rgba(84,136,224,1) 32%, rgba(241,79,79,1) 72%);
}
.portfolio .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    padding: 15px;
}
.portfolio .container img {
    width: 100%;
    display: block;
    -webkit-filter: grayscale(1);
    filter: grayscale(1);
    transition: all 100ms ease-out;
}
.portfolio .container img:hover {
    transform: scale(1.04);
    -webkit-filter: grayscale(0);
    filter: grayscale(0);
}
</style>
