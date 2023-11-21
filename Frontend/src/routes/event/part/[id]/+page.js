import { userID } from '$lib/store.js'
import api from '$lib/api.js'

export async function load({ params }) {
  try {
    const e_name = params.id
    let id = null
    userID.subscribe(val => { id = val })
    let member = (await api.get(`/member/${id}`)).data[0]
    let event = (await api.get(`/event/${e_name}`)).data[0]
    let memberall = (await api.get(`/member`)).data
    let personall = (await api.get(`/person`)).data
    let participate = (await api.get(`/participate/event/${e_name}`)).data
    let publicparticipate = (await api.get(`/public/event/${e_name}`)).data
    return { e_name ,event, member,memberall,publicparticipate,participate,personall}
  } catch (err) {
    console.log(err)
  }
}