import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [opponent, setOpponent] = useState()
  const [result, SetResult] = useState()

  const hands = {
    pedra: "👊",
    papel: "🖐",
    tesoura: "✌"
  };

  const choices = Object.keys(hands) //array

  function move(choice) {
    const index = Math.floor(Math.random() * choices.length)

    const computer = choices[index];

    const win1 = choice == 'pedra' && computer == 'tesoura'
    const win2 = choice == 'papel' && computer == 'pedra'
    const win3 = choice == 'tesoura' && computer == 'papel'

    if (choice == computer) {
      SetResult('Empate!')
    } else if (win1 || win2 || win3) {
      SetResult('Vitória!')
    } else {
      SetResult('Derrota!')
    }

    setOpponent(computer)

  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jankenpon</Text>

      <View style={styles.content}>

        <View style={{alignItems: 'center'}}>
          <Text style={styles.player}>Oponente</Text>
          <Text style={styles.hand}>{opponent == null ? "?" : hands[opponent]}</Text>
        </View>

        <Text>X</Text>
        <Text style={styles.player}>Você</Text>
        <View style={{ flexDirection: 'row', gap: 80 }}>
          {choices.map((item) =>
            <TouchableOpacity key={item} onPress={() => move(item)}>
              <Text style={styles.handBox}>{hands[item]}</Text>
            </TouchableOpacity>)}
        </View>

       

      </View>

      <Text style={{textAlign: 'center', fontWeight: '500', fontSize: 25}}>{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 80, // top bottom
    paddingHorizontal: 20, // left right
    backgroundColor: '#c2c2d6'
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center'
  },
  content: {
    flex: 1,
    justifyContent: 'space-around',
    paddingVertical: 100,
    alignItems: 'center'
  },
  player: {
    fontSize: 20,
  },
  hand: {
    fontSize: 20,  
  },
  handBox: {
    fontSize: 20,
    borderWidth: 2,
    padding: 5,
    borderRadius: 5,
    width: 50,
    textAlign: 'center'
  }
});
