import { headers } from "next/dist/client/components/headers"

export default async function GetData() {
    let raw_response = await fetch("https://api.github.com/users/navithecoderboi",{ headers: { Authorization: `Bearer ${process.env.access_token}`}})
    if (raw_response.status!=200) {
        return "Error while fetching data..."
    }
    let json = await raw_response.json()
    return json
}