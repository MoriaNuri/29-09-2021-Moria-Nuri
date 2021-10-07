import {useState} from 'react';
import {useDispatch} from 'react-redux'
import {setToast} from '../store/actions/toastAction';
import { setAppMode } from '../store/actions/preferencesAction';
import sun from '../assets/icons/sun.png'
import moon from '../assets/icons/moon.svg'


export default function DarkModeBtn () {
  const dispatch = useDispatch();
  const [mode, setMode] = useState (localStorage.getItem ('mode') || 'dark');
  const [icon, setIcon] = useState (moon);

  const switchTheme = () => {
    if(mode === 'dark')  {
      setMode('light')
      setIcon(sun)
      dispatch(setAppMode('light'))
    }
    else  {
      setMode('dark')
      setIcon(moon)
      dispatch(setAppMode('dark'))
    }
    dispatch(setToast({
      msg: `${mode === 'light' ? 'Dark Mode' : 'Light Mode '} is on`,
      type: 'success',
    }))
  }

  return (
    <div >
      <span className="toggle-btn" onClick={switchTheme}>
        <span style={{color: mode === 'dark' ? 'yellow' : "white"}}><img src={icon} alt=""/>
        </span>
      </span>
    </div>
  );
}