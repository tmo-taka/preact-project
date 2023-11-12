const postOptions = {
    method: 'POST',
    headers: {
        accept: 'text/event-stream',
        'content-type': 'application/json',
        AUTHORIZATION: import.meta.env.VITE_PLAYHT_API_SECRET_KEY,
        'X-USER-ID': import.meta.env.VITE_PLAYHT_API_USER_ID

    },
    body: JSON.stringify({
        text: 'Hello I am money.',
        voice: 's3://mockingbird-prod/abigail_vo_6661b91f-4012-44e3-ad12-589fbdee9948/voices/speaker/manifest.json',
        output_format: 'mp3',
        voice_engine: 'PlayHT2.0'
    })
};

export const useTextToSpeak = async(text:string) => {

    try {
        const res = await fetch('/playhtApi', postOptions);
        const decoder = new TextDecoder();

        if(res.body) {
            const streamRead = res.body.getReader();
            const read = async () => {
                const { done, value } = await streamRead.read();
                if (done) {
                    return;
                }
                const decodeData: string = decoder.decode(value);
                if(decodeData.includes('completed')){
                    const stringifyData = JSON.stringify(decodeData);
                    // NOTE: mp3のURLを取得する .mp3のlengthに合わせて+4
                    const url = stringifyData.substring(stringifyData.indexOf('https'), (stringifyData.indexOf('.mp3') + 4))
                    return url;
                }
                return read();
            };
            const audioUrl = await read();
            return audioUrl;
        }
    } catch (e) {
        console.log(e)
    }
}