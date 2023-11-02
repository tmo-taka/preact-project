import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import { ToolTip } from './components/ToolTip'
import { Counter } from './components/Couter'
import { Form } from './components/Form'
import { DynamicPokemon } from './components/DynamicPokemon'
import { MemoDemo } from './components/MemoDemo'
import { RecoilRoot} from 'recoil';
import './app.css'

export function App() {
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
        <RecoilRoot>
          <DynamicPokemon />
        </RecoilRoot>
        <MemoDemo />
      </div>
    </>
  )
}
