import { userID } from '$lib/store.js'
import api from '$lib/api.js'

export async function load({ params }) {
  try {
    let id = ''
    userID.subscribe(val => { id = val })
    let member = (await api.get(`/member/${id}`)).data[0]
    let boardgame = (await api.get('/boardgame')).data
    let record = (await api.get(`/record/${params.rec_id}`)).data[0]
    return { member, boardgame, record }
  } catch (err) {
    console.log(err)
  }

}