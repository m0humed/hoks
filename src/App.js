import './App.css';
import UseHocks from './UseHocks'
import Inp from './InputUseState'
import Form from './FormUseState'
import Challange from './StateChallange'
import ArrayState from './ArrayState';
import ArrayStateDel from './ArrayStateWithDelete';
import ArrayStateEdit from './ArrayStateWithEdit';
import UpdateArrayChallange from './UpdateArrayChallange'
import MultibaleRefresh from './RepeateRefersh'
import RepeateChallange from './RepeateChallange'
function App() {
  return (
    <div className="App">
      <div className='page'>
            <div class="item">
            <UseHocks />
            </div>
            <div class="item">
            <Inp />
            </div>
            <div class="item">
                  <Form />
                  </div>
            <div class="item">
                  <Challange />
            </div>

            <div class="item">
                  <ArrayState />
            </div>

            <div class="item">
                  <ArrayStateDel />
            </div>

            <div class="item">
                  <ArrayStateEdit />
            </div>  
            <div class="item">
                  <UpdateArrayChallange />
            </div>
            <div class="item">
                  <MultibaleRefresh />
            </div>
            <div class="item">
                  <RepeateChallange />
            </div>
      </div>
    </div>
  );
}

export default App;
