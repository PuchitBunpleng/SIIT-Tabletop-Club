import { error } from '@sveltejs/kit'
import { userID } from "$lib/store.js"
import axios from 'axios'
import { goto } from '$app/navigation'

export function load() {
  try {
    axios
      .post(`http://localhost:3000/logout`)
      .then(res => {
        userID.set('')
        goto('/')
      })
      .catch(err => {
        console.log(err)
      })
  } catch (err) {
    throw error(404, 'Not found');
  }
}