const postOptions = {
    method: 'POST',
    headers: {
        accept: 'text/event-stream',
        'content-type': 'application/json',
        AUTHORIZATION: import.meta.env.VITE_PLAYHT_API_SECRET_KEY,
        'X-USER-ID': import.meta.env.VITE_PLAYHT_API_USER_ID

    },
    body: JSON.stringify({
        text: 'Hello',
        voice: 's3://mockingbird-prod/abigail_vo_6661b91f-4012-44e3-ad12-589fbdee9948/voices/speaker/manifest.json',
        output_format: 'mp3',
        voice_engine: 'PlayHT2.0'
    })
};

const getOptions = {
    method: 'GET',
    headers: {
        accept: 'text/event-stream',
        AUTHORIZATION: import.meta.env.VITE_PLAYHT_API_SECRET_KEY,
        'X-USER-ID': import.meta.env.VITE_PLAYHT_API_USER_ID

    },
};

export const useTextToSpeak = async(text:string) => {
    try {
        const res = await fetch('/playhtApi', postOptions);
        // 自動でContent-LocationでリダイレクトするとproxyできないのでこちらでGET処理をする
        let url = await res.headers.get('Content-Location');
        if(url) {
            url = url.replace('https://api.play.ht/api/v2/tts','/playhtApi')
            const resp = await fetch(url, getOptions);
            console.log(resp);
        }
    } catch (e) {
        console.log(e)
    }
        // .then(response => {
        //     if(response.headers.get('Content-Location') != null) {
        //         url = response.headers.get('Content-Location');
        //     }
        // })
}