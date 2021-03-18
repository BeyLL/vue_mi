/*
 * @Author: ZWH
 * @Email: zhangwh@uway.com
 * @Date: 2021-03-12 11:35:35
 * @Description: 
 * @LastEditTime: 2021-03-15 15:33:43
 */

//设置用户状态类型
export interface UserState {
    username: string,
    avator: string,
    roles: any[]
}
const state: Partial<UserState> = {
    username: '',
    avator: '',
    roles: []
}


const mutations = {
    LOGIN_NAME: (state: UserState, name: string) => {
        state.username = name
    },

    LOGIN_ROLES: (state: UserState, roles: any[]) => {
        state.roles = roles
    },
    LOGIN_AVATOR: (state: UserState, avator: string) => {
        state.avator = avator
    }
}


const actions = {
    login({ commit }: any, loginInfo: object) {
        // 请求接口
        const data = {
            success:true,
            username: 'zhang',
            avator: 'http://www.baidu.com',
            token:'234efebr4545ggeg43t4g3r323432',
        }

        const { success,username, avator,token } = data;
        commit('LOGIN_NAME', username)
        commit('LOGIN_AVATOR', avator)
        sessionStorage.setItem('token',token)
        return success;
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
