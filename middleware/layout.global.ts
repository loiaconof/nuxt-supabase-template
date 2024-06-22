export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path.startsWith('/auth')) {
    to.meta.layout = 'auth'
  }
})
