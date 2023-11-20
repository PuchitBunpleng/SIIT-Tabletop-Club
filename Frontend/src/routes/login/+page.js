import { redirect } from '@sveltejs/kit'
import { userID } from '$lib/store.js'

export async function load() {
  let id = null
  userID.subscribe(val => { id = val })
  if (id) {
    throw redirect(302, '/')
  }
}