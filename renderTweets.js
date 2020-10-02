
function renderTweets(tweets) {
    var profilePic = tweets.profilePic
    var username = tweets.username
    var handle = tweets.handle
    var tweetCard = tweets.map(function(tweet){
        return `
        <div class="tweetCard">
            <div class="row profile-name">
                <div class="col-2">
                    <img src="${profilePic}">
                </div>
                <div class="col-2">
                    <h3>${username}</h3> 
                    <br>
                    <a href="#">${handle}<a>
                </div>
            </div>
            <div class="row tweet-text">
                <div>
                <h2>${tweet.text}</h2>
                <hr>
                </div>
            </div>
            <div>
            <a href=#><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chat" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
              </svg>${tweet.replies}</a>    
            <a href="#"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
              </svg>${tweet.likes}</a>
            <a href="#"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-repeat" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
              <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
            </svg>${tweet.retweets}</a>
                
            </div>
        </div>`
    })
    return tweetCard.join(' ')
}

function tweets() {
    var content = document.getElementById('content');

    var tweetsAbstraction = [
        {
            user: {
                handle: "@officialjaden",
                username: "Jaden Smith",
                isVerified: true,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "The Moment That Truth Is Organized It Becomes A Lie",
            likes: 231,
            retweets: 12,
            replies: 21
        },
        {
            user: {
                handle: "@officialjaden",
                username: "Jaden Smith",
                isVerified: true,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "How Can Mirrors Be Real If Our Eyes Aren't Real",
            likes: 112,
            retweets: 2,
            replies: 24
        },
        {
            user: {
                handle: "@DigitalCrafts",
                username: "DigitalCrafts Bootcamp",
                isVerified: false,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "Sign up for our next course plz!",
            likes: 11,
            retweets: 3,
            replies: 14
        }
    ]

    content.innerHTML = renderTweets(tweetsAbstraction);

}