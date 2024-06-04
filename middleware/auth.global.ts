export default defineNuxtRouteMiddleware((to) => {
  const user = useSupabaseUser()

  if (!user.value) {
    if (!to.path.startsWith('/auth'))
      return navigateTo('/auth/login')
    else return true
  }

  if (to.path.startsWith('/auth'))
    return navigateTo('/')

  return true
})
