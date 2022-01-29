
const prosucts =['Non Veg','Vegetable','Fruits','Milk Product','Dry Fruits','Oil','Spices','Others']
const variable =['Non_Veg','Vegetable','Fruits','Milk_Product','Dry_Fruits','Oil','Spices','Others']
const recipiestype = ['Veg Recipies','Non-Veg Recipies']
const recipievariable = ['Veg_Recipies','Non_Veg_Recipies']
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
    75:['Wheat Flour', 'images/products/Others/Wheat.png'],
    76:['Whole Wheat', 'images/products/Others/Whole Wheat.png']
}

const itemDesc = [
    'Eggs are healthy, good-for-you, and very versatile when it comes to finding delicious ways to eat them. This post breaks down the benefits of eggs and gives you reasons to eat them more often!',
    'Chicken has a very high protein content, which plays a very important role in sustaining our muscles. Eating chicken is a must for those who want to build strength.',
    'Eggs are healthy, good-for-you, and very versatile when it comes to finding delicious ways to eat them. This post breaks down the benefits of eggs and gives you reasons to eat them more often!',
    'Fish is filled with omega-3 fatty acids and vitamins such as D and B2 (riboflavin). Fish is rich in calcium and phosphorus and a great source of minerals, such as iron, zinc, iodine, magnesium, and potassium.',
    'Not only is it a rich source of high-quality protein, but it is also an outstanding source of many vitamins and minerals, including iron, zinc, and vitamin B12. Because of this, regular consumption of lamb may promote muscle growth, maintenance, and performance.',
    'Prawns contain vitamins and minerals like calcium, phosphorous, potassium, vitamin A, vitamin E, etc. They are packed with significant amounts of vitamin B12, B6 and niacin. They are also a rich source of iron that helps in boosting the production of red blood cells.',
    'Eggs are healthy, good-for-you, and very versatile when it comes to finding delicious ways to eat them. This post breaks down the benefits of eggs and gives you reasons to eat them more often!',
    'Brinjals are not just powerhouses of several nutrients like vitamins and minerals, but also contain high quantities of antioxidants. For the uninitiated, antioxidants shield the body from any damage caused by harmful substances called free radicals.',
    'Broccoli is high in many nutrients, including fiber, vitamin C, vitamin K, iron, and potassium. It also boasts more protein than most other vegetables.',
    'Cruciferous vegetables like cabbage, kale, and broccoli are notorious for being chock-full of beneficial nutrients. If you are trying to improve your diet, cruciferous vegetables are a good place to start.',
    'Capsicum is very high in Vitamin C. In fact, red capsicum has the highest vitamin C content among most of the fruit and vegetables. Foods high in vitamin C are beneficial for the immune system. The vitamin C in capsicum can protect the body against infection by encouraging production of white blood cells.',
    "he fiber in carrots can help keep blood sugar levels under control. And they're loaded with vitamin A and beta-carotene, which there's evidence to suggest can lower your diabetes risk.",
    'Cauliflower is a source of choline, an essential nutrient we need for mood, memory and recall. As such, it is a key building block of acetylcholine, a chemical messenger involved in signalling the central nervous system.',
    'Cucumbers contain 96% per cent of water. They are ideal for detoxification and preventing dehydration. Cucumbers are rich in phytonutrients and vitamin K. They are also a very good source of pantothenic acid and Molybdenum.',
    'Red chillies are high in potassium, and so is their powder. Potassium relaxes the blood vessels in your body and helps maintain blood pressure levels. They also have capsaicin, an active component which reduces blood pressure and improves circulation.',
    'Ladyfinger, also known as okra or bhindi, is a highly nutritious vegetable grown in tropical to temperate climate zones. It is the popular vegetable of Indians, despite many remaining unaware of the benefits of ladyfinger.',
    'Mushrooms are rich in the B vitamins: riboflavin, niacin, and pantothenic acid. The combination helps protect heart health. Riboflavin is good for red blood cells. Niacin is good for the digestive system and for maintaining healthy skin.',
    'Onions are a rich source of flavonoids and thiosulfinates. What do these do exactly? Well, the flavonoids in onion help in reducing bad cholesterol in your body and thiosulfinates are known to keep the consistency of the blood right, much like a blood thinner.',
    'The potatos fiber, potassium, vitamin C, and vitamin B6 content, coupled with its lack of cholesterol, all support heart health.Potatoes contain significant amounts of fiber. Fiber helps lower the total amount of cholesterol in the blood, thereby decreasing the risk of heart disease.',
    'Celery contains a plant compound called apigenin, which plays a role in traditional Chinese medicine as an anti-inflammatory, antibacterial, antiviral, and antioxidant agent.',
    'Green onion is an excellent source of Sulphur which is quite beneficial for the overall health. It has compounds like allyl sulphide and flavonoids that prevent cancer and fight against the enzymes that produce cancer cells.',
    'Sweetcorn may be one of the most perplexing delicacies. For instance, some people assume it is abundant in sugar due to its name. However, it is simply a myth. Sweet corn is as nutritious as any whole cereal grain. It is high in fibre and contains various vitamins, minerals, and antioxidants.',
    'Red chillies are jam-packed with Vitamin C that helps in supporting the immune system and combat chronic diseases. Prevents heart ailments: There are very powerful antioxidants in red chilli that help in clearing blockages in blood vessels and arteries.',
    'Tomatoes are loaded with a substance called lycopene. It gives them their bright red color and helps protect them from the ultraviolet rays of the sun. In much the same way, it can help protect your cells from damage.',
    'Mushrooms are one of the few non-animal sources of vitamin D. When they are grown, exposed to ultraviolet (UV) radiation, either from sunlight or a UV lamp, mushrooms increase their concentration of vitamin D.',
    'Apples are also a rich source of polyphenols, an important group of antioxidants. Antioxidants are compounds that protect your cells from free radicals — harmful molecules that contribute to the development of chronic conditions, like heart disease and cancer',
    'Avocados provide a substantial amount of monounsaturated fatty acids and are rich in manyTrusted Source vitamins and minerals. Incorporating them into a varied, healthy diet can provide a number of benefits.',
    'Bananas are incredibly healthy, convenient, delicious, and one of the most inexpensive fresh fruits you can buy. This makes them an excellent choice for anyone interested in eating healthy.',
    'Black grapes contain Lutein and Zeaxanthin, which are carotenoids, known to help in maintaining good eyesight. According to a study published in Free Radical Biology and Medicine',
    'Blackberries contain high levels of antioxidants, such as anthocyanins. Antioxidants help people to fight against the adverse impact of free radicals in the body.Free radicals can damage cells and are thought to be closely involved in the aging process plus other health conditions, such as cancer and heart disease.',
    'Cherries are especially high in polyphenols, a large group of plant chemicals that help fight cellular damage, reduce inflammation, and promote overall health ',
    'Raw coconut is also an excellent source of healthy fats, vitamins, minerals, and antioxidants that can help your body burn fat.',
    'Most of the calories in dates come from carbs. The rest are from a very small amount of protein. Despite their calories, dates contain some important vitamins and minerals in addition to a significant amount of fiber.',
    'Green apples are rich in Vitamin C, Vitamin A, antioxidants, and phytonutrients, which make them a great food for improved vision. These micronutrients fight damages and infections in the eye, help the wounds heal faster',
    'Research has found that both green tea and lemons are associated with several benefits for heart health. In fact, one review reported that citrus flavonoids, including those found in lemons, may suppress inflammation, improve the function of the blood vessels, and support healthy cholesterol levels',
    'Due to the rich fibre content and low glycaemic index, guavas prevent the development of diabetes. While the low glycemic index inhibits a sudden spike in sugar levels, the fibre content ensures the sugar levels are well regulated',
    'The kiwifruit possesses properties that lower blood pressure. By helping to maintain a healthy blood pressure and providing a boost of Vitamin C, the kiwifruit can reduce the risk of stroke  and heart disease.',
    'Mangoes are high in immune-boosting vitamin C,” says Nicole Stefanow, RDN, a culinary registered dietitian in the greater New York City area. A 1 cup serving provides two-thirds of the vitamin C you need in a day.',
    'Oranges are a treasure trove of nutrients and protective plant compounds, including vitamins, minerals, and antioxidants. Studies show that consuming oranges regularly may benefit your health in several ways.',
    'Papayas contain high levels of antioxidants vitamin A, vitamin C, and vitamin E. Diets high in antioxidants may reduce the risk of heart disease. The antioxidants prevent the oxidation of cholesterol.',
    'Pineapple is good for your overall health, but what makes this fruit healthy is what we will come to in this article. However, here are some interesting facts that you need to know about this healthy fruit.',
    'Plums and prunes are impressively high in nutrients. They contain over 15 different vitamins and minerals, in addition to fiber and antioxidants.',
    'Pomegranate is rich in anti-oxidants and thus protects our body from free radicals, which are responsible for premature ageing. Free radicals are formed by exposure to sun and due to harmful toxins in the environment.',
    'They provide potassium, essential to heart function, and proven to lower blood pressure. The omega-3 fatty acids in raspberries can help prevent stroke and heart disease. They also contain a mineral called manganese, which is necessary for healthy bones and skin',
    'Red grapes possess antibacterial and antiviral properties. Thus, they protect you from many infections. The antiviral properties are also useful to fight against the polio virus and herpes simplex virus.',
    'Strawberries are jam-packed with vitamins. In fact, you only need to eat around 5 large berries to get 98% of your daily value of vitamin C. This vitamin plays a crucial role in maintaining a healthy immune system',
    'Watermelon also contains antioxidants. These substances can help removeTrusted Source molecules known as free radicals, or reactive species, from the body. The body produces free radicals during natural processes, such as metabolism.',
    'Citrus fruits like lemons are high in vitamin C, a primary antioxidant that helps protect cells from damaging free radicals. You have probably heard that vitamin C may help prevent or limit the duration of the common cold in some people, but studies are conflicting.',
    'As its mainly composed of fat, butter is a high-calorie food. One tablespoon (14 grams) of butter packs about 100 calories, which is similar to 1 medium-sized banana.',
    'Cheese is a great source of calcium, fat, and protein. It also contains high amounts of vitamins A and B-12, along with zinc, phosphorus, and riboflavin. Cheese made from the milk of 100 percent grass-fed animals is the highest in nutrients and also contains omega-3 fatty acids and vitamin K-2.',
    'The fatty acids in goat cheese are metabolized faster than cows cheese, which means that the body feels full faster. Researchers have found evidence that choosing goat cheese over cow helps people feel less hungry and eat less overall',
    'Milk is packed with important nutrients like calcium, phosphorus, B vitamins, potassium and vitamin D. Plus its an excellent source of protein. Drinking milk and dairy products may prevent osteoporosis and bone fractures and even help you maintain a healthy weight.',
    'Paneer provides instant energy as it is rich in calcium, selenium, and potassium. It also has high protein content, making it a good choice for a vegetarian diet.',
    'Almonds contain lots of healthy fats, fiber, protein, magnesium and vitamin E. The health benefits of almonds include lower blood sugar levels, reduced blood pressure and lower cholesterol levels. They can also reduce hunger and promote weight loss',
    'Cashews are low in sugar and rich in fiber, heart-healthy fats, and plant protein. They are also a good source of copper, magnesium, and manganese — nutrients important for energy production, brain health, immunity, and bone health.',
    'Consuming a moderate amount of pistachios may enhance your heart health effectively. These nuts contain arginine, an amino acid. Arginine is also known to help reduce blood pressure.',
    'Raisins are a rich source of fiber, iron, calcium, potassium, and other essential nutrients, that provide you with an energy boost and help you keep your hair and skin glowing. Besides, they make for a quick and simple snack',
    'Coconut oil is different from other dietary oils, because it is mainly composed of medium-chain fatty acids (MCFAs), whereas most other oils are almost entirely long-chain fatty acids.',
    'Groundnut oil contains phytochemicals and vitamin E, both of which are natural antioxidants. It also reduces inflammation if consumed regularly. It is said to keep many diseases like cancer at bay. The vitamin E helps maintain good skin health, making it look young and healthy.',
    'Olive oil is the main source of fat in the Mediterranean diet. People who consume this diet appear to have a higher life expectancy, including a lower chance of dying from cardiovascular diseases, compared with people who follow other diets.',
    'Sunflower oil has many health benefits because it is low in saturated fat and high in two types of fatty acids, polyunsaturated fatty acids and monounsaturated fatty acids.',
    'Black pepper helps in good digestion and when it is consumed raw, hydrochloric acid is released by the stomach and helps in breaking down the proteins. Hydrochloric acid helps in cleaning your intestines and barricading you from other gastrointestinal diseases.',
    'Cinnamons benefits are thought to be from one of its antioxidant compounds, cinnamaldehyde, which gives it that rich aroma and flavor and can also reduce inflammation. Cinnamon is also a staple of the Mediterranean diet, a heart-healthy way of eating that emphasizes cooking with herbs and spices.',
    'Clove benefit people with diabetes or prediabetes. This is based on research that suggests that clove may help reduce blood sugar (glucose) before and after eating food.',
    'Spices benefit people with diabetes or prediabetes. This is based on research that suggests that spices may help reduce blood sugar (glucose) before and after eating food.',
    'Turmeric contains antioxidants that prevent free radicals from damaging the internal organs of the body. turmeric powder benefits in reducing cancer risk and symptoms of aging. It also contains a compound called curcumin which is said to amplify the effects of chemotherapy and fight cancer development.',
    'The sweet, warm, rich aroma of vanilla extract not only soothes the palate, it also calms the mind; and now we find that vanilla extract also restores skin. The extract is rich in antioxidants and phenolic compound vanillin that help to neutralise free radicals and prevent skin damage.',
    'Baking soda, also known as sodium bicarbonate or bicarbonate of soda, is a popular baking ingredient. It gives foods like bread, cakes, muffins, and cookies a light, fluffy texture.',
    'Dark chocolate is a rich source of antioxidants and minerals, and it generally contains less sugar than milk chocolate. Some research suggests that dark chocolate may help lower the risk of heart disease, reduce inflammation and insulin resistance, and improve brain function.',
    'Garlic can also reduce cardiovascular disease risk by lowering your cholesterol. A group of study participants that took a garlic supplement saw their cholesterol levels go down over a period of five months. ',
    'Honeys antioxidant and antibacterial properties help improve the digestive system and boost immunity. It is also a powerhouse of antioxidants, which are very effective for the removal of free radicals from the body.',
    'Maida contains complex carbohydrates, dietary fiber, and a moderate amount of proteins. According to the USDA National Nutrient Database, sprouted wheat is rich in catalytic elements, calcium, magnesium, potassium, sulfur, chlorine, arsenic, silicon, manganese and vitamin E.',
    'Rice helps in providing energy, prevents obesity, controls blood pressure, prevents cancer, Eating white rice benefits for skin and prevents Alzheimers Disease, has Diuretic & Digestive Qualities, improves metabolism.',
    'Table salt. Sea salt is mostly composed of sodium chloride, a compound that helps regulate fluid balance and blood pressure in the body. Since its minimally processed, it contains some minerals, including potassium, iron, and calcium.',
    'Wheat contains complex carbohydrates, dietary fiber, and a moderate amount of proteins. According to the USDA National Nutrient Database, sprouted wheat is rich in catalytic elements, calcium, magnesium, potassium, sulfur, chlorine, arsenic, silicon, manganese and vitamin E.',
    'Wheat contains complex carbohydrates, dietary fiber, and a moderate amount of proteins. According to the USDA National Nutrient Database, sprouted wheat is rich in catalytic elements, calcium, magnesium, potassium, sulfur, chlorine, arsenic, silicon, manganese and vitamin E.',
    


]


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
    ['Wheat Flour', 'images/products/Others/Wheat.png',150,5,'Kg'],
    ['Whole Wheat', 'images/products/Others/Whole Wheat.png',80,5,'Kg']
]


