/*
 * @Author: ZWH
 * @Email: zhangwh@uway.com
 * @Date: 2021-03-17 14:51:37
 * @Description: 
 * @LastEditTime: 2021-03-18 13:50:40
 */
import Mock from 'mockjs'
const bannerJson = require('./modules/home.json')
Mock.mock('/api/getBanner','get',bannerJson.banner) 
Mock.mock('/api/icon','get',bannerJson.icons)
export default Mock;