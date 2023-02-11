let container = document.querySelector(`.album`);
let plist = document.querySelector(`.plist`);

let search = new URLSearchParams(window.location.search);
let i = search.get(`i`);

let album = albums[i];

container.innerHTML = `
    <div class="card mb-3">
        <div class="row">
            <div class="col-4">
                <img src="${album.img}" class="img-fluid rounded-start" alt="">
                </div>
                    <div class="col-8">
                        <div class="card-body">
                            <h5 class="card-title">${album.title}</h5>
                            <p class="card-text">${album.description}</p>
                            <p class="card-text"><small class="text-muted">${album.description}</small></p>
                </div>
            </div>
        </div>
    </div>
`

let tracks = album.tracks;
for(let i = 0; i < tracks.length; i++) {
    let track = tracks[i];
    plist.innerHTML += `
    
    <li class="list-group-item d-flex align-items-center">
        <img src="assets/playbtn.png" alt="" height="30px" width="30px" class="me-3">
        <div>
            <div>${track.title}</div>
            <div>${track.author}</div>
        </div>
        <div class="ms-auto">${track.time}</div>
    </li>
    `
}

