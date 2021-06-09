import React from 'react';
import {StatusBar} from 'react-native';

import { useIsFocused } from '@react-navigation/native';

const StatusBarPage = (props) => {
    const isfocused = useIsFocused();
    return isfocused ? <StatusBar {...props} /> : null
}

export default StatusBarPage;