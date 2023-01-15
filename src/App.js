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
  const footerOverride ={
    'Rectangle 738' : {
      width : "100%"
    },
  };
  const navBarOverride ={
    "Add Medicine" : {
      style : {
        cursor : "pointer",
      },
      onClick : () => {
        alert("hellow");
      },
    },
  };
  return (
    <div className="App">
      <NavBar width={"100%"} overrides={navBarOverride}/>
        <header className="App-header" >
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
        <Footer width={"100%"} 
          overrides={footerOverride
            /*{'Rectangle 738': {
             width : "100%",
          },}*/
        }
        />
    </div>
  );
}

export default App;
