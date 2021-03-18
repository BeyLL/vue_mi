/*
 * @Author: ZWH
 * @Email: zhangwh@uway.com
 * @Date: 2021-03-17 15:14:19
 * @Description: 
 * @LastEditTime: 2021-03-18 13:45:45
 */
import axios from 'axios'
const {api}  = require('./api.json');
export function getBanner(data:any){
   return axios.get(api.getBanners)
}

export function getIcon(data:any){
    return axios.get(api.getIcon)
}