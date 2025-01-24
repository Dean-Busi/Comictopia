import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Video } from "expo-av";
import { Link } from "expo-router";


const DC = () => {

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Background Video */}
      <Video
        source={require("../assets/videos/DC_Intro.mp4")}
        style={styles.video}
        shouldPlay
        isLooping
        isMuted
      />
      <Text style={styles.titel}>DC Comics</Text>

      <View style={styles.flexboxPage}>

        <View style={styles.comicRow}>
          <Link href="/DC_Characters/Superman">
            <Image
              source={require("../assets/images/superman_comic.webp")}
              style={styles.comicCover}
            />
          </Link>
          <Text style={styles.comicText}>Superman</Text>

          <Link href="/DC_Characters/Batman">
            <Image
              source={require("../assets/images/batman_comic.jpg")}
              style={styles.comicCover}
            />
          </Link>
          <Text style={styles.comicText}>Batman</Text>

          <Link href="/DC_Characters/WonderWoman">
            <Image
              source={require("../assets/images/wonderwoman_comic.webp")}
              style={styles.comicCover}
            />
          </Link>
          <Text style={styles.comicText}>Wonder Woman</Text>
        </View>

        {/* Lower Comics */}
        <View style={styles.comicRow}>
          <Link href="/DC_Characters/Flash">
            <Image
              source={require("../assets/images/flash_comic.webp")}
              style={styles.comicCover}
            />
          </Link>
          <Text style={styles.comicText}>The Flash</Text>

          <Link href="/DC_Characters/Aquaman">
            <Image
              source={require("../assets/images/aquaman.webp")}
              style={styles.comicCover}
            />
          </Link>
          <Text style={styles.comicText}>Aquaman</Text>

          <Link href="/DC_Characters/GreenLantern">
            <Image
              source={require("../assets/images/greenLantern_comic.webp")}
              style={styles.comicCover}
            />
          </Link>
          <Text style={styles.comicText}>Green Lantern</Text>
        </View>
      </View>

      {/* Back to Home */}
      <Link href="/" style={styles.zueruckStartseite}>
        Zurück zur Startseite
      </Link>
    </ScrollView>
  );
};

export default DC;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  video: {
    position: "absolute",
    top: 300,
    left: 0,
    right: 0,
    bottom: 0,
    transform: [{ scale: 1.5 }],
  },
  titel: {
    color: "white",
    fontSize: 38,
    fontWeight: 800,
    textAlign: "center",
    marginVertical: 20,
  },
  flexboxPage: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    gap: 45,
  },
  comicCover: {
    width: 100,
    height: 150,
    resizeMode: "contain",
    border: "solid",
    borderColor: "white",
    borderWidth: 3,
  },
  comicText: {
    color: "white",
    textAlign: "center",
    marginTop: 3,
    marginBottom: 25,
  },
  zueruckStartseite: {
    color: "red",
    fontSize: 24,
    marginBlock: 20,
    textDecorationLine: "underline",
  },
});
