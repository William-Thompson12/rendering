
function renderCircles(circles) {
   var newCircles = circles.map(function(element){
    return `<div style=background-color:${element.color};border-radius:${element.radius}px;width:${element.radius}px;height:${element.radius}px></div>`
   })
   return newCircles.join(' ')   
}

function circles() {
    var content = document.getElementById('content');

    var circlesAbstraction = [
        {
            radius: 50,
            color: "#FF00FF"
        },
        {
            radius: 30,
            color: "#FF99AA"
        },
        {
            radius: 60,
            color: "#0000FF"
        },
        {
            radius: 10,
            color: "#000000"
        },
    ];

    content.innerHTML = renderCircles(circlesAbstraction);

}