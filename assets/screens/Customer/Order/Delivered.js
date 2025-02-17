import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const Delivered = () => {
  const handleGiveFeedback = () => {
    // Logic to handle feedback submission goes here
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.deliveredText}>Delivered!</Text>
        <Text style={styles.enjoyText}>Enjoy your order</Text>
        <Image
          source={require("C:/Users/hp/FoodFleet/assets/screens/EveryImages/Food.png")}
          style={styles.deliveryImage}
        />
      </View>
      <TouchableOpacity
        style={styles.feedbackButton}
        onPress={handleGiveFeedback}
      >
        <Text style={styles.feedbackButtonText}>Give Feedback</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
  },
  card: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    backgroundColor: "white",
  },
  deliveredText: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  enjoyText: {
    fontSize: 18,
    color: "grey",
    marginBottom: 20,
  },
  deliveryImage: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  feedbackButton: {
    backgroundColor: "#FFD700",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginTop: 20,
  },
  feedbackButtonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});

export default Delivered;