const Veg_Recipies ={
    0: ['Pista Choco Barfi',
  'images/recipes/veg recipe/Pista Choco Barfi.jpg',
  '25m',
  '10 m',
  '450',
  '7 Servings'],
 1: ['Spinach Raita',
  'images/recipes/veg recipe/Spinach Raita.jpg',
  '10m',
  '5 m',
  '105',
  '3 Servings'],
 2: ['Blueberry Sorbet',
  'images/recipes/veg recipe/Blueberry Sorbet.jpg',
  '20m',
  '10 m',
  '100',
  '4 Servings'],
 3: ['Muthiya',
  'images/recipes/veg recipe/Muthiya.jpg',
  '25m',
  '15 m',
  '265',
  '10 Servings'],
 4: ['Healthy Mango Yoghurt',
  'images/recipes/veg recipe/Healthy Mango Yoghurt.jpg',
  '10m',
  '5 m',
  '110',
  '3 Servings'],
 5: ['Hara Kebab',
  'images/recipes/veg recipe/Hara Kebab.jpg',
  '35m',
  '15 m',
  '141',
  '5 Servings'],
 6: ['Beetroot Raita',
  'images/recipes/veg recipe/Beetroot Raita.jpg',
  '30m',
  '10 m',
  '96',
  '4 Servings'],
 7: ['Ragi Roti',
  'images/recipes/veg recipe/Ragi Roti.jpg',
  '20m',
  '10 m',
  '103',
  '4 Servings'],
 8: ['Potato-Chickpea Curry',
  'images/recipes/veg recipe/Potato-Chickpea Curry.jpg',
  '50m',
  '20 m',
  '480',
  '4 Servings'],
 9: ['Rhubarb Fool',
  'images/recipes/veg recipe/Rhubarb Fool.jpg',
  '20m',
  '10 m',
  '136',
  '8 Servings'],
 
}

