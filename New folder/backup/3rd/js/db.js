

const prosucts =['Non Veg','Vegetable','Fruits','Milk Product','Dry Fruits','Oil','Spices','Others']
const variable =['Non_Veg','Vegetable','Fruits','Milk_Product','Dry_Fruits','Oil','Spices','Others']

const Non_Veg = {
    0:['Brown Egg','images/products/Non Veg/Brown Egg.png'],
    1:['Checken', 'images/products/Non Veg/Checken.png'],
    2:['Egg', 'images/products/Non Veg/Egg.png'],
    3:['Fish', 'images/products/Non Veg/Fish.png'],
    4:['Lamp', 'images/products/Non Veg/Lamp.png'],
    5:['Prawns', 'images/products/Non Veg/Prawns.png'],
    6:['Quel Egg','images/products/Non Veg/Quel Egg.png']

}


const Vegetable = {
    7:['Bringal', 'images/products/Vegetable/Bringal.png'],
    8:['Brockli', 'images/products/Vegetable/Brockli.png'],
    9:['Cabbage', 'images/products/Vegetable/Cabbage.png'],
    10:['Capsicum', 'images/products/Vegetable/Capsicum.png'],
    11:['Carrot', 'images/products/Vegetable/carrot.png'],
    12:['Cauliflower', 'images/products/Vegetable/Cauliflower.png'],
    13:['Cucumber', 'images/products/Vegetable/Cucumber.png'],
    14:['Inidian Red Chilli', 'images/products/Vegetable/Inidian Red Chilli.png'],
    15:['Lady Finger', 'images/products/Vegetable/Lady Finger.png'],
    16:['Mushroom', 'images/products/Vegetable/Mushroom.png'],
    17:['Onion', 'images/products/Vegetable/Onion.png'],
    18:['Potato', 'images/products/Vegetable/Potato.png'],
    19:['Selery', 'images/products/Vegetable/Selery.png'],
    20:['Spring Onion', 'images/products/Vegetable/Spring Onion.png'],
    21:['Sweet Corn', 'images/products/Vegetable/Sweet Corn.png'],
    22:['Thai Red Chilli', 'images/products/Vegetable/Thai Red Chilli.png'],
    23:['Tomato', 'images/products/Vegetable/Tomato.png'],
    24:['White Mushroom', 'images/products/Vegetable/White Mushroom.png']
}

function getVegetable(data){
    var indexs = Object.keys(Vegetable);
    shuffleArray(indexs)
    var noofproduct =4
    if(indexs.length<4){
        noofproduct = indexs.length;
    }
    for(var i=0;i<noofproduct;i++){
        getItemCard(allItem[indexs[i]]);
    }
}

const Fruits = {
    25:['Apple', 'images/products/Fruits/Apple.png'],
    26:['Avocado', 'images/products/Fruits/Avocado.png'],
    27:['Banana', 'images/products/Fruits/Banana.png'],
    28:['Black Grapes', 'images/products/Fruits/Black Grapes.png'],
    29:['Blackberry', 'images/products/Fruits/Blackberry.png'],
    30:['Cherry', 'images/products/Fruits/Cherry.png'],
    31:['Coconut', 'images/products/Fruits/Coconut.png'],
    32:['Dates', 'images/products/Fruits/Dates.png'],
    33:['Green Apple', 'images/products/Fruits/Green Apple.png'],
    34:['Green Lemon', 'images/products/Fruits/Green Lemon.png'],
    35:['Guawa', 'images/products/Fruits/Guawa.png'],
    36:['Kiwi', 'images/products/Fruits/Kiwi.png'],
    37:['Mango', 'images/products/Fruits/Mango.png'],
    38:['Orange', 'images/products/Fruits/Orange.png'],
    39:['Papaya', 'images/products/Fruits/Papaya.png'],
    40:['Pineapple', 'images/products/Fruits/Pineapple.png'],
    41:['Plum','images/products/Fruits/Plum.png'],
    42:['Pomegranate', 'images/products/Fruits/Pomegranate.png'],
    43:['Raspbarrey', 'images/products/Fruits/Raspbarrey.png'],
    44:['Red Grapes', 'images/products/Fruits/Red Grapes.png'],
    45:['Strawberry', 'images/products/Fruits/Strawberry.png'],
    46:['Watter Melon', 'images/products/Fruits/Watter Melon.png'],
    47:['Yellow Lemon', 'images/products/Fruits/Yellow Lemon.png']
}

