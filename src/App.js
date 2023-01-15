//import logo from './logo.svg';
import { useState } from 'react';
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
import { 
  MedicineForm 
} from './ui-components';
import { 
  MedicineDetails 
} from './ui-components';


function App() {
  const [showForm, setShowForm] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [medicine, setMedicine] = useState();
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
        setShowForm(true);
      },
    },
  };
  return (
    <div className="App">
      <NavBar width={"100%"} overrides={navBarOverride}/>
        <header className="App-header" >
          {showDetails && 
            <MedicineDetails Medicine={medicine}
            style={{
              margin : "1rem",
            }}
            overrides={{"close":{
              style : {
                cursor : "pointer",
              },
              onClick : () => {
                setShowDetails(false);
              }
            }}
          }/>
          }
          {showForm && (
             <MedicineForm 
                style={{
                  textAlign : "left",
                  margin : "1rem",
                }} 
                overrides ={
                    {'Icon' : {
                      style : {
                        cursor : "pointer",
                      },
                      onClick : ()=>{
                        setShowForm(false);
                      }
                  }}
                }
           />
          )}
          {!showForm && (
            <Meds 
            overrideItems={({item,index}) => ({
              overrides : {
                Button29766759 : {
                  onClick : () => {
                    setShowDetails(true);
                    setMedicine(item.Medicine);
                  },
                },

              },
            })}
          />
          )}
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
