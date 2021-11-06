function get(url) {
    return fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        headers
    }).then(resp => {
        console.log(resp)
        return resp.json()});
}

function post(url, data) {
    return fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        headers,
        body: JSON.stringify({ data: data, value: 22 })
    }).then(resp => resp.json());
}

export const headers = {
    'Access-Control-Allow-Headers': 'X-PINGOTHER, Content-Type',
    'Access-Control-Allow-Origin': "*",
    "Content-Type": "application/json",
    mode: 'no-cors'
};

export function getPhrases() {
    return 		fetch('https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    .then(response => response.json())
    .then(data => {
     return data.quotes;
    })
}

export function postData(data) {
    console.log(data)
    return post(`http://localhost:8080/file`, data)
}