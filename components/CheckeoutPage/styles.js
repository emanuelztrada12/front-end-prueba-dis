import { makeStyles } from '@mui/styles';

export default makeStyles(theme => ({
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingTop: '10px'
  },
  wrapper: {
    position: 'relative'
  },
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%' 
  }
}));