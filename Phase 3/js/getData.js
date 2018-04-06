function GetData(id){
  var jdata = [
    {
      customerNumber: id, 
      divid: "RDiv"
    }
  ];
  

  var sloading = document.createElement('div');
  sloading.id = 'sloader';
  sloading.className = 'loading-bar';

  var req;    
  req = new XMLHttpRequest();
  req.onreadystatechange = function() 
  {
    if(this.readyState == 1){
       document.getElementById(jdata[0].divid).appendChild(sloading);
     }
     if (this.readyState == 4){
      
      
     }
    if (this.readyState == 4 && this.status == 200) 
    {
       resp = this.responseText;
       var data = JSON.parse(resp);
       showData(data, jdata[0].divid);
       document.getElementById('sloader').style.display = 'none';
    }

  };
  
  req.open("GET", "php/getFullDetails.php?customerid="+jdata[0].customerNumber, true);
  req.send();


}


function showData(details, divid)
{
document.getElementById(divid).innerHTML = "NAME : "+details[0].customerName+"<br>CONTACT LAST NAME : "+details[0].contactLastName+"<br>CONTACT FIRST NAME : "+details[0].contactFirstName+"<br>PHONE NUMBER : "+details[0].phone+"<br>ADDRESS LINE 1 : "+details[0].addressLine1+"<br>ADDRESS LINE 2 : "+details[0].addressLine2+"<br>CITY : "+details[0].city+"<br>STATE : "+details[0].state+"<br>POSTAL CODE : "+details[0].postalCode+"<br>COUNTRY : "+details[0].country+"<br>SALES REPRESENTATIVE NUMBER : "+details[0].salesRepEmployeeNumber+"<br>CREDIT LIMIT : "+details[0].creditLimit+"<br>";


}