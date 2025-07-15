import Vue from 'vue'
export default {
  namespaced: true,
  state () {
    const storedCart = localStorage.getItem('cart')
    return {
      cart: storedCart ? JSON.parse(storedCart) : {}
    }
  },
  getters: {
    // 购物车总数
    totalCount: state => {
      return Object.values(state.cart).reduce((sum, val) => sum + val.count, 0)
    },
    // 某个商品的数量
    getItemCount: state => id => {
      return state.cart[id] ? state.cart[id].count : 0
    },
    getCart: state => state.cart
  },
  mutations: {
    addToCart (state, { item, count }) {
      const id = item.id
      if (state.cart[id]) {
        state.cart[id].count += count
      } else {
        Vue.set(state.cart, id, {
          count,
          item // 保存商品完整信息
        })
      }
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    updateItemCount (state, { id, count }) {
      if (count <= 0) {
        Vue.delete(state.cart, id)
      } else {
        Vue.set(state.cart[id], 'count', count)
      }
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    clearCart (state) {
      state.cart = {}
      localStorage.removeItem('cart')
    }
  },
  actions: {
  }
}
