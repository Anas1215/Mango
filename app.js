var fruits = [
    {
      title: "ANWAR RATOL ",
      image: "https://zameenblog.s3.amazonaws.com/blog/wp-content/uploads/2022/06/B2.jpg",
      description: "Tropical stone fruit, sweet and juicy.",
      types: ["Sindhri", "Chaunsa", "Anwar Ratol", "Langra"],
      symbol: "King of fruits"
    },
    {
      title: "Chaunsa",
      image: "https://wpassets.graana.com/blog/wp-content/uploads/2022/10/Top-12-Most-Famous-Varieties-Of-Indian-Mangoes.jpg",
      description: "Large, refreshing fruit with high water content.",
      types: ["Darya Khan", "Sugar Baby", "Charleston Gray"],
      symbol: "Summer favorite"
    },
    {
      title: "Sindhri",
      image: "https://wpassets.graana.com/blog/wp-content/uploads/2022/10/These-are-no-ordinary-mangoes_-These-are-Sindhri-mangoes-one-of-the-sweetest-mangoes-i-have-tasted_.jpg",
      description: "Stone fruit, sweet and tangy.",
      types: ["Elberta", "Golden Jubilee", "Early Grande"],
      symbol: "Summer delight"
    },
    {
      title: "Langra",
      image: "https://wpassets.graana.com/blog/wp-content/uploads/2022/10/Langra.jpg",
      description: "Bright red, juicy, and sweet.",
      types: ["Chandler", "Camarosa", "Festival"],
      symbol: "Spring treat"
    },
    {
      title: "Dussehri",
      image: "https://sukhis.com/app/uploads/2022/09/image5-1536x1024.jpg",
      description: "Small, round, sweet or tart.",
      types: ["Bing", "Rainier", "Montmorency"],
      symbol: "Summer delight"
    },
    {
        title: "Azeem Chaunsa",
        image: "https://agro.tdap.gov.pk/wp-content/uploads/2022/12/Azeem-Chaunsa.jpg",
        description: "Small, round, sweet or tart.",
        types: ["Bing", "Rainier", "Montmorency"],
        symbol: "Summer delight"
      },
      
    
  ];
  
  
  
  var box = document.getElementById("box");
  
  fruits.forEach(function (data, ind) {
    
    box.innerHTML += 
    
    `
      <div class="fruit" id="${+ind}">
      <h1>${data.title}</h1>
      <img src='${data.image}' style: width="500px", height="200px">
      <p>
      <span class="first">Description:</span><span class="last">${data.description}</span>
      <span class="first">Types:</span><span class="last">${data.types}</span>
      <span class="first">symbol:</span><span class="last">${data.symbol}</span>
      </p>
      <div class="buttons">
      <button onclick="edit(this)">Edit</button>
      <button onclick="khatam(this)">Delete</button>
      </div>
      </div>`  
  });
  
    function khatam(element){
    var location = element.parentElement.parentElement.id
    fruits.splice(location, 1, )
    box.innerHTML = "";
    fruits.forEach(function (data, ind) {  
      box.innerHTML += 
      `
        <div class="fruit" id="${+ind}">
        <h1>${data.title}</h1>
        <img src='${data.image}' style: width="500px", height="200px">
        <p>
        <span class="first">Description:</span><span class="last">${data.description}</span>
        <span class="first">Types:</span><span class="last">${data.types}</span>
        <span class="first">symbol:</span><span class="last">${data.symbol}</span>
        </p>
        <div class="buttons">
        <button onclick="edit(this)">Edit</button>
        <button onclick="khatam(this)">Delete</button>
        </div>
        </div>`
    });
  }
  
  function edit(element){
    box.innerHTML = "";
    var location = element.parentElement.parentElement.id
    var category = prompt ('select Category', 'title, image, description, types, symbol')
    var temp = prompt ('Enter New Value', '')
    fruits.forEach(function (data, ind) { 
      fruits[location][category] = temp;
      box.innerHTML += 
      ` <div class="fruit" id="${+ind}">
        <h1>${data.title}</h1>
        <img src='${data.image}' style: width="500px", height="200px">
        <p>
        <span class="first">Description:</span><span class="last">${data.description}</span>
        <span class="first">Types:</span><span class="last">${data.types}</span>
        <span class="first">symbol:</span><span class="last">${data.symbol}</span>
        </p>
        <div class="buttons">
        <button onclick="edit(this)">Edit</button>
        <button onclick="khatam(this)">Delete</button>
        </div>
        </div>`
      });
  }
  
   