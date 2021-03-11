/**
 * IconFont icon set component.
 * Usage: <Icon name="icon-name" size={20} color="#4F8EF7" />
 */

import createIconSet from 'react-native-vector-icons/lib/create-icon-set';
import glyphMap from 'react-native-vector-icons/glyphmaps/iconfont.json';

const iconSet = createIconSet(glyphMap, 'Icon', 'iconfont.ttf');

export default iconSet;

export const Button = iconSet.Button;
export const TabBarItem = iconSet.TabBarItem;
export const TabBarItemIOS = iconSet.TabBarItemIOS;
export const ToolbarAndroid = iconSet.ToolbarAndroid;
export const getImageSource = iconSet.getImageSource;