const Milk_Product = {
    48:['Butter', 'images/products/Milk Product/Butter.png'],
    49:['Cheese', 'images/products/Milk Product/Cheese.png'],
    50:['Goat Cheese', 'images/products/Milk Product/Goat Cheese.png'],
    51:['Milk', 'images/products/Milk Product/Milk.png'],
    52:['Paneer', 'images/products/Milk Product/Panir.png']
}

const Dry_Fruits = {
    53:['Almonds', 'images/products/Dry Fruits/Almonds.png'],
    54:['Cashew', 'images/products/Dry Fruits/Cashew.png'],
    55:['Pistachios', 'images/products/Dry Fruits/Pistachios.png'],
    56:['Raisins','images/products/Dry Fruits/Raisins.png']
}

const Oil = {
    57:['Coconut Oil', 'images/products/Oil/Coconut Oil.png'],
    58:['Nut Oil', 'images/products/Oil/Nut Oil.png'],
    59:['Oliv Oil', 'images/products/Oil/Oliv Oil.png'],
    60:['Sunflower Oil', 'images/products/Oil/Sunflower Oil.png']
}

const Spices = {
    61:['Black Pepper', 'images/products/Spices/Black Pepper.png'],
    62:['Cardamom Powder', 'images/products/Spices/Cardamom Powder.png'],
    63:['Cinnamon', 'images/products/Spices/Cinnamon.png'],
    64:['Cloves', 'images/products/Spices/Cloves.png'],
    65:['Mix Spices', 'images/products/Spices/Mix Spices.png'],
    66:['Turmeric Powder', 'images/products/Spices/Turmeric Powder.png'],
    67:['Vanilla', 'images/products/Spices/Vanilla.png']
}

const Others = {
    68:['Baking Soda', 'images/products/Others/Baking Soda.png'],
    69:['Chocolate', 'images/products/Others/Chocolate.png'],
    70:['Garlic', 'images/products/Others/Garlic.png'],
    71:['Honey', 'images/products/Others/Honey.png'],
    72:['Maida', 'images/products/Others/Maida.png'],
    73:['Rice', 'images/products/Others/Rice.png'],
    74:['Table Salt', 'images/products/Others/Table Salt.png'],
    75:['Wheat', 'images/products/Others/Wheat.png'],
    76:['Whole Wheat', 'images/products/Others/Whole Wheat.png']
}

