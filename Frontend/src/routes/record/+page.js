import { userID } from '$lib/store.js'
import api from '$lib/api.js'

export async function load() {
  try {
    let id = ''
    userID.subscribe(val => { id = val })
    let member = (await api.get(`/member/${id}`)).data[0]
    let record = (await api.get(`/record/member/${id}`)).data
    return { member, record }
  } catch (err) {
    console.log(err)
  }

}