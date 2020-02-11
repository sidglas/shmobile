import axios from 'axios'

const api = axios.create({
    //baseURL: 'http://127.0.0.1:19000'
    //baseURL: 'http://192.168.0.2:3333'
   // baseURL: 'zi-gb9.anonymous.mobile.exp.direct:3333'
  //  baseURL: 'packager.zi-gb9.anonymous.mobile.exp.direct:80'
  //baseUrl:  'exp://zi-gb9.anonymous.mobile.exp.direct:3333'
//exp://7x-nkp.anonymous.mobile.exp.direct:80



baseURL: 'http://192.168.0.2:3333'



})

export default api