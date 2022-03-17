<template>
    <div id="contact">
      <!------------------ CONTACT ME ---------------------->
      <section class="contactMe" id="contactMe">
        <div class="center">
            
            <div class="contactBG">
                <div class="contactContent">
                    <div class="contactSection">
                        <div class="contactTitle">
                            <h1>Contact Me</h1>
                            <p>Feel free to drop a message</p>
                        </div>

                        <form>
                            <div class="contactForm">
                                <div class="name">
                                    <input name="name" id="name" placeholder="Name">
                                </div>

                                <div class="email">
                                    <input name="email" id="email" placeholder="E-mail">
                                </div>

                                <div class="subject">
                                    <input name="subject" id="subject" placeholder="Subject">
                                </div>

                                <div class="message">
                                    <textarea name="message" id="message">Message</textarea>
                                </div>
                            </div>

                            <div class="submit">
                                <input type="submit" value="Submit">
                            </div>
                        </form>
                    </div>
                    
                    <br>

                    <div class="infoSection">
                        <h1>Looking forward to working with everyone!</h1>

                        <div class="infoContent">
                            <p>Address</p>
                            <h4>Xevera Subdivision, Bacolor, Pampanga</h4>

                            <br>

                            <p>Phone</p>
                            <h4>09913141443</h4>

                            <br>

                            <p>E-mail</p>
                            <h4>quelbondoc08@gmail.com</h4>

                            <br>

                            <p>Social Media</p>
                            <div class="socMed">
                                <a href="https://www.facebook.com/profile.php?id=100009305108572"><img src="src\assets\facebook.png" alt="Facebook"></a>
                                <a href="https://www.instagram.com/quellybabe/"><img src="src\assets\instagram.png" alt="Instagram"></a>
                                <a href="https://twitter.com/RockyBndc"><img src="src\assets\twitter.png" alt="Twitter"></a>
                            </div>
                            

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
</template>

<script>
export default {
  name: 'contact',
  data () {
    return {
      msg5: 'Contact'
    }
  }
}
</script>

<style>
.contactMe{
    background-color: #1FC667;
    margin-top: 90px;
}
.contactBG{
    width: 1150px;
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto; 
    text-align: center;
    padding: 30px 50px;
}

.contactSection{
    margin-top: 40px;
    background-color:#F0F6EC;
    width: 400px;
    border-radius: 10px;
    text-align: center;
    padding: 1px;
    box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}


.contactTitle h1{
    text-align: center;
    margin-top: 30px;
    padding: 0px;
    font-size: 35px;
    font-weight: bolder;
}

.contactTitle p{
    text-align: center;
    font-size: 20px;
}

/*FORM*/
form{
    padding: 30px 0px;
    
}

.contactForm{
    padding: 0px 35px;
    text-align: left;
}


.contactForm input, .contactForm textarea{
    background-color: #F0F6EC;
    border: none;
    border-bottom: solid 1px #d1cece;
    margin-top: 40px;
    width: 90%;
    font-size: 18px;
}

.contactForm textarea{
    margin-top: 30px;
    display: block;
    height: 80px;
    width: 90%;
    font-family: var(--body-font);
    color: gray;
}

.submit input{
    display: block;
    background-color: #1FC667;
    width: 90px;
    height: 35px;
    border-radius: 50px;
    border: 0px;
    color: white;
    font-size: 16px;
    letter-spacing: 0.5px;
    margin-left: 25px;
    margin-top: 15px;
}

/*INFO SECTION*/
.infoSection{
    position: absolute;
    text-align: left;
    margin-top: -570px;
    margin-left: 480px;
}

.infoSection h1{
    font-size: 50px;
    width: 500px;
    font-weight: bolder;
}

.infoContent{
    color: white;
    margin-top: 20px;
    font-size: large;
}

.infoContent h4{
    font-size: 20px;
    margin-top: -15px;
}

.socMed img{
    padding: 5px 10px;
    width: 50px;
    margin-top: -15px;
}

</style>