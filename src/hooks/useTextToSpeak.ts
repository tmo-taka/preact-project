const options = {
    method: 'POST',
    headers: {
        accept: 'text/event-stream',
        'content-type': 'application/json',
        AUTHORIZATION: import.meta.env.VITE_PLAYHT_API_SECRET_KEY,
        'X-USER-ID': import.meta.env.VITE_PLAYHT_API_USER_ID

    },
    body: JSON.stringify({
        text: 'Hello',
        voice: 's3://voice-cloning-zero-shot/d9ff78ba-d016-47f6-b0ef-dd630f59414e/female-cs/manifest.json',
        output_format: 'mp3',
        voice_engine: 'PlayHT2.0'
    })
};

export const useTextToSpeak = (text:string) => {
    try {
        fetch('/playhtApi', options)
            .then(response => response.json())
            .then(response => console.log(response))
    } catch(e) {
        console.log(e);
    }
}