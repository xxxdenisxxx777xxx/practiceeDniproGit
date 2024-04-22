import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import DeputatsPage from "../DeputatsPage"
import AdminPage from "../pages/admin/AdminPage"
import SecurityPage from "../pages/admin/SecurityPage"
import Note from "../pages/admin/Note"

const AppRoute = () => {

    return (
        <Routes>
            <Route path="/" index element={<HomePage />} />
            <Route path="/infodep/:id" element={<DeputatsPage />} />
            <Route path="/Admin" element={<AdminPage />} />
            <Route path="/Admin/Security" element={<SecurityPage />} />
            <Route path="/Admin/Note" element={<Note />} />

        </Routes>
    )
}
export default AppRoute;
