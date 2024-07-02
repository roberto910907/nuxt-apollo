import type { ErrorResponse } from '@rober9109/nuxt-apollo'

export default defineNuxtPlugin((nuxtApp) => {
  // Nuxt Apollo auth hook
  nuxtApp.hook('apollo:auth', ({ client, token }) => {
    if (client !== 'todos') { return }

    // Pass token to the `todos` client
    token.value = '<secret_token>'
  })

  // Nuxt Apollo error hook
  nuxtApp.hook('apollo:error', (error: ErrorResponse) => {
    // eslint-disable-next-line no-console
    console.log('Apollo Error Handler', error)
  })
})
