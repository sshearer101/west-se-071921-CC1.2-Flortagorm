const imgURL = 'https://distinct-vaulted-freesia.glitch.me/image'
const fgTitle = document.getElementById('fg-title')
const fgImage = document.getElementById('fg-image')
const fgLikes = document.getElementById('fg-likes')
const likeButton = document.getElementById('like-button')
const fgComments = document.getElementById('fg-comments')
const commentForm = document.getElementById('comment-form')

let likes = 0;

likeButton.addEventListener('click', () => {
    likes += 1
    renderLikes()
})

commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addComments(e.target[0].value)
    e.target[0].value = ' '
})

fetch (imgURL)
.then (res => res.json())
.then (renderData)


function renderData(data){
    fgTitle.innerText = data.title;
    fgImage.src = data.image;
    likes = data.likes
    renderLikes();
    //I don't know if you wanted us to set the server's likes, but I did anyways...
    //Seems like a good habit to get into!
    setComments(data.comments)

}

function renderLikes(){
    fgLikes.innerText = `${likes} likes`
}

function setComments(comments){
    fgComments.innerHTML = ''
    comments.forEach(comment => addComments(comment.content))

}

function addComments(comments){
    const li = document.createElement('li')
    li.innerText = comments
    fgComments.append(li)
}