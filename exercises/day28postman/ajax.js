document.getElementById("get").addEventListener("click",function(){
   var xhr = new XMLHttpRequest();
    var number = document.getElementById("number").value;
xhr.onreadystatechange = function() {
  if(xhr.readyState  == 4 && xhr.status == 200) {
    var strData = xhr.responseText;
    var data = JSON.parse(strData);
//    console.log(data["object"][0]["Pokemon"][input].name);
   document.getElementById("name").innerHTML= data["objects"][0]["pokemon"][number].name
  } else if(xhr.readyState  == 4 && xhr.status != 200) {
    alert("error"+xhr.status);
  }
};

xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true);
xhr.send(); 
})

