import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadAutoOptions, loadCurrForecast, loadCurrWeather } from '../store/actions/weatherAction';
import { setToast } from './../store/actions/toastAction';
import ReactLoading from 'react-loading';
import place from '../assets/icons/place.svg'
import search from '../assets/icons/search.svg'

export default function Search() {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false);
    const { options } = useSelector(state => state.weatherModule);
    const inputRef = useRef();
    const wrapperRef = useRef()

    const showAutoComplete = () => {
        // Check if user type just in English
        const isValid = /^(?:[A-Za-z]+|\d+)$/.test(value);
        if (!isValid && value !== '') {
            dispatch(setToast({ msg: 'Please search only in English!', type: 'error' })); return;
        }
        if (!value) {
            setOpen(false);
            return;
        }
        setOpen(true)
        setLoading(true);
        dispatch(loadAutoOptions(value));
    };

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    // handle search value changes
    useEffect(() => {
        const timeout = setTimeout(showAutoComplete, 300);
        return () => { clearTimeout(timeout); }
    }, [value]);

    
    useEffect(() => {
        if (options.length === 0 || inputRef.current.value === '') {
            setOpen(false);
        }
        setLoading(false);
    }, [options])

    const handleClickOutside = e => {
        const { current: inputWrapper } = wrapperRef;
        if (!open) return;
        if (inputWrapper && !inputWrapper.contains(e.target)) {
            setOpen(false)
        }
    };

    //  close autoComplete when user click outside
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [open])

    const handleSelectOption = selectedOption => {
        //set the value input with the current city name
        inputRef.current.value = selectedOption.LocalizedName;
        setOpen(false);
        dispatch(loadCurrWeather(selectedOption));
        dispatch(loadCurrForecast(selectedOption));
    };

    return (
        <section className="search" ref={wrapperRef}>
            <div className="box-search">
            <img src={search} alt="" className="search-icon"/>
                <input
                    type="text"
                    placeholder="Search Location..."
                    onChange={e => setValue(e.target.value)}
                    ref={inputRef}
                    autoComplete="off"
                />
                {loading &&
                    <ReactLoading type={'spin'} height={'20px'} width={'20px'} />
                }
            </div>

            {open && <section className="auto-container">
                {options.length > 0 && options.map(option => {
                    return (
                        <section className="option" key={option.Key} onClick={() => handleSelectOption(option)}>
                            <img src={place} alt="" />
                            <span className="location-name">{option.LocalizedName},{option.Country.LocalizedName},{option.AdministrativeArea.LocalizedName}</span>
                        </section>
                    )
                })}
            </section>}
        </section>
    )
}


