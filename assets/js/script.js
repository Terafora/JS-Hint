const API_KEY = "8qVyJPGKB20IJ4FafncCRGIt3ZE"
const API_URL = "https://ci-jshint.herokuapp.com/api"
const resultModal = new bootstrap.Modal(document.getElementById("resultsModal"))

document.getElementById("status").addEventListener("click", e => getStatus(e))

/**
 * Fetches the API using the custom key generated for me.
 * (Key is good until 13/10/2024)  
 */
async function getStatus(e) {
    const queryString = `${API_URL}?api_key=${API_KEY}`
    const response =await fetch(queryString)
    const data = await response.json()

    if(response.ok) {
        displayStatus(data)
    } else {
        throw new Error(data.error)
    }
}

/**
 * Displays modal and populates it with data fetched
 * from API
 */
function displayStatus(data){
    let heading = "API Key Status"
    let results = `<div>Your key is vaild until</div>`
    results += `<div class="key-staus">${data.expiry}</div>`

    document.getElementById("resultsModalTitle").innerText = heading
    document.getElementById("results-content").innerHTML = results

    resultModal.show()
}