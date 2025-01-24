import React, { useState } from "react";
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
import styles from "../heldenPageStyles";

const api = axios.create({ baseURL: "http://localhost:5063" });

const WolverinePage = () => {
  const [rating, setRating] = useState(null);
  const [submitMessage, setSubmitMessage] = useState("");
  const router = useRouter();

  const handlePress = (value) => {
    setRating(value); // Direkt den Wert setzen
  };

  const handleSubmit = async () => {
    if (rating === null) {
      setSubmitMessage("Bitte eine Bewertung abgeben.");
      return;
    }

    try {
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
        <Text style={styles.title}>Wolverine</Text>

        <View style={styles.flexRow}>
          <View style={styles.textBox}>
            <Text style={styles.description}>
              <View style={styles.superheroFlexbox}>
                <Image
                  source={require("../../assets/images/Marvel_Characters/wolverine.png")}
                  style={styles.characterImage}
                />
                <Text style={styles.ersterAuftritt}>Erster Auftritt: 1974</Text>
                <Image
                  source={require("../../assets/images/Marvel_Characters/wolverine_liveAction.webp")}
                  style={styles.liveActionImage}
                />
              </View>
              {"\n"}
              Wolverine, alias Logan, ist ein Marvel-Superheld und Mutant mit
              außergewöhnlichen Heilkräften, verstärkten Sinnen und
              ausfahrbaren, adamantiumverstärkten Klauen. Als Mitglied der X-Men
              kämpft er gegen Vorurteile und für die Rechte von Mutanten. Sein
              gewalttätiges, aber edles Wesen spiegelt seine lange und oft
              schmerzhafte Vergangenheit wider, die ihn durch Kriege,
              Experimente und Verluste geprägt hat. Trotz seiner Härte ist
              Wolverine ein loyaler und unermüdlicher Kämpfer für das Gute.
            </Text>
          </View>
        </View>

        {/* Rating Section */}
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
        <Link href="/Marvel" style={styles.backButton}>
          Zurück zu Marvel Comics
        </Link>
      </View>
    </ScrollView>
  );
};

export default WolverinePage;
