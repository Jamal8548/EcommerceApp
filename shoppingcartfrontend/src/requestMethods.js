import axios from "axios";

const BASE_URL = "https://jamalecomm.herokuapp.com/api/";
const TOKEN1 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODUwNTIzMWI4ZjYzMjFlMTVkNTZmMCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTI4ODQ3ODUsImV4cCI6MTY1MzE0Mzk4NX0.A856WuTsN8wAiUos2uXOVh2njd6FkKoZDr8QM4qhjdE"
const TOKEN2 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODc1NjMzZDRjMmQ0MDE5YTU0YmU2MCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTMwMzY2MDksImV4cCI6MTY1MzI5NTgwOX0.OTO4mNStQ_uKcgzfuGJFOTS2tSpUgEB2Snk-NZNRsg8"
export const publicRequest = axios.create({
    baseURL:BASE_URL,
})

export const userRequest = axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN1}`}
})

export const jamalRequest = axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN2}`}
})
