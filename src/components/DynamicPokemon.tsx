import { useState, useEffect, useErrorBoundary } from "preact/hooks";
import { Suspense, lazy} from "preact/compat";
import { useRecoilState} from 'recoil';
import { randomIdState } from '../store/randomId';

const Pokemon = lazy(() => import('./Pokemon'));

export const DynamicPokemon: preact.FunctionComponent = () => {
    const [displayPokemon , setDisplayPokemon] = useState(false);
    const [randomId, setRandomId] = useRecoilState(randomIdState);

    const createRandomId = () => {
        const randomNumber = Math.floor( Math.random() * 152 );
        setRandomId(randomNumber);
    }

    const clickPokemon = () =>{
        setDisplayPokemon(true);
        createRandomId();
    }

    useEffect(() => {
        if(displayPokemon){
            setTimeout(() => {
                setDisplayPokemon(false)
            }, 5000);
        }
    },[displayPokemon])

    const JudgePokemon = () => {
        if(displayPokemon) {
            return (
                <Suspense fallback={<div>Loading...</div>}>
                    <Pokemon />
                </Suspense>
            )
        } else {
            return ( <div>ポケモン表示しないよ！</div> )
        }
    }

    return (
        <>
            <button onClick={() => clickPokemon()}>ポケモンを表示する</button>
            <JudgePokemon />
        </>
    )
}