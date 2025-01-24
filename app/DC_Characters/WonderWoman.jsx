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

const WonderWomanPage = () => {
  const [rating, setRating] = useState(null);
  const [submitMessage, setSubmitMessage] = useState("");
  const router = useRouter();

  const handlePress = (value) => {
    setRating(value);
  };

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
        <Text style={styles.title}>Wonder Woman</Text>

        <View style={styles.flexRow}>
          <View style={styles.textBox}>
            <Text style={styles.description}>
              <View style={styles.superheroFlexbox}>
                <Image
                  source={require("../../assets/images/DC_Characters/wonderWoman.png")}
                  style={styles.characterImage}
                />
                <Text style={styles.ersterAuftritt}>Erster Auftritt: 1941</Text>
                <Image
                  source={require("../../assets/images/DC_Characters/wonderWoman_liveAction.webp")}
                  style={styles.liveActionImage}
                />
              </View>
              {"\n"}
              Wonder Woman, auch bekannt als Diana Prince, ist eine Amazone,
              einer Kriegerinnenrasse, die auf der versteckten Insel Themyscira
              lebt. Sie wurde von der griechischen Göttin Hippolyta aus Lehm
              geformt und von den Göttern mit übermenschlichen Kräften,
              Unsterblichkeit und Waffen wie dem Lasso der Wahrheit und den
              unzerstörbaren Armbändern ausgestattet. Als Botschafterin der
              Amazonen verlässt sie ihre Insel, um die Welt der Menschen vor
              Bedrohungen zu schützen und für Frieden und Gerechtigkeit zu
              kämpfen. In der modernen Welt agiert sie oft unter dem Decknamen
              Diana Prince.
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
        <Link href="/DC" style={styles.backButton}>
          Zurück zu DC Comics
        </Link>
      </View>
    </ScrollView>
  );
};

export default WonderWomanPage;
