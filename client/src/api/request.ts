export const request = (url: string, method: string, body?: string) => {
    return fetch(url,
        { method,
            headers: {  'Content-Type': 'application/json'},
            body})
        .then(r => r.json())
        .catch(e => console.error(e));
}