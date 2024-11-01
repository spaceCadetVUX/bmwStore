import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    position: 'absolute',
    top: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    zIndex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',

  },
  logo: {
    width: 50,
    height: 50,
  },
  userIcon: {
    marginRight: 10,
  },
  headerMenu: {
    position: 'absolute',
    top: 80, // Adjust as needed to position the menu below the header
    left: 20,
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    padding: 10,
    zIndex: 2,
  },
  menuText: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    color: '#000',
  },
  scrollContent: {
    paddingTop: 0, // Offset for the header height
    alignItems: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#000000',
    padding: 15,
    borderRadius: 8,
    margin: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  video: {
    width: '100%',
    height: 300, // Adjust height as needed
  },
});

export default styles;
