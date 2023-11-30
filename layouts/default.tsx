export const DefaultLayout = ({children}) =>{
    return (
        <div>
            <header class="bg-accent w-full py-4 px-6">
                <div class="text-white text-xl font-bold">
                    英語翻訳サイト
                </div>
            </header>
            <main class="h-screen flex items-center justify-center">
                {children}
            </main>
            <footer class="bg-accent text-center w-full">
                <small class="text-white text-xs">copyright</small>
            </footer>
        </div>
    )
}