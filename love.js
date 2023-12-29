function oc(){
    var ne = (Math.random()*100);
    if (document.getElementById("inp1").value==0 && document.getElementById("inp2").value==0){
        document.getElementById("ou").innerHTML="Name of male and female is missing";
    }
    else if(document.getElementById("inp1").value==0 || document.getElementById("inp2").value==0){
        document.getElementById("ou").innerHTML="Enter male name or female name";
    }
    else{
        document.getElementById("ou").innerHTML=(Math.floor(ne)+"% compatible");
    }
}