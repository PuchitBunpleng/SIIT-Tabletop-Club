import { error } from '@sveltejs/kit'
import { userID } from '$lib/store.js'
import api from '$lib/api.js'

export async function load() {
  try {
    let id = null
    userID.subscribe(val => { id = val })
    let data = (await api.get(`/member/${id}`)).data[0]
    return data
  } catch (err) {
    throw error(500, err.message);
  }
}