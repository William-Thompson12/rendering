
function renderNametags(nametags) {
    var tags = nametags.map(function(element){
        return `<div style=color:white;background-color:blue;width:150px;height:60px;text-align:center>
        Hello, My Name is:
        <div style=color:black;background-color:#fff;width:150px;height:80px;text-align:center;>${element}</div>
        </div>
       <br>`
       })
       return tags.join(' ')
}

function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
       "Kamilah",
       "Kim",
       "Stuart",
       "Ron",
       "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);

}