var path = window.location.pathname;
var page = path.split("/").pop();


{   
    if(page=='index.html'){
        const Recipep = document.getElementById('Recipep');
        const Foodp = document.getElementById('Foodp');
        const recipeCagegories = document.getElementById('recipeCagegories');
        const foodCagegories = document.getElementById('foodCagegories');

        const switchRecipes = document.getElementById('switchRecipes');
        const switchGrocery = document.getElementById('switchGrocery');
        const section1product = document.getElementById('section1product');
        const section1recipe = document.getElementById('section1recipe');

        switchGrocery.addEventListener("click",()=>{
            section1product.style.display='grid';
            section1recipe.style.display='none';
            
            switchRecipes.style.background="coral";
            switchGrocery.style.background="black";
            switchRecipes.style.boxShadow="0 3px 10px rgba(0, 0, 0, 0.581)";
            switchGrocery.style.boxShadow="none";
        });
        switchRecipes.addEventListener("click",()=>{
            section1product.style.display='none';
            section1recipe.style.display='grid';
            switchRecipes.style.background="black";
            switchGrocery.style.background="coral";
            switchGrocery.style.boxShadow="0 3px 10px rgba(0, 0, 0, 0.581)";
            switchRecipes.style.boxShadow="none";
            
        });


        Recipep.addEventListener("click",()=>{
            recipeCagegories.style.display='grid';
            foodCagegories.style.display='none';
            Recipep.style.background="rgba(139, 55, 55, 0.555)";
            Foodp.style.background="rgba(139, 55, 55, 0)";
        });
        Foodp.addEventListener("click",()=>{
            recipeCagegories.style.display='none';
            foodCagegories.style.display='grid';
            Recipep.style.background="rgba(139, 55, 55, 0)";
            Foodp.style.background="rgba(139, 55, 55, 0.555)";
        });
    }
}

{
    $(document).scroll(function() {
        headerchild1 = document.getElementById("headerchild1");
        var headerchild1hideshow = function () {
            var y = window.scrollY;
            if (y >= 100) {
                    headerchild1.style.display="none"
            } else {
                    headerchild1.style.display="flex"
            }
        };
        window.addEventListener("scroll", headerchild1hideshow);
    });
}


if(page=='recipe.html'){
    var section3heading = document.getElementById('section3heading');
    var idd= parseInt(getIdFromHTTPS());
    var gettips =allTips[idd][0]
    if(gettips=='NA'){
        section3heading.style.display='none';
    }
}







