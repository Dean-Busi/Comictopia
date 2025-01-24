import { useEffect, useState } from "react";
import { Audio } from "expo-av";
import { DeviceMotion } from "expo-sensors";

const useShakePhoneSound = () => {
  const [sound, setSound] = useState(null);
  const SHAKE_THRESHOLD = 3.0;
  const SHAKE_COUNT_THRESHOLD = 2;

  let lastAcceleration = { x: 0, y: 0, z: 0 };
  let shakeCount = 0;
  let isCooldown = false;

  useEffect(() => {
    const loadSound = async () => {
      const { sound } = await Audio.Sound.createAsync(
        require("../assets/audio/Character_SoundFX/Superman_Sound.mp3")
      );
      setSound(sound);
    };

    loadSound();

    const subscription = DeviceMotion.addListener((motionData) => {
      const acceleration = motionData?.accelerationIncludingGravity;
      if (acceleration && detectShake(acceleration)) {
        playSound();
      }
    });

    DeviceMotion.setUpdateInterval(100);

    return () => {
      subscription.remove();
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  const detectShake = (acceleration) => {
    const deltaX = Math.abs(acceleration.x - lastAcceleration.x);
    const deltaY = Math.abs(acceleration.y - lastAcceleration.y);
    const deltaZ = Math.abs(acceleration.z - lastAcceleration.z);

    lastAcceleration = acceleration;

    const totalChange = deltaX + deltaY + deltaZ;

    if (totalChange > SHAKE_THRESHOLD) {
      shakeCount += 1;
      if (shakeCount >= SHAKE_COUNT_THRESHOLD) {
        shakeCount = 0;
        return true;
      }
    } else {
      shakeCount = 0;
    }

    return false;
  };

  const playSound = async () => {
    if (isCooldown || !sound) return;

    try {
      isCooldown = true;
      await sound.replayAsync();
      setTimeout(() => {
        isCooldown = false;
      }, 1000);
    } catch (error) {
      console.error("Error playing sound:", error);
    }
  };
};

export default useShakePhoneSound;
