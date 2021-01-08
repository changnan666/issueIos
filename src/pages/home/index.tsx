import { View, Button } from "@tarojs/components";
import React from "react";
import { audioUtil } from "../utils/audio";

const [peace] = audioUtil(["peaceAudio"]);

const App = () => {
  return (
    <View>
      <Button onClick={() => peace.play()}>播放</Button>
    </View>
  );
};

export default App;
