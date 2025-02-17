import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const MembershipPayment = () => {
  const handleStartMembership = () => {
    // Logic to start membership goes here
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Membership</Text>

      <TouchableOpacity style={styles.paymentMethod}>
        <Image
          source={require("C:/Users/hp/FoodFleet/assets/screens/EveryImages/MasterCard.png")} // Replace with your actual MasterCard icon path
          style={styles.cardIcon}
        />
        <Text style={styles.cardText}>MasterCard 1234</Text>
        <Image
          source={require("C:/Users/hp/FoodFleet/assets/screens/EveryImages/RightChevron.png")} // Replace with your actual chevron right icon path
          style={styles.chevronIcon}
        />
      </TouchableOpacity>

      <Text style={styles.priceDetail}>$10 Per month</Text>
      <Text style={styles.startDate}>Start Date: 04/04/2024</Text>

      <TouchableOpacity
        style={styles.startButton}
        onPress={handleStartMembership}
      >
        <Text style={styles.startButtonText}>Start</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    padding: 20,
    textAlign: "center",
    backgroundColor: "#f0f0f0",
  },
  paymentMethod: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  cardIcon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  cardText: {
    flex: 1,
    fontSize: 18,
    marginLeft: 10,
  },
  chevronIcon: {
    width: 15,
    height: 15,
    resizeMode: "contain",
  },
  priceDetail: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
  startDate: {
    fontSize: 16,
    color: "grey",
    textAlign: "center",
    marginBottom: 20,
  },
  startButton: {
    backgroundColor: "#FFD700",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginHorizontal: 50,
    alignItems: "center",
    marginTop: 10,
  },
  startButtonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});

export default MembershipPayment;
