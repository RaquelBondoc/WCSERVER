<template>
  <div id="profile">
    <!------------------ ABOUT ME ---------------------->
    <section class="about" id="aboutMe">
        <div class="center">
            <br><br>

            <div class="profile" id="profile">
                <img src="src\assets\profilePic.png" alt="profilePic">

                <div class="shortInfo">
                    
                    <div class="summary">
                        
                        <h2>Raquel Ann Bondoc</h2>
                        <h3>Front-end Web Developer</h3>

                        <p>Hi! I'm Raquel Bondoc, an optimistic and passionate person who is interested in designing and building a responsive website. I am currently in my 2nd year taking Bachelor of Science in Information Technology with Areas of Specialization in Web Development at Holy Angel University. I have a genuine ambition to experience new things and learn new skills. For this reason, I am looking for a job or an internship as Front-end Web Developer that will help me widen and improve my knowledge in this field. In exchange, I will offer my full commitment and be an affable individual to your company.</p>
                    </div>

                    <div class="specificInfo">
                        <div class="sCol1">
                            <p>Full Name: Raquel Ann Perez Bondoc</p>
                            <p>Age: 20 years old</p>
                            <p>Date of Birth: August 18, 2001</p>
                            <p>Civil Status: Single</p>
                            <p>Citizenship: Filipino</p>
                        </div>

                        <div class="sCol2"> 
                            <p>Address: Xevera Subd., Bacolor, Pampanga</p>
                            <p>Phone: 09913141443</p>
                            <p>E-mail: quelbondoc08@gmail.com</p>
                            <p>Language: English and Tagalog</p>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <br><br><br>

  </div>
</template>

<script>
export default {
  name: 'profile',
  data () {
    return {
      msg2: 'My Profile'
    }
  }
}
</script>

<style>
/*PROFILE*/
.profile{
    text-align: center;
    margin-left: auto;
    margin-right: auto; 
}

.profile img{
    width: 150px;
    margin-top: 40px;
}

/*SHORT INFORMATION*/
.shortInfo{
    background-color:#F0F6EC;
    width: 1150px;
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto; 
    margin-top: -50px;
    padding: 40px 50px;
    text-align: center;
    box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.summary h2{
    font-size: 30px;
    letter-spacing: 1px;
    margin-top: 10px;
    font-weight: 600;
}

.summary h3{
    font-size: 22px;
    font-weight: 200;
    color: #1FC667;
    font-weight: 500;
}

.summary p{
    font-size: 18px;
    text-align: left;
    margin-top: 30px;
    line-height: 30px;
}

/**SPECIFIC INFO*/
.specificInfo{
    font-size: 18px;
    text-align: left;
}

.sCol1{
    margin-top: 30px;
    margin-left: 100px;
    
}

.sCol1 p{
    margin-top: 12px;
}

.sCol2{
    margin-top: -226px;
    position: absolute;
    margin-left: 580px;
}

.sCol2 p{
    margin-top: 12px;
}

</style>