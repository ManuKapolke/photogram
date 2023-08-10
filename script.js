loadFromLocalStorage();


function render() {
    renderPosts();
    renderProposals();
}


function renderPosts() {
    document.getElementById('posts-container').innerHTML = '';

    for (let i = 0; i < posts.length; i++) {
        renderPost(i);
    }

    enablePostingCommentsOnEnter();
}


function renderProposals(countOfProposals = SHOWN_PROPOSALS) {
    const randomIndexes = getArrayOfRandomInt(proposals.length, countOfProposals);
    document.getElementById('proposal-table').innerHTML = '';

    for (let i = 0; i < proposals.length; i++) {
        if (randomIndexes.includes(i)) {
            renderProposal(i);
        }
    }
}


function renderPost(postIndex) {
    renderPostFrameWithImage(postIndex);
    renderPostHeader(postIndex);
    renderPostIcons(postIndex);
    renderPostLikes(postIndex);
    renderPostText(postIndex);
    renderComments(postIndex);
    renderNewCommentInput(postIndex);
}


function renderProposal(proposalIndex) {
    let proposalTable = document.getElementById('proposal-table');
    let proposalElement = document.createElement('tr');
    proposalTable.appendChild(proposalElement);

    proposalElement.innerHTML += renderProposalUser(proposalIndex);
    proposalElement.innerHTML += renderProposalFollowButton(proposalIndex);
}


function renderPostFrameWithImage(postIndex) {
    let postsContainer = document.getElementById('posts-container');
    let postElement = getPostElement(postIndex);
    postElement.innerHTML = `
        <div id="post-header-${postIndex}" class="post-header"></div>
        <img src="${posts[postIndex].image}">
        <div id="post-icons-${postIndex}" class="post-icons"></div>
        <span id="post-likes-${postIndex}" class="post-likes"></span>
        <div id="post-text-${postIndex}" class="post-text"></div>
        <div id="comments-${postIndex}"></div>
        <span class="post-time">VOR ${posts[postIndex].hoursAgo} STUNDEN</span>
        <div id="new-comment-${postIndex}" class="new-comment"></div>
    `;
    postsContainer.appendChild(postElement);
}


function renderPostHeader(postIndex) {
    document.getElementById(`post-header-${postIndex}`).innerHTML = `
        <div class="author-icon">
            <img src="${posts[postIndex].profilepic}">
        </div>
        <div class="author-and-location">
            <b>${posts[postIndex].author}</b>
            <span>${posts[postIndex].location}</span>
        </div>
    `;
}


function renderPostIcons(postIndex) {
    document.getElementById(`post-icons-${postIndex}`).innerHTML = `
        <div class="post-icons-left">
            <img src="img/${getHeartIcon(postIndex)}" id="heart-icon-${postIndex}" onclick="toggleHeartIcon(${postIndex})">
            <img src="img/speech-bubble.png">
            <img src="img/paper-plane-32.png"> 
        </div>
        <img src="img/${getBookmarkIcon(postIndex)}" id="bookmark-icon-${postIndex}" onclick="toggleBookmarkIcon(${postIndex})">
    `;
}


function renderPostLikes(postIndex) {
    document.getElementById(`post-likes-${postIndex}`).innerHTML = `
        <b>Gefällt ${posts[postIndex].likes} mal</b>
    `;
}


function renderPostText(postIndex) {
    document.getElementById(`post-text-${postIndex}`).innerHTML = `
        <b>${posts[postIndex].author}</b> ${posts[postIndex].text}
    `;
}


function renderComments(postIndex) {
    let commentsContainer = document.getElementById(`comments-${postIndex}`);
    commentsContainer.innerHTML = `<div class="comments-headline">Kommentare:</div>`;

    for (let commentIndex = 0; commentIndex < posts[postIndex].comments.length; commentIndex++) {
        commentsContainer.innerHTML += `
            <div class="comment"><b>${getCommentAuthor(postIndex, commentIndex)}</b> ${getComment(postIndex, commentIndex)}</div>
        `;
    }
}


function renderNewCommentInput(postIndex) {
    document.getElementById(`new-comment-${postIndex}`).innerHTML = `
        <input id="post-input-${postIndex}" placeholder="Dein Kommentar ..." title="" required>
        <button id="post-button-${postIndex}" onclick="addComment(${postIndex})"><b>Posten</b></button>
    `;
}


