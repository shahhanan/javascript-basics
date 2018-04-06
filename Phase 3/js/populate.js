var Div0 = document.createElement('div');
Div0.id = 'maincontainer';
Div0.className = 'container';
document.getElementsByTagName('body')[0].appendChild(Div0);
                        // LOADING-BAR DIv
var loading = document.createElement('div');
loading.id = 'load';
loading.className = 'loading-bar';
document.getElementById('maincontainer').appendChild(loading);

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if(this.readyState == 1){
   // document.getElementById('loading-bar').style = "block";  
  }
  if (this.readyState == 4){
    document.getElementById('load').style.display = 'none';
   
  }
  
  if (this.readyState == 4 && this.status == 200 ) {
    
     Datarecieved = this.responseText;
     var data = JSON.parse(Datarecieved);
     showTableData(data);
     
  }
  
};
xhttp.open("GET", "php/getData.php", true);
xhttp.send(); 


function showTableData(Data){
var leftDiv = document.createElement('div');
leftDiv.id = 'LDiv';
leftDiv.className = 'LeftDiv';
document.getElementById('maincontainer').appendChild(leftDiv);

var rightDiv = document.createElement('div');
rightDiv.id = 'RDiv';
rightDiv.className = 'RightDiv';
document.getElementById('maincontainer').appendChild(rightDiv);

var length = Data.length;

var table = document.createElement('table');
table.className = 'table1';
for (var i = 0; i < length; i++){
    var tr = document.createElement('tr');   

    var td1 = document.createElement('td');
    var td2 = document.createElement('td');

   
    var name = document.createTextNode(Data[i].customerName);
    var id = [];
    id[i] = Data[i].customerNumber;
    
   // var btn = document.createElement('input');
   // btn.type = 'button';
   // btn.name = 'GetDetails';
   // btn.value = 'Get Details';
   // btn.oonmouseup = 'GetData(Data[i].customerName)';
    td2.innerHTML = '<button onclick = " GetData('+id[i]+') ">Get Full Details </button>';
    td1.appendChild(name);
   // td2.appendChild(btn);
    tr.appendChild(td1);
    tr.appendChild(td2);

    table.appendChild(tr);
}
document.getElementById('LDiv').appendChild(table);




}
