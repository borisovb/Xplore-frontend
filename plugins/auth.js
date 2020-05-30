export default (ctx) => {
  if (ctx.store.state.auth.token) {
    ctx.$axios.setToken(ctx.store.state.auth.token, 'Token')
  }

  ctx.$axios.interceptors.request.use(
    function(config) {
      ctx.store.dispatch('ui/setWaitingForResponse', true)
      return config
    },
    function(error) {
      return Promise.reject(error)
    }
  )

  ctx.$axios.interceptors.response.use(
    function(response) {
      ctx.store.dispatch('ui/setWaitingForResponse', false)
      return response
    },
    function(error) {
      return Promise.reject(error)
    }
  )
}
