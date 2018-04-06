

var Data = [
    {
      name: "Sam",
      location: "California",
      favFoods: ["Chicken", "Fish", "<strong>Lamb</strong>"],
      about: "Really like the place"
    },
    {
      name: "jhon",
      location: "Texas",
      favFoods: ["Tuna", "Dosa", "<strong>French Fries</strong>"],
      about: "HI there my name is Jhon "
    },
    {
      name: "Harold",
      location: "New York",
      favFoods: ["<strong>Coffee</strong>", "Avocado", "Carrot"],
      about: "Happy to meet you people"
     },
     {
      name: "mark",
      location: "New jersy",
      favFoods: ["<strong>Coffee</strong>", "Avocado", "Carrot"],
      about: "Happy to meet you p"

     }
  ];
   // Functions
   
   function makeid() 
    {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
     }
  
  // Main 
     var datanumber = Data.length;
     var count = [];
     var Div1 = document.createElement('div');
     Div1.id = 'div1';
     Div1.className = 'div1';
     document.getElementsByTagName('body')[0].appendChild(Div1);
     document.getElementById('div1').innerHTML = "<h1 class='div1-title'>Data Sets ("+ datanumber +"  results) ";

      if(datanumber <= 0)
        {
          var Div2 = document.createElement('div');
          iDiv.id = 'div2';
          iDiv.className = 'Person';
          document.getElementById('div1').appendChild(Div2);
        }
      else
        {
          for(i=0;i<datanumber;i++)
          {
            count[i] = (document.createElement('div'));
            var id = makeid();
            count[i].id = id;
            count[i].className = 'Person';
            document.getElementById('div1').appendChild(count[i]);
            count[i].innerHTML = ("<h2 class='person-name'>" + Data[i].name + "   <span class='location'>(" + Data[i].location + ")</span></h2> <bold> <u> About</u></bold> : " + Data[i].about + "  <h4>Favorite Foods</h4>  "+ Data[i].favFoods +" </div></div> ");
          }
          
        }    
        document.write(" <p class='footer'>These "+ datanumber +" Data Sets were added recently. Check back soon for updates.</p>"); 

 