function renderProposalUser(proposalIndex) {
    return `
        <td class="user-icon-and-name">
            <img src="${proposals[proposalIndex].profilepic}" class="user-icon">
            <div class="user-name">
                <b>${proposals[proposalIndex].name}</b>
                <span>${proposals[proposalIndex].info}</span>
            </div>
        </td>
    `;
}


function renderProposalFollowButton(proposalIndex) {
    return `
        <td id="follow-${proposalIndex}" class="proposal-links" onclick="toggleFollow(${proposalIndex})">
            ${getFollowState(proposalIndex)}
        </td> 
    `;
}


function getPostElement(postIndex) {
    let postElement = document.createElement('div');
    postElement.id = `post-${postIndex}`;
    postElement.classList.add('posts');
    return postElement;
}


function getCommentAuthor(postIndex, commentIndex) {
    return posts[postIndex].comments[commentIndex].author;
}


function getComment(postIndex, commentIndex) {
    return posts[postIndex].comments[commentIndex].text;
}


function getHeartIcon(postIndex) {
    return posts[postIndex].isLiked ? 'favorite-4-32_magenta_filled.png' : 'favorite-4-32.png';
}


function getBookmarkIcon(postIndex) {
    return posts[postIndex].isMarked ? 'bookmarked.png' : 'bookmark.png';
}


function toggleHeartIcon(postIndex) {
    posts[postIndex].isLiked = !posts[postIndex].isLiked;
    if (posts[postIndex].isLiked) ++posts[postIndex].likes;
    else --posts[postIndex].likes;
    renderPostIcons(postIndex);
}


function toggleBookmarkIcon(postIndex) {
    posts[postIndex].isMarked = !posts[postIndex].isMarked;
    renderPostIcons(postIndex);
    saveToLocalStorage();
}


function addComment(postIndex) {
    const input = document.getElementById(`post-input-${postIndex}`);
    validate(`post-input-${postIndex}`);

    if (input.checkValidity()) {
        const comment = {
            "author": "manukapolke",
            "text": input.value
        };
        posts[postIndex].comments.push(comment);
        renderComments(postIndex);
        input.value = '';
        saveToLocalStorage();
    }
}


function enablePostingCommentsOnEnter() {
    for (let i = 0; i < posts.length; i++) {
        triggerButtonOnEnter(`post-input-${i}`, `post-button-${i}`);
    }
}


function triggerButtonOnEnter(inputID, buttonID) {
    let input = document.getElementById(inputID);
    input.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            document.getElementById(buttonID).click();
        }
    });
}


function validate(inputID) {
    const input = document.getElementById(inputID);
    const validityState = input.validity;

    if (validityState.valueMissing) {
        input.setCustomValidity(`Bitte Text eingeben`);
    } else {
        input.setCustomValidity('');
    }

    input.reportValidity();
}


function getArrayOfRandomInt(maxValue, length) {
    let array = [];
    for (let i = 0; i < length; i++) {
        let randomInt = getRandomInt(maxValue);
        while (array.includes(randomInt)) {
            randomInt = getRandomInt(maxValue);
        }
        array.push(randomInt);
    }
    return array;
}


function getRandomInt(maxValue) {
    return Math.floor(Math.random() * maxValue);
}


function toggleFollow(proposalIndex) {
    proposals[proposalIndex].isFollowed = !proposals[proposalIndex].isFollowed;
    document.getElementById(`follow-${proposalIndex}`).innerHTML = getFollowState(proposalIndex);

    saveToLocalStorage();
}


function getFollowState(proposalIndex) {
    return proposals[proposalIndex].isFollowed ? 'Folgst du' : 'Folgen';
}


function toggleCountOfProposals() {
    let link = document.getElementById('show-hide-proposals');
    if (link.innerHTML.startsWith('Alle anzeigen')) {
        renderProposals(proposals.length);
        link.innerHTML = 'Auswahl anzeigen';
    }
    else {
        renderProposals();
        link.innerHTML = 'Alle anzeigen';
    }
}


function saveToLocalStorage() {
    let postsAsText = JSON.stringify(posts);
    let proposalsAsText = JSON.stringify(proposals);

    localStorage.setItem('posts', postsAsText);
    localStorage.setItem('proposals', proposalsAsText);
}


function loadFromLocalStorage() {
    let postsAsText = localStorage.getItem('posts');
    let proposalsAsText = localStorage.getItem('proposals');

    if (postsAsText) {
        posts = JSON.parse(postsAsText);
    }
    if (proposalsAsText) {
        proposals = JSON.parse(proposalsAsText);
    }
}