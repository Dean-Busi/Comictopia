import { StyleSheet } from "react-native";

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

export default styles;  // Move export here
