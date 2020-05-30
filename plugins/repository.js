import games from '~/api/games.js'
import users from '~/api/users.js'

export default (ctx, inject) => {
  const api = {
    games: games(ctx.$axios),
    users: users(ctx.$axios)
  }

  inject('api', api)
}
