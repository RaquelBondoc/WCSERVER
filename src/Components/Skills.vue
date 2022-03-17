<template>
  <div id="skills">
    <!------------------ SKILLS ---------------------->
    <section class="skills">
        <div class="center">
            <div class="skillsContent">
                
                <div class="softSkills">
                    <img src="src\assets\softPic.png" alt="SoftPic">
                    <h2>Soft Skills</h2>

                    <div class="softContent">
                        <div class="skillList">
                            <div class="skillData">
                                <h5>Computer Proficiency</h5>
                            </div>

                            <div class="skillBar">
                                <span class="skillPercent softComm"></span>
                            </div>
                        </div>

                        <div class="skillList">
                            <div class="skillData">
                                <h5>Communication</h5>
                            </div>

                            <div class="skillBar">
                                <span class="skillPercent softCol"></span>
                            </div>
                        </div>

                        <div class="skillList">
                            <div class="skillData">
                                <h5>Attention to Detail</h5>
                            </div>

                            <div class="skillBar">
                                <span class="skillPercent softDetail"></span>
                            </div>
                        </div>

                        <div class="skillList">
                            <div class="skillData">
                                <h5>Time Management</h5>
                            </div>

                            <div class="skillBar">
                                <span class="skillPercent softTime"></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="technicalSkills">
                    <img src="src\assets\technicalPic.png" alt="TechnicalPic">
                    <h2>Technical Skills</h2>

                    <div class="techContent">
                        <div class="skillList">
                            <div class="skillData">
                                <h5>HTML</h5>
                            </div>

                            <div class="skillBar">
                                <span class="skillPercent html"></span>
                            </div>
                        </div>

                        <div class="skillList">
                            <div class="skillData">
                                <h5>CSS</h5>
                            </div>

                            <div class="skillBar">
                                <span class="skillPercent css"></span>
                            </div>
                        </div>

                        <div class="skillList">
                            <div class="skillData">
                                <h5>Python</h5>
                            </div>

                            <div class="skillBar">
                                <span class="skillPercent python"></span>
                            </div>
                        </div>

                        <div class="skillList">
                            <div class="skillData">
                                <h5>PHP</h5>
                            </div>

                            <div class="skillBar">
                                <span class="skillPercent adobeXD"></span>
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
  name: 'skills',
  data () {
    return {
      msg4: 'Skills'
    }
  }
}
</script>
<style>
.skills{
    margin-top: 120px;
}
.skillsContent{
    width: 780px;
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto; 
    margin-top: 0px;
    padding: 15px;
}

.softSkills{
    width: 350px;
    border-radius: 10px;
    position: absolute;
    margin-top: 0px;
    padding: 15px;
    box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.19);
    background-color: #F0F6EC;
}

.technicalSkills{
    width: 350px;
    border-radius: 10px;
    margin-left: 400px;
    margin-top: 0px;
    padding: 10px;
    box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.19);
    background-color: #F0F6EC;
}

.skillsContent img{
    width: 90px;
    padding: 10px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    margin-top: -60px;
}

.skillsContent h2{
    text-align: center;
    padding: 5px;
} 

.softContent, .techContent{
    padding: 15px;
}

.skillData h5{
    padding: 15px 0px;
    font-weight: 400;
}

/*SKILL BAR*/
.skillBar, .skillPercent{
    height: 5px;
    border-radius: 4px;
    
}

.skillBar{
    background-color: #E1E1E1;
   
}

.skillPercent{
    display: block;
    background-color: #1FC667;
}

/*SOFT SKILLS PERCENTAGE*/
.softComm{
    width: 90%;
}

.softCol{
    width: 85%;
}

.softDetail{
    width: 95%;
}

.softTime{
    width: 80%;
}

/*TECHNICAL SKILLS PERCENTAGE*/

.html{
    width: 85%;
}

.css{
    width: 80%;
}

.python{
    width: 40%;
}

.adobeXD{
    width: 50%;
}
</style>