const allItem = [
    ['Brown Egg','images/products/Non Veg/Brown Egg.png',130,12,'Pcs'],
    ['Chicken', 'images/products/Non Veg/Checken.png',170,1,'Kg'],
    ['Egg', 'images/products/Non Veg/Egg.png',70,12,'Pcs'],
    ['Fish', 'images/products/Non Veg/Fish.png',200,1,'Kg'],
    ['Lamp', 'images/products/Non Veg/Lamp.png',1000,1,'Kg'],
    ['Prawns', 'images/products/Non Veg/Prawns.png',600,1,'Kg'],
    ['Quel Egg','images/products/Non Veg/Quel Egg.png',220,12,'Pcs'],
    ['Bringal', 'images/products/Vegetable/Bringal.png',70,1,'Kg'],
    ['Brockli', 'images/products/Vegetable/Brockli.png',60,1,'Kg'],
    ['Cabbage', 'images/products/Vegetable/Cabbage.png',50,1,'Kg'],
    ['Capsicum', 'images/products/Vegetable/Capsicum.png',80,1,'Kg'],
    ['Carrot', 'images/products/Vegetable/carrot.png',90,1,'Kg'],
    ['Cauliflower', 'images/products/Vegetable/Cauliflower.png',90,1,'Kg'],
    ['Cucumber', 'images/products/Vegetable/Cucumber.png',50,1,'Kg'],
    ['Inidian Red Chilli', 'images/products/Vegetable/Inidian Red Chilli.png',55,1,'Kg'],
    ['Lady Finger', 'images/products/Vegetable/Lady Finger.png',60,1,'Kg'],
    ['Mushroom', 'images/products/Vegetable/Mushroom.png',90,1,'Kg'],
    ['Onion', 'images/products/Vegetable/Onion.png',50,1,'Kg'],
    ['Potato', 'images/products/Vegetable/Potato.png',30,1,'Kg'],
    ['Selery', 'images/products/Vegetable/Selery.png',25,1,'Bundle'],
    ['Spring Onion', 'images/products/Vegetable/Spring Onion.png',30,1,'Kg'],
    ['Sweet Corn', 'images/products/Vegetable/Sweet Corn.png',60,1,'Kg'],
    ['Thai Red Chilli', 'images/products/Vegetable/Thai Red Chilli.png',70,1,'Kg'],
    ['Tomato', 'images/products/Vegetable/Tomato.png',50,1,'Kg'],
    ['White Mushroom', 'images/products/Vegetable/White Mushroom.png',60,1,'Kg'],
    ['Apple', 'images/products/Fruits/Apple.png',180,1,'Kg'],
    ['Avocado', 'images/products/Fruits/Avocado.png',180,3,'Pcs'],
    ['Banana', 'images/products/Fruits/Banana.png',70,12,'Pcs'],
    ['Black Grapes', 'images/products/Fruits/Black Grapes.png',150,1,'Kg'],
    ['Blackberry', 'images/products/Fruits/Blackberry.png',150,1,'Kg'],
    ['Cherry', 'images/products/Fruits/Cherry.png',150,1,'Box'],
    ['Coconut', 'images/products/Fruits/Coconut.png',60,1,'Pc'],
    ['Dates', 'images/products/Fruits/Dates.png',250,1,'Box'],
    ['Green Apple', 'images/products/Fruits/Green Apple.png',220,1,'Kg'],
    ['Green Lemon', 'images/products/Fruits/Green Lemon.png',40,6,'Pcs'],
    ['Guawa', 'images/products/Fruits/Guawa.png',160,1,'Kg'],
    ['Kiwi', 'images/products/Fruits/Kiwi.png',200,1,'Kg'],
    ['Mango', 'images/products/Fruits/Mango.png',150,1,'Kg'],
    ['Orange', 'images/products/Fruits/Orange.png',160,1,'Kg'],
    ['Papaya', 'images/products/Fruits/Papaya.png',120,1,'Kg'],
    ['Pineapple', 'images/products/Fruits/Pineapple.png',150,1,'Kg'],
    ['Plum','images/products/Fruits/Plum.png',162,1,'Kg'],
    ['Pomegranate', 'images/products/Fruits/Pomegranate.png',200,1,'Kg'],
    ['Raspbarrey', 'images/products/Fruits/Raspbarrey.png',180,1,'Kg'],
    ['Red Grapes', 'images/products/Fruits/Red Grapes.png',190,1,'Kg'],
    ['Strawberry', 'images/products/Fruits/Strawberry.png',210,1,'Box'],
    ['Watter Melon', 'images/products/Fruits/Watter Melon.png',120,1,'Kg'],
    ['Yellow Lemon', 'images/products/Fruits/Yellow Lemon.png',160,1,'Kg'],
    ['Butter', 'images/products/Milk Product/Butter.png',70,100,'Gram'],
    ['Cheese', 'images/products/Milk Product/Cheese.png',230,1,'Box'],
    ['Goat Cheese', 'images/products/Milk Product/Goat Cheese.png',270,1,'Box'],
    ['Milk', 'images/products/Milk Product/Milk.png',80,1,'Ltr'],
    ['Paneer', 'images/products/Milk Product/Panir.png',80,500,'Gram'],
    ['Almonds', 'images/products/Dry Fruits/Almonds.png',160,1,'Box'],
    ['Cashew', 'images/products/Dry Fruits/Cashew.png',180,1,'Box'],
    ['Pistachios', 'images/products/Dry Fruits/Pistachios.png',350,250,'Gram'],
    ['Raisins','images/products/Dry Fruits/Raisins.png',200,500,'Gram'],
    ['Coconut Oil', 'images/products/Oil/Coconut Oil.png',210,1,'Ltr'],
    ['Ground Nut Oil', 'images/products/Oil/Nut Oil.png',300,500,'Ml'],
    ['Oliv Oil', 'images/products/Oil/Oliv Oil.png',520,500,'Ml'],
    ['Sunflower Oil', 'images/products/Oil/Sunflower Oil.png',230,1,'Ltr'],
    ['Black Pepper', 'images/products/Spices/Black Pepper.png',60,100,'Gram'],
    ['Cardamom Powder', 'images/products/Spices/Cardamom Powder.png',60,1,'Pckt'],
    ['Cinnamon', 'images/products/Spices/Cinnamon.png',160,1,'Kg'],
    ['Cloves', 'images/products/Spices/Cloves.png',100,100,'Gram'],
    ['Mix Spices', 'images/products/Spices/Mix Spices.png',70,1,'Pckt'],
    ['Turmeric Powder', 'images/products/Spices/Turmeric Powder.png',80,1,'Pckt'],
    ['Vanilla', 'images/products/Spices/Vanilla.png',400,100,'Ml'],
    ['Baking Soda', 'images/products/Others/Baking Soda.png',50,100,'Gram'],
    ['Chocolate', 'images/products/Others/Chocolate.png',300,500,'Gram'],
    ['Garlic', 'images/products/Others/Garlic.png',70,500,'Gram'],
    ['Honey', 'images/products/Others/Honey.png',400,500,'Gram'],
    ['Maida', 'images/products/Others/Maida.png',80,1,'Kg'],
    ['Rice', 'images/products/Others/Rice.png',150,1,'Kg'],
    ['Table Salt', 'images/products/Others/Table Salt.png',40,1,'Pckt'],
    ['Wheat', 'images/products/Others/Wheat.png',150,5,'Kg'],
    ['Whole Wheat', 'images/products/Others/Whole Wheat.png',80,5,'Kg']
]