const Non_Veg_Recipies = {
    10: ['Mutton Galouti Kebab',
  'images/recipes/non veg recipe/Mutton Galouti Kebab.jpg',
  '40m',
  '20 m',
  '265',
  '12 Servings'],
 11: ['Scallop Ceviche',
  'images/recipes/non veg recipe/Scallop Ceviche.jpg',
  '20m',
  '10 m',
  '115',
  '3 Servings'],
 12: ['Frikadeller',
  'images/recipes/non veg recipe/Frikadeller.jpg',
  '25m',
  '15 m',
  '372',
  '4 Servings'],
 13: ['Roasted Turkey with Gravy',
  'images/recipes/non veg recipe/Roasted Turkey with Gravy.jpg',
  '1h 25m',
  '30 m',
  '498',
  '6 Servings'],
 14: ['Zuppa Toscana',
  'images/recipes/non veg recipe/Zuppa Toscana.jpg',
  '35m',
  '25 m',
  '323',
  '6 Servings'],
 15: ['Sausage Breakfast Casserole',
  'images/recipes/non veg recipe/Sausage Breakfast Casserole.jpg',
  '20m',
  '10 m',
  '522',
  '8 Servings'],
 16: ['Chilly Lobster Moily',
  'images/recipes/non veg recipe/Chilly Lobster Moily.jpg',
  '30m',
  '10 m',
  '388',
  '4 Servings'],
 17: ['Crispy Kurao Fish with Prawn and Crayfish Topping',
  'images/recipes/non veg recipe/Crispy Kurao Fish with Prawn and Crayfish Topping.jpg',
  '40m',
  '10 m',
  '472',
  '4 Servings'],
 18: ['Keema Biryani',
  'images/recipes/non veg recipe/Keema Biryani.jpg',
  '45m',
  '15 m',
  '752',
  '4 Servings'],
 19: ['Rosemary Chicken',
  'images/recipes/non veg recipe/Rosemary Chicken.jpg',
  '40m',
  '10 m',
  '410',
  '4 Servings']
}

