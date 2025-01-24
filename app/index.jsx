import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Video } from "expo-av";
import { Link } from "expo-router";
import { loadAndPlaySound } from "./themeMusic";

const Startseite = () => {
  const themeSoundRef = useRef(null);
  const [isSoundPlaying, setIsSoundPlaying] = useState(false);
  const soundPlayedRef = useRef(false);

  useEffect(() => {
    if (!soundPlayedRef.current) {
      loadAndPlaySound(themeSoundRef, setIsSoundPlaying, isSoundPlaying);
      soundPlayedRef.current = true;
    }

    return () => {
      if (themeSoundRef.current) {
        themeSoundRef.current.unloadAsync().catch((error) => console.error("Error unloading audio:", error));
        setIsSoundPlaying(false);
      }
    };
  }, []);

  return (
    <View style={styles.container}>
      
      {/* Background Video */}
      <Video
        source={require("../assets/videos/flammen_Hintergrund2.mp4")}
        style={styles.video}
        resizeMode="cover"
        shouldPlay
        isLooping
        isMuted
      />

      <Text style={styles.welcomeText}>Comictopia</Text>

      <Text style={styles.subHeading}>
        Welche Comic-Charaktere möchtest du anschauen?
      </Text>

      <View style={styles.flexboxLogos}>
        {/* Marvel Logo */}
        <Link href="/Marvel">
          <Image
            source={require("../assets/images/Marvel_Logo.jpg")}
            style={styles.marvelLogo}
          />
        </Link>

        {/* DC Logo */}
        <Link href="/DC">
          <Image
            source={require("../assets/images/DC_Comics_logo.png")}
            style={styles.dcLogo}
          />
        </Link>
      </View>

      <Link href="/Bewertungen" style={styles.bewertungenButton}>
        Siehe alle Bewertungen
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    transform: [{ scale: 1.4 }],
  },
  welcomeText: {
    color: "white",
    fontSize: 52,
    fontFamily: "monaco",
    fontWeight: 800,
    textAlign: "center",
  },
  subHeading: {
    color: "white",
    fontSize: 24,
    fontWeight: 400,
    marginTop: 20,
    textAlign: "center",
  },
  flexboxLogos: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    paddingBlock: 30,
  },
  marvelLogo: {
    width: 240,
    height: 180,
    resizeMode: "contain",
  },
  dcLogo: {
    width: 180,
    height: 160,
    resizeMode: "contain",
  },
  bewertungenButton: {
    color: "white",
    backgroundColor: "black",
    paddingBlock: 5,
    paddingInline: 8,
    borderRadius: 8,
    fontSize: 24,
    border: "solid",
    borderWidth: 5,
    borderColor: "white",
    textAlign: "center",
    marginTop: 30,
  },
});

export default Startseite;
