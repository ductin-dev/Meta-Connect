import { BrowserRouter, Routes, Route } from "react-router-dom";

import Transaction from "../../container/Wallet/Transaction";
import ViewWallet from "../../container/Wallet/ViewWallet";
import Connect from "../../container/Connect/Connect";
import About from "../../container/Common/About";
import NotFound from "../../container/Common/_404";

import Header from "../../components/layouts/Header";
import Footer from "../../components/layouts/Footer";

const Router = () => (
  <BrowserRouter>
    <Header />
    <div style={{ height: 480 }}>
      <Routes>
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/search-wallet" element={<ViewWallet />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Connect />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    <Footer />
  </BrowserRouter>
);

export default Router;
