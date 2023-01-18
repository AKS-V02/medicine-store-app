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
import { DataStore } from '@aws-amplify/datastore';
import { Medicine } from './models';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';





function App({user, signOut}) {
  const [showForm, setShowForm] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [medicine, setMedicine] = useState();
  const [updateMedicine, setupdateMedicine] = useState();
  const [stock, setStock] = useState(true);
  const [stockValue, setStockValue] = useState();
  const [updateButton, setUpdateButton] = useState(false);
  async function updateStock(medicineId, newValue){
    const original = await DataStore.query(Medicine, medicineId);
    await DataStore.save(Medicine.copyOf(original, item=>{
      item.stripStock = newValue;
    }));
    const newMedicine = await DataStore.query(Medicine, medicineId);
    setMedicine(newMedicine);
    setUpdateButton(false);
  }
  async function userSignOut(){
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('error signing out: ', error);
    }
  };
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
        setShowDetails(false);
        setupdateMedicine();
      },
    },
    "Button" : {
      onClick : () => {
        userSignOut();
      },
    },
    "image" : {
      src : user?.attributes?.profile,
    },
    "User Name":{
      children : user?.attributes?.name,
    },
  };
  const madicineDetailsComOverride = {
    "close":{
      style : {
        cursor : "pointer",
      },
      onClick : () => {
        setShowDetails(false);
      }
    },
    "Button" : {
      isDisabled : updateButton,
      onClick : () => {
        setupdateMedicine(medicine);
        setShowForm(true); 
        setShowDetails(false);
      } 
    },
    "TextField" : {
      style : {
        textAlign : "right"
      },
      isDisabled : stock,
      onChange : (item) => {
        setStockValue(parseInt(item.target.value));
      }
    },
    "Edit" : {
      style : {
        cursor : "pointer",
      },
      onClick : () => {
        setStock(false);
      }
    },
    "Save":{
      style : {
        cursor : "pointer",
      },
      onClick : () => {
        setStock(true);
        setUpdateButton(true);
        updateStock(medicine.id, stockValue);
      }
    }

 }
  return (
    <div className="App">
      <NavBar width={"100%"} overrides={navBarOverride}/>
        <header className="App-header" >
          {showDetails && 
            <MedicineDetails medicine={medicine}
            style={{
              margin : "1rem",
            }}
            overrides={madicineDetailsComOverride}
          />
          }
          {showForm && (
             <MedicineForm medicine={updateMedicine}
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
                  },
                  'Button29766926' : {
                    isDisabled : updateMedicine ? false : true
                  },
                  'Button36782759' : {
                    isDisabled : updateMedicine ? true : false
                  }
                }

                }
           />
          )}
          {!(showForm || showDetails) && (
            <Meds 
            overrideItems={({item,index}) => ({
              overrides : {
                Button29766759 : {
                  onClick : () => {
                    setShowDetails(true);
                    setShowForm(false);
                    setMedicine(item);
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

export default withAuthenticator(App);
