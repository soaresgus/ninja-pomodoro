interface props {
    toggleTheme: () => void;
}

export function ThemeButton({ toggleTheme }: props) {
    return (
        <button
            onClick={toggleTheme}
        >
            Trocar cor
        </button>
    )
}