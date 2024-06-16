import React, { useState } from 'react';
import Chat from './Chat';
import Card from './Card';
function App() {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState('');
  const [submit , set_submit] = useState(false) ; 

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = () => {
    set_submit(true) ; 
  };

   // for this perticular use case i am inputing the username 
   // and hardcoding the room id but we will supply the actuall 
   // username and id toh instantiate chat  

  return (
    <>
    <div class = "flex w-[100vw] h-[100vh] justify-center items-center ">
    <Card w= "90vw" h="90vh" >


    {
      submit ? <Chat username = {username} id = {"hi"} /> : (<>
      <Card w= ""><input
        placeholder="Enter your username"
        value={username}
        onChange={handleUsernameChange}
      />
      <button className = "bg-[green] rounded-lg" onClick={handleSubmit}>Submit</button>
      </Card>
      </>
      )
    }
    </Card>
    </div>

    </>
  );
}

export default App;