import Form from 'react-bootstrap/Form'
import { useState } from 'react'

const Checkboxes = ({ day }) => {
  const [date, setDate] = useState('')
  return (
        <div key='inline-checkbox' className="mb-3">
          <Form.Check style={{width: "5px", height: "5px"}} label={day} name="group1" type="checkbox" id={`inline-checkbox-1`} onChange={(e) => setDate(e.currentTarget.checked)}/>
        </div>
  )
}

export default Checkboxes
