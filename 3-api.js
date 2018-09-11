const baseURL = 'https://api.openaq.org/v1/countries';
let url;

const searchTerm = document.querySelector('.search');
const submitBtn = document.querySelector('.submit');
const searchForm = document.querySelector('form');
const section = document.querySelector('section');

searchForm.addEventListener('submit', fetchResults);


function fetchResults(e) {
    e.preventDefault();

    url = baseURL;


    fetch(url)
        .then(function(result){
        return result.json();
    })
        .then(function(json){
            // json[0][name];
        displayResults(json);
    });
}

function displayResults(json){
    console.log(json.results)

    while (section.firstChild)
        section.removeChild(section.firstChild);
    
    let search = json.results;
//     if(search.length === 0) {
//         console.log("No results");
// }else{
    for (let i = 0; i < search.length; i++) {
        // let name = document.createElement('name');
        // let cities = document.createElement('cities');
        // let code = document.createElement('code');
        // let count = document.createElement('count');
        // let clearfix = document.createElement('div');
        // order_by[]=name&order_by[]=cities&order_by[]=code&order_by[]=count
        
        
        let current = search[i].name;
        console.log("current:", current);
    }
    //  if(search === ''){
    //     console.log('');
    // function displaySearch(){}
        if(search !== 'current'){
            console.log(searchTerm.value)
        }else{
            console.log('not a country')
    }
}

        // link.href = current.web_url;


// clearfix.setAttribute('class', 'clearfix');


// name.appendChild(name);
// cities.appendChild(cities);
// code.appendChild(code);
// count.appendChild(count);