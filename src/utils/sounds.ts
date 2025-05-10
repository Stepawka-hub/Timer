import defaultSoundUrl from "@sounds/default.mp3";
import helperSoundUrl from "@sounds/helper.m4a";
import spiteSoundUrl from "@sounds/spite.mp3";
import electroSoundUrl from "@sounds/electro.mp3";
import { TSound } from "@slices/types/types";

export const defaultSound = {
  id: 1,
  name: "Стандартный звук",
  link: defaultSoundUrl,
};

export const sounds: TSound[] = [
  defaultSound,
  {
    id: 2,
    name: "Подручный",
    link: helperSoundUrl,
  },
  {
    id: 3,
    name: "Недовольство",
    link: spiteSoundUrl,
  },
  {
    id: 4,
    name: "Электро",
    link: electroSoundUrl,
  },
];
