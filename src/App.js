import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function App() {
  return (
    <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-lg-12">
            <div className="row g-2">
                <div className="col col-10 col-lg-10"><label class="form-label"></label>
                    <input type="text" className="form-control"/>

                </div>
                <div className="col col-6 col-lg-6">
                    <input type="button" value="search" class="btn btn-success"/>
                </div>
            </div>
        </div>
    </div>
</div>
  
  );
}

export default App;
