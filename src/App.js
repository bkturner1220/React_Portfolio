import { useState, Suspense } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { darkTheme } from "./assets/theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import LoaderContext from "./contexts/loaderContext";

function App() {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <Router>
            <Suspense fallback={<div></div>}>
                    <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
                        <ThemeProvider theme={darkTheme}>
                            <CssBaseline />
                            <ScrollToTop />
                            <Routes />
                        </ThemeProvider>
                    </LoaderContext.Provider>
            </Suspense>
        </Router>
    );
}

export default App;