const allIngeadents = [['1/2 cup powdered pistachios',
  '1 1/2 cup  -khoya-',
  '1/4 teaspoon  green -cardamom-',
  '2 cup  -ghee-',
  '1 1/2 tablespoon  -cocoa powder-',
  '1/4 cup  powdered -sugar-',
  '2 drops  -rose essence-',
  '2 drops  -edible food color-',
  '10 inches  -silver vark-'],
 ['1/2 cup washed & dried,blanched -spinach-',
  '3 pinches  -salt-',
  '1 tablespoon  -sugar-',
  '1 1/2 cup  yoghurt (-curd-)',
  '1 teaspoon finely chopped -green chilli-',
  '2 pinches powdered -black pepper-'],
 ['2 cup frozen -blueberry-',
  '1/4 teaspoon  -lime- zest',
  '1 1/2 tablespoon  -honey-',
  '-waffle cone- as required',
  '1 pinch  kosher -salt-',
  '2 tablespoon  -sugar-'],
 ['1 cup  whole -wheat flour-',
  '1 cup  -corn flour-',
  '1  bottle -gourd-',
  '1/2 teaspoon  -carom seeds-',
  '2 teaspoon  -salt-',
  '1 cup  -rice flour-',
  '1/2 cup  gram flour (-besan-)',
  '1 teaspoon  -sesame seeds-',
  '1/2 teaspoon  -turmeric-',
  '2 cup  -water-',
  '2 teaspoon  -mustard oil-',
  '1/2 teaspoon  -black mustard seeds-',
  '10  -curry leaves-',
  '2  -green chilli-',
  '1/2 teaspoon  -cumin seeds-',
  '1/2 teaspoon  -sesame- paste',
  '2 teaspoon  -coriander- leaves'],
 ['1 1/2 cup  yoghurt (-curd-)',
  '1 tablespoon powdered -sugar-',
  '3/4 cup  -mango- pulp'],
 ['250 gm  -spinach-',
  '100 gm  -peas-',
  '5 gm chopped -green chilli-',
  '5 gm  -cumin- powder',
  '5 gm powdered green -cardamom-',
  '-salt- as required',
  '150 gm  -potato-',
  '100 gm  gram flour (-besan-)',
  '10 gm chopped -ginger-',
  '5 gm  -mace powder-',
  '20 gm  -cashews-',
  '150 gm  -ghee-'],
 ['2 chopped -beetroot-',
  '3/4 teaspoon  spice -chili- powder',
  '-salt- as required',
  '3/4 teaspoon roasted -cumin- powder',
  '3 cup  yoghurt (-curd-)',
  '2 sprigs  -mint- leaves'],
 ['1/2 cup  -ragi flour-',
  '1/4 cup grated -carrot-',
  '1/2 teaspoon chopped -green chilli-',
  'water as required',
  '1/4 cup finely chopped -spring onions-',
  '1 1/2 tablespoon  yoghurt (-curd-)',
  '-salt- as required'],
 ['300 gm  -chickpeas-',
  '1 1/2 tablespoon  virgin -olive oil-',
  '3 -cloves-  garlic',
  '1 teaspoon  -turmeric-',
  '1 teaspoon  spice -paprika-',
  '1/2 teaspoon  spice -black pepper-',
  '200 gm pureed -tomato-',
  '3 tablespoon  yoghurt (-curd-)',
  '500 gm cubed,peeled -potatop-',
  '2 gm  -onion-',
  '1 1/2 teaspoon  -garam masala powder-',
  '1 teaspoon  -cumin powder-',
  '2 tablespoon  -curry powder-',
  '2 cup  veg stock',
  '3/4 teaspoon  -salt-',
  '1 tablespoon chopped -parsley-'],
 ['1000 gm  -rhubarb-',
  '180 gm  -sugar-',
  '-milk- as required',
  '6 tablespoon  -starch-',
  '800 ml  water'],
 ['1 kilograms  minced -mutton-',
  '3 tablespoon  yoghurt (-curd-)',
  '1 tablespoon  -garlic- paste',
  '2 teaspoon  kebab -masala-',
  '6 tablespoon roasted gram flour (-besan-)',
  '1/2 teaspoon  mace powder',
  '5  -clove-',
  ' powder -black pepper- as required',
  '  -refined oil- as required',
  '5 medium chopped -onion-',
  '4 tablespoon  -papaya- paste',
  '1 teaspoon powdered yellow -pepper-',
  '1 tablespoon  -ginger- paste',
  '1 tablespoon powdered black -cardamom-',
  '  -salt- as required',
  '1 tablespoon  -ghee-',
  '4 drops  -kewra essence-'],
 ['250 gm  -scallops-',
  '2  -capsicum- (green pepper)',
  '1 tablespoon  balsamic -vinegar-',
  '1/2 teaspoon  cayenne -pepper-',
  '1 tablespoon  extra virgin -olive oil-',
  '75 ml  -lemon- juice',
  '  -salt- as required',
  '1/2  -avocados-'],
 ['200 gm  lean ground -beef-',
  '1  -egg-',
  '1 teaspoon  -black pepper-',
  '1/2 tablespoon  -garlic-',
  '1 teaspoon ground -parsley-',
  '200 gm ground -pork-',
  '1 finely chopped -onion-',
  '1 teaspoon  -salt-',
  '1 cup  -bread- crumbs'],
 ['2 kilograms  -turkey- meat',
  '3/4 cup  -onion-',
  '1 tablespoon  -brandy-',
  '1/2 tablespoon  virgin -olive oil-',
  '1 teaspoon  -black pepper-',
  '4 tablespoon  unsalted -butter-',
  '1 1/2 cup  -chicken- broth',
  '1 1/2 tablespoon  all purpose -flour-',
  '1/2 tablespoon  -heavy cream-',
  '3/4 tablespoon  kosher -salt-',
  '1/2 tablespoon  mixed -herbs-'],
 ['1/2 pounds  -chicken- sausage',
  '16 Fl ounce  water',
  '1/2 medium chopped -onion-',
  '1 cup chopped -kale-',
  '1/4 pounds chopped bacon(-Beef-)',
  '1 clove crushed -garlic-',
  '1/2 cup  -heavy cream-',
  '  -salt- as required',
  '  -black pepper- as required'],
 ['500 gm  -pork- sausages',
  '4 cup  -milk-',
  '1/4 teaspoon  -onion- powder',
  '  -black pepper- as required',
  '2 cup  -cheese- cheddar',
  '1 cup  -tomato-',
  '10  -egg-',
  '1 teaspoon  -mustard- powder',
  '1 teaspoon  -salt-',
  '5  -bread-',
  '1/2 cup  -mushroom-'],
 ['4  -lobster-',
  '30 ml  -coconut oil-',
  '10  -curry leaves-',
  '15 gm chopped -ginger-',
  '1 chopped -green chilli-',
  '1 teaspoon  -red chilli- powder',
  '1 teaspoon powdered -black pepper-',
  '2 tablespoon  chilli -garlic- sauce',
  '1 teaspoon  -mustard seeds-',
  '1 sliced -onion-',
  '15 gm chopped -garlic-',
  '3  kaffir -lime- leaves',
  '1/4 teaspoon powdered -turmeric-',
  '200 gm  -coconut- cream'],
 ['320 gm  -fish- fillets',
  '2 teaspoon  -garlic- paste',
  '1/2 teaspoon powdered -turmeric-',
  '1  -kokum-',
  '  -salt- as required',
  '1 cup  panko breadcrumbs',
  '1 shelled,deveined,chopped -lobster-',
  '2 tablespoon chopped -onion-',
  '1/2 teaspoon  -cumin seeds-',
  '1/2 tablespoon chopped -coriander- leaves',
  '2 teaspoon  -ginger- paste',
  '1 1/4 teaspoon  -red chilli- powder',
  '1 tablespoon  -lime- juice',
  '1  -egg-',
  '2 tablespoon  refined -flour-',
  '1 cup  virgin -olive oil-',
  '6 shelled,deveined,chopped -prawns-',
  '1 tablespoon chopped -tomato-',
  '1/2 teaspoon chopped -green chilli-',
  '15 ml  -refined oil-'],
 ['500 gm  basmati -rice-',
  '200 gm  yoghurt (-curd-)',
  '1 teaspoon  -garlic- paste',
  '2  green -cardamom-',
  '4  -clove-',
  '10  -peppercorns-',
  '1 teaspoon  -cumin seeds-',
  '2 teaspoon  biryani -masala- powder',
  '1/2 handful  -coriander- leaves',
  '1 kilograms  minced -lamb-',
  '1 teaspoon  -ginger- paste',
  '1/4 cup  -refined oil-',
  '2  star anise',
  '2  -bay leaf-',
  '  -salt- as required',
  '1 teaspoon  -red chilli- powder',
  '1/2 handful  -mint leaves-',
  ' ml  water'],
 ['1 kilograms  -chicken- breasts',
  '2 tablespoon  -rosemary-',
  '3 tablespoon  -garlic-',
  '2 tablespoon  -lemon- juice',
  '2 tablespoon  -Refined oil-',
  '  -black pepper- as required',
  '1 tablespoon  virgin -olive oil-',
  '3 tablespoon  -butter-',
  '1/4 cup  -chicken- broth',
  '1 tablespoon  -parsley-',
  '  -salt- as required',
  '  -rosemary- leaves as required',
  '2  -lemon- slices']]





const allRecipies =[
    ['Pista Choco Barfi',
  'images/recipes/veg recipe/Pista Choco Barfi.jpg',
  '25m',
  '10 m',
  '450',
  '7 Servings'],
 ['Spinach Raita',
  'images/recipes/veg recipe/Spinach Raita.jpg',
  '10m',
  '5 m',
  '105',
  '3 Servings'],
 ['Blueberry Sorbet',
  'images/recipes/veg recipe/Blueberry Sorbet.jpg',
  '20m',
  '10 m',
  '100',
  '4 Servings'],
 ['Muthiya',
  'images/recipes/veg recipe/Muthiya.jpg',
  '25m',
  '15 m',
  '265',
  '10 Servings'],
 ['Healthy Mango Yoghurt',
  'images/recipes/veg recipe/Healthy Mango Yoghurt.jpg',
  '10m',
  '5 m',
  '110',
  '3 Servings'],
 ['Hara Kebab',
  'images/recipes/veg recipe/Hara Kebab.jpg',
  '35m',
  '15 m',
  '141',
  '5 Servings'],
 ['Beetroot Raita',
  'images/recipes/veg recipe/Beetroot Raita.jpg',
  '30m',
  '10 m',
  '96',
  '4 Servings'],
 ['Ragi Roti',
  'images/recipes/veg recipe/Ragi Roti.jpg',
  '20m',
  '10 m',
  '103',
  '4 Servings'],
 ['Potato-Chickpea Curry',
  'images/recipes/veg recipe/Potato-Chickpea Curry.jpg',
  '50m',
  '20 m',
  '480',
  '4 Servings'],
 ['Rhubarb Fool',
  'images/recipes/veg recipe/Rhubarb Fool.jpg',
  '20m',
  '10 m',
  '136',
  '8 Servings'],
  ['Mutton Galouti Kebab',
  'images/recipes/non veg recipe/Mutton Galouti Kebab.jpg',
  '40m',
  '20 m',
  '265',
  '12 Servings'],
 ['Scallop Ceviche',
  'images/recipes/non veg recipe/Scallop Ceviche.jpg',
  '20m',
  '10 m',
  '115',
  '3 Servings'],
 ['Frikadeller',
  'images/recipes/non veg recipe/Frikadeller.jpg',
  '25m',
  '15 m',
  '372',
  '4 Servings'],
 ['Roasted Turkey with Gravy',
  'images/recipes/non veg recipe/Roasted Turkey with Gravy.jpg',
  '1h 25m',
  '30 m',
  '498',
  '6 Servings'],
 ['Zuppa Toscana',
  'images/recipes/non veg recipe/Zuppa Toscana.jpg',
  '35m',
  '25 m',
  '323',
  '6 Servings'],
 ['Sausage Breakfast Casserole',
  'images/recipes/non veg recipe/Sausage Breakfast Casserole.jpg',
  '20m',
  '10 m',
  '522',
  '8 Servings'],
 ['Chilly Lobster Moily',
  'images/recipes/non veg recipe/Chilly Lobster Moily.jpg',
  '30m',
  '10 m',
  '388',
  '4 Servings'],
 ['Crispy Kurao Fish with Prawn and Crayfish Topping',
  'images/recipes/non veg recipe/Crispy Kurao Fish with Prawn and Crayfish Topping.jpg',
  '40m',
  '10 m',
  '472',
  '4 Servings'],
 ['Keema Biryani',
  'images/recipes/non veg recipe/Keema Biryani.jpg',
  '45m',
  '15 m',
  '752',
  '4 Servings'],
 ['Rosemary Chicken',
  'images/recipes/non veg recipe/Rosemary Chicken.jpg',
  '40m',
  '10 m',
  '410',
  '4 Servings']
    
]


