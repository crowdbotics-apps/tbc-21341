import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Add-Item137283Navigator from '../features/Add-Item137283/navigator';
import Maps137279Navigator from '../features/Maps137279/navigator';
import UserProfile137275Navigator from '../features/UserProfile137275/navigator';
import BlankScreen44137252Navigator from '../features/BlankScreen44137252/navigator';
import Dashboard12137249Navigator from '../features/Dashboard12137249/navigator';
import Maps137188Navigator from '../features/Maps137188/navigator';
import Add-Item137187Navigator from '../features/Add-Item137187/navigator';
import Maps137183Navigator from '../features/Maps137183/navigator';
import UserProfile137179Navigator from '../features/UserProfile137179/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Add-Item137283: { screen: Add-Item137283Navigator },
Maps137279: { screen: Maps137279Navigator },
UserProfile137275: { screen: UserProfile137275Navigator },
BlankScreen44137252: { screen: BlankScreen44137252Navigator },
Dashboard12137249: { screen: Dashboard12137249Navigator },
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
