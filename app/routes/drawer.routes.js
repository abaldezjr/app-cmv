
import { createDrawerNavigator } from '@react-navigation/drawer';

import CRUDUsers from '../screens/private/CRUDUsers';
import CRUDCompanys from '../screens/private/CRUDCompanys';
import CRUDPartners from '../screens/private/CRUDPartners';


const { Screen, Navigator } = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
        <Navigator>
            <Screen
                name='User'
                component={CRUDUsers}
                options={{
                    drawerLabel: 'Usuarios'
                }}
            />
            <Screen
                name='Company'
                component={CRUDCompanys}
                options={{
                    drawerLabel: 'Empresas'
                }}
            />
            <Screen
                name='Partner'
                component={CRUDPartners}
                options={{
                    drawerLabel: 'Parceiros'
                }}
            />
        </Navigator>
    );
}