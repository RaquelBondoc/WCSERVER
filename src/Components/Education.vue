<template>
  <div id="education">
    <!------------------ EDUCATION ---------------------->
    <section class="education" id="educ">
        <div class="center">
            <div class="educBG">
                <div class="educTitle">
                    <img src="src\assets\gradCap.png" alt="gradCap">
                    <h2>Education</h2>
                </div>

                <div>
                    <div class="educList"></div>
                    <div class="educContent">
                        <div class="undergrad">
                            <span class="dot"></span>
                            <div class="educData">
                                <h4>Undergraduate</h4>
                                <p>Bachelor of Science in Information Technology with Areas of Specialization in Web Development</p>
                                <p>Holy Angel University</p>
                                <p>2020 - Present (2nd year)</p>
                            </div>
                        </div>

                        <div class="seniorGrad">
                            <span class="dot"></span>
                            <div class="educData">
                                <h4>Senior High School Graduate</h4>
                                <p>Science, Technology, Engineering and Mathematics strand</p>
                                <p>Holy Angel University</p>
                                <p>2018-2020</p>
                            </div>
                        </div>

                        <div class="juniorGrad">
                            <span class="dot"></span>
                            <div class="educData">
                                <h4>Junior High School Completer</h4>
                                <p>Don Antoñio Lee Chi Uan Integrated School</p>
                                <p>2014 - 2018</p>
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
  name: 'education',
  data () {
    return {
      msg3: 'Education'
    }
  }
}
</script>

<style>
.education{
    background-color: #F0F6EC;
}

.educBG{
    margin-top: 50px;
    width: 800px;
    margin-left: auto;
    margin-right: auto; 
    padding: 50px 0px;
    text-align: center;
}

.educTitle img{
    width: 90px;
    padding: 10px;
    margin-top: -25px;
}

.educList{
    border-left: 3px solid #E1E1E1;
    height: 460px;
    position: absolute;
    margin-left: 25px;
}

.dot{
    height: 15px;
    width: 15px;
    background-color: #74CF9B;
    border-radius: 50%;
    display: block;
    margin-left: -31px;
    margin-top: 30px;
    position: absolute;
}

.educContent{
    margin-left: 50px;
}

.educData{
    background-color: #f5f8f2;
    width: 720px;
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 25px;
    padding: 15px;
    text-align: left;
    box-shadow: 0 0px 6px 0 rgba(0, 0, 0, 0.19);
}


.education p{
    line-height: 10px;    
}
</style>