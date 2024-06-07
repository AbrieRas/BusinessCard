import Header from "./Header";
import Summary from "./Summary";
import Footer from "./Footer";
import "./../styles/app.css";

const App = () => {
    return (
        <div className="app-container">
            <Header />
            <Summary />
            <Footer />
        </div>
    );
};

export default App;
