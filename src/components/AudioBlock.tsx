import { useEffect } from "preact/hooks";
import { useTextToSpeak } from "../hooks/useTextToSpeak"
import { useRecoilState, useRecoilValue } from "recoil";
import { mp3UrlState } from '../store/mp3Url';
import { englishTextState } from '../store/englishText';
import { PlayButton } from './PlayButton'
import { Suspense } from 'preact/compat';
import { InputJapaneseForm } from "./InputJapaneseForm";
import { DisplayText } from './DisplayText'

export const AudioBlock = () => {
    const [mp3Url,setMp3Url] = useRecoilState(mp3UrlState);
    const englishText = useRecoilValue(englishTextState);

    useEffect(() => {
        if(englishText){
            getMp3url();
        }
    },[englishText])

    const getMp3url = async() => {
        const audioUrl = await useTextToSpeak(englishText);
        setMp3Url(audioUrl);
    }

    return (
        <div class="w-96">
            <InputJapaneseForm />
            <div class="flex w-full">
                <div class="basis-2/3">
                    <DisplayText englishText={englishText} />
                </div>
                <div class="basis-1/3">
                    <Suspense fallback={<div>loading...</div>}>
                        <PlayButton mp3Url={mp3Url} />
                    </Suspense>
                </div>
            </div>
        </div>
    )
}