function getAllProduct(type){
    for(var i=0;i<7;i++){
        var products =`
        <div class="s1child1">
                <div class="moreproduct">
                    <h2>`+prosucts[i]+`</h2>
                    <a id="moreitem" href="page/specificProduct.html?type=`+variable[i]+`">More Item</a>
                </div>
                <div class="productcardcontainer">
                    <script>getproducts(`+i+`,`+type+`)</script>
                </div>
            </div>
             `
        document.write(products)
    }
}

function getSprcificProduct(){
        console.log(getDetailFromHTTPS())
        var typename = getDetailFromHTTPS();
        if(typename[0]==0){
            var index = variable.indexOf(typename[1]);
            var products =`
            <div class="s1child1">
                <div class="productcardcontainer">
                    <script>getproducts(`+index+`,`+2+`)</script>
                </div>
                </div>
                `
            document.write(products)
        }else if(typename[0]==1){
            if(typename[1]=='Food'){
                pname=typename[2].toLowerCase();
                if(pname.includes('+')){
                    pname=pname.replace("+", " ")
                    console.log(pname)
                }
                producttoshow=[]
                for(var i=0;i<allItem.length;i++){
                    tempproduct=allItem[i][1].replace("/", " ").toLowerCase()
                    if(tempproduct.includes(pname)){
                         console.log(allItem[i][1])
                         producttoshow.push(i)
                    }
                }
                console.log(producttoshow)

                var products =`
                <div class="s1child1">
                        <div class="productcardcontainer">
                            <script>
                                getspctproducts(`+producttoshow+`)
                            </script>
                        </div>
                    </div>
                    `
                document.write(products)
                        
            }
        }
}

