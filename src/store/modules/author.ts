/*
 * @Author: ZWH
 * @Email: zhangwh@uway.com
 * @Date: 2021-03-15 13:52:56
 * @Description: 作者经历
 * @LastEditTime: 2021-03-15 14:43:05
 */

export interface AuthorLiv{
    authorLists:any[],
    authorProfile:string
}

const state:AuthorLiv = {
    authorLists:[],
    authorProfile:''
}

const mutations = {
    'AUTHOR_LIST':(state:AuthorLiv,lists:any[])=>{
        state.authorLists = lists
    },
    'AUTHOR_PROFILE':(state:AuthorLiv,profile:string)=>{
        state.authorProfile = profile
    }
}


const actions = {
     getAuthorList:({commit}:any)=>{
          //请求数据
          const data = {
              success:true,
              lists:[
                  {
                      date:'2010-2013年'
                  }
              ]
          }

          commit('AUTHOR_LIST',data.lists)
     }
}

export default {
    namespaced:true,
    actions,
    mutations,
    state
}