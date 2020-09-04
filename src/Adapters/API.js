// export const count = '0'
export const API_LINK = `https://cors-anywhere.herokuapp.com/https://qa-interview-test.qa.splytech.io/api/drivers?latitude=51.5049375&longitude=-0.0964509&count=3`

// const jsonify = res => res.json();

const headers = {
    'content-type': 'application/json',
    // "Access-Control-Allow-Origin": "*"
}

export const GetAPI = (url) => fetch(url, { headers: headers}).then(res => res.json())

export const API = { GetAPI }