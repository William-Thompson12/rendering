
function renderAlbums(albuminfo) {
    var albumCard = albuminfo.map(function(albumCards){
        albumTitle = renderAlbumTitle(albumCards.albums)
        albumCover = renderAlbumPic(albumCards.albums)
        albumSongs = renderAlbumSongs(albumCards.albums)
        return `
        <div class="cardHeader">
            <h1>${albumCards.artist}</h1>
            <hr>
        </div>
        <div class="cardBody">
            ${albumCover + albumTitle}
        </div>`
    })
    return albumCard.join(' ')
}

function renderAlbumTitle(albums){
    let albumTitle = albums.map(function(albums){
        return`
        <div class="albumTitle">
            ${albums.title}
        </div>`
    })
    return albumTitle.join(' ')
}

function renderAlbumPic(albums){
   return `<img src="${albums.albumCover}">`
}

function renderAlbumSongs(albums) {
    albumsSongBar = albums.song
    let albumSongs = albumsSongBar.map(function(song){
        return `
        <div class="songBar">
            ${song.title}${song.length}
        </div>`

    })
    return albumSongs.join(' ')
}
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

