const actions = {
  async nuxtServerInit(_, ctx) {
    // After first refresh: ERROR action type: unleash/fetchFeature
    await ctx.store.dispatch('unleash/fetchFeature')
  }
}

export default { actions }
