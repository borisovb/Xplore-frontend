export default (ctx) => {
  if (ctx.store.state.auth.token) {
    ctx.$axios.setToken(ctx.store.state.auth.token, 'Token')
  }
}
