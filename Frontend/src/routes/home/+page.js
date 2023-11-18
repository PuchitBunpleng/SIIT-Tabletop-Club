import { error } from '@sveltejs/kit'
import { userID } from '$lib/store.js'
import axios from 'axios'

export async function load() {
  try {
    let id = ''
    userID.subscribe(val => { id = val })
    let data = (await axios.get(`http://localhost:3000/member/${id}`)).data[0]
    return data
  } catch (err) {
    throw error(500, err);
  }
}