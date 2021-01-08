import Taro, { InnerAudioContext } from "@tarojs/taro";
import angryAudio from "../assets/angry.mp3";
import peaceAudio from "../assets/peace.mp3";

const audioMap = {
  angryAudio,
  peaceAudio
};

type Key = keyof typeof audioMap;

export const audioUtil = (types: Key[]) => {
  const result: InnerAudioContext[] = [];

  types.forEach(item => {
    if (audioMap[item]) {
      const audio = Taro.createInnerAudioContext();
      audio.src = audioMap[item];
      result.push(audio);
    }
  });

  return result;
};
