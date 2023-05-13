import axios from "axios";

axios.defaults.baseURL = 'https://panel.frzddev.ir';
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:5173';

const apiLogin = (userData) => {
    axios.post('/api/v1/login', userData , {
        headers: {
            Authorization:"token",
            'Access-Control-Allow-Origin': "http://localhost:5173"
        }
    })
    .then(response => {
        console.log(response.data);
        window.localStorage.accessToken = response.data.authorisation.token

    })
    .catch(error => console.log(error.message));
}

const forgotPassword = (data) => {
    axios.post('/api/v1/forget_pass', data , {
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


const singup = (userData) => {
    let datas = {}
    if (userData.type == "legal") {
        datas = {
        "type":"legal",
        "company_name":userData.company_name,
        "name":userData.name,
        "family":userData.name + "ei",
        "national_company":userData.national_company,
        "phone":userData.phone,
        "password":userData.password,
        "password_confirmation":userData.password_confirmation,
        "is_confirmed":true,
        "email":""
        }
    }
    if (userData.type == "genuine") {
        datas = {
            "type":"genuine",
            "name":userData.name,
            "family":userData.family,
            "phone":userData.phone,
            "password":userData.password,
            "password_confirmation":userData.password_confirmation,
            "is_confirmed":true,
            "national_code":userData.national_code,
            "email":""
        }
    }
    console.log(datas);
    axios.post('/api/v1/register', datas , {
        headers: {
            Authorization:"token",
            'Access-Control-Allow-Origin': "http://localhost:5173"
        }
    })
    .then(response => {
        console.log(response.data);
        window.localStorage.accessToken = response.data.authorisation.token

    })
    .catch(error => console.log(error.message));
}
export { apiLogin , forgotPassword , singup }


