import { NavigationContainer } from '@react-navigation/native';

import Config from '../utils/Config';

import { StackRoutes } from './stack.routes';

export default function Routes() {
    return (
        <NavigationContainer>
            <StackRoutes />
        </NavigationContainer>
    );
}

