<template>
  <div id="app">
    <!--==================== HEADER ====================-->
    <header id="header" class="fixed-top">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">

            <div class="container-lg">
              <router-link class="navbar-brand" to="/home">
                  <img src="./assets/logo.png" alt="HomebuildersPH Logo" style="width: 35px; border-radius: 100%;"> HomebuildersPH</router-link>
              <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">

                  <ul class="navbar-nav mb-2 mb-lg-0">

                        <li class="nav-item mx-2">
                          <router-link class="nav-link" to="/home" aria-current="page">Home</router-link>
                        </li>
                        <li class="nav-item mx-2">
                            <router-link class="nav-link" to="/about">About Us</router-link>
                        </li>
                        <li class="nav-item mx-2">
                          <router-link class="nav-link" to="/services">Services</router-link>
                        </li>
                        <li class="nav-item mx-2">
                          <router-link class="nav-link" to="/portfolio">Portfolio</router-link>
                        </li>
                    </ul>

                <router-link class="appointment-btn scrollto" to="/contact">Contact Us</router-link>

              </div>
            </div>
          </nav>
    </header>
    <router-view/>
  </div>

  
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/*================ HEADER ===============*/

/*NAVBAR*/
.navbar-light .navbar-nav .nav-link:hover {
    color: #2c2fcf;
}
.navbar-light .navbar-nav .nav-link:active {
    color: #cf2c2c;
}

/** Appointment Button **/
.appointment-btn {
    margin-left: 25px;
    background: #2c2fcf;
    color: #fff;
    border-radius: 50px;
    padding: 8px 25px;
    white-space: nowrap;
    transition: 0.3s;
    font-size: 14px;
    display: inline-block;
    text-decoration: none;
}
.appointment-btn:hover {
    background: red;
    color: #fff;
}
@media (max-width: 768px) {
    .appointment-btn {
      margin: 0 15px 0 0;
      padding: 6px 18px;
    }
}
</style>
