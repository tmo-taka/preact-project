import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import { useState, useErrorBoundary } from "preact/hooks";
import { Suspense, lazy} from "preact/compat";
import { ToolTip } from './components/ToolTip'
import { Counter } from './components/Couter'
import { Form } from './components/Form'
import './app.css'

export function App() {
  // const [error] = useErrorBoundary(error => console.log(error));
  // console.log(error);
  // const PokemonCom = () => {
  //   return error ? <div>エラーですやん</div> : <Pokemon />
  // }
  const [displayPokemon , setDisplayPokemon] = useState(false);

  const Pokemon = lazy(() => import('./components/Pokemon'));

  const DynamicPokemon = () =>{
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Pokemon />
      </Suspense>
    )
  }

  const clickPokemon = () =>{
    setDisplayPokemon(true);
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1>Vite + Preact</h1>
      <div class="card">
        <ToolTip buttonText='このボタンにホバーしてね！' hiddenText='OKです！'/>
        <Counter/>
        <Form/>
        <div>
          <button onClick={() => clickPokemon()}>ポケモンを表示する</button>
          {displayPokemon  ? <DynamicPokemon />  : <div>ポケモン表示しないよ！</div>}
        </div>
      </div>
    </>
  )
}
