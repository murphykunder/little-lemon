import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { ReserveTablePage } from "./ReserveTablePage";
import { About } from "./About";
import { Contact } from "./Contact";
import { Menu } from "./Menu";

export const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/menu" element={<Menu />}></Route>
                <Route path="/reserve-table" element={<ReserveTablePage />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
            </Routes>
        </main>
    );
}