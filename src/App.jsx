import "./App.css";
// import React from "react";
import { BasicFM } from "./components/motion-components/basicFM";
import { Avatar, AvatarGroup, AvatarIcon } from "@nextui-org/avatar";
import { CircularProgress } from "@nextui-org/progress";

function App() {
  // const [value, setValue] = React.useState(0);

  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     setValue((v) => (v >= 100 ? 0 : v + 10));
  //   }, 500);

  //   return () => clearInterval(interval);
  // }, []);
  return (
    <>
      <AvatarGroup className="flex flex-col gap-2">
        <Avatar>
          <AvatarIcon />
        </Avatar>
        <Avatar>
          <AvatarIcon />
        </Avatar>
        <Avatar>
          <AvatarIcon />
        </Avatar>
      </AvatarGroup>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <h1 className="text-4xl font-bold underline">Hello world!</h1>
      <BasicFM />
      <CircularProgress
      label="Speed"
      size="lg"
      value={70}
      color="success"
      formatOptions={{ style: "unit", unit: "kilometer" }}
      showValueLabel={true}
    />
    </>
  );
}

export default App;
