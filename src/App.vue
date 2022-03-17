<template>
  <div id="app">
    <header>
        <div class="center">
            <nav class="navMenu" id="home">
                <ul>
                    <li><a href="#home" class="home">Home</a></li>
                    <li><a href="#aboutMe">About</a></li>
                    <li><a href="#educ">Education</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contactMe">Contact</a></li>
                </ul>
            </nav>

            <img src="./assets/headerpic.png" class="headerPic">

            <div class="intro" id="intro">
                <p>Hi everyone, I'm</p>
                <h1>Raquel Bondoc</h1>
                <p class="job">Front-end Web Developer</p>
            </div>

            <div class="seeMyWork">
                <img src="./assets/oblong.png" class="oblong">
                <a href="#aboutMe">GET TO KNOW ME</a>
            </div>
        </div>
    </header>

    <profile></profile>
    <education></education>
    <skills></skills>
    <contact></contact>
  </div>
</template>

<script>
//Import the newly created component
import Education from './Components/Education.vue'
import Profile from './Components/Profile.vue'
import Skills from './Components/Skills.vue'
import Contact from './Components/Contact.vue'


export default {
  name: 'app',
  //declare the components
  components:{
    Profile,
    Education,
    Skills,
    Contact
  },
  data () {
    return {
      msg: 'The Main Component'
    }
  }
}
</script>

<style>
/*------------------------- BASE --------------------------*/
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

ul{
    list-style-type: none;
}

body{
    margin: 0 0 3rem 0;
}
/*================== HEADER ==================*/
header{
    background-color: #F0F6EC;
}

.center{
    max-width: 1600px;
    margin: auto;
}

/*MENU BAR*/
.navMenu{
    margin: 0px 0px 0px 700px;
}

.navMenu ul{
    margin: 0;
    padding: 0;
    overflow: hidden;
}

.navMenu li{
    float: left;
}
  
.navMenu li a {
    display: block;
    color: #74CF9B;
    padding: 20px 30px;
    text-decoration: none;
}

.headerPic{
    height: 600px;
    width: auto;
    margin: 125px 0px 0px 90px;
}

/*INTRODUCTION*/
.intro{
    position: absolute;
    margin: -500px 0px 0px 730px;
}

.intro p{
    font-size: 40px;
    letter-spacing: 1px;
}

.intro h1{
    font-size: 55px;
    letter-spacing: 1px;
}

p.job{
    margin: 5px 2px;
    color: #1FC667;
    font-size: 25px;
    line-height: 35px;
}
 
.seeMyWork img{
    position: absolute;
    width: 180px;
    height: auto;
    margin: -200px 0px 0px 730px;
}

/*OBLONG*/
.seeMyWork a {
    color: white;
    font-size: 15px;
    font-weight: bolder;
    letter-spacing: 1px;
    position: absolute;
    text-decoration: none;
    margin: -185px 0px 0px 748px;
}

</style>
