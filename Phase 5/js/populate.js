function showform(btn1, btn2, divId)
{
  document.getElementById(btn1).style.display = 'none';
  document.getElementById(btn2).style.display = 'none';
  document.getElementById(divId).style.display = 'block';
}

  function serialize(form) {
    if (!form || form.nodeName !== "FORM") {
      return;
    }
    var i, j, q = [];
    for (i = form.elements.length - 1; i >= 0; i = i - 1) {
      if (form.elements[i].name === "") {
        continue;
      }
      switch (form.elements[i].nodeName) {
      case 'INPUT':
        switch (form.elements[i].type) {
        case 'text':
        case 'hidden':
        case 'password':
        case 'button':
        case 'reset':
        case 'submit':
          q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
          break;
        case 'checkbox':
        case 'radio':
          if (form.elements[i].checked) {
            q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
          }						
          break;
        case 'file':
          break;
        }
        break;			 
      case 'TEXTAREA':
        q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
        break;
      case 'SELECT':
        switch (form.elements[i].type) {
        case 'select-one':
          q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
          break;
        case 'select-multiple':
          for (j = form.elements[i].options.length - 1; j >= 0; j = j - 1) {
            if (form.elements[i].options[j].selected) {
              q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].options[j].value));
            }
          }
          break;
        }
        break;
      case 'BUTTON':
        switch (form.elements[i].type) {
        case 'reset':
        case 'submit':
        case 'button':
          q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
          break;
        }
        break;
      }
    }
    var arrayLength = q.length;
    var obj = {};
    for (var i = 0; i < arrayLength; i++)
    {
      var res = q[i].split("=");  
        obj[res[0]] = res[1];
        
    }
    return JSON.stringify(obj);
  
  }

function prepareDataToPost(form)
{
  var jsonFormData = JSON.parse(serialize(form));
          var dataForPost = 
                        {
                          method: "POST",
                          url: "php/postData.php",
                          divClass: "loading-bar",
                          divID: "loading-spinnerr",
                          appendto: "formOne"
                        };
          dataForPost.payload = jsonFormData;
                reqAjax(dataForPost, function(responceData){
                 alert(responceData);
                 location.reload();
              
                  }, function(errdata){
                    alert(errdata);
                  });
                       
}

function readProfile(id){
  var data = 
          {
            method: "GET",
            url: "php/getFullDetails.php",
            payload: 
                      {
                        id: id,
                        divClass: "loading-bar",
                        divID: "loading-spinnerr",
                        appendto: "RDiv"
                      }
          };
  reqAjax(data, function(details){
    document.getElementById('RDiv').innerHTML = "NAME : "+details[0].customerName+"<br>CONTACT LAST NAME : "+details[0].contactLastName+"<br>CONTACT FIRST NAME : "+details[0].contactFirstName+"<br>PHONE NUMBER : "+details[0].phone+"<br>ADDRESS LINE 1 : "+details[0].addressLine1+"<br>ADDRESS LINE 2 : "+details[0].addressLine2+"<br>CITY : "+details[0].city+"<br>STATE : "+details[0].state+"<br>POSTAL CODE : "+details[0].postalCode+"<br>COUNTRY : "+details[0].country+"<br>SALES REPRESENTATIVE NUMBER : "+details[0].salesRepEmployeeNumber+"<br>CREDIT LIMIT : "+details[0].creditLimit+"$<br>";

    }, function(errdata){
      alert(errdata);
    });



}




function populateData(btn1, btn2)
          {
          // hide button
          document.getElementById(btn1).style.display = 'none';
          document.getElementById(btn2).style.display = 'none';
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
                        payload: 
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
                                                  for (var i = 0,td2='',td=''; i < length; i++)
                                                    {
                                                      
                                                      td += '<tr> <td>'+Data[i].customerName+'</td> <td><button onclick = "readProfile('+Data[i].customerNumber+')">Get Full Details </button></td> </tr>';
                                                    }
                                        var table = '';
                                        table = '<table class="table1">'+td+'</table>';
                                          document.getElementById('LDiv').innerHTML = table;
                                       // document.getElementById('LDiv').insertAdjacentHTML('afterbegin', table);

                      }, function(errdata){
                             alert(errdata);
                      });           

          }