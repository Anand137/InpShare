import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  SelectionCircle: {
    width: '45%',
    height: 160,
    borderRadius: 250 / 2,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  SelectionCircleTouch: {
    width: '100%',
    height: 160,
    borderRadius: 250 / 2,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  SelectionText: {color: '#FFFFFF', fontSize: 16, fontWeight: 'bold'},
});

export default styles;