function getRelatedProduct(){
    var id = getIdFromHTTPS()
    var productcat = allItem[id][1].split('/')[2].toLowerCase();
    console.log(productcat)
    temparr =[]
    for(var i=0;i<allItem.length;i++){
        var tamp = allItem[i][1].replace('/',' ').toLowerCase();
        if(tamp.includes(productcat)){
            temparr.push(i)
        }
    }
    console.log(temparr)
    shuffleArray(temparr)
    var noofproduct = 4;
    if(temparr.length>4){
        temparr=temparr.slice(0, 4)
    }

    var products =`
        <div class="s1child1">
            <div class="productcardcontainer">
                <script>getspctproducts(`+temparr+`)</script>
            </div>
        </div>
    `
    document.write(products)
                    

}

function getspctproducts(...data){
   console.log(data)
    for(var i=0;i<data.length;i++){
         getItemCard(allItem[data[i]],2,data[i]);
    }
        
}

function getproducts(data,type){
       
    var indexs = Object.keys(Non_Veg);
    if(data==0){indexs = Object.keys(Non_Veg);}
    else if(data==1){indexs = Object.keys(Vegetable);}
    else if(data==2){indexs = Object.keys(Fruits);}
    else if(data==3){indexs = Object.keys(Milk_Product);}
    else if(data==4){indexs = Object.keys(Dry_Fruits);}
    else if(data==5){indexs = Object.keys(Oil);}
    else if(data==6){indexs = Object.keys(Spices);}
    else{indexs = Object.keys(Others);}
    if(type == 1){
        shuffleArray(indexs)
    }
    var noofproduct =4
    if(indexs.length<4){
        noofproduct = indexs.length;
    }
    if(type==2){
        noofproduct = indexs.length;
    }
    console.log(indexs)
    for(var i=0;i<noofproduct;i++){
        getItemCard(allItem[indexs[i]],type,indexs[i]);
    }

}


function getItemCard(data,type,index){
    var image =data[1];
    var name = data[0];
    var price = data[2];
    var qty = data[3];
    var unit =data[4];
    var productlink = 'page/product.html?id='+index
    if(type == 2){
        image ='../'+data[1]
        productlink ='../'+productlink
    }

    // console.log(index)
    const card =`
            <div class="cardcontainer">
                <div class="card">
                    <div class="pimagecontainer">
                        <a href=""><img src="`+image+`" alt=""></a>
                    </div>
                    <p>`+name+`</p>
                    <div class="pprice">
                    <p>`+price+`</p>
                    <p>/  `+qty+` `+unit+`</p>
                    </div>
                    <div class="cardbtn">
                        <a id="pcartbtn" href="">Cart</a>
                        <a id="pbuybtn" href='`+productlink+`'>Buy</a>
                    </div>
                </div>
            </div>
                `
    document.write(card)
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function getIdFromHTTPS(){
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
    function (m, key, value) {
        vars[key] = value;
    });
    return parseInt(vars.id);
}

function getDetailFromHTTPS(){
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
    function (m, key, value) {
        vars[key] = value;
    });
  
    var data = []
    if(vars['action']){
        console.log(vars['action'])
        data=[1,vars['action'],vars['type']]
    }else{
        data=[0,vars['type']]
    }

    return data;
}
function getNameFromHTTPS(){
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
    function (m, key, value) {
        vars[key] = value;
    });

    return vars['type'];
}