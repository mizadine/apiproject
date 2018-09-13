const baseURL = 'https://api.openaq.org/v1/countries';

const searchTerm = document.querySelector('.search');
const submitBtn = document.querySelector('.submit');
const searchForm = document.querySelector('form');
const section = document.querySelector('section');

searchForm.addEventListener('submit', fetchResults);


function fetchResults(e) {
    e.preventDefault();

    fetch(baseURL)
        .then(function(result){
        return result.json();
    })
        .then(function(json){
        displayResults(json);
    });
}

function displayResults(json){
    console.log(json.results);

    while (section.firstChild){
        section.removeChild(section.firstChild)};
    
    let search = json.results;

let current =searchTerm.value

    for (let i = 0; i < search.length; i++) {
        if(search[i].name == current){
            console.log('result:',search[i])
            return
        }else{
        }
        console.log("not a country")
    } 
}

