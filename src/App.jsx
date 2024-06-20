import "./App.css";
import { useState } from "react";
import ContactList from "./components/contactlist";
import SelectedContact from "./components/selectedContact";


export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  
function useForceUpdate (){
  return ()=>setSelectedContactId(selectedContactId => selectedContactId + 1)
}

  return (
     <div>
   <ContactList setSelectedContactId={setSelectedContactId} />
      {selectedContactId && (
        <SelectedContact
          selectedContactId={selectedContactId}
          setSelectedContactId={setSelectedContactId} />
      )}

      <button onClick={useForceUpdate()}>re-render</button>
</div>
    )
}
