
var Div0 = document.createElement('div');
Div0.id = 'button';
document.getElementsByTagName('body')[0].appendChild(Div0);
Div0.innerHTML = '<button id="btn" onclick=" getData(); "> Get The Data </button> ';
var loading = document.createElement('div');
loading.id = 'load';
loading.className = 'loading-bar';
document.body.appendChild(loading);

function getData()
  {
   
    Div0.style.display = "none";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if(this.readyState == 1){
        document.body.className = "loading";  
      }
      if (this.readyState == 4){
        document.body.className = "none";
      }
      //document.body.className = "loading";
      
      if (this.readyState == 4 && this.status == 200 ) {
        
       var  Data = JSON.parse(this.responseText);
         generate(Data);
         
      }
      //alert(this.readyState);
      
    };
    
    xhttp.open("GET", "createjson.json", true);
   
      xhttp.send();  
  }  
    
   function generate(Data)
   {
    
     var datanumber = Data.length;
     var count = [];
     var list = [];
     var Div1 = document.createElement('div');
     Div1.id = 'div1';
     Div1.className = 'div1';
     document.getElementsByTagName('body')[0].appendChild(Div1);
     document.getElementById('div1').innerHTML = "<h1 class='div1-title'>Data Sets ("+ datanumber +"  results </div>) ";

      if(datanumber <= 0)
        {
         
          var Div2 = document.createElement('div');
          Div2.id = 'div2';
          Div2.className = 'Person';
          Div1.appendChild(Div2);
          div2.innerHTML = "There is no Data to dispay please check back later";
          
        }
      else
        {
          for(i=0;i<datanumber;i++)
          {
            var string = "";
            count[i] = (document.createElement('div'));
            var id = makeid();
            count[i].id = id;
            count[i].className = 'Person';
            Div1.appendChild(count[i]);
          //  count[i].innerHTML = ("<h2 class='person-name'>" + Data[i].name + "   <span class='location'>(" + Data[i].Location + ")</span></h2> <bold> <u> About</u></bold> : " + Data[i].about + "  <h4>Favorite Foods</h4>  "+ Data[i].favFoods +" </div></div> ");
              
              
              string += ("<h2 class='person-name'>" + Data[i].name + "   <span class='location'>(" + Data[i].Location + ")</span></h2> <bold> <u> About</u></bold> : " + Data[i].about );
              string += "<h4>Favorite Foods</h4>";
              var foodlength = Data[i].favFoods.length; 
              
              list[i] = document.createElement('ul');
              var id2 = makeid();
              list[i].id = id2;
              list[i].className = 'foods-list';
              count[i].appendChild(list[i]);
              for(ii=0;ii<foodlength;ii++)
              {
                
                var li = document.createElement('li');
                list[i].appendChild(li);
               // string += Data[i].favFoods[ii];
               li.innerHTML = Data[i].favFoods[ii];
              }
              count[i].insertAdjacentHTML('afterbegin', string);
          }
          
        }    
        

      }
      



                                                                                   
   
   function makeid() 
   {
   var text = "";
   var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
 
   for (var i = 0; i < 5; i++)
     text += possible.charAt(Math.floor(Math.random() * possible.length));
 
   return text;
    }

  
    