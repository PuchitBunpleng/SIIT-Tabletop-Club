import { userID } from '$lib/store.js'
import api from '$lib/api.js'

export async function load() {
  let id = ''
  userID.subscribe(val => { id = val })
  console.log(id)
  let member = (await api.get(`/member/${id}`)).data[0]
  let reservation = (await api.get(`/reservation/member/${id}`)).data
  console.log(reservation)
  return {member, reservation}
}