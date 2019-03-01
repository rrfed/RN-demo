import React from "react";
import { Button, View, Text, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";

import FlatListScreen from "./Component/FlatList"
import ViewAndTextScreen from "./Component/View+Text"
import TextInputScreen from "./Component/TextInput"
import ButtonScreen from "./Component/Button"
import ImageScreen from "./Component/Image"
import ScrollViewScreen from "./Component/ScrollView"
import SectionListScreen from "./Component/SectionList"
import SwiperScreen from "./Component/Swiper"
import PickerScreen from "./Component/Picker"
import ActivityIndicatorScreen from "./Component/ActivityIndicator"
import TabBariOSScreen from "./Component/TabBariOS"
import TabNavigatorScreen from "./Component/TabNavigator"
import TabViewScreen from "./Component/TabView"
import WebviewScreen from "./Component/Webview"

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={{ uri: 'tabbar_homepage_normal' }}
        style={{ width: 30, height: 30 }}
      />
    )
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      //  headerTitle instead of title
      headerTitle: <LogoTitle />,
      title: '首页',
      headerRight: (
        <Button
          onPress={navigation.getParam('increaseCount')}
          title='+1'
          color='#fff'
        />
      ),
      headerLeft: (
        <Button
          onPress={() => navigation.navigate('MyModal')}
          title='Info'
          color='#fff'
        />
      )
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount })
  }

  state = {
    count: 0,
  };

  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Text>{this.state.count}</Text>
        <Button
          title='Go to Settings'
          //  如何在导航到路由时将数据传递过去?
          //  1.需要将参数包装成一个对象，作为navigation.navigate方法的第二个参数传递给路由。
          onPress={() => {
            this.props.navigation.navigate('Settings', {
              itemId: 86,
              otherParam: 'anything you want here',
            })
          }}
        />
      </View>
    );
  }
}

class ModalScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title='Dismiss'
        />
      </View>
    )
  }
}

class SettingsScreen extends React.Component {
  // static navigationOptions = {
  //   title: '详情页',
  // }

  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.otherParam : 'A Nested Settings Screen',
      //  以下值用于覆盖共享配置 对首页的颜色进行反转
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    }
  }

  render() {
    //  2.获取参数，如果不可用，则提供后备值
    const { navigation } = this.props;
    //  第二个参数就是后备值
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Settings Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button
          title='Go to Settings... again'
          //  每次调用 ` push ` 时, 我们会向导航堆栈中添加新路由。 当你调用 ` navigate ` 时, 它首先尝试查找具有该名称的现有路由, 并且只有在堆栈上没有一个新路由时才会推送该路由。
          //  onPress={() => this.props.navigation.navigate('Settings')} //不会添加新路由
          onPress={() => this.props.navigation.push('Settings')} //会添加新路由
        />

        <Button
          title='Go to Home'
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title='Go back'
          onPress={() => this.props.navigation.goBack()}
        />
        <Button
          title='Update the title'
          //  通常有必要从已加载的页面组件本身更新当前页面的navigationOptions配置。 我们可以使用this.props.navigation.setParams来做到这一点
          onPress={() => this.props.navigation.setParams({ otherParam: 'Updated!' })}
        />
      </View>
    )
  }
}

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    MyModal: {
      screen: ModalScreen
    },
  },
  {
    mode: 'modal',// 也可以是card(右进右出)
    headerMode: 'none'
  }
);

const HomeStack = createStackNavigator(
  {
    Home: FlatListScreen,
  },
  {
    initialRouteName: 'Home',
    //  默认导航栏配置项
    defaultNavigationOptions: {
      //  headerStyle：一个应用于 header 的最外层 View 的 样式对象， 如果你设置 backgroundColor ，他就是header 的颜色。
      //  headerTintColor：返回按钮和标题都使用这个属性作为它们的颜色。 在下面的例子中，我们将 tint color 设置为白色（#fff），所以返回按钮和标题栏标题将变为白色。
      //  headerTitleStyle：如果我们想为标题定制fontFamily，fontWeight和其他Text样式属性，我们可以用它来完成。
      headerStyle: {
        backgroundColor: '#f4511e'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerBackTitle: null,
      // headerBackImage: <Image source={{uri: 'tabbar_homepage_normal'}} style={{width:20, height: 20}} />
    },
    navigationOptions: {
      tabBarLabel: '首页',
    }
  }
)

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  {
    //  默认导航栏配置项
    defaultNavigationOptions: {
      //  headerStyle：一个应用于 header 的最外层 View 的 样式对象， 如果你设置 backgroundColor ，他就是header 的颜色。
      //  headerTintColor：返回按钮和标题都使用这个属性作为它们的颜色。 在下面的例子中，我们将 tint color 设置为白色（#fff），所以返回按钮和标题栏标题将变为白色。
      //  headerTitleStyle：如果我们想为标题定制fontFamily，fontWeight和其他Text样式属性，我们可以用它来完成。
      headerStyle: {
        backgroundColor: '#f4511e'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerBackTitle: null,
      // headerBackImage: <Image source={{uri: 'tabbar_homepage_normal'}} style={{width:20, height: 20}} />
    },
    navigationOptions: {
      tabBarLabel: '设置'
    }
  }
)

const TabNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Settings: SettingsStack,
}, {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `tabbar_homepage${focused ? '_selected' : '_normal'}`;

        } else if (routeName === 'Settings') {
          iconName = `tabbar_invitation${focused ? '_selected' : '_normal'}`;
        }

        // You can return any component that you like here!
        // return <IconComponent name={iconName} size={25} color={tintColor} />;
        return <Image source={{uri: iconName}} style={{width:20, height: 20}} />
      },
    }),
    navigationOptions: {
      header: null,
    },
    tabBarOptions: {
      activeTintColor: '#f4511e',
      inactiveTintColor: 'gray',
    },
  });

const AppStack = createStackNavigator({
  Tab: TabNavigator,

  ViewAndText: ViewAndTextScreen,
  TextInput: TextInputScreen,
  Button: ButtonScreen,
  Image: ImageScreen,
  ScrollView: ScrollViewScreen,
  SectionList: SectionListScreen,
  Swiper: SwiperScreen,
  Picker: PickerScreen,
  ActivityIndicator: ActivityIndicatorScreen,
  TabBariOS: TabBariOSScreen,
  TabNavigator: TabNavigatorScreen,
  TabView: TabViewScreen,
  Webview: WebviewScreen,
},
  {
    //  默认导航栏配置项
    defaultNavigationOptions: {
      //  headerStyle：一个应用于 header 的最外层 View 的 样式对象， 如果你设置 backgroundColor ，他就是header 的颜色。
      //  headerTintColor：返回按钮和标题都使用这个属性作为它们的颜色。 在下面的例子中，我们将 tint color 设置为白色（#fff），所以返回按钮和标题栏标题将变为白色。
      //  headerTitleStyle：如果我们想为标题定制fontFamily，fontWeight和其他Text样式属性，我们可以用它来完成。
      headerStyle: {
        backgroundColor: '#f4511e'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerBackTitle: null,
      // headerBackImage: <Image source={{uri: 'tabbar_homepage_normal'}} style={{width:20, height: 20}} />
    },
  });

const AppContainer = createAppContainer(AppStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}