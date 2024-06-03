<script lang="ts" setup>
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

definePageMeta({
  layout: 'auth'
})

const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Must be at least 8 characters'),
})

type Schema = z.output<typeof schema>

const state = reactive({
  email: undefined,
  password: undefined,
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
  const { error } = await supabase.auth.signInWithPassword({
    email: event.data.email,
    password: event.data.password,
  })

  if (error) {
    console.error(error)
    return
  }
  
  navigateTo('/')
}
</script>

<template>
  <div>
    <u-card>
      <template #header>
        Login
      </template>

      <u-form :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
        <u-form-group label="Email" name="email">
          <UInput v-model="state.email" />
        </u-form-group>

        <u-form-group label="Password" name="password">
          <UInput v-model="state.password" type="password" />
        </u-form-group>

        <div class="flex justify-end">
          <u-button type="submit">
            Submit
          </u-button>
        </div>
      </u-form>
      <template #footer>
        <div class="flex justify-end">
          <nuxt-link to="/auth/registration">
            Registration
          </nuxt-link>
        </div>
      </template>
    </u-card>
  </div>
</template>
