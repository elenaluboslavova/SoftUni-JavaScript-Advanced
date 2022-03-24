window.addEventListener('load', solve);

function solve() {
    let genre = document.querySelector('#append-song form #genre');
    let name = document.querySelector('#append-song form #name');
    let author = document.querySelector('#append-song form #author');
    let date = document.querySelector('#append-song form #date');

    let addBtn = document.querySelector('#append-song form #add-btn');
    addBtn.addEventListener('click', addSong);

    let songsDiv = document.querySelector('#all-hits .all-hits-container');

    let totalLikes = document.querySelector('#total-likes .likes p');
    let likesCounter = 0;

    let savedSongs = document.querySelector('#saved-hits .saved-container');

    function addSong(event) {
        event.preventDefault();

        let isValid = genre.value != '' && name.value != '' && author.value != '' && date.value != '';

        if (isValid) {
            let newDiv = document.createElement('div');
            newDiv.classList.add('hits-info');

            let img = document.createElement('img');
            img.src = "./static/img/img.png";

            let firsth2 = document.createElement('h2');
            firsth2.textContent = `Genre: ${genre.value}`;

            let secondh2 = document.createElement('h2');
            secondh2.textContent = `Name: ${name.value}`;

            let thirdh2 = document.createElement('h2');
            thirdh2.textContent = `Author: ${author.value}`;

            let h3 = document.createElement('h3');
            h3.textContent = `Date: ${date.value}`;

            let saveBtn = document.createElement('button');
            saveBtn.classList.add('save-btn');
            saveBtn.textContent = 'Save song';

            let likeBtn = document.createElement('button');
            likeBtn.classList.add('like-btn');
            likeBtn.textContent = 'Like song';
            likeBtn.addEventListener('click', increaseLikes.bind(null, likeBtn));

            let deleteBtn = document.createElement('button');
            deleteBtn.classList.add('delete-btn');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', deleteSong);

            newDiv.appendChild(img);
            newDiv.appendChild(firsth2);
            newDiv.appendChild(secondh2);
            newDiv.appendChild(thirdh2);
            newDiv.appendChild(h3);
            newDiv.appendChild(saveBtn);
            newDiv.appendChild(likeBtn);
            newDiv.appendChild(deleteBtn);


            saveBtn.addEventListener('click', saveSong.bind(null, newDiv));

            songsDiv.appendChild(newDiv);
        }
        name.value = '';
        genre.value = '';
        date.value = '';
        author.value = '';

    }

    function increaseLikes(likeBtn, event) {
        event.preventDefault();
        likesCounter++;
        totalLikes.textContent = `Total Likes: ${likesCounter}`;

        likeBtn.disabled = true;
    }

    function saveSong(newDiv, event) {
        event.preventDefault();
        let currentDiv = newDiv.cloneNode(true);

        let save = currentDiv.querySelector('.save-btn');
        let like = currentDiv.querySelector('.like-btn');
        currentDiv.removeChild(save);
        currentDiv.removeChild(like);

        savedSongs.appendChild(currentDiv);
        songsDiv.removeChild(newDiv);

        currentDiv.querySelector('.delete-btn').addEventListener('click', deleteSong);
    }

    function deleteSong(event){
        event.preventDefault();
        event.target.parentNode.parentNode.removeChild(event.target.parentNode);
        totalLikes.textContent = `Total Likes: ${likesCounter}`;
    }
}