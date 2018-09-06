(function(){
    var content = [];
    content.push({
            title: "Vlisco",
            url: "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto blanditiis voluptates, perferendis assumenda quo magnam, sequi quis totam eligendi provident et quam! Nostrum animi consequatur, inventore possimus dignissimos magni maiores?"
        },{
            title: "Copenhagen Airport",
            url: "https://images.pexels.com/photos/18296/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto blanditiis voluptates, perferendis assumenda quo magnam, sequi quis totam eligendi provident et quam! Nostrum animi consequatur, inventore possimus dignissimos magni maiores?"
        },{
            title: "TV4 Play",
            url: "https://images.pexels.com/photos/163232/audi-r8-audi-sports-car-fast-163232.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto blanditiis voluptates, perferendis assumenda quo magnam, sequi quis totam eligendi provident et quam! Nostrum animi consequatur, inventore possimus dignissimos magni maiores?"
        },{
            title: "Audi City",
            url: "https://images.pexels.com/photos/207600/pexels-photo-207600.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto blanditiis voluptates, perferendis assumenda quo magnam, sequi quis totam eligendi provident et quam! Nostrum animi consequatur, inventore possimus dignissimos magni maiores?"
        },{
            title: "Arla Foods",
            url: "https://images.pexels.com/photos/9808/pexels-photo-9808.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto blanditiis voluptates, perferendis assumenda quo magnam, sequi quis totam eligendi provident et quam! Nostrum animi consequatur, inventore possimus dignissimos magni maiores?"
        },{
            title: "Xylem",
            url: "https://images.pexels.com/photos/163582/car-lettering-design-auto-vote-163582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto blanditiis voluptates, perferendis assumenda quo magnam, sequi quis totam eligendi provident et quam! Nostrum animi consequatur, inventore possimus dignissimos magni maiores?"
        }
    )
    for(var i=0;i<content.length;i++){
        var article = document.createElement("article");
        article.className= "col-x-12 col-s-6 col-md-4"
        article.innerHTML = '<div class="image-panel">' +
                                '<header>'+
                                    '<img src = "'+ content[i].url +'"/>' +
                                '</header>' +
                                '<div>'+
                                    '<h3>'+
                                    content[i].title +
                                    '</h3>' +
                                    '<div>' +
                                    content[i].description +
                                    '</div>' +
                                '</div>' +
                            '</div> ';
        var cm = document.getElementById("content-main")
        cm.appendChild(article)
    }
})();

function toggle(){
    var v1 = $("#content-main").attr('style')
    if(v1=='' || typeof v1 === 'undefined'){
        $("#content-main").attr('style','width:100%')
        $("#content-sidebar").attr('style','width:0%')
    }
    else{
        $("#content-main").attr('style','')
        $("#content-sidebar").attr('style','')
    }
}
