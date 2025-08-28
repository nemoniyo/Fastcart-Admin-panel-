import useDarkSide from '../config/useDarkMode';
import ThemeToggle from '../components/switch';

const LogIn = () => {
    const [, toggleTheme] = useDarkSide();

    return (
        <div>
            <h1>dsfuubckj</h1>
            <button onClick={  toggleTheme} className="m-[10px]">
                <ThemeToggle />
            </button>
        </div>
    );
};

export default LogIn;
