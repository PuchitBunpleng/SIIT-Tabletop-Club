import api from '$lib/api.js'

export async function load() {
  try {
    let data = (await api.get(`/boardgame`)).data
    console.log(data)
    return data
  } catch (err) {
    console.log(err.message)
  }
}