import { error } from '@sveltejs/kit'
import { userID } from "$lib/store.js"
import axios from 'axios'

export function load() {
    try {
        //  axios.get(`http://localhost:3000/member/${userID}`)
        // return {
        //     title: 'Hello world!',
        //     content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
        // }
        console.log(userID)
    } catch (err) {
        throw error(404, 'Not found');
    }
}