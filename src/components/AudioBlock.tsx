import { useState } from "preact/hooks";
import { useTextToSpeak } from "../hooks/useTextToSpeak"
import { useRecoilState, useRecoilValue } from "recoil";
import { mp3UrlState } from '../store/mp3Url';
import { englishTextState } from '../store/englishText';
import { PlayButton } from './PlayButton'
import { Suspense } from 'preact/compat';
import { InputJapaneseForm } from "./InputJapaneseForm";
import { DisplayText } from './DisplayText'

export const AudioBlock = () => {
    const [inputText, setInputText] = useState('');
    const [mp3Url,setMp3Url] = useRecoilState(mp3UrlState);
    const englishText = useRecoilValue(englishTextState);

    const getMp3url = async() => {
        const audioUrl = await useTextToSpeak(inputText);
        setMp3Url(audioUrl);
    }

    return (
        <div class="flex flex-wrap">
            <InputJapaneseForm />
            <DisplayText englishText={englishText} />
            <Suspense fallback={<div>loading...</div>}>
                <PlayButton mp3Url={mp3Url} />
            </Suspense>
        </div>
    )
}