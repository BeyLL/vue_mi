/*
 * @Author: ZWH
 * @Email: zhangwh@uway.com
 * @Date: 2021-03-17 15:25:21
 * @Description: 
 * @LastEditTime: 2021-03-18 14:42:03
 */
import { getBanner, getIcon } from '@/serves/home'
import { rearg } from 'lodash'
//设置用户状态类型
export interface HomeState {
    banners: any[],
    icons: any[]
}
const state: Partial<HomeState> = {
    banners: [],
    icons: []
}

const mutations = {
    "SET_BANNERS": (state: HomeState, banners: any[]) => {
        state.banners = banners
    },

    "SET_ICONS": (state: HomeState, list: any[]) => {
        state.icons = list
    }
}

const actions = {
    get_banners: ({ commit }: any, payload: undefined | object) => {
        getBanner(payload).then(res => {
            const { bannerLists, success } = res.data;
            if (success) {
                commit('SET_BANNERS', bannerLists)
            }
        })
    },

    get_icon: ({ commit }: any, payload: undefined | object) => {
        getIcon(payload).then(res => {
            const { list, success } = res.data;
            if (success) {
                commit('SET_ICONS', list)
            }
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}