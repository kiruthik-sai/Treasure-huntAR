
function validateAnswer1(){
    console.log("Hello");
    var ans3 = document.forms["form1"]["input1"].value;
    if(ans3=="sugar"){
        document.getElementById("description1").innerHTML='<p><span style="color:green">CONGRATS! You have chosen the correct answer!</span><br><br>The sugar also called glucose is used by plants for energy and to make other substances like cellulose and starch.<br>The following steps walk you through the photosynthesis process that occurs each time the sun’s light reaches the leaves of a plant:<br>Inside the chloroplast (a special organelle within a plant cell), a molecule of chlorophyll absorbs the light.<br>The chlorophyll compound also gives the plant its green color.</p>';
        
        console.log("hey");
        return false;
    }
    
}
function validateAnswer2(){
    console.log("Hello");
    var ans3 = document.forms["form2"]["input2"].value;
    if(ans3=="chlorophyll"){
        document.getElementById("description2").innerHTML='<p><span style="color:green">CONGRATS! You have chosen the correct answer!</span><br><br>There are four types of chlorophyll: chlorophyll a, found in all higher plants, algae and cyanobacteria; chlorophyll b, found in higher plants and green algae; chlorophyll c, found in diatoms, dinoflagellates and brown algae; and chlorophyll d, found only in red algae. <br><br>A sequence of chemical reactions transfers the sun’s light energy into the chemical bonds that hold together special, energy-carrying molecules (the most common of which are called ATP).<br><br>At this point, the energy originating from the sunlight is being stored in the ATP molecules as chemical potential energy.</p>';
        
        console.log("hey");
        return false;
    }
}



function validateAnswer4(){
    console.log("Hello");
    var ans3 = document.forms["form4"]["input4"].value;
    if(ans3=="carbondioxide"){
        document.getElementById("description4").innerHTML='<p><span style="color:green">CONGRATS! You have chosen the correct answer!</span><br><br> Carbon dioxide concentrations are also important in regulating the openness of stomata, pores through which plants exchange gasses.<a href="https://go.echoar.xyz/C2oR" class="btn button-hint btn-info btn-lg" tabindex="-1" role="button" aria-disabled="true">Congrats (Click Here!)</a>';
        
        console.log("hey");
        return false;
    }
}   
function validateAnswer3(){
    console.log("Hello");
    var ans3 = document.forms["form3"]["input3"].value;
    if(ans3=="atp"){
        document.getElementById("description3").innerHTML='<p><span style="color:green">CONGRATS! You have chosen the correct answer!</span><br><br>ATP is sometimes referred to as the “energy currency of the cell.”<br>The plant uses the stored chemical energy of ATP to make glucose from carbon dioxide. The plant then uses the glucose to make even larger compounds of cellulose and starch, which store energy.<br>As the plant binds molecules into larger and larger chains, it captures and stores energy in the bonds to be released later.<br> The plant uses the largest molecules to construct cell walls as the plant grows larger.';
        
        console.log("hey");
        return false;
    }
}