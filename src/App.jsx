import "./App.css";
import { BasicFM } from "./components/motion-components/basicFM";
import { Avatar, AvatarGroup, AvatarIcon } from "@nextui-org/avatar";

function App() {
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
    </>
  );
}

export default App;
