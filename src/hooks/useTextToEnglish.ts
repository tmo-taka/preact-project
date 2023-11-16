import axios from 'axios'
import oauth from 'axios-oauth-client'

const getClientCredentials = oauth.clientCredentials(
    axios.create(),
    '/translateApi/oauth2/token.php',
    import.meta.env.VITE_TRANSLATION_API_KEY,
    import.meta.env.VITE_TRANSLATION_API_SECRET_KEY,
);

const auth = await getClientCredentials();

const createParams = (text:string) => {
    const params = {
        access_token: auth.access_token,
        key: import.meta.env.VITE_TRANSLATION_API_KEY,
        name: import.meta.env.VITE_TRANSLATION_USER_ID,
        type: 'json',
        text
    }
    return params
};

export const useTextToEnglish = async(text:string) => {

    try {
        const searchParams = new URLSearchParams();
        const params = createParams(text)
        for (let key in params) {
            searchParams.append(key, params[key]);
        }
        const res = await axios.post('/translateApi/api/mt/generalNT_ja_en/', searchParams);
        const enText:string = res.data.resultset.result.text;
        return enText;
    } catch (e) {
        console.log(e)
    }
}