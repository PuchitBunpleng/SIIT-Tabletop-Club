import api from '$lib/api.js'

export async function load({ params }) {
  try {
    const std_id = params.id
    const member = (await api.get(`/member/${std_id}`)).data[0]
    return { std_id, member}
  } catch (err) {
    console.log(err)
  }
}