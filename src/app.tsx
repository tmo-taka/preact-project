import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import { useErrorBoundary } from "preact/hooks";
import { Suspense} from "preact/compat";
import { ToolTip } from './components/ToolTip'
import { Counter } from './components/Couter'
import { Form } from './components/Form'
import { Pokemon } from './components/Pokemon'
import './app.css'

export function App() {
  const [error] = useErrorBoundary(error => console.log(error));
  console.log(error);
  const PokemonCom = () => {
    return error ? <div>エラーですやん</div> : <Pokemon />
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
        <Suspense fallback={<div>Loading...</div>}>
          <PokemonCom />
        </Suspense>
      </div>
    </>
  )
}
