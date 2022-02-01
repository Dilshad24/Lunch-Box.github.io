var path = window.location.pathname;
var page = path.split("/").pop();
console.log( page );

{   
    if(page=='index.html'){
        const Recipep = document.getElementById('Recipep');
        const Foodp = document.getElementById('Foodp');
        const recipeCagegories = document.getElementById('recipeCagegories');
        const foodCagegories = document.getElementById('foodCagegories');

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







