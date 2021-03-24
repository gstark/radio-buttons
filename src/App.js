import React, { useState } from 'react'

const App = () => {
  const [details, setDetails] = useState({})

  // Store the value of which radio button was selected
  //
  // This works since if the input doesn't handle the event it "bubbles"
  // up the DOM to it's parent and it's grandparent, etc.
  //
  // But the `event.target` is still the thing that was clicked!
  // so we can still get it's value. Handy.
  const onChange = (event) => {
    setDetails({ ...details, [event.target.name]: event.target.value })
  }

  return (
    <main>
      <p>Group One: {details.group1}</p>
      <p>Group Two: {details.group2}</p>

      <ul onChange={onChange}>
        <li>
          <input type="radio" name="group1" value="one" /> One
        </li>
        <li>
          <input type="radio" name="group1" value="two" />
          Two
        </li>
        <li>
          <input type="radio" name="group1" value="three" />
          Three
        </li>
      </ul>

      <ul onChange={onChange}>
        <li>
          <input type="radio" name="group2" value="red" />
          Red
        </li>
        <li>
          <input type="radio" name="group2" value="green" />
          Green
        </li>
        <li>
          <input type="radio" name="group2" value="blue" />
          Blue
        </li>
      </ul>
    </main>
  )
}

export default App
