let count = 0;
const counter = document.getElementById('counter');
const add = document.getElementById('plus');
const pauseButton = document.getElementById('pause');
let paused = false;
const decrement = document.getElementById('minus');
const likeButton = document.getElementById('heart');
const submitButton = document.getElementById('submit');

add.disabled = false;
decrement.disabled = false;
likeButton.disabled = false;
submitButton.disabled = false;
pauseButton.disabled = false;

//All functione here 
function incrementCount(){
    if (!paused) {
        count += 1;
        counter.textContent = count;
    }
    else {
        add.disabled = true;
    }
};
function decrementCount() {
    count--;
    counter.textContent = count;
}

function pauseCount() {
    paused = !paused;
    if (paused) {
        add.disabled = true;
        decrement.disabled = true;
        likeButton.disabled = true;
        submitButton.disabled = true;
        pauseButton.textContent = 'resume';
    }
    else {
        add.disabled = false;
        decrement.disabled = false;
        likeButton.disabled = false;
        submitButton.disabled = false;
        pauseButton.textContent = 'pause';
    }
}

let likesArray = [];
let timesLiked = 1;
function wasLiked() {
    const newLikes = document.createElement('li');
    const likeList = document.getElementsByClassName('likes')[0];

    if(!likesArray.includes(count)) {
        timesLiked = 1;
        likesArray.push(count); 
        newLikes.textContent = `${count} has been liked 1 time`
        newLikes.classList.add(`${count}`);
        likeList.appendChild(newLikes); 
    }
    else{
        timesLiked++;
        let updatedLikes = document.getElementsByClassName(`${count}`)[0];
        updatedLikes.textContent = `${count} has been liked ${timesLiked} times`; 
    }
}

function wasSubmitted() {
    const commentsList = document.getElementById('list');
    const comments = document.createElement('ul');
    comments.style = "list-style-type:none;";
    const comment = document.createElement('li');
    const text = document.getElementById('comment-input');
    comment.innerText = text.value;

    comments.appendChild(comment);
    commentsList.appendChild(comments);
    const form = document.getElementById('comment-form');
    form.reset();
}

//Events here 
document.addEventListener('DOMContentLoaded', (e) => {
    setInterval(incrementCount, 1000);
});

add.addEventListener('click', incrementCount);

decrement.addEventListener('click', decrementCount);

pauseButton.addEventListener('click', pauseCount);

likeButton.addEventListener('click', wasLiked);

submitButton.addEventListener('click', function(e){ 
    e.preventDefault()
    wasSubmitted();
    
});