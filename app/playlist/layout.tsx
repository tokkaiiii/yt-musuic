export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <header>
                <div>
                    <h1>Clone YT Music</h1>
                </div>
            </header>
            {children}
        </div>
    )
    
}