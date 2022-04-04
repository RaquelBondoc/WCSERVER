<template>
  <div class="contact">
      <br>
      <div class="container my-5">
          <div class="center">
          
            <div class="contactBG">
              <div class="contactContent">
                  <div class="contactSection">
                      <div class="contactTitle">
                          <h1>Contact Us</h1>
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
                  <br>

                  <div class="infoSection">
                      <h1>Looking forward to working with everyone!</h1>

                      <div class="infoContent">
                          <p>Address</p>
                          <h4>2nd Floor, D'Champ Building, McArthur Highway, San Fernando, Pampanga</h4>

                          <br>

                          <p>Phone</p>
                          <h4>0965 897 1856</h4>

                          <br>

                          <p>E-mail</p>
                          <h4>sales@homebuildersph.com</h4>

                          <br>

                          <p>Facebook</p>
                          <h4><a href="https://www.facebook.com/officialhomebuildersph">HomebuildersPh Construction, Inc.</a></h4>
                          

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
  name: 'contact',
  data () {
    return {
      title:'Contact Us'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*================ CONTACT ===============*/
.contact{
    background-color: #d44545;
}
.contactBG{
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto; 
    text-align: center;
    padding: 1px 0px;
}

.contactSection{
    margin-top: 40px;
    background-color:#f6ecec;
    width: 400px;
    border-radius: 10px;
    text-align: center;
    padding: 1px;
    box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}


.contactTitle h1{
    text-align: center;
    margin-top: 20px;
    padding: 5px;
    font-size: 35px;
}

.contactTitle p{
    text-align: center;
    font-size: 20px;
}

/*FORM*/
form{
    padding: 10px 0px;
    
}

.contactForm{
    padding: 0px 30px;
    text-align: left;
}


.contactForm input, .contactForm textarea{
    background-color: #f6ecec;
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
    background-color: #1b46a3;
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
    margin-top: -565px;
    margin-left: 480px;
}

.infoSection h1{
    font-size: 50px;
    color: white;
}

.infoContent{
    color: black;
    margin-top: 20px;
    font-size: large;
}

.infoContent h4{
    margin-top: -10px;
    font-size: 20px;
}

.infoContent a{
    color: black;
    text-decoration: none;
}
</style>
