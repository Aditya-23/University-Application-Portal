import React from 'react';
import { useEffect } from "react";

export default function FaceRecognition(props) {
  var faceio;
  useEffect(() => {
    faceio = new faceIO("fioacd1c");
  }, [])

  const handleSignIn = async () => {
    try {
      let response = await faceio.enroll({
        locale: "auto",
        payload: {
          email: props.email,
          pin: props.pin
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
      
      <button onClick={() => handleSignIn()}>Sign-in</button>
      <button onClick={() => handleLogIn()}>Log-in</button>
    </section>
  );
}
