import { userID } from '$lib/store.js'
import api from '$lib/api.js'

export async function load() {
  try {
    let id = null
    userID.subscribe(val => { id = val })
    let data = (await api.get(`/member/${id}`)).data[0]
    console.log(data)
    return data
  } catch (err) {
    console.log(err.message)
  }
}