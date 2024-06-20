import {useEffect} from "react"
import {useState} from "react"

export default function SelectedContact({selectedContactId, setSelectedContactId}){

const fetchContactData = () =>{
    fetch(`https://jsonplaceholder.typicode.com/users/${selectedContactId}`)
    .then(response => response.json())
    .then(data =>{
        console.log(data)
    })
}

    const [contact,setContact] = useState(null)
    useEffect(()=>{
        fetchContactData()
    },[])
    
    function useForceUpdate (){
        return ()=>setSelectedContactId(selectedContactId => selectedContactId + 1)
}
}