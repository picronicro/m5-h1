import React from "react";
import Layout from "./components/Layout";
import {Route, Routes} from "react-router-dom";
import PostsPage from "./pages/PostsPage";
import FormPage from "./pages/FormPage";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<PostsPage />} />
                    <Route path="form" element={<FormPage />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
