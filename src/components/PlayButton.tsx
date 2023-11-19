import { useContext } from "preact/hooks";
import { AppState } from '../store/app'

export const PlayButton: preact.FunctionComponent = () => {
    const state = useContext(AppState);
    console.log(state.mp3Url.value);
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