



function generateID() {
  var count = 100
  return function () {
    return count++
  }
}

var id = generateID()


var proteins =[]


function makeProtein(name,category,price,images){
var protein = {
  name : name, 
  category :category , 
  price : price, 
  images :images ,
  id : id()
}
proteins.push(protein)

}

makeProtein("wheyprotein",'whey' ,180 ,["https://fine-japan-global.myshopify.com/cdn/shop/products/0602133212_62983d4c34ff7_540x.jpg?v=1655800251","https://imagedelivery.net/v_g237akqysjqDvfyOsFkg/097b4a63-8ade-4cd7-7d78-ff09d3b6c800/productPageThumb",'https://target.scene7.com/is/image/Target/GUEST_8fcfc21a-ecda-4675-a4e8-c51c4a6589e5?wid=488&hei=488&fmt=pjpeg' ,'https://post.healthline.com/wp-content/uploads/2020/09/578810-The-11-Best-Whey-Protein-Powders-of-2020-1296x728-Header_e1be83.jpg','https://stock-x-nutrition.tn/wp-content/uploads/2023/01/whey-100-prostar-protein-tunisia-choclate-5.4kg.jpg']
)
makeProtein("massprotein",'mass' ,90 ,["https://m.media-amazon.com/images/I/71z-tZ3DJdL.jpg" ,"https://m.media-amazon.com/images/I/71BFec3EMjL._AC_UF1000,1000_QL80_.jpg", 'https://nutribeast.tn/188-home_default/mass-gainer-american-wolf-hard-mass-3kg.jpg' ,'https://m.media-amazon.com/images/I/61hzDolotIL.jpg','https://international.muscletech.com/wp-content/uploads/2022/05/muscletech-suppfacts-masstech-chocolate-fudge-cake.jpg'] 
)
makeProtein("isolateprotein",'isolate' ,220,[ "https://www.impactnutrition.com.tn/wp-content/uploads/2022/01/ISOLATE-CHOOCARMEL-16KG.jpg" , "https://www.bigbasket.com/media/uploads/p/l/40287647_1-zeelab-whey-protein-isolate-powder-for-muscle-support-recovery-french-vanilla-creme.jpg" ,'https://www.dmoose.com/cdn/shop/articles/Untitled-1_1d0164e3-92a3-4e51-9a13-12dea4331c4f.jpg?v=1658581481','https://rukminim2.flixcart.com/image/850/1000/xif0q/protein-supplement/m/l/p/whey-protein-100-whey-isolate-protein-performance-series-original-imagpxnrammzqvgz.jpeg?q=90&crop=false', 'https://nutribeast.tn/618-home_default/isotope-100-whey-isolate-redcon1-23kg.jpg'] 
)
makeProtein("massgainer" ,'gainer',110 , ['https://c8.alamy.com/comp/J5EMPP/3d-render-of-mass-gainer-bottle-isolated-over-white-background-J5EMPP.jpg','https://assets.hyugalife.com/catalog/product/h/v/hvox61x7_1_1.jpg?compress=true&format=webp&q=75&w=500&h=500','https://m.media-amazon.com/images/I/81l0+nwIkDL.jpg','https://rukminim2.flixcart.com/image/750/900/l4pxk7k0/protein-supplement/t/d/h/weight-gainers-mass-gainers-muscle-man-xxxl-mass-gainer-weight-original-imagfkdgahzan6yx.jpeg?q=20&crop=false','https://dietechfitness.com/wp-content/uploads/2018/12/SUPER-MASS-GAINER-5.4KG-FACTS.jpg'])

makeProtein('creatinemonohydrate', 'creatine' , 150 , ['https://efectivnutrition.com/cdn/shop/files/efectiv.nutrition.creatine.monohydrate.300g.jpg?v=1692697915&width=2048' , 'https://www.prosource.net/cdn/shop/products/PS_Creatine_500g_Cylinder_render_500px-400px_1024x1024.png?v=1659128010', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpgmyIujh9Ig_s2nSQo3qTQ7TDhC8Um1uDpQBVKx-cB9jEQlzp8WKU0-gOgH945Ch5zSA&usqp=CAU', 'https://nutrexresearch.myshopify.com/cdn/shop/files/Creatine-200.png?v=1702122417&width=480','https://www.cdiscount.com/pdt2/2/8/1/2/550x550/bio5999076204281/rw/100-creatine-monohydrate-500g-biotech-usa.jpg'])

function display(protein, index) {
  $("#shop").append(
    `

    <div id="protein-${protein.id}">
    <h3>${protein.name}</h3>
    <img
    class="posters"
    id="img-${protein.id}"
    src= ${protein.images[0]}
    Onclick="toggleImg(${protein.id}, ${index})"
   alt=""
    />
    
    <button class="delete-button" data-protein-id="${protein.id}">Delete</button>
    



      <p>${protein.category}</p>
      <p>${protein.price}</p>
    </div>`
  )
}

function displayproteins(array) {
  $("#shop").empty();
  for (let i = 0; i < array.length; i++) {
    const protein = array[i];
    display(protein, i);
  }
}

displayproteins(proteins)



var imageIndex = 0;

function toggleImg(id, proteinIndex) {
  console.log(imageIndex);
 
  var img = "#img-" + id;
  
  imageIndex = (imageIndex + 1) % proteins[proteinIndex].images.length;
 
  $(img).attr("src", proteins[proteinIndex].images[imageIndex]);
}


$("#sort").click(function () {
  var sortedByPrice = proteins.toSorted(function (a, b) {
    return a.price - b.price;
  })
  console.log(sortedByPrice);
  displayproteins(sortedByPrice);
})


function category(cat) {
  var fileredByCat = proteins.filter(function (element) {
    return element.category === cat;
  });
  displayproteins(fileredByCat);
}

$("#whey").click(function () {
  category("whey");
});

$("#mass").click(function () {
  category("mass");
});

$("#isolate").click(function () {
  category("isolate");
});

$('#gainer').click(function(){
  category('gainer')
})


$('#creatine').click(function(){
  category('creatine')
})

function deleteprotein(id) {
  proteins = proteins.filter(function (element) {
    return element.id !== id;
  });
  displayproteins(proteins);
}

$(document).ready(function() {
  $('#shop').on('click', '.delete-button', function() {
    var proteinId = $(this).data('protein-id');
    deleteprotein(proteinId);
  });
});











