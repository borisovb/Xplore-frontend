import games from '~/api/games.js'

export default (ctx, inject) => {
  const api = {
    games: games(ctx.$axios)
  }

  inject('api', api)
}
