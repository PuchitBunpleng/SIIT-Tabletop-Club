import api from '$lib/api.js'
import { userID } from '$lib/store.js'

export async function load({ params }) {
  try {
    const r_id = params.r_id
    let id = ''
    userID.subscribe(val => { id = val })
    const member = (await api.get(`/member/${id}`)).data[0]
    const boardgame = (await api.get('/boardgame')).data
    const reservation = (await api.get(`/reservation/${r_id}`)).data[0]
    return { r_id, member, boardgame, reservation }
  } catch (err) {
    console.log(err)
  }
}