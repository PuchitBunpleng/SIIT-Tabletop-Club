import { error } from '@sveltejs/kit'
import { userID } from '$lib/store.js'
import api from '$lib/api.js'

export async function load() {
    try {
      let id = null
      userID.subscribe(val => { id = val })
      let member = (await api.get(`/member/${id}`)).data
      let memberall = (await api.get(`/member`)).data
      let membername = (await api.get(`/member/${id}`)).data[0]
      return {member,membername,memberall}
    } catch (err) {
      throw error(500, err.message);
    }
  }