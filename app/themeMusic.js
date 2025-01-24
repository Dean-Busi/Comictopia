import { Audio } from "expo-av";

export const loadAndPlaySound = async (themeSoundRef, setIsSoundPlaying) => {
  try {

    if (themeSoundRef.current) {
      const status = await themeSoundRef.current.getStatusAsync();
      if (status.isPlaying) return;
    }

    const { sound, status } = await Audio.Sound.createAsync(
      require("../assets/audio/superhero_theme.mp3")
    );

    if (status.isLoaded) {
      themeSoundRef.current = sound;
      await themeSoundRef.current.setIsLoopingAsync(true);
      await themeSoundRef.current.setVolumeAsync(0.5);
      await themeSoundRef.current.playAsync();

      setIsSoundPlaying(true);
      console.log("Audio started playing.");
    } else {
      console.error("Sound failed to load:", status.error);
    }
  } catch (error) {
    console.error("Error loading theme audio:", error);
  }
};
