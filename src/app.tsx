import { AudioBlock } from './components/AudioBlock'
import { RecoilRoot} from 'recoil';
import { createAppContext, AppState }from './store/app';
import './app.css'

export function App() {
    return (
        <>
            <AppState.Provider value={createAppContext()}>
                <RecoilRoot>
                    <AudioBlock />
                </RecoilRoot>
            </AppState.Provider>
        </>
    )
}
