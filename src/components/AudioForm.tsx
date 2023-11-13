import { useState } from "preact/hooks";
import { useTextToSpeak } from "../hooks/useTextToSpeak"
import { useRecoilState } from "recoil";
import { mp3UrlState } from '../store/mp3Url';
import { PlayButton } from './PlayButton'
import { Suspense } from 'preact/compat';

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
        <div class="flex">
            <div class="grid grid-flow-col justify-stretch space-x-4 w-64">
                <input type="text" value={inputText} onInput={setTextFromForm} onBlur={submitText} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
            </div>
            <Suspense fallback={<div>loading...</div>}>
                <PlayButton mp3Url={mp3Url} />
            </Suspense>
        </div>
    )
}