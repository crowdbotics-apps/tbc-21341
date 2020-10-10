import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Dashboard12137249Navigator from '../features/Dashboard12137249/navigator';
import SignUp11137223Navigator from '../features/SignUp11137223/navigator';
import Camera2137221Navigator from '../features/Camera2137221/navigator';
import Dashboard13137219Navigator from '../features/Dashboard13137219/navigator';
import Maps137188Navigator from '../features/Maps137188/navigator';
import Add-Item137187Navigator from '../features/Add-Item137187/navigator';
import Maps137183Navigator from '../features/Maps137183/navigator';
import UserProfile137179Navigator from '../features/UserProfile137179/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Dashboard12137249: { screen: Dashboard12137249Navigator },
SignUp11137223: { screen: SignUp11137223Navigator },
Camera2137221: { screen: Camera2137221Navigator },
Dashboard13137219: { screen: Dashboard13137219Navigator },
Maps137188: { screen: Maps137188Navigator },
Add-Item137187: { screen: Add-Item137187Navigator },
Maps137183: { screen: Maps137183Navigator },
UserProfile137179: { screen: UserProfile137179Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
