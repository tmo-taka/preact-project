export const Loading: preact.FunctionComponent = () => {
    return (
        <div class="flex justify-center" aria-label="読み込み中">
            <div class="animate-ping h-4 w-4 bg-accent rounded-full"></div>
            <div class="animate-ping h-4 w-4 bg-accent rounded-full mx-8"></div>
            <div class="animate-ping h-4 w-4 bg-accent rounded-full"></div>
        </div>
    )
}