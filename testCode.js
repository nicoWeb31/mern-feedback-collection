// write a foction to retrive a blob of json
//make a ajax request !!! use fetch function 
//https://rallycoding.herokuapp.com/api/music_albums   api  to call



////fetch request -------------------------------
const fetchAlbums = () => {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.log(err))
}

fetchAlbums();

///async await
const fetchAlbums2 = async () => {

    try {

        const response = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
        const json = await response.json();
        console.log("json", json)


    } catch (err) {
        console.log("err", err)
    }
}
fetchAlbums2();



