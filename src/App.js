//import logo from './logo.svg';
import './App.css';
import { 
  Meds 
} from './ui-components';
import { 
  NavBar 
} from './ui-components';
import { 
  Footer 
} from './ui-components';


function App() {
  return (
    <div className="App">
      <NavBar width={"100%"} />
        <header className="App-header">
          <Meds 
            overrideItems={({item,index}) => ({
              overrides : {
                Button29766759 : {
                  onClick : () => alert(`${item.id}`),
                },

              },
            })}
          />
        </header>
      <Footer width={"100%"} />
    </div>
  );
}

export default App;
