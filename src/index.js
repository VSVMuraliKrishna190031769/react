import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Home from './pages/Home';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}
                 >
                    <Route index element={<Home  />} />
                    <Route path="blogs" element={<Blogs />} />
                    <Route path="contact" element={<Contact />} />
                    </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('root'));
