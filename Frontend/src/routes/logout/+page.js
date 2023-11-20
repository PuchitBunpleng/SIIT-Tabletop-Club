import { error } from '@sveltejs/kit'
import { userID } from "$lib/store.js"
import api from "$lib/api.js"
import { goto } from '$app/navigation'

export function load() {
  try {
    api
      .post('/logout')
      .then(res => {
        userID.set('')
        goto('/login')
      })
      .catch(err => {
        console.log(err)
      })
  } catch (err) {
    throw error(404, 'Not found');
  }
}