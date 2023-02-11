let template = `
    <div class="col-2">
        <a href="album.html" >
        <div class="card">
            <img src="assets/download-5.jpg" class="card-img-top" alt="">
            <div class="card-body">
                <p class="card-text">The Christmas</p>
            </div>
        </div>
        </a>
    </div>
`;

let container = document.querySelector(`.albums`);

for (let i = 0; i <albums.length; i++) {
    let album = albums[i];
    container.innerHTML +=
    `
        <div class="col-2">
            <a href="album.html?i=${i}" >
            <div class="card">
                <img src="${album.img}" class="card-img-top" alt="">
                <div class="card-body">
                    <p class="card-text">${album.title}</p>
                </div>
            </div>
            </a>
        </div>
    `
};


