import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Video, Audio } from "expo-av";
import { Link } from "expo-router";
import { useRouter } from "expo-router";
import ShakePhoneSound from "../shakePhone";

const api = axios.create({ baseURL: "http://localhost:5063" });

const SupermanPage = () => {
  const [rating, setRating] = useState(null);
  const [submitMessage, setSubmitMessage] = useState("");
  const router = useRouter();

  const handlePress = (value) => {
    setRating(value);
  };

  ShakePhoneSound();

  const handleSubmit = async () => {
    if (rating === null) {
      setSubmitMessage("Bitte eine Bewertung abgeben.");
      return;
    }

    try {
      // Sende die Bewertung an den Server
      const response = await api.post(`/api/bewertung/${1}`, { rating });
      if (response.status === 200) {
        setSubmitMessage("Bewertung erfolgreich abgegeben!");
        router.push("/DC");
      }
    } catch (error) {
      setSubmitMessage("Fehler beim Absenden der Bewertung.");
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Video Background */}
      <Video
        source={require("../../assets/videos/hintergrundVideo_character.mp4")}
        style={styles.video}
        resizeMode="cover"
        shouldPlay
        isLooping
        isMuted
      />

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Superman</Text>

        <View style={styles.flexRow}>
          <View style={styles.textBox}>
            <Text style={styles.description}>
              <View style={styles.superheroFlexbox}>
                <Image
                  source={require("../../assets/images/DC_Characters/superMan.png")}
                  style={styles.characterImage}
                />
                <Text style={styles.ersterAuftritt}>Erster Auftritt: 1938</Text>
                <Image
                  source={require("../../assets/images/DC_Characters/superMan_liveAction.png")}
                  style={styles.liveActionImage}
                />
              </View>
              {"\n"}
              Superman stammt vom Planeten Krypton und wurde als Baby zur Erde
              geschickt, kurz bevor sein Heimatplanet zerstört wurde. Auf der
              Erde wurde er von Martha und Jonathan Kent in Smallville, Kansas,
              aufgezogen. Dank der Energie der Erde und ihrer gelben Sonne
              entwickelte er übermenschliche Kräfte wie überlegene Stärke,
              Fliegen, Hitzeblick und Unverwundbarkeit. Superman nutzt seine
              Kräfte, um die Menschheit zu schützen und für Gerechtigkeit zu
              kämpfen, während er im normalen Leben als Reporter für den "Daily
              Planet" in Metropolis arbeitet.
            </Text>
          </View>
        </View>

        {/* Rating Section--------------------------------------- */}
        <Text style={styles.subHeading}>
          Wieviele Punkte gibst du diesem Charakter?
        </Text>

        <View style={styles.ratingContainer}>
          {[1, 2, 3, 4, 5].map((starValue) => (
            <TouchableOpacity
              key={starValue}
              onPress={() => handlePress(starValue)}
            >
              <Image
                source={require("../../assets/images/stern1.png")}
                style={
                  starValue <= rating ? styles.starSelected : styles.starNormal
                }
              />
            </TouchableOpacity>
          ))}
        </View>

        {/* Submit Button */}
        <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Absenden</Text>
        </TouchableOpacity>

        {/* Submission Status Message */}
        {submitMessage && (
          <Text style={styles.submitMessage}>{submitMessage}</Text>
        )}

        {/* Back Button */}
        <Link href="/DC" style={styles.backButton}>
          Zurück zu DC Comics
        </Link>

        {/* ------------------------------------------------- */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  video: {
    position: "absolute",
    width: "100%",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  ersterAuftritt: {
    color: "white",
    fontSize: 18,
  },
  superheroFlexbox: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 20,
  },
  content: {
    padding: 20,
  },
  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  characterImage: {
    width: 100,
    height: 140,
    resizeMode: "contain",
  },
  liveActionImage: {
    width: 120,
    height: 140,
    resizeMode: "contain",
  },
  textBox: {
    flex: 1,
    marginHorizontal: 10,
  },
  description: {
    color: "white",
    fontSize: 16,
  },
  subHeading: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 20,
    textAlign: "center",
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  starNormal: {
    width: 40,
    height: 40,
    marginHorizontal: 5,
    tintColor: "gray",
  },
  starSelected: {
    width: 40,
    height: 40,
    marginHorizontal: 5,
    tintColor: "gold",
  },
  submitButton: {
    backgroundColor: "blue",
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
  submitButtonText: {
    color: "white",
    textAlign: "center",
  },
  submitMessage: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
  },
  backButton: {
    color: "red",
    fontSize: 18,
    textAlign: "center",
    marginTop: 30,
    textDecorationLine: "underline",
  },
});

export default SupermanPage;
