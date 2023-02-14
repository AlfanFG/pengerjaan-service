import axios from "axios"

export const getServicesData = async () => {
   return axios.get(process.env.NEXT_PUBLIC_API_HOST + `/services`).then((res) => {
    return res.data.data
   }).catch((e)=> {
    return console.error(e)
   })
}