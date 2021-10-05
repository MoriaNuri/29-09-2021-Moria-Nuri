import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setToast } from './../store/actions/toastAction';

const useGeoLocation = () => {
  const dispatch = useDispatch();
  const [defultlocation, setDefultLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Ask the user for permission to get his current position
//   getCurrPosition gets 2 callbacks, onSuccess and onError
// If there is an error I can manage the error logic via onError
// If the request was successful you can do success logic in onSuccess callback.
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(handleSuccess, HandleError);
  }, []);

  const handleSuccess = position => {
    const { latitude, longitude } = position.coords;
    setDefultLocation({
      latitude,
      longitude,
    });
    setIsLoading(false);
  };

  const HandleError = error => {
    dispatch(setToast({ msg: error.message, type: 'error' }))
    console.log(error);
    setDefultLocation({ latitude: 32.0853, longitude: 34.7818 });
    setIsLoading(false);
  };
  return { isLoading, defultlocation };
};

export default useGeoLocation;