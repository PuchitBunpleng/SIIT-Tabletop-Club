import { userID } from '$lib/store.js'
import api from '$lib/api.js'

export async function load({ params }) {
  try {
    const e_name = params.id
    let id = null
    userID.subscribe(val => { id = val })
    let member = (await api.get(`/member/${id}`)).data[0]
    let event = (await api.get(`/event/${e_name}`)).data[0]
    return { e_name , member,event}
  } catch (err) {
    console.log(err)
  }
}