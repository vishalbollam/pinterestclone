import axios from "axios";


export default axios.create({
baseUrl:"https://api.unsplash.com/",
headers:{
    Authorization:"Client-ID k9Ctw6If2eosdgCbkCzzZyikUpsdbfj_KE16sqlXpJs"
}

})