const allProcess = [['<h1>Step 1 Cook khoya with powdered sugar</h1>',
  '<p>Put a deep-bottomed non-stick pan on low to medium flame and add khoya along with powdered sugar in it. Stir continuously and cook the khoya or mawa for about 15 minutes.</p>',
  '<h1>Step 2 Let the khoya mixture cool and divide into two equal portions</h1>',
  '<p>Once the khoya is cooked, transfer it into a big plate and allow the mixture to cool completely. Divide the mixture into two equal portions.</p>',
  '<h1>Step 3 Mix all the ingredients in khoya mixture except cocoa powder in half part</h1>',
  '<p>Take one portion of the khoya in a deep bowl and add powdered pistachios, cardamom powder, rose essence and green food colour in it, mix well.</p>',
  '<h1>Step 4 Mix cocoa powder in the other half</h1>',
  '<p>Now, take the other half of khoya in a large bowl and add cocoa powder in it. Mix it well too! Next, put a cling wrap on a wooden board or a flat surface and grease it using ghee.</p>',
  '<h1>Step 5 Spread the green mixture and make roll of the chocolate mixture</h1>',
  '<p>Place the prepared pista mixture over it and spread it evenly using your hands to form a 175 mm × 200 mm (7”× 8”) rectangle. Make a cylinder roll of the chocolate mixture and place it over the pista mixture leaving (1”) side from the bottom. Roll it very tightly with the help of a cling wrap.</p>',
  '<h1>Step 6 Cut into 15 slices and refrigerate</h1>',
  '<p>Gently remove the cling wrap to get a roll and cut into 15 equal slices and flatten it very lightly. Refrigerate the slices for 15 minutes. (Optional: You can garnish with chopped pistachios and silver varq and enjoy!)</p>'],
 ['<h1>Step 1</h1>',
  '<p>For making this fresh raita recipe, first of all wash and blanch the spinach leaves.</p>',
  '<h1>Step 2</h1>',
  '<p>Now combine curd, salt, green chillies, sugar and black pepper powder in a deep bowl. Mix well.</p>',
  '<h1>Step 3</h1>',
  '<p>Add the blanched spinach leaves. Mix gently.</p>',
  '<h1>Step 4</h1>',
  '<p>Refrigerate for 30 minutes and serve chilled.</p>'],
 ['<h1>Step 1 Mix blueberries with honey</h1>',
  '<p>To prepare this dessert recipe, take the blueberries in a bowl and deseed them. Now, add honey, lemon zest, sugar and salt in the same bowl and mix well.</p>',
  '<h1>Step 2 Blend them</h1>',
  '<p>Now, transfer the blueberry mix in the blender jar and pulse on high speed. Make sure the mixture turns into a paste. Pass this paste through a sieve to remove the larger pieces of blueberries. Pour this mixture in a container and cover it with a lid. Place this in the freezer.</p>',
  '<h1>Step 3 Scoop and serve</h1>',
  '<p>Once frozen, take it out and scoop it up in a waffle cone and serve it immediately to enjoy!</p>'],
 ['<h1>Step 1 Prepare the mixture of flours</h1>',
  '<p>Take a large bowl and mix rice flour, whole wheat flour, gram flour, cornflour in equal quantities, mix well. Meanwhile, peel the bottle gourd and grate it into another bowl. Leave aside for 5-10 minutes. Then squeeze the water out of grated bottle gourd and add into the flour mixture. (Note: You can use this grated bottle gourd in making lauki ka raita by boiling it.)</p>',
  '<h1>Step 2 Make long sticks using the mixture</h1>',
  '<p>Then, add sesame seeds, carom seeds, turmeric, finely chopped coriander leaves, salt to taste and a pinch of eno to the flour mix. Mix all the ingredients well and then make long sticks using this mixture just like the way we make gatte.</p>',
  '<h1>Step 3 Steam the sticks</h1>',
  '<p>Now, either steam these sticks using a steamer or you can boil 2 cups of water over medium flame. Then, put a large sieve over this boiling water and add the sticks in it. Steam till they are a little light. Once done, keep them aside and let them cool.</p>',
  '<h1>Step 4 Stir fry the steamed sticks in the spices</h1>',
  '<p>Finally, put a kadhai over medium flame and heat oil in it. When the oil is hot enough, add black mustard seeds, cumin seeds, green chillies, curry leaves, coriander leaves, and sesame seeds in it. Let them crackle for a few seconds and then add the steamed sticks in the kadhai. Fry them well and serve hot.</p>'],
 ['<h1>Step 1</h1>',
  '<p>Combine all the ingredients in a deep bowl and mix well using a whisk. Allow it to rest for a while.</p>',
  '<h1>Step 2</h1>',
  '<p>Refrigerate for at least 1 hour and serve chilled garnished with mint sprigs. (optional)</p>'],
 ['<h1>Step 1</h1>',
  '<p>Blanched the spinach in salted water. Drain and keep them in cold water. Finely chopped the spinach and keep aside.</p>',
  '<h1>Step 2</h1>',
  '<p>Boil the potato, green peas and mash properly. Take a small pan and roast gram flour till golden brown.</p>',
  '<h1>Step 3</h1>',
  '<p>Then mix all the kebab ingredients and make smooth dough.</p>',
  '<h1>Step 4</h1>',
  '<p>Shape into cutlet patties and top with cashew nut halves. Then shallow fried the kebab in golden brown both side.</p>',
  '<h1>Step 5</h1>',
  '<p>Served hara kebab hot with pineapple chutney.</p>'],
 ['<h1>Step 1 Cook the beetroots until tender</h1>',
  '<p>To make this delicious beetroot raita, cook the beetroot by steaming or boiling it until it turns very soft. To check if the beetroot is cooked, stab the point of a knife. If the knife easily goes in, the vegetable is cooked and ready to be used in raita. Peel and chop the beetroots and keep it aside.</p>',
  '<h1>Step 2 Mix spices in the curd and stir in cooked beetroots</h1>',
  '<p>Next, take curd in a mixing bowl. Add roasted cumin powder, red chilli powder and salt to it. Blend the ingredients well until the curd is smooth and the spices are incorporated. Now add chopped beetroots to the the curd and start stirring. You will observe a pink coloured curd being formed. Place the bowl in the fridge to cool. Enjoy the super delicious beetroot raita chilled with a resplendent garnishment of mint leaves.</p>'],
 ['<h1>Step 1</h1>',
  '<p>For making this healthy recipe, combine all the ingredients in a deep bowl and knead into a soft dough, using the required amount of water.</p>',
  '<h1>Step 2</h1>',
  '<p>Now, divide the dough into equal portions. Make roti of the dough using ragi flour for rolling.</p>',
  '<h1>Step 3</h1>',
  '<p>Place the roti on a non-stick pan. Cook on both the sides till properly cooked. Serve immediately with raita or side dish of your choice.</p>'],
 ['<h1>Step 1 Prepare the saute mixture with onion, garlic and all the spices</h1>',
  '<p>To start making this amazing recipe, take a large saucepan and heat olive oil into it over a medium flame. After the oil is hot enough, add chopped onions and garlic. Saute them both while stirring frequently until the onions turn transparent and soft. Add all the spices and cook for another 1-2 minutes or until the fragrance comes out.</p>',
  '<h1>Step 2 Add potatoes, chickpeas and veg stock, and simmer the mixture</h1>',
  '<p>Now, add potatoes and cooked chickpeas to the sauteed mixture and cook them for a minute or two. Then, add vegetable stock and pureed tomato to the saucepan. Bring the mixture to boil. Cover the lid, reduce the flame and simmer the mixture to thicken.</p>',
  '<h1>Step 3 Stir in yogurt and garnish with parsley</h1>',
  '<p>After 8 to 10 minutes, remove the lid and check whether the potatoes are soft. If they are soft, it implies that the curry is ready. Stir in the yogurt and garnish with parsley. Serve hot and fresh with rice or chapati. (Tip: if the curry is too watery, add a teaspoon of corn flour with a tablespoon of water to the curry to instantly thicken it)</p>'],
 ['<h1>Step 1 Boil rhubarb in a mixture of sugar and water</h1>',
  '<p>Rinse the freshly frozen rhubarb and cut it into smaller pieces, about 1-3 cm in length. Boil water and mix sugar in it. Bring it to a boil. Then add rhubarb in the water and sugar mixture and boil for 5 min until soft. Meanwhile, in a small bowl, dissolve potato starch in water.</p>',
  '<h1>Step 2 Stir and boil rhubarb and mix with dissolved potato starch</h1>',
  '<p>When the rhubarb is soft, whisk or stir vigorously to break the rhubarb pieces into strings. Now, remove the rhubarb from the heat and add the dissolved potato starch to it while stirring. Keep stirring and boil rhubarb once again.</p>',
  '<h1>Step 3 Refrigerate rhubarb fool and serve</h1>',
  '<p>Pour the rhubarb fool into serving bowls and sprinkle some sugar on top to prevent skin from forming. Leave to cool off and then refrigerate. Your Rhubarb Fool is ready to serve chilled with milk.</p>'],
 ['<h1>Step 1</h1>',
  '<p>To make this snack recipe, take a bowl and add minced mutton in it. Next, add gram flour, black cardamom, mace powder, black pepper, salt, yellow pepper powder, chopped onions, papaya paste, kebab masala, yoghurt, ginger paste and garlic paste in it. Mix it well and marinate the minced mutton with all the ingredients.</p>',
  '<h1>Step 2</h1>',
  '<p>Now, add ghee and kewra essence in it. Mix it well. Set it aside for some time. Meanwhile, heat a piece of charcoal over the flame in a small bowl and add clove in it. Pour 1 tablespoon ghee in it and quickly place it in between the mutton mix. Cover it and infuse the smoke in the mix.</p>',
  '<h1>Step 3</h1>',
  '<p>Remove the charcoal bowl from the marination and keep it aside for an hour. Meanwhile, heat refined oil over medium flame in a deep-bottomed pan. Now, make small patties from the marinated mutton mix. Add the made patties in the oil and fry them on both sides until they turn golden-brown in color. Once done, transfer these in a plate lined with absorbent paper and serve it hot with a dip of your choice!</p>'],
 ['<h1>Step 1 Add lemon to scallops</h1>',
  '<p>Mix lemon juice to cover the scallops in a non reactive bowl.</p>',
  '<h1>Step 2 Refrigerate fro 2 hours</h1>',
  '<p>Refrigerate, covered, and stir often for 2 hours, until the scallops become opaque.</p>',
  '<h1>Step 3 Start prepping the sauce</h1>',
  '<p>To prepare the sauce, add the capsicum, balsamic vinegar, extra virgin olive oil, cayenne, and salt into a food processor and puree.</p>',
  '<h1>Step 4 Ready to serve!</h1>',
  '<p>Your Scallop Ceviche is ready to serve. Spoon the sauce onto individual plates, drain the scallops and place on the sauce. Garnish with slices of avocado.</p>'],
 ['<h1>Step 1 Prepare the Frikadeller mix</h1>',
  '<p>Take a large bowl and add the minced pork in it and mash properly. Now, add the remaining ingredients to the bowl and mix thoroughly.</p>',
  '<h1>Step 2 Give the shape of balls and toss in butter</h1>',
  '<p>Start preparing small balls with the mix and start tossing them in butter on medium flame. Take off the flame once the colour changes to light brown and serve!</p>'],
 ['<h1>Step 1 Prepare the turkey before cooking</h1>',
  '<p>Make sure the oven is clean to avoid smoking and set an oven rack on lowest position. Preheat the oven at 230 degree Celsius. Remove and discard the truss that holds turkey legs together. Trim off any excess fat in the neck and body cavity and discard. Remove giblets and neck and discard. Rinse the turkey with warm water.</p>',
  '<h1>Step 2 Place the seasoned Turkey in the oven rack</h1>',
  '<p>Take a heavy stainless-steel roasting pan, rub olive oil all over the turkey and sprinkle with salt and pepper. Set the bird breast side up on the oven rack, pull the wings away from the body and push the wing tips under the bird. Using aluminum foil, form caps over the tips of the end of each drumstick. Insert a digital leave-in thermometer near the center of the breast until the tip touches the bone.</p>',
  '<h1>Step 3 Roast the turkey</h1>',
  '<p>Place the turkey in the oven and roast for 1 hour until the thermometer reaches 70 degree Celsius. After the turkey is roasted, remove the pan from the oven, tilt the turkey carefully so that the juices from the cavity run into the pan. Transfer the turkey to a cutting board and cover it with foil. Let it rest for 20 to 30 minutes.</p>',
  '<h1>Step 4 Prepare the gravy for roasted turkey</h1>',
  '<p>Place the same roasting pan on medium flame, remove any excess solids and fats accumulated in the pan. Add the broth and cook, stir the bottom of the pan with a whisk, until simmering. Turn off the heat and set aside. In a saucepan, melt butter over low heat. Add finely chopped onions and cook for 15 minutes until soft and translucent. Whisk in the flour and cook to 2 to 3 minutes. Stir occasionally.</p>',
  '<h1>Step 5 Finish the sauce, serve the roasted turkey with gravy</h1>',
  '<p>Pour the turkey juice-chicken broth mixture and brandy in the saucepan, and cook for 5 minutes until thickened. Stir in the cream and chopped herbs. Transfer to a gravy bowl.  Cut the turkey and serve with the gravy on the side.</p>'],
 ['<h1>Step 1 Toss the sausage in some oil</h1>',
  '<p>Fry sausage on medium flame until brown and breaking into small pieces. Drain and set aside.</p>',
  '<h1>Step 2 Mix and let the liquid mix simmer</h1>',
  '<p>Now fry bacon on medium flame. Drain and set aside. Now, mix and simmer water, broth, potatoes, garlic, and onion into a pot over a high flame until potatoes are tender.</p>',
  '<h1>Step 3 Add the remaining ingredients, simmer and serve!</h1>',
  '<p>Now add sausage and bacon to it and simmer for 10 minutes. Add kale and heavy cream to it. Seasons with salt and pepper and heat it through. Your Zuppa Toscana Soup is ready to serve.</p>'],
 ['<h1>Step 1 Cook sausage until slightly brown</h1>',
  '<p>Heat a skillet on medium. Break the sausage into chunks and cook them perfectly. As you cook the sausage, you can break the large chunks into smaller crumbs. When lightly browned, remove from pan and place them on a paper  towel to absorb any excess oil. In a large bowl whisk together the eggs, milk, dry mustard, onion powder, salt and pepper.</p>',
  '<h1>Step 2 Arrange the ingredients in a baking pan</h1>',
  '<p>Place the bread in a well-buttered baking pan. Sprinkle with cheese, chopped tomatoes and mushrooms. Top with the browned crumbled sausage, distributing it evenly. Pour the egg-milk mixture evenly over the bread and cheese. Preheat the oven for sometime.</p>',
  '<h1>Step 3 Bake and relish!</h1>',
  '<p>Bake the casserole to perfection at 325 degrees Fahrenheit. Bake uncovered for about half an hour. Tent with foil if the top begins to brown too quickly. Let the casserole cool for about 10 minutes before serving.</p>'],
 ['<h1>Step 1</h1>',
  "<p>To prepare this main dish recipe, remove the lobster's head and slit the tail into 2 parts. Repeat with each lobster. Rub the lobsters with chilli garlic sauce and let them marinate for some time.</p>",
  '<h1>Step 2</h1>',
  '<p>Next, to prepare the sauce, place a pan over medium flame and heat coconut oil in it. When the oil is hot enough, add mustard seeds along with curry leaves and sliced onions in it. Saute till the onions turn translucent. Now, add in the chopped ginger-garlic and green chilli. Saute for a few seconds. Then, sprinkle turmeric powder, red chilli powder and black pepper powder in the spices and mix well.</p>',
  '<h1>Step 3</h1>',
  '<p>Pour the coconut cream along with kaffir lime leaves in the sauce mixture and stir to mix well all the ingredients. Now, add salt in it and mix once again. Cook the sauce until it thickens, and once it attains the desired consistency, turn off the burner. Your moily sauce is ready.</p>',
  '<h1>Step 4</h1>',
  '<p>Now, place a non-stick pan over medium flame and add the marinated lobsters in it. Cover the pan with a lid and let the lobsters cook for 3-4 minutes. Once done, turn them to cook on the other side as well and cover the pan again with a lid. Once done, transfer the cooked lobsters on a serving plate and pour moily sauce over them. Serve immediately to enjoy!</p>'],
 ['<h1>Step 1</h1>',
  '<p>To prepare this snack recipe, slice the fish fillet into 2.5-inch thin slices and pat dry with a cloth. Apply little salt and ½ table spoon lime juice and leave for 5-10 minutes. Prepare marination by mixing egg, 1 teaspoon of ginger paste, 1 teaspoon of garlic paste, kokum juice, 1 teaspoon red chilli powder, 1/4 teaspoon of turmeric powder, salt and refined flour.</p>',
  '<h1>Step 2</h1>',
  '<p>Now, apply the prepared marination evenly to all the fish slices. Once done, crumb it evenly  with the panko bread crumbs. Now, heat virgin olive oil in a deep-bottomed pan over medium flame and fry the coated fish fillets in it.</p>',
  '<h1>Step 3</h1>',
  '<p>For the topping, place a pan over medium flame and heat refined oil in it. When the oil is hot enough, add in cumin and let it crackle. Next, add in the onions and saute these till they are translucent. Now, add in the tomatoes, green chillies, remaining ginger paste, remaining garlic paste and sauté for few seconds.</p>',
  '<h1>Step 4</h1>',
  '<p>Now, add the chopped prawns and chopped crayfish meat in the prepared mixture and saute for a minute. Next, add the 1/4 teaspoon of red chilli powder, 1/4 teaspoon of turmeric, and season with salt. Mix it well and, then add green coriander leaves. Once cooked, take it off the flame.</p>',
  '<h1>Step 5</h1>',
  '<p>Divide the prepared lobster-prawn topping into 16 equal portions and top each fried fillet with the topping. Serve it hot to enjoy!</p>'],
 ['<h1>Step 1 Boil water in a pan</h1>',
  '<p>Heat oil in a pan with a thick bottom and simultaneously boil approximately 2 litres of water in a vessel.</p>',
  '<h1>Step 2 Saute onions with whole spices and then cook keema in it</h1>',
  '<p>Add onions to the oil, saute till translucent, gradually add cumin seeds, peppercorns, green cardamom, cloves and ginger-garlic paste and 2 tsp of chilli powder. Saute for 2 minutes, add minced meat, curd and salt to taste. Continue to saute till all the water gets soaked up and keema is 3/4 portion down.</p>',
  '<h1>Step 3 Boil rice with whole spices</h1>',
  '<p>Once the water starts to boil, add bay leaves, green cardamom, star anise, and salt to taste. Then add washed rice, when rice is 60 per cent done, drain the water using the sieve.</p>',
  '<h1>Step 4 Spread the cooked keema on rice layer with fried onions, cook for 15-20 minutes and the Keema Biryani is ready</h1>',
  '<p>Spread a layer of half of the rice in a big vessel. Put keema, some coriander and mint leaves, some masala and green chilli achar on top. Add the remaining rice to the top, add a little desi ghee and brown onions on top for the amazing fragrance, cover it with a lid and let it cook for 20 minutes on low flame. Serve with cucumber raita and enjoy.</p>'],
 ['<h1>Step 1 Wash and season the skinless chicken breasts</h1>',
  '<p>Wash the skinless chicken breasts and season them on both sides generously with salt and pepper. Put a large pan on medium-high heat, pour olive oil and sear both the sides for 3 to 5 minutes until golden brown.</p>',
  '<h1>Step 2 Preheat the oven and place the chicken in tray</h1>',
  '<p>Preheat the oven to 400 degrees Fahrenheit. Grease a baking dish with vegetable oil and transfer the chicken into the tray.</p>',
  '<h1>Step 3 Make the dressing for chicken</h1>',
  '<p>Prepare a dressing made of rosemary, garlic, chicken broth, lemon juice and parsley. Cover the chicken with this mixture liberally.</p>',
  '<h1>Step 4 Bake the chicken for 25 minutes in a preheated oven</h1>',
  '<p>Bake the chicken for 25 minutes. This time may vary according to the thickness of your chicken breast. When done, scrape the sauce from the bottom of the chicken and spread over it. Sprinkle with more parsley and decorate with rosemary sprigs and lemon slices.</p>']]

