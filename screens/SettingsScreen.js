import React from "react";
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from "react-native";

export function SettingsScreen({ route, navigation }) {
  function handleHomePress() {
    navigation.navigate("Home");
  }
  return (

    <View style={styles.screen}>


      <View style={styles.container}>
        <Text style={styles.subtitle}>Prve postave</Text>
        {/* Flexbox layout */}
      <View style={styles.jumbotron}>
{/* LIJEVI KONTEJNER */}
        <View style={styles.container}>
        <View style={styles.gameResultWrapper}>
        <Text style={styles.names}>11 </Text>
        <Image
            source={{
              uri:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/1200px-Flag_of_Croatia.svg.png",
            }}
            style={{ width: 15, height: 10 }}
          />
        <Text style={styles.names}> Brozovic M. </Text>
          </View>
        </View>
{/* DESNI KONTEJNER */}
        <View style={styles.container}>

        </View>
      </View>
        <View style={styles.gameResultWrapper}>
        <Text style={styles.names}>(Mostovoy A.) Bakaev Z. </Text>
        <Image
            source={{
              uri:
                "https://m.media-amazon.com/images/I/51KfJKnnrJL._AC_SX466_.jpg",
            }}
            style={{ width: 15, height: 10 }}
          />
          <Text style={styles.names}> 10</Text>
        </View>
        
        <Text style={styles.subtitle}>Zamjene</Text>
        <View style={styles.jumbotron}>
{/* LIJEVI KONTEJNER */}
        <View style={styles.container}>
        <View style={styles.gameResultWrapper}>
        <Text style={styles.names}>3 </Text>
        <Image
            source={{
              uri:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/1200px-Flag_of_Croatia.svg.png",
            }}
            style={{ width: 15, height: 10 }}
          />
        <Text style={styles.names}> Barisic B. </Text>
          </View>
        </View>
{/* DESNI KONTEJNER */}
        <View style={styles.container}>

        </View>
      </View>
        <View style={styles.gameResultWrapper}>
        <Text style={styles.names}>(Golovin A.) Christyakov D. </Text>
        <Image
            source={{
              uri:
                "https://m.media-amazon.com/images/I/51KfJKnnrJL._AC_SX466_.jpg",
            }}
            style={{ width: 15, height: 10 }}
          />
          <Text style={styles.names}> 2</Text>
        </View>

        <Text style={styles.subtitle}>Treneri</Text>
        <View style={styles.jumbotron}>
{/* LIJEVI KONTEJNER */}
        <View style={styles.container}>
        <View style={styles.gameResultWrapper}>
        <Text style={styles.names}>  </Text>
        <Image
            source={{
              uri:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/1200px-Flag_of_Croatia.svg.png",
            }}
            style={{ width: 15, height: 10 }}
          />
        <Text style={styles.names}> Dalic Z. </Text>
          </View>
        </View>
{/* DESNI KONTEJNER */}
        <View style={styles.container}>

        </View>
      </View>
        <View style={styles.gameResultWrapper}>
        <Text style={styles.names}>Karpin V. </Text>
        <Image
            source={{
              uri:
                "https://m.media-amazon.com/images/I/51KfJKnnrJL._AC_SX466_.jpg",
            }}
            style={{ width: 15, height: 10 }}
          />
          <Text style={styles.names}>  </Text>
        </View>
      </View>









    </View>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  screen: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    width: "100%",
  },
  jumbotron: {
    flexDirection: "row",
    margin: 5,
  },
  gameResultWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
});
