import { Header } from "./components/header/Header";
import { Balance } from "./components/balance/Balance";
import { Summary } from "./components/summary/Summary";
import { History } from "./components/history/History";
import { AddTransaction } from "./components/addTransaction/AddTransaction";
import { Footer } from "./components/footer/Footer";

import './App.css';
import { GloablProvider } from "./hooks/GlobalProvider";

function App() {
  return (
    <GloablProvider>
      <Header></Header>
      <div className="container">
        <Balance></Balance>
        <Summary></Summary>
        <History></History>
        <AddTransaction></AddTransaction>
      </div>
      <Footer></Footer>
    </GloablProvider>
  );
}

export default App;
