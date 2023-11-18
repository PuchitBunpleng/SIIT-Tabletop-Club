import { writable } from "svelte/store"
import { browser } from "$app/environment"

export const userID = writable(browser && (localStorage.getItem('userID') || ''))
userID.subscribe(val => browser && localStorage.setItem('userID', val))