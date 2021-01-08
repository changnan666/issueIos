import { View, Button } from "@tarojs/components";
import React from "react";
import { audioUtil } from "../utils/audio";
// eslint-disable-next-line import/first
import Taro from "@tarojs/taro";

const [angry] = audioUtil(["angryAudio"]);

const App = () => {
  return (
    <View>
      <Button onClick={() => angry.play()}>播放</Button>
      <Button onClick={() => Taro.navigateTo({ url: "/pages/home/index" })}>
        前往home页面
      </Button>
    </View>
  );
};

export default App;
