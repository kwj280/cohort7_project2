import { TitleOutlined } from '@mui/icons-material'
import axios from 'axios'
import {useState} from 'react'

const JobForm = () => {
  //Declaring use state variables for every field in the table
  const [Title, setTitle] = useState("")
  const [Description, setDescription] = useState("")
  const [Skills, setSkills] = useState("")
  const [Company, setCompany] = useState("")
  const [Availability, setAvailability] = useState("")
  const [ExpiryDate, setExpiryDate] = useState("")
  const [link, setlink] = useState("")

 // Function to perform when text box is used
    const onInputUpdate = (event, setter)=> {
      let updatedValue = event.target.value
      setter(updatedValue)
    }

  // Post data to the following endpoint '/job/submit' using axios instead of fetch
    const SubmitData = (event) => {
    event.preventDefault()
    axios.post('/job/submit', {
      Title, Description, Skills, Company, Availability, ExpiryDate, link
    }).then(function(response) {
      console.log(response.data);
    })
  }

  return (
    <div>
    <div>
      <label>Title
      <input value={Title} onChange={(event) => onInputUpdate(event,setTitle)}/>
      </label>
    </div>
    <div>
      <label>Description
      <input value={Description} onChange={(event) => onInputUpdate(event,setDescription)}/>
      </label>
    </div> 
    <div>
      <label>Skills
        <input value={Skills} onChange={(event) => onInputUpdate(event,setSkills)}/> 
      </label>
    </div>
    <div>
      <label>Company
      <input value={Company} onChange={(event) => onInputUpdate(event,setCompany)}/>
      </label>
    </div>
    <div>
      <label>Availability
        <input value={Availability} onChange={(event) => onInputUpdate(event, setAvailability)}/>
      </label>
    </div>
    <div>
      <label>Expiry date
      <input value={ExpiryDate} onChange={(event) => onInputUpdate(event, setExpiryDate)}/>
      </label>
    </div>
    <div>
      <label>Link
      <input value={link} onChange={(event) => onInputUpdate(event, setlink)}/>
      </label>
    </div>
    <div>
    <button onClick={SubmitData}>Submit Job</button>
    </div>
  </div>
  )
}




export default JobForm 
