import {Routes, Route} from 'react-router-dom'
import './App.css'
import HomePage from "./pages/HomePage.jsx";
import Layout from "./components/Layout.jsx";
import PostsPage from "./pages/PostsPage.jsx";
import FormsPage from "./pages/FormsPage.jsx";

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path='forms' element={<FormsPage />} />
                    <Route path='posts' element={<PostsPage />} />

                    <Route path='*' element={<h1>Страница не найдено</h1>}/>
                </Route>

            </Routes>
        </>

    )
}

export default App
