import useSound from 'use-sound';

type Props = {
    mp3Url: string
}

export const PlayButton: preact.FunctionComponent<Props>  = (props) => {
    const {mp3Url} = props;
    let audio = new Audio(mp3Url)
    // NOTE: useSound使えない
    // const [play] = useSound(mp3Url);
    const playAudio = () => {
        if(mp3Url) {
            console.log(mp3Url);
            audio.play();
        } else {
            alert('再生できるファイルがありません');
        }
    }
    return (
        <>
            <button onClick={() => playAudio()}>再生する</button>
        </>
    );
};