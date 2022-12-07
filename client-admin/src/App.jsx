import { useEffect } from "react";
import "./App.css";
function App() {

  var faceio;
  useEffect(() => {
    faceio = new faceIO("fioacd1c");
  }, [])

  const handleSignIn = async () => {
    try {
      let response = await faceio.enroll({
        locale: "auto",
        payload: {
          email: "swapnil0926@gmail.com",
        },
      });

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogIn = async () => {
    try {
      let response = await faceio.authenticate({
        locale: "auto",
      });

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <h1>Face Authentication by FaceIO</h1>
      <button onClick={() => handleSignIn()}>Sign-in</button>
      <button onClick={() => handleLogIn()}>Log-in</button>
    </section>
  );
}

export default App;