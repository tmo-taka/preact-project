import { useState } from "preact/hooks";
import { useTextToSpeak } from "../hooks/useTextToSpeak"
import { useRecoilState } from "recoil";
import { mp3UrlState } from '../store/mp3Url';
import { PlayButton } from './PlayButton'

export const AudioForm = () => {
    const [inputText, setInputText] = useState('');
    const [mp3Url,setMp3Url] = useRecoilState(mp3UrlState);

    const setTextFromForm = (event) => {
        const inputValue = event.target.value;
        setInputText(inputValue);
    }

    const submitText = async() => {
        console.log(inputText);
        const audioUrl = await useTextToSpeak(inputText);
        setMp3Url(audioUrl);
    }
    return (
        <p>
            next url:https://play.ht/text-to-speech-api/
            <input type="text" value={inputText} onInput={setTextFromForm} onBlur={submitText}/>
            <PlayButton mp3Url={mp3Url} />
        </p>
    )
}