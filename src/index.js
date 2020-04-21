document.addEventListener('DOMContentLoaded', (event)=> {
    loadImages();
    loadBreeds();
});




    
    function loadImages() {
        const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
        fetch(imgUrl)
            .then(res => res.json())
            .then((data) => {
                data.message.forEach((image) => {
                addImage(image);
                })

        })};


    function addImage(url) {
        let picContainer = document.querySelector('#dog-image-container');
        let newImage = document.createElement('img');
        newImage.src = url;
        picContainer.appendChild(newImage);

    }
    let breeds;
    function loadBreeds() {
        const breedUrl = 'https://dog.ceo/api/breeds/list/all'
        fetch(breedUrl)
        .then(res => res.json())
        .then((data) => {
            breeds = Object.keys(data.message);
            breeds.forEach((breed) => {
                addBreedtoList(breed);
            })
            })
        }
    let list = document.getElementById('dog-breeds');
    
    function addBreedtoList(breed) {
        
        let listItem = document.createElement('li');
        listItem.innerText = breed;
        list.appendChild(listItem);
    }


    
    list.addEventListener('click', (event) => {
       event.target.style.color = 'green';
    })

    
    let dropDown = document.querySelector('#breed-dropdown');
        dropDown.addEventListener('change', (event) => {
        filterBreeds(event.target.value);
    })

    
    //how to reload list breeds so it can filter more than
    function filterBreeds(choice) {
        breeds = breeds.filter(breed => breed.startsWith(choice))
        updateBreedList(breeds);
        breeds.forEach(breed => addBreedtoList(breed))
        
    } 

    function updateBreedList(breeds) {
        removeChildren(list);
    }

    function removeChildren(list) {
        let child = list.lastElementChild;
        while (child) {
            list.removeChild(child);
            child = list.lastElementChild;
        }
    }


    
                   





