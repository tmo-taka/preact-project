import { useState, useEffect } from "preact/hooks";


export const Pokemon: preact.FunctionComponent = () => {
    const [ability, setAbility] = useState([]);

    useEffect(() => {
        const fetchPoke = async() => {
            const data = await (await fetch('/pokeApi/1')).json();
            console.log(data);
            const { abilities }:[] = data;
            console.log(abilities)
            await setAbility([...ability, ...abilities]);
            console.log(ability);
        }
        fetchPoke();
    },[])

    return (
        <>
            <div>ポケモン</div>
        </>
    );
};