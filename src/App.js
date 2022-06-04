import './App.css';
import { initializeApp } from "firebase/app";
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

function App() {
const firebaseConfig = {
  apiKey: "AIzaSyD1y35OtY2qKnFkIvsw65-5qauwg99epk8",
  authDomain: "balancedeating-d8748.firebaseapp.com",
  databaseURL: "https://balancedeating-d8748-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "balancedeating-d8748",
  storageBucket: "balancedeating-d8748.appspot.com",
  messagingSenderId: "400326472639",
  appId: "1:400326472639:web:8fbfa8a9cae2118d99670a"
};
const app = initializeApp(firebaseConfig);


  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
