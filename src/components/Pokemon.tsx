import { useState, useEffect } from "preact/hooks";

const Pokemon: preact.FunctionComponent = () => {
    console.log('読み込まれた')
    const [pokeImg, setPokeImg] = useState('');

    useEffect(() => {
        const fetchPoke = async() => {
            try {
                const data = await (await fetch('/pokeApi/151')).json();
                console.log(data);
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