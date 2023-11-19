import { AudioBlock } from './components/AudioBlock'
import { createAppContext, AppState }from './store/app';
import './app.css'

export function App() {
    return (
        <>
            <AppState.Provider value={createAppContext()}>
                <AudioBlock />
            </AppState.Provider>
        </>
    )
}
