import axios from "axios"
//import { resolve } from "url";

//export function request(config,success,failure) {
//  const instance = axios.create({
//    baseURL: 'http://123.207.32.32:8080',
//    timeout:5000
//  })
//  instance(config)
//    .then(res => {
//      success(res);
//    })
//    .catch(err => { failure(err) })
//}

//export function request(config) {
//  return new Promise((resolve, reject) => {
//    const instance = axios.create({
//      baseURL: 'http://123.207.32.32:8080',
//      timeout: 5000
//    })
//    instance(config)
//      .then(res => {
//        resolve(res)
//      })
//      .catch(err => {
//        reject(err)
//      })

//  })
//}
export function request(config) {
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/n3',
    timeout: 5000
  })
  instance.interceptors.request.use(config=>{
   //
    return config;
  },err => {
    console.log(err);
  })
  instance.interceptors.response.use(res => {
    return res.data
  }, err => { console.log(err) }
    );
  return instance(config)
} 
