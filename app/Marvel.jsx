import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Video } from "expo-av";
import { Link } from "expo-router";

const Marvel = () => {

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Background Video */}
      <Video
        source={require("../assets/videos/Marvel_Intro.mp4")}
        style={styles.video}
        shouldPlay
        isLooping
        isMuted
      />

      <Text style={styles.titel}>Marvel Comics</Text>

      <View style={styles.flexboxPage}>

        <View style={styles.comicRow}>
          <Link href="/Marvel_Characters/Spiderman">
            <Image
              source={require("../assets/images/spiderman_comic.webp")}
              style={styles.comicCover}
            />
          </Link>
          <Text style={styles.comicText}>Spiderman</Text>

          <Link href="/Marvel_Characters/CaptainAmerica">
            <Image
              source={require("../assets/images/captainAmerica_comic.webp")}
              style={styles.comicCover}
            />
          </Link>
          <Text style={styles.comicText}>Captain America</Text>

          <Link href="/Marvel_Characters/IronMan">
            <Image
              source={require("../assets/images/ironman_comic.webp")}
              style={styles.comicCover}
            />
          </Link>
          <Text style={styles.comicText}>Iron Man</Text>
        </View>


        <View style={styles.comicRow}>
          <Link href="/Marvel_Characters/Thor">
            <Image
              source={require("../assets/images/thor_comic.webp")}
              style={styles.comicCover}
            />
          </Link>
          <Text style={styles.comicText}>Thor</Text>

          <Link href="/Marvel_Characters/Hulk">
            <Image
              source={require("../assets/images/incredible_hulk.webp")}
              style={styles.comicCover}
            />
          </Link>
          <Text style={styles.comicText}>Hulk</Text>

          <Link href="/Marvel_Characters/Wolverine">
            <Image
              source={require("../assets/images/wolverine_comic.webp")}
              style={styles.comicCover}
            />
          </Link>
          <Text style={styles.comicText}>Wolverine</Text>
        </View>
      </View>

      {/* Back to Home */}

      <Link href="/" style={styles.zueruckStartseite}>
        Zurück zur Startseite
      </Link>
    </ScrollView>
  );
};

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

export default Marvel;
