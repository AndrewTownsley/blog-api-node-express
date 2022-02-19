
export const checkResStatus = (res) => {
    if(res.ok) {
        return res
    } else {
        throw new Error(`The HTTP Status of the response: ${res.status} (${res.statusText})`)
    }
}