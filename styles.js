import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cde',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    margin: 8,
    alignSelf: 'center',
    borderRadius: 8,
    borderColor: '#807060',
    borderWidth: 1,
    width: 320,
    backgroundColor: '#fff',
  },
  cardImage: {
    width: 318,
    height: 200,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  cardTitle: {
    fontSize: 28,
    fontWeight: '600',
    padding: 4,
  },
  cardSubtitle: {
    fontSize: 16,
    padding: 4,
  }
})

export default styles