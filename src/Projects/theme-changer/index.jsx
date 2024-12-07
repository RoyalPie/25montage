import './theme.css'
import useLocalStorage from './useLocalStorage'
const ThemeToggle = () => {
    const [theme, setTheme] = useLocalStorage('theme', 'dark')
    
    function handleToggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
  return (
    <div className="theme-toggle" data-theme={theme}>
      <div className="theme-container">
        <p>You`re in the {theme === "light" ? "LIGHT" : "DARK"}</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
}

export default ThemeToggle
