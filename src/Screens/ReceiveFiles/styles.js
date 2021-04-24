import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    padding: 20,
  },
  btnCont: {width: '90%', borderRadius: 5, elevation: 1},
  btn: {
    borderWidth: 1,
    borderColor: '#22a4ef',
    width: '100%',
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {color: '#FFFFFF', fontWeight: 'bold'},
  loaderCont: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    marginVertical: 30,
    elevation: 3,
    borderRadius: 5,
    height: 90,
  },
  loaderText: {color: '#000000', fontWeight: 'bold', fontSize: 20},
  loaderGif: {width: 100, height: 30},
});

export default styles;
