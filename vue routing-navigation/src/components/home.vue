<template>
  <div class="home">
    <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
        <ol class="carousel-indicators">
            <li data-bs-target="#myCarousel" data-bs-to-slide="0" class="active"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="../assets/2.png" class="d-block w-100 h-100" alt="Carouselpic1">
                <div class="container-lg">
                    <h1 style="font-size: 50px; ">Welcome to <span style="color: #2c2fcf;">Homebuilders</span><span style="color: rgb(235, 5, 5);">PH</span></h1>
                    <p style="font-size: 25px; width: 80%;">Your partner in construction of residential and commercial buildings in the Philippines. Helping you to turn your dream house into reality.</p>

                </div>
            </div>

            <div class="carousel-item">
              <img src="../assets/3.png" class="d-block w-100 h-100" alt="Carouselpic2">
                <div class="container-lg">
                    <h1 style="font-size: 50px;">Welcome to <span style="color: #2c2fcf;">Homebuilders</span><span style="color: rgb(235, 5, 5);">PH</span></h1>
                    <p style="font-size: 25px; width: 80%;">Your partner in construction of residential and commercial buildings in the Philippines. Helping you to turn your dream house into reality.</p>
                </div>
            </div>
            
            <div class="carousel-item">
              <img src="../assets/1.jpg" class="d-block w-100 h-100" alt="Carouselpic2">
                <div class="container-lg">
                    <h1 style="font-size: 50px;">Welcome to <span style="color: #2c2fcf;">Homebuilders</span><span style="color: rgb(235, 5, 5);">PH</span></h1>
                    <p style="font-size: 25px; width: 80%;">Your partner in construction of residential and commercial buildings in the Philippines. Helping you to turn your dream house into reality.</p>
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*================ HERO SECTION ===============*/


.carousel-item{
    height: 720px;
    background: white;
    color: rgb(255, 255, 255);
    position: relative;
    background-position: center;
    background-size: cover;
}

.carousel-inner .container-lg{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding-bottom: 250px;
    text-shadow: 1px 1px 2px black;
}
.carousel-inner .container-lg span{
    text-shadow: 1px 1px 1px rgb(221, 221, 221);
}
.carousel-inner .container-lg p{
    text-shadow: 2px 2px 2px black;
}
</style>
