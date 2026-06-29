const jokesList  = document.querySelector('#jokes');
const button     = document.querySelector('#cilck');
const clearBtn   = document.querySelector('#clear-btn');
const emptyState = document.querySelector('#empty-state');
let count = 0;

const getdadjoke = async () => {
    const config = { headers: { Accept: 'application/json' } };
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    return res.data.joke;
};

const addjoke = async () => {
    button.classList.add('loading');
    button.innerHTML = '<span class="btn-icon">⏳</span> Fetching…';

    try {
        const joketext = await getdadjoke();

        // Hide empty state on first joke
        if (emptyState) emptyState.style.display = 'none';

        count++;
        const li = document.createElement('li');
        li.innerHTML = `<span class="joke-num">#${count}</span><span>${joketext}</span>`;
        jokesList.appendChild(li);
    } catch (err) {
        alert('Could not fetch a joke — check your connection and try again.');
    } finally {
        button.classList.remove('loading');
        button.innerHTML = '<span class="btn-icon">+</span> Add a joke';
    }
};

const clearJokes = () => {
    jokesList.innerHTML = '';
    count = 0;
    if (emptyState) emptyState.style.display = 'flex';
};

button.addEventListener('click', addjoke);
clearBtn.addEventListener('click', clearJokes);
