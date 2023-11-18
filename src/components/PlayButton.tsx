import useSound from 'use-sound';

type Props = {
    mp3Url: {
        value: string
    }
}

export const PlayButton: preact.FunctionComponent<Props>  = (props) => {
    const {mp3Url} = props;
    console.log(mp3Url.value);
    let audio = new Audio(mp3Url.value)
    // NOTE: useSound使えない
    // const [play] = useSound(mp3Url);
    const playAudio = () => {
        if(mp3Url) {
            console.log(mp3Url.value);
            audio.play();
        } else {
            alert('再生できるファイルがありません');
        }
    }
    return (
        <>
            <button onClick={() => playAudio()} class={`mainBtn ${Boolean(!mp3Url.value) && 'bg-un-active'}`} disabled={Boolean(!mp3Url.value)}>再生する</button>
        </>
    );
};