import { AudioForm } from './components/AudioForm'
import { RecoilRoot} from 'recoil';
import './app.css'

export function App() {
    return (
        <>
            <div>
                <RecoilRoot>
                    <AudioForm />
                </RecoilRoot>
            </div>
        </>
    )
}
