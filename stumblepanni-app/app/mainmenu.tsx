import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Feather from "@expo/vector-icons/Feather";
import { Colors } from "../constants/Colors";

const assets = {
  Background: require("../assets/images/Skyline/Ella.jpg"),
  MenuImage: require("../assets/images/Skyline/Kandy.jpg"),
  Logo: require("../assets/images/Logo/logo.png"),
  LogoName: require("../assets/images/Logo/logo-name.png"),
};

const { width, height } = Dimensions.get("window");

const Index = () => {
  const router = useRouter();

  const navigateToVisa = () => {
    router.push("/(visa)");
  };
  const navigateToCurrentTrip = () => {
    router.push("/maintenance");
  };
  const navigateToQuests = () => {
    router.push("/maintenance");
  };
  const navigateToPlan = () => {
    router.push("/maintenance");
  };
  const navigateToUpcoming = () => {
    router.push("/maintenance");
  };
  const openPersonas = () => {
    router.push("/maintenance");
  };
  const currentDate = new Date();
  const month = currentDate.toLocaleString("en-US", { month: "short" });
  const day = currentDate.getDate();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={assets.Background}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <LinearGradient
          colors={["rgba(255, 255, 255, 0)", "rgba(0, 0, 0, 1)"]}
          style={styles.gradient}
        >
          <View style={styles.viewL32}>
            <Image
              source={assets.LogoName}
              style={[styles.logoName]}
              resizeMode="contain"
            />
          </View>
          <View style={styles.viewL48}>
            <View style={styles.viewLS}>
              <TouchableOpacity
                style={[styles.menu, styles.menuDropShadow]}
                onPress={navigateToCurrentTrip}
              >
                <ImageBackground
                  source={assets.MenuImage}
                  resizeMode="cover"
                  style={styles.menuImage}
                >
                  <View style={styles.desti}>
                    <View style={[styles.container, styles.date]}>
                      <Text style={styles.dateText}>{day}</Text>
                      <Text style={styles.dateText}>{month}</Text>
                    </View>
                    <View style={[styles.locationView, styles.location]}>
                      <Ionicons
                        name="location-outline"
                        style={styles.dateText}
                      />
                      <Text style={styles.dateText}>Kandy</Text>
                    </View>

                    <Text style={styles.buttonText}>Continue Your Journey</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </View>
            <View style={styles.viewLS}>
              <View style={[{ width: "100%", height: "100%" }, styles.grid]}>
                <View style={styles.btn}>
                  <TouchableOpacity
                    style={styles.btnTouch}
                    onPress={navigateToUpcoming}
                  >
                    <View style={styles.container}>
                      <View style={styles.locationView}>
                        <AntDesign name="calendar" style={styles.icon} />
                        <Text style={styles.iconText}>Upcoming Trips</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.btn}>
                  <TouchableOpacity
                    style={styles.btnTouch}
                    onPress={navigateToPlan}
                  >
                    <View style={styles.container}>
                      <View style={styles.locationView}>
                        <FontAwesome6 name="pencil" style={styles.icon} />
                        <Text style={styles.iconText}>Plan New Trip</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.btn}>
                  <TouchableOpacity
                    style={styles.btnTouch}
                    onPress={navigateToVisa}
                  >
                    <View style={styles.container}>
                      <View style={styles.locationView}>
                        <SimpleLineIcons name="plane" style={styles.icon} />
                        <Text style={styles.iconText}>Apply Visa</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.btn}>
                  <TouchableOpacity
                    style={styles.btnTouch}
                    onPress={navigateToQuests}
                  >
                    <View style={styles.container}>
                      <View style={styles.locationView}>
                        <Feather name="map" style={styles.icon} />
                        <Text style={styles.iconText}>My Quests</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.viewS}>
            <TouchableOpacity onPress={navigateToVisa}>
              <View style={styles.touchPersona}>
                <Ionicons name="alert-circle-outline" size={34} color="white" />
                <View style={styles.touchPersonaInside}></View>
              </View>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#008080", // Teal color
    paddingHorizontal: 50,
    paddingVertical: 20,
    borderRadius: 10, // Rounded corners
  },
  btn: {
    width: "50%",
    height: "50%",
    maxHeight: 70,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderRadius: 50,
  },
  btnTouch: {
    borderRadius: 50,
    borderColor: "white",
    borderWidth: 1,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    width: "100%",
    height: "100%",
  },
  backgroundImage: {
    width: width, // Full screen width
    height: height, // Full screen height
    position: "absolute",
    bottom: 0,
  },
  buttonText: {
    fontFamily: "JosefinSansLight",
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
  },
  menu: {
    // backgroundColor: "#f4511e", // Teal color
    // paddingHorizontal: 50,
    height: "100%",
    width: "100%",
    borderRadius: 10, // Rounded corners
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.6)",
  },
  gradient: {
    flex: 1,
  },
  logoName: {
    position: "absolute",
    width: width,
    height: height * 0.05,
    top: "30%",
    left: 0,
    bottom: "20%",
    right: 0,
  },
  viewL: {
    height: height * 0.4,
    position: "relative",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  viewL32: {
    height: height * 0.30,
    position: "relative",
    flex: 1,
    flexGrow: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  viewL48: {
    height: height * 0.48,
    position: "relative",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  viewLS: {
    height: "50%",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  viewS: {
    height: height * 0.2,
    flex: 1,
    maxHeight: 100,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  date: {
    position: "absolute",
    top: 0,
    right: 0,
    padding: 10,
  },
  location: {
    position: "absolute",
    top: 0,
    left: 0,
    padding: 10,
  },
  locationView: {
    flexDirection: "row",
    gap: 10,
    // height: 10,
    paddingVertical: 15,
    alignItems: "center",
  },
  dateText: {
    fontSize: 16,
    lineHeight: 20,
    color: "white",
    fontWeight: "bold",
  },
  desti: {
    // backgroundColor: "rgba(255, 0, 0, 0.5)",
    borderRadius: 10,
    width: "100%",
    // height: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  menuImage: {
    width: "100%",
    height: "100%",
  },
  icon: {
    fontSize: 16,
    color: "white",
  },
  iconText: {
    fontSize: 13,
    color: "white",
    fontFamily: "JosefinSansMedium",
    verticalAlign: "bottom",
  },
  touchPersona: {
    backgroundColor: Colors.pallete.accent,
    // padding: 10,
    borderRadius: 100,
    width: 50,
    height: 50,
    marginBottom: 20,
    shadowColor: "white",
    shadowRadius: 20,
    shadowOpacity: 0.2,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  touchPersonaInside: {
    backgroundColor: Colors.pallete.accent,
    borderRadius: 100,
    width: 10,
    height: 15,
    position: "absolute",
    top: 15,
  },
  menuDropShadow: {
    shadowColor: "black",
    shadowRadius: 30,
    shadowOpacity: 0.8,
    elevation: 20,
  },
});

export default Index;
