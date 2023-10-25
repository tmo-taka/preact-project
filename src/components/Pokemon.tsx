import { useState, useEffect } from "preact/hooks";

export const Pokemon: preact.FunctionComponent = () => {
    const [pokeImg, setPokeImg] = useState('');

    useEffect(() => {
        const fetchPoke = async() => {
            try {
                const data = await (await fetch('/pokeApi/1')).json();
                console.log(data);
                const { sprites } = data;
                const url = sprites.front_default;
                await setTimeout(async() => {
                    await setPokeImg(url);
                }, 5000);
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