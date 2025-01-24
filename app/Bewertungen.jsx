import React, { useState, useEffect } from "react";
import axios from "axios";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Link } from "expo-router";

const Bewertungen = () => {
  const [aggregatedRatings, setAggregatedRatings] = useState([]);

  const api = axios.create({ baseURL: "http://localhost:5063" });

  useEffect(() => {
    const getBewertungen = async () => {
      try {
        const response = await api.get("api/bewertung");
        console.log("response.data: ", response.data);

        const aggregated = response.data.reduce((acc, curr) => {
          if (acc[curr.superheld.name]) {
            acc[curr.superheld.name] += curr.rating;
          } else {
            acc[curr.superheld.name] = curr.rating;
          }
          return acc;
        }, {});

        const aggregatedArray = Object.entries(aggregated).map(
          ([superheld, totalRating]) => ({
            superheld,
            totalRating,
          })
        );

        setAggregatedRatings(aggregatedArray);
        console.log("Aggregated Ratings: ", aggregatedArray);
      } catch (error) {
        console.log("error: ", error);
      }
    };

    getBewertungen();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Bewertungen</Text>
      <Text style={styles.title}>Welcher Superheld ist am beliebtesten?</Text>

      {aggregatedRatings.map((item, index) => (
        <View key={index}>
          <Text style={styles.text}>
            {item.superheld}: {item.totalRating}
          </Text>
        </View>
      ))}

      <View style={styles.rahmen}>
        <Text style={styles.infoText}>
          Info am Dozent: Hier würde ein GET-Request an die Datenbank geschickt und die
          Superhelden und Bewertungen wie folgt aufgelistet:
        </Text>

        <Text style={styles.textBewertungen}>
          Superman: 89
          {"\n"}
          Batman: 141
          {"\n"}
          Iron Man: 60
          {"\n"}
          Spider-Man: 132
          {"\n"}
          etc...
        </Text>
      </View>

      <Link href="/" style={styles.backButton}>
        Zurück zur Startseite
      </Link>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    paddingInline: 40,
    backgroundColor: "black",
  },
  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  text: {
    paddingBlock: 5,
    color: "white",
    fontSize: 25,
  },
  infoText: {
    paddingBlock: 5,
    color: "red",
    fontSize: 18,
  },
  textBewertungen: {
    paddingBlock: 5,
    color: "green",
    fontSize: 25,
  },
  backButton: {
    display: "flex",
    justifyContent: "center",
    paddingBlock: 15,
    color: "white",
    fontSize: 25,
    textDecorationLine: "underline",
  },
  rahmen:{
    border: "solid",
    borderWidth: 5,
    borderColor: "white",
    paddingBlock: 5,
    paddingInline: 10,
    borderRadius: 20,
  }
});

export default Bewertungen;