const allTips = [['NA'],
 ['NA'],
 ['NA'],
 ['NA'],
 ['NA'],
 ['NA'],
 ['NA'],
 ['NA'],
 ['NA'],
 ['NA'],
 ['NA'],
 ['NA'],
 ['NA'],
 ['NA'],
 ['NA'],
 ['NA'],
 ['NA'],
 ['NA'],
 ['NA'],
 ['<li>You can also bake veggies like bell peppers and tomatoes to serve as sides. They go perfectly with it.</li>',
  '<li>If you like things cheesy, you can top the chicken with grated cheese before baking.</li>',
  '<li>Make sure you do donot add too much of rosemary, else it will spoil the taste of this dish.</li>',
  '<li>You can also add some condiment to give it a spicy touch!</li>']]




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
        // console.log(getDetailFromHTTPS())
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
                        
            }else{
                pname=typename[2].toLowerCase();
                if(pname.includes('+')){
                    pname=pname.replace("+", " ")
                    console.log(pname)
                }
                producttoshow=[]
                for(var i=0;i<allRecipies.length;i++){
                    tempproduct=allRecipies[i][1].replace("/", " ").toLowerCase()
                    if(tempproduct.includes(pname)){
                         console.log(allRecipies[i][1])
                         producttoshow.push(i)
                    }
                }
                console.log(producttoshow)
                var products =`
                <div class="s1child1">
                        <div class="recipecardcontainer">
                            <script>getspctRecipes(`+producttoshow+`)</script>
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

function getProductDetail(){
    var id = getIdFromHTTPS();
    var imageurl = '../'+allItem[id][1]
    var name = allItem[id][0]
    var grossweight = allItem[id][3]
    var netweight = allItem[id][3]
    var discount = 12;
    var dprice = allItem[id][2]
    var cprice = dprice+((dprice/100)*discount)
    var desc = itemDesc[id]


    if(allItem[id][4]=='Kg'){
        grossweight = allItem[id][3]*1000
        netweight = allItem[id][3]*1000 -100
    }else if(allItem[id][4]=='Gram'){
        grossweight = allItem[id][3]
    }else if(allItem[id][4]=='Pckt'){
        grossweight = 350
    }else if(allItem[id][4]=='Box'){
        grossweight = 250
    }
    var extension = " "+allItem[id][4]
    if(allItem[id][4]=='Kg'){
        extension = ' Gram'
    }
    
    var product =`
            <div class="sction1child1">
               <img src="`+imageurl+`" alt="">
            </div>
            <div class="sction1child2">
                <h1>`+name+`</h1>
                <div class="desc">
                    <p>`+desc+`</p>
                </div>
                <div class="desc2">
                    <div class="desc2part1">
                        <p>Lunch Box Assured</p>
                        <p>100% Organic</p>
                    </div> 
                    <div class="desc2part2">
                        <p>Gross Wt. : `+grossweight+extension+`</p>
                        <p>Net Wt. : `+netweight+extension+`</p>
                    </div>
                </div>

                <div class="priceandcart">
                    <div class="price">
                        <h2 id="dprice">Rs `+dprice+`</h2>
                        <p id="cprice">`+cprice+`</p>
                        <p id="descount">`+discount+`%</p>
                    </div>
                    <div class="cart">
                        <a href="">Cart</a>
                    </div>
                </div>
           
            </div>
    `
    document.write(product)
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
                        <a href="`+productlink+`"><img src="`+image+`" alt=""></a>
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
        // console.log(vars['action'])
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











function getAllRecipes(type){
    for(var i=0;i<2;i++){
        var products =`
        <div class="s1child1">
                <div class="moreproduct">
                    <h2>`+recipiestype[i]+`</h2>
                    <a id="moreitem" href="page/specificRecpie.html?type=`+recipievariable[i]+`">More Item</a>
                </div>
                <div class="recipecardcontainer">
                    <script>getrecipes(`+i+`,`+type+`)</script>
                </div>
            </div>
             `
        document.write(products)
    }
}


function getrecipes(data,type){
       
    var indexs = Object.keys(Non_Veg_Recipies);
    if(data==0){indexs = Object.keys(Veg_Recipies);}
    else{indexs = Object.keys(Non_Veg_Recipies);}
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
        getRecipesCard(allRecipies[indexs[i]],type,indexs[i]);
    }

}


function getRecipesCard(data,type,index){
    var image =data[1];
    var name = data[0];
    var productlink = 'page/recipe.html?id='+index
    var vegnonveg =image.split('/')[2].split(' recipe')[0]
    var vegnonveglink='images/icons/veg.png'
    if(vegnonveg =='non veg'){
        vegnonveglink='images/icons/nonveg.png'
    }
    if(type == 2){
        image ='../'+data[1]
        productlink ='../'+productlink
        vegnonveglink='../'+vegnonveglink
    }

    // console.log(index)
    const card =`
            <div class="recipecontainer">
                    <div class="recipecard">
                        <a href="`+productlink+`"><img id="recipeimg" src="`+image+`" alt=""></a>
                        <div class="recipename">
                            <p>`+name+`</p>
                            <img src="`+vegnonveglink+`" alt="">
                        </div>
                    </div>
                </div>
                `
    document.write(card)
}


function getRecipeImage(){
    var id = getIdFromHTTPS();
    var imageurl = '../'+allRecipies[id][1]
    var rtype = allRecipies[id][1].split('/')[2].split(' recipe')[0]
    var name = allRecipies[id][0]
    var time1 = allRecipies[id][2]
    var time2 = allRecipies[id][3]
    var calories = allRecipies[id][4]
    var serve = allRecipies[id][5]
    var rtypeurl ='../images/icons/veg.png'
    if(rtype == 'non veg'){
        rtypeurl ='../images/icons/nonveg.png'
    }
    var ingrediants =allIngeadents[id]

    // console.log(ingrediants)    
    var recipe =`
            
            <div class="sction1child1">
                <img src="`+imageurl+`" alt="">
            </div>
            
    `
    document.write(recipe)
}


function getRecipeNameType(){
    var id = getIdFromHTTPS();
    var imageurl = '../'+allRecipies[id][1]
    var rtype = allRecipies[id][1].split('/')[2].split(' recipe')[0]
    var name = allRecipies[id][0]
    var rtypeurl ='../images/icons/veg.png'
    if(rtype == 'non veg'){
        rtypeurl ='../images/icons/nonveg.png'
    }
  
    var recipe =`
            
            <div class="mameandtype">
                <h1>`+name+`</h1>
                <img src="`+rtypeurl+`" alt="">
            </div>
            
    `
    document.write(recipe)
}
function getRecipeTimeCalories(){
    var id = getIdFromHTTPS();
    var time1 = allRecipies[id][2]
    var time2 = allRecipies[id][3]
    var calories = allRecipies[id][4]   
    var recipe =`
            
           <div class="desc2part2">
                        <div class="totaltime desc2part2child">
                            <img src="../images/icons/clock.png" alt="">
                            <p>Total Time `+time1+`</p>
                        </div>
                        <div class="preptime desc2part2child">
                            <img src="../images/icons/cooking-time.png" alt="">
                            <p>Prep Time `+time2+`</p>
                        </div>
                        <div class="totalcalories desc2part2child">
                            <img src="../images/icons/calories.png" alt="">
                            <p>Calories `+calories+`</p>
                        </div>
                    </div>
    `
    document.write(recipe)
}


function getRecipeIngrediants(){
    var id = getIdFromHTTPS();
    var ingrediants =allIngeadents[id]
    var ingred =[]
    for(var i=0;i<ingrediants.length;i++){
        var ing =ingrediants[i]
        if(ing.includes('-')){
            ingred.push(ing.split('-')[1])
        }   
    }
    console.log(ingred)
    
    for(var i=0;i<ingrediants.length;i++){
        var recipe =`<p>`+ingrediants[i].replaceAll('-','')+`</p>`
        document.write(recipe)
    }   
   
}

function getRecipeProcess(){
    var id = getIdFromHTTPS();
    var Process =allProcess[id]  
    for(var i=0;i<Process.length;i++){
        var recipe =`<p>`+Process[i]+`</p>`
        document.write(recipe)
    } 
}

function getRecipeTips(){
    var id = getIdFromHTTPS();
    var tips =allTips[id]  
    if(tips[0]!='NA'){
         for(var i=0;i<tips.length;i++){
        document.write(tips[i])
         }
    }
    
   
}

function getSprcificRecipe(){
        var typename = getDetailFromHTTPS();
        if(typename[0]==0){
            var index = recipievariable.indexOf(typename[1]);
            var products =`
                <div class="s1child1">
                    <div class="recipecardcontainer">
                        <script>getrecipes(`+index+`,`+2+`)</script>
                    </div>
                </div>
                `
            document.write(products)
        }else if(typename[0]==1){
            
            if(typename[1]=='Recipe'){
                rname=typename[2].toLowerCase();
                // console.log(rname)
                if(rname.includes('+')){
                    rname=rname.replace("+", " ")   
                }
                recipetoshow=[]
                for(var i=0;i<allRecipies.length;i++){
                    tempproduct=allRecipies[i][1].replace("/", " ").toLowerCase()
        
                    if(tempproduct.includes(rname)){
                        //  console.log(allRecipies[i][1])
                         recipetoshow.push(i)
                    }
                }
                 console.log(recipetoshow.length)
                var products =`
                <div class="s1child1">
                    <div class="recipecardcontainer">
                        <script>getspctRecipes(`+recipetoshow+`)</script>
                    </div>
                </div>
                `
                document.write(products)
                        
            }
        }
}

function getspctRecipes(...data){
   console.log(data)
    for(var i=0;i<data.length;i++){
         getRecipesCard(allRecipies[data[i]],2,data[i]);
    }     
}


// var toadd =[]

// for(var i=0;i<allIngeadents.length;i++){
//     var ingr=allIngeadents[i]
    
//     for(var j=0;j<ingr.length;j++){
//         if(ingr[j].includes('-')){
//             var ingrval=ingr[j].split('-')[1].toLowerCase()

//         }
//     }

// }

// console.log(toadd)


