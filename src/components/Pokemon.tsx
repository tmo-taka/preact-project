import { useState, useEffect } from "preact/hooks";
import { useRecoilValue } from 'recoil';
import { randomIdState } from "../store/randomId";

const Pokemon: preact.FunctionComponent = () => {
    console.log('読み込まれた')
    const id = useRecoilValue(randomIdState)
    const [pokeImg, setPokeImg] = useState('');

    useEffect(() => {
        const fetchPoke = async() => {
            try {
                const apiUrl = `/pokeApi/${id}`;
                const data =  await (await fetch(apiUrl)).json();
                const { sprites } = data;
                const url = sprites.front_default;
                await setPokeImg(url);
                console.log(pokeImg);
            } catch(e) {
                throw e;
            }
        }
        fetchPoke();
    },[])

    return (
        <>
            <div>ポケモン</div>
            <div>
                <img src={pokeImg} alt="" />
            </div>
        </>
    );
};

export default Pokemon