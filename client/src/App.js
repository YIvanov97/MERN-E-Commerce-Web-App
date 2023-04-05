import { Route, Routes } from "react-router-dom";
import { FormProvider } from "./contexts/form.context";
import Authentication from "./routes/authentication/authentication.component";
import HomePage from "./routes/home/home-page.component";
import Navigation from "./routes/navigation/navigation.component";
import ShopPage from "./routes/shop/shop.component";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<HomePage />}/>
                <Route path="auth" element={
                    <FormProvider>
                        <Authentication />
                    </FormProvider>
                }/>
                <Route path="shop" element={<ShopPage />}/>
            </Route>
        </Routes>
    );
}

export default App;
