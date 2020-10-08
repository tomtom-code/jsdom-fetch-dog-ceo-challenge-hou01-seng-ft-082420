console.log('%c HI', 'color: firebrick')
console.log('make it work')
document.addEventListener("DOMContentLoaded", () => {

    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const dogImgContainer = document.getElementById('dog-image-container')

    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res => res.json())
    .then((dogImgData) => {
        let i;
        for(i=0; i < dogImgData.message.length; i++){
            //console.log(dogImgData.message[i])
           let dogImg = document.createElement('img')
           dogImg.src = dogImgData.message[i]
          let div = document.querySelector("#dog-image-container")
            div.append(dogImg);
        }
    })

    const breedUrl = 'https://dog.ceo/api/breeds/list/all'


    let Ul = document.querySelector("#dog-breeds")
    let dogBreeds = []

    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then((dogBreedData) => {
        //let dogBreeds = []
        dogBreeds = Object.keys(dogBreedData.message)
        //console.log(dogBreeds)
        for(i=0; i < dogBreeds.length; i++){
        
           let dogBreedLi = document.createElement('li')
           dogBreedLi.innerHTML = dogBreeds[i]
          //let Ul = document.querySelector("#dog-breeds")
            Ul.append(dogBreedLi);
            //console.log(dogBreedLi)

            dogBreedLi.addEventListener('click', function(e){
                e.target.style.color = 'green'
            
            })
            
            let breedDropdown = document.getElementById('breed-dropdown')
            breedDropdown.addEventListener('change', (e) => {
        
                //this showing each selected letter
                const letter = e.target.value
                
        
                //find all dogs start with that letter
                const filteredBreeds = dogBreeds.filter((breed) => breed.startsWith(letter))
                console.log(filteredBreeds)
        
                //display only that in the ul
        
        
                
        
        
                
                
            })
        

        }
        
        

    })
    

    //let breedDropdown = document.getElementById('breed-dropdown')
        

    //breedDropdown.addEventListener('change', (e) => {
        
        //this showing each selected letter
        //const letter = e.target.value

        //find all dogs start with that letter
        //dogBreeds.filter

        //display only that in the ul


        


        
        
    //})









})