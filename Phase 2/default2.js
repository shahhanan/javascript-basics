var Data = [
  {
    "name": "Sam",
    "Location": "California",
    "favFoods": ["Chicken", "Fish", "<strong>Lamb</strong>"],
    "about": "HI there my name is Sam "
  },
  {
    "name": "jhon",
    "Location": "Texas",
    "favFoods": ["Tuna", "Dosa", "<strong>French Fries</strong>"],
    "about": "HI there my name is Jhon"
  },
  {
    "name": "Harold",
    "Location": "New York",
    "favFoods": ["<strong>Coffee</strong>", "Avocado", "Carrot"],
    "about": "HI there my name is Harold"
  }
];
  
  
  // Main Code 
  
  document.getElementById("div1").innerHTML = `
  <h1 class="div1-title">Data Sets (${Data.length} results)</h1>
  ${Data.map(Template).join("")}
  <p class="footer">These ${Data.length} Data Sets were added recently. Check back soon for updates.</p>
  `;
  


  // Functions

  function foods(foods) {
    return `
  <h4>Favorite Foods</h4>
  <ul class="foods-list">
  ${foods.map(food => `<li>${food}</li>`).join("")}
  </ul>
  `;
  }
  
  function Template(Data) {
    return `
      <div class="Person">
      
      <h2 class="person-name">${Data.name} <span class="location">(${Data.Location})</span></h2>
      
      ${Data.favFoods ? foods(Data.favFoods) : ""}
      </div>
    `;
  }