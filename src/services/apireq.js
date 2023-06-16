import axios from "axios";


axios.defaults.baseURL = 'https://panel.frzddev.ir';
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:5173';

// verify 1 just phone
const verify = (userData) => {
    let datas = {}
    if (userData.type == "legal") {
        datas = {
            "phone":userData.phone,
        }
    }
    if (userData.type == "genuine") {
        datas = {
            "phone":userData.phone,
        }
    }
    axios.post('/api/v1/verify', datas , {
        headers: {
            Authorization:"token",
            'Access-Control-Allow-Origin': "http://localhost:5173"
        }
    })
    .then(response => {
        console.log(response.data);
        // window.localStorage.accessToken = response.data.authorisation.token
        
    })
    .catch(error => console.log(error.message));
}




export { verify }


