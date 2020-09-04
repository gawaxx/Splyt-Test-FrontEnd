export const API_LINK = (count) => `https://cors-anywhere.herokuapp.com/https://qa-interview-test.qa.splytech.io/api/drivers?latitude=51.5049375&longitude=-0.0964509&count=${count}`

// const jsonify = res => res.json();

const headers = {
    'content-type': 'application/json',
}

export const GetAPI = (url) => fetch(url, { headers: headers}).then(res => res.json())

export const API = { GetAPI }