
function renderAlbums(albuminfo) {
    let i = 0;
    let j = 0;
    let k = 0;

    var songBar = albuminfo.map(function(songs){
        var songTitle = songs.title
        var songLength = songs.length

            return `
            <div class="songBar>
            <a><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-play-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
          </svg>${songTitle}${songLength}</a>
            </div>`

    })
      

    var artistCard = albuminfo.map(function(element){
        var albumCover = element.albumCover
        var albumTitle = element.albums.title
       
        return `
        <div class="artistCard">
            <div id="renderTitle">
                <h1>${element.artist.toUpperCase()}</h1>
                <hr>
            </div>
            <div id="albums">
            <div class="row album-name">
                <div class="col-2">
                    <img id="album-cover" src="${albumCover}">
                </div>
                <div class="col-4">
                    <h4>${albumTitle}</h4>
                </div>
            </div>
            <div class="song">
             ${songBar}
            </div>
        </div>`
    })
    return `
        <div class="text-center mt-5">
            ${artistCard}
        </div>
    `
}

function albums() {
    var content = document.getElementById('content');

    var albumsAbstraction = [
        {
            artist: "Creed",
            albums: [
                {
                    title: "My Own Prison",
                    albumCover: "https://images-na.ssl-images-amazon.com/images/I/51Y5ZCMV2QL.jpg",
                    songs: [
                        {
                            title: "Torn",
                            length: "6:25"
                        },
                        {
                            title: "Ode",
                            length: "4:58"
                        },
                        {
                            title: "My Own Prison",
                            length: "5:00"
                        },
                        {
                            title: "Pity for a Dime",
                            length: "4:37"
                        },
                        {
                            title: "In America",
                            length: "3:38"
                        },
                        {
                            title: "Illusion",
                            length: "5:29"
                        }
                    ]

                },
                {
                    title: "Weathered",
                    albumCover: "https://is5-ssl.mzstatic.com/image/thumb/Music22/v4/b1/a4/a9/b1a4a9dd-ecda-6233-07da-f53848d37bdf/mzm.qakvcpwo.jpg/1200x630bb.jpg",
                    songs: [
                        {
                            title: "Bullets",
                            length: "6:25"
                        },
                        {
                            title: "Freedom Fighter",
                            length: "4:58"
                        },
                        {
                            title: "Who's Got My Back?",
                            length: "5:00"
                        },
                        {
                            title: "Signs",
                            length: "4:37"
                        },
                        {
                            title: "One Last Breath",
                            length: "3:38"
                        },
                        {
                            title: "My Sacrifice",
                            length: "5:29"
                        }
                    ]
                }
            ]
        }
    ]

    content.innerHTML = renderAlbums(albumsAbstraction);

}