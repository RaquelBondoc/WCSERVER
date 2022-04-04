<template>
  <div class="about">
      <br>
      <div class="container my-5">
        <div class="section-title">
          <h2>ABOUT US</h2>
        </div>
  
        <div class="row my-5">
  
          <div class="col ">
            <div class="aboutInfo">
  
              <h3>Flexibility and Wide Raging Expertise</h3>
  
              <p>Homebuildersph experience spans a wide array of projects types.</p>
              <p>We have never specialized in a particular market, simply because our work has been driven by the needs of the community. This flexibility has meant opportunities to build everything from centers to malls, hospitals and residential, private projects. When new works calls us beyond our home territory, we take our values with us. With prompt payment processes, safe jobsite practices and fair treatment, we build strong relationships and maximize local involvement for subcontractors and the community, everywhere we work.</p>
            </div>
          </div>
  
          <div class="col">
            <img src="../assets/8.png" class="img-fluid" alt="HBfamily">
          </div>
        </div>
  
        <div class="row my-5">
          <div class="col-6 ">
            <div class="mission" id="mission">
              <h3 style="color: #2c2fcf;">Mission</h3>
              <p>To provide quality workmanship and customer service and maintain the highest level of professionalism, honesty and fairness in our relationships with our customers, employees and vendors. To grow by continually providing useful and significant products, services, and solutions to markets we already serve - and to expand into new areas that build on our competencies and customer interests.</p>
  
            </div>
          </div>
  
          <div class="col-6 ">
            <div class="vision" id="vision">
              <h3 style="color: rgb(235, 5, 5);">Vision</h3>
                <div class="row g-2">
                  <div class="col-12">
                    <div class="p-1 " id="CoreInner">	&#8226; To provide quality services that exceeds the expectation of our esteemed customers.</div>
                  </div>
                  <div class="col-12">
                    <div class="p-1" id="CoreInner">	&#8226; To provide ample employment in the construction sector. </div>
                  </div>
                  <div class="col-12">
                    <div class="p-1" id="CoreInner">	&#8226; To be the preferred contractor of choice. A company that our customers want to work with and our employees are proud to work for.</div>
                  </div>
                </div>
            </div>
          </div>
        </div>
  
      </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      title:'About Us'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*================ ABOUT US ===============*/

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

/*MISSION AND VISION*/
#mission, #vision{
    width: 85%;
    padding: 10px;
}

#mission{
    border: 1px solid #dcddf7;
    box-shadow: 5px 5px 10px #8b8de0;
    height: 100%;
    float: right;
}

#vision{
    border: 1px solid rgb(243, 202, 202);
    box-shadow: 5px 5px 10px rgb(247, 107, 107);
}

/*IMAGE*/
.img-fluid{
    max-width: 100%;
    height: auto;
}
</style>
