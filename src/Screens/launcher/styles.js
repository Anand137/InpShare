import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appNameStart: {
    fontWeight: '600',
    fontSize: 40,
    color: '#ffd89b',
  },
  appNameEnd: {
    fontWeight: '600',
    fontSize: 30,
    color: '#c4e0e5',
  },
  btn: {
    borderWidth: 2,
    borderColor: '#56ab2f',
    width: '35%',
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 50,
    right: 40,
  },
  btnText: {
    color: '#FFF',
  },
  touchableStyle: {
    width: '100%',
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flagOne: {
    color: '#FF9933',
  },
  flagTwo: {
    color: '#FFFFFF',
  },
  flagThree: {
    color: '#138808',
  },
});

export default styles;
