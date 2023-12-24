import { useGlobalContext } from "../context"
import { FaMoon, FaSun } from "react-icons/fa"

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext()
  // console.log(isDarkTheme, toggleDarkTheme)
  return (
    <div className="toggle-container">
      <button onClick={toggleDarkTheme} className="dark-toggle">
        {isDarkTheme ? (
          <FaSun className="toggle-icon" />
        ) : (
          <FaMoon className="toggle-icon" />
        )}
      </button>
    </div>
  )
}
export default ThemeToggle
