import { useState, useEffect } from "preact/hooks";
import { useRecoilValue } from 'recoil';
import { randomIdState } from "../store/randomId";

const Pokemon: preact.FunctionComponent = () => {
    console.log('読み込まれた')
    const id = useRecoilValue(randomIdState)
    const [pokeImg, setPokeImg] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchPoke = async() => {
            try {
                const apiUrl = `/pokeApi/${id}`;
                // throwする
                const data =  await (await fetch(apiUrl)).json();
                if( !data ) {throw new Error('error')}
                const { sprites } = data;
                const url = sprites.front_default;
                await setPokeImg(url);
                console.log(pokeImg);
            } catch(e) {
                setError(true);
            }
        }
        fetchPoke();
    },[])

    if(error) {throw new Error('エラーです')}

    return (
        <div>
            <img src={pokeImg} alt="" />
        </div>
    );
};

export default Pokemon