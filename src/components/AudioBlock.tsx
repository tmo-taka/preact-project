import { useEffect, useContext } from "preact/hooks";
import { useTextToSpeak } from "../hooks/useTextToSpeak"
import { PlayButton } from './PlayButton'
import { Suspense } from 'preact/compat';
import { InputJapaneseForm } from "./InputJapaneseForm";
import { DisplayText } from './DisplayText'
import { AppState } from '../store/app'

export const AudioBlock = () => {
    const state = useContext(AppState);

    useEffect(() => {
        if(state.englishText.value){
            getMp3url();
        }
    },[state.englishText.value])

    const getMp3url = async() => {
        const audioUrl = await useTextToSpeak(state.englishText.value);
        state.mp3Url.value = audioUrl;
    }

    return (
        <div class="w-96">
            <InputJapaneseForm />
            <div class="flex w-full">
                <div class="basis-2/3">
                    <DisplayText />
                </div>
                <div class="basis-1/3">
                    <Suspense fallback={<div>loading...</div>}>
                        <PlayButton />
                    </Suspense>
                </div>
            </div>
        </div>
    )
}