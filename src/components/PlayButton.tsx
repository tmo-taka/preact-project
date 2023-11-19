import { useEffect, useContext } from "preact/hooks";
import { useTextToSpeak } from "../hooks/useTextToSpeak"
import { AppState } from '../store/app'

export const PlayButton: preact.FunctionComponent = () => {
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

    let audio = new Audio(state.mp3Url.value)
    // NOTE: useSound使えない
    // const [play] = useSound(mp3Url);
    const playAudio = () => {
        if(state.mp3Url.value) {
            console.log(state.mp3Url.value);
            audio.play();
        } else {
            alert('再生できるファイルがありません');
        }
    }
    return (
        <>
            <button onClick={() => playAudio()} class={`mainBtn ${Boolean(!state.mp3Url.value) && 'bg-un-active'}`} disabled={Boolean(!state.mp3Url.value)}>再生する</button>
        </>
    );
};