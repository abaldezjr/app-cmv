
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/Login';
import Register from '../screens/Register';
import TabRoutes from './tab.routes';
import DrawerRoutes from './drawer.routes';

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
    return (
        <Navigator>
            <Screen name="Login" component={Login} />
            <Screen name="Register" component={Register} />
            <Screen
                name="Main" component={TabRoutes}
                options={{
                    headerShown: false
                }}
            />
            <Screen
                name="Admin" component={DrawerRoutes}
                options={{
                    headerShown: false
                }}
            />
        </Navigator>
    );
}