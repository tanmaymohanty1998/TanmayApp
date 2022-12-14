import logo from './logo.svg';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import '../node_modules/datatables/media/css/jquery.dataTables.min.css';
import '../node_modules/datatables/media/js/jquery.dataTables.min.js'
import './App.css';
import Dashboard from './component/Dashboard';
import Popup from './common/Popup';
import DataTable from './component/DataTable';
import OuicQuort from './component/OuicQuort';
import AccordianTest from './component/AccordianTest';
import MoreInfo from './component/MoreInfo';
import CustomerDetails from './component/CustomerDetails';
import Miscellaneous from './component/Miscellaneous';
import Payment from './component/Payment';
function App() {
  return (
    <>
        {/* <Dashboard/> */}
        {/* <DataTable/> */}
        {/* <OuicQuort /> */}
        {/* <Popup /> */}
        {/* <CustomerDetails /> */}
        {/* <Miscellaneous/>*/}
        <Payment/>
        {/*<AccordianTest/>*/}
        {/* <MoreInfo/>*/}



    </>
  );
}

export default App;
