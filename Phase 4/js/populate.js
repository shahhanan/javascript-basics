function readProfile(id){
  var data = 
          {
            method: "GET",
            url: "php/getFullDetails.php",
            queryParams: 
                      {
                        id: id,
                        divClass: "loading-bar",
                        divID: "loading-spinnerr",
                        appendto: "RDiv"
                      }
          };
          /* */
  reqAjax(data, function(details){
    document.getElementById('RDiv').innerHTML = "NAME : "+details[0].customerName+"<br>CONTACT LAST NAME : "+details[0].contactLastName+"<br>CONTACT FIRST NAME : "+details[0].contactFirstName+"<br>PHONE NUMBER : "+details[0].phone+"<br>ADDRESS LINE 1 : "+details[0].addressLine1+"<br>ADDRESS LINE 2 : "+details[0].addressLine2+"<br>CITY : "+details[0].city+"<br>STATE : "+details[0].state+"<br>POSTAL CODE : "+details[0].postalCode+"<br>COUNTRY : "+details[0].country+"<br>SALES REPRESENTATIVE NUMBER : "+details[0].salesRepEmployeeNumber+"<br>CREDIT LIMIT : "+details[0].creditLimit+"$<br>";

    }, function(errdata){
      alert(errdata);
    });



}




function populateData(btnid)
          {
          // hide button
          document.getElementById(btnid).style.display = 'none';
          // main div container
          var Div0 = document.createElement('div');
          Div0.id = 'maincontainer';
          Div0.className = 'container';
          document.getElementsByTagName('body')[0].appendChild(Div0);
          // creating json data for testing purpose
                  var Data = 
                      {
                        method: "GET",
                        url: "php/getData.php",
                        queryParams: 
                                  {
                                    id: "",
                                    divClass: "loading-bar",
                                    divID: "loading-spinner",
                                    appendto: "maincontainer",
                                    
                                  }
                      };

                      reqAjax(Data, function(Data){

                                        // create Left div indide maincontainer
                                        var leftDiv = document.createElement('div');
                                        leftDiv.id = 'LDiv';
                                        leftDiv.className = 'LeftDiv';
                                        document.getElementById('maincontainer').appendChild(leftDiv);

                                        // create Left div indide maincontainer
                                        var rightDiv = document.createElement('div');
                                        rightDiv.id = 'RDiv';
                                        rightDiv.className = 'RightDiv';
                                        document.getElementById('maincontainer').appendChild(rightDiv);


                                        var length = Data.length;
                                        // craete table and populate data inside the table getting from the ajax call
                                        var table = document.createElement('table');
                                        table.className = 'table1';
                                        
                                                  for (var i = 0; i < length; i++)
                                                    {
                                                        var tr = document.createElement('tr');   
                                            
                                                        var td1 = document.createElement('td');
                                                        var td2 = document.createElement('td');
                                            
                                              
                                                        var name = document.createTextNode(Data[i].customerName);
                                                        var id = [];
                                                        id[i] = Data[i].customerNumber;
                                                          // create json Data for the call 
                                                        
                                                        
                                                        td2.innerHTML = '<button onclick = "readProfile('+id[i] +')">Get Full Details </button>';


                                                        td1.appendChild(name);
                                                        tr.appendChild(td1);
                                                        tr.appendChild(td2);
                                                        table.appendChild(tr);
                                                    }
                                        document.getElementById('LDiv').appendChild(table);


                                }, function(errdata){
                                         alert(errdata);
                                });           

          }

















