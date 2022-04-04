<template>
  <div class="services">
      <br>
      <div class="container my-5">
          <div class="section-title">
              <h2>SERVICES</h2>
          </div>
          
          <br>
  
          <h5>As a leading Construction Company, you are not only hiring a company to
          construct your building, but you are also hiring a team member for life.
          HomebuildersPH is committed to being there for you and giving you the best
          service.
          </h5>
  
          <div class="row justify-content-center my-5">
  
              <div class="col-3 gx-5">
                  <div class="card" style="width: 18rem;">
                      <img src="../assets/card (1).png" class="card-img-top" alt="Residential Construction">
                      <div class="card-body">
                        <h5 class="card-title">Residential Construction</h5>
                      </div>
                  </div>
              </div>
  
              <div class="col-3">
                  <div class="card" style="width: 18rem;">
                      <img src="../assets/card (2).png" class="card-img-top" alt="Commercial Construction">
                      <div class="card-body">
                        <h5 class="card-title">Commercial Construction</h5>
                      </div>
                  </div>
              </div>
  
              <div class="col-3">
                  <div class="card" style="width: 18rem;">
                      <img src="../assets/card (3).png" class="card-img-top" alt="Build-Pay">
                      <div class="card-body">
                        <h5 class="card-title">Build Now! Pay Later!</h5>
                      </div>
                  </div>
              </div>
          </div>
  
          <div class="row justify-content-center">
  
              <div class="col-3">
                  <div class="card" style="width: 18rem;">
                      <img src="../assets/card (4).png" class="card-img-top" alt="Renovation">
                      <div class="card-body">
                        <h5 class="card-title">Renovation</h5>
                      </div>
                  </div>
              </div>
  
              <div class="col-3">
                  <div class="card" style="width: 18rem;">
                      <img src="../assets/card (5).png" class="card-img-top" alt="Design and Consultancy">
                      <div class="card-body">
                        <h5 class="card-title">Design and Consultancy</h5>
                      </div>
                  </div>
              </div>
  
              <div class="col-3">
                  <div class="card" style="width: 18rem;">
                      <img src="../assets/card (6).png" class="card-img-top" alt="Project Management">
                      <div class="card-body">
                        <h5 class="card-title">Project Management</h5>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <br>
  </div>
</template>

<script>
export default {
  name: 'services',
  data () {
    return {
      title:'Services'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*================ SERVICES ===============*/
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

.services{
    margin-bottom: 15px;
    background-color: #e3edf7;
}
.services h5{
    text-align: center;
}

.card{
    border: 1px solid rgb(190, 190, 190);
    box-shadow: 5px 5px 10px #979595;
}
</style>
