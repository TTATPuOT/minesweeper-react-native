import React from 'react';
import Field from '@modules/Field';
import {Provider} from "react-redux";
import store from '@store/index';

const App = () => {

    return <Provider store={store}>
        <Field />
    </Provider>
};

export default App;
