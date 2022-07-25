fetch('https://api.spacexdata.com/v4/launches')
.then((response) => {
    return response.json();
})
.then((data) => {
    data.forEach((launch) => {
        const launchName = launch.name;
        const wiki = launch.links.wikipedia;
        const h2 = document.createElement('h2');
        h2.innerHTML = `<a href=${wiki} target="_blank">${launchName}</a>`;
        document.body.appendChild(h2);
    })
})
.catch((err) => console.log(err));