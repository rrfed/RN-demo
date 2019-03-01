
## React Native简介
### 概况
`React Native `(简称`RN`)是`Facebook`于2015年4月开源的跨平台移动应用开发框架，是`Facebook`早先开源的`JS`框架 `React` 在原生移动应用平台的衍生产物，目前支持`iOS`和`安卓`两大平台。`RN`使用`Javascript`语言，类似于`HTML`的`JSX`，以及`CSS`来开发移动应用，因此熟悉`Web`前端开发的技术人员只需很少的学习就可以进入移动应用开发领域。

`React Native`使你能够在`Javascript`和`React`的基础上获得完全一致的开发体验，构建世界一流的原生`APP`。

`React Native`着力于提高多平台开发的开发效率 —— 仅需学习一次，编写任何平台。`(Learn once, write anywhere)`

`Facebook`已经在多项产品中使用了`React Native`，并且将持续地投入建设`React Native`。
`React Native`主要特性如下：

1. 原生的`iOS`组件
`React Native`主张`"Learn once, write everywhere"`而非其他跨平台工具一直宣扬的`"Write once, run everywhere"`。通过`React Native`，开发者可以使用`UITabBar`、`UINavigationController`等标准的`iOS`平台组件，让应用界面在其他平台上亦能保持始终如一的外观、风格。
2. 异步执行
`JavaScript`应用代码和原生平台之间所有的操作都采用异步执行模式，原生模块使用额外线程，开发者可以解码主线程图像、后台保存至磁盘、无须顾忌UI等诸多因素直接度量文本设计布局。

3. 触摸处理
`React Native`引入了一个类似于`iOS上Responder Chain`响应链事件处理机制的响应体系，并基于此为开发者提供了诸如`TouchableHighlight`等更高级的组件。

### 使用JavaScript和React编写原生移动应用
React Native使你只使用JavaScript也能编写原生移动应用。 它在设计原理上和React一致，通过声明式的组件机制来搭建丰富多彩的用户界面。

```
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class WhyReactNativeIsSoGreat extends Component {
  render() {
    return (
      <View>
        <Text>
          如果你喜欢在Web上使用React，那你也肯定会喜欢React Native.
        </Text>
        <Text>
          基本上就是用原生组件比如'View'和'Text'
          来代替web组件'div'和'span'。
        </Text>
      </View>
    );
  }
}
```

### React Native应用是真正的移动应用
React Native产出的并不是“网页应用”， 或者说“HTML5应用”，又或者“混合应用”。 最终产品是一个真正的移动应用，从使用感受上和用Objective-C或Java编写的应用相比几乎是无法区分的。 React Native所使用的基础UI组件和原生应用完全一致。 你要做的就是把这些基础组件使用JavaScript和React的方式组合起来。

```
import React, { Component } from 'react';
import { Image, ScrollView, Text } from 'react-native';

class AwkwardScrollingImageWithText extends Component {
  render() {
    return (
      <ScrollView>
        <Image
          source={{uri: 'https://i.chzbgr.com/full/7345954048/h7E2C65F9/'}}
          style={{width: 320, height:180}}
        />
        <Text>
          在iOS上，React Native的ScrollView组件封装的是原生的UIScrollView。
          在Android上，封装的则是原生的ScrollView。

          在iOS上，React Native的Image组件封装的是原生的UIImageView。
          在Android上，封装的则是原生的ImageView。

          React Native封装了这些基础的原生组件，使你在得到媲美原生应用性能的同时，还能受益于React优雅的架构设计。 
        </Text>
      </ScrollView>
    );
  }
}
```

### 不用再等编译
React Native让你可以快速迭代开发应用。 比起传统原生应用漫长的编译过程，现在你可以在瞬间刷新你的应用。开启Hot Reloading的话，甚至能在保持应用运行状态的情况下热替换新代码！
![](https://media.giphy.com/media/13WZniThXy0hSE/giphy.gif)

### 可随时呼叫原生外援
React Native完美兼容使用Objective-C、Java或是Swift编写的组件。 如果你需要针对应用的某一部分特别优化，中途换用原生代码编写也很容易。 想要应用的一部分用原生，一部分用React Native也完全没问题 —— Facebook的应用就是这么做的。

```
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { TheGreatestComponentInTheWorld } from './your-native-code';

class SomethingFast extends Component {
  render() {
    return (
      <View>
        <TheGreatestComponentInTheWorld />
        <Text>
          上面这个TheGreatestComponentInTheWorld组件完全可以使用原生Objective-C、
          Java或是Swift来编写 - 开发流程并无二致。
        </Text>
      </View>
    );
  }
}
```

## 搭建开发环境（开发平台：macOS；目标平台：iOS）
**如果有安卓手机，建议安装Android Studio，体积小很多，不想装模拟器的话，用真机也可以。**
### 安装依赖
必须安装的依赖有：`Node`、`Watchman` 和 `React Native` 命令行工具以及 `Xcode`。

#### `Node`, `Watchman`
推荐使用[Homebrew](https://brew.sh/index_zh-cn)来安装 `Node` 和 `Watchman`。在命令行中执行下列命令安装：

```
brew install node
brew install watchman
```
如果你已经安装了 `Node`，请检查其版本是否在 `v8.3` 以上。安装完 `Node` 后建议设置 `npm` 镜像以加速后面的过程（或使用科学上网工具）。
> 注意：不要使用 cnpm！cnpm 安装的模块路径比较奇怪，packager 不能正常识别！

```
npm config set registry https://registry.npm.taobao.org --global
npm config set disturl https://npm.taobao.org/dist --global
```

#### `Yarn`、`React Native` 的命令行工具（`react-native-cli`）
`Yarn`是 `Facebook` 提供的替代 `npm` 的工具，可以加速 `node` 模块的下载。`React Native` 的命令行工具用于执行创建、初始化、更新项目、运行打包服务（`packager`）等任务。

```
npm install -g yarn react-native-cli
```
安装完 `yarn` 后同理也要设置镜像源：

```
yarn config set registry https://registry.npm.taobao.org --global
yarn config set disturl https://npm.taobao.org/dist --global
```
安装完 `yarn` 之后就可以用 `yarn` 代替 `npm` 了，例如用`yarn`代替`npm install`命令，用`yarn add` 某第三方库名代替`npm install` 某第三方库名。
[npm链接](https://www.npmjs.com/) [yarn链接](https://yarnpkg.com/en/docs/getting-started)

#### `Xcode`
`React Native` 目前需要`Xcode 9.4` 或更高版本。你可以通过 `App Store` 或是到`Apple开发者官网`上下载。这一步骤会同时安装 `Xcode IDE`、`Xcode的命令行工具`和 `iOS 模拟器`。
##### `Xcode的命令行工具`
启动 `Xcode`，并在`Xcode | Preferences | Locations`菜单中检查一下是否装有某个版本的`Command Line Tools`。`Xcode的命令行工具`中包含一些必须的工具，比如`git`等。


## 创建新项目
使用 `React Native` 命令行工具来创建一个名为"`AwesomeProject`"的新项目：

！！！**注意**！！！：`init` 命令默认会创建最新的版本，而目前最新的 `0.45` 及以上版本需要下载 boost 等几个第三方库编译。这些库在国内即便翻墙也很难下载成功，导致很多人无法运行`iOS`项目！！！中文网在论坛中提供了这些库的[国内下载链接](https://bbs.reactnative.cn/topic/4301/ios-rn-0-45%E4%BB%A5%E4%B8%8A%E7%89%88%E6%9C%AC%E6%89%80%E9%9C%80%E7%9A%84%E7%AC%AC%E4%B8%89%E6%96%B9%E7%BC%96%E8%AF%91%E5%BA%93-boost%E7%AD%89)。如果你嫌麻烦，又没有对新版本的需求，那么可以暂时创建`0.44.3`的版本。
>提示：你可以使用`--version`参数（注意是两个杠）创建指定版本的项目。例如`react-native init AwesomeProject --version 0.44.3`。注意版本号必须精确到两个小数点。
如果你是想把 React Native 集成到现有的原生项目中，则步骤完全不同，请参考[集成到现有原生应用](https://reactnative.cn/docs/integration-with-existing-apps/)。

## 编译并运行 React Native 应用
在你的项目目录中运行`react-native run-ios`：

```
cd AwesomeProject
react-native run-ios
```
>提示：如果 `run-ios` 无法正常运行，请使用 `Xcode` 运行来查看具体错误（`run-ios` 的报错没有任何具体信息）。

很快就应该能看到 `iOS 模拟器`自动启动并运行你的项目。
![](https://reactnative.cn/docs/assets/GettingStartediOSSuccess.png)

`react-native run-ios`只是运行应用的方式之一。你也可以在 `Xcode` 或是[Nuclide](https://nuclide.io/)中直接运行应用。

### 修改项目
现在我们已经成功运行了项目，可以开始尝试动手改一改了：

使用你喜欢的编辑器(推荐`VSCode`)打开`App.js`并随便改上几行。
在 `iOS 模拟器`中按下`⌘-R`就可以刷新 APP 并看到你的最新修改！（如果没有反应，请检查模拟器的 `Hardware` 菜单中，`connect hardware keyboard` 选项是否选中开启）

### 补充
`React Native` 看起来很像 `React`，只不过其基础组件是`原生组件`而非 `web 组件`。要理解 `React Native` 应用的基本结构，首先需要了解一些基本的 `React` 的概念，比如 `JSX` 语法、`组件`、`state状态`以及`props属性`。如果你已经了解了 `React`，那么还需要掌握一些 `React Native` 特有的知识，比如原生组件的使用。

## 众望所归的'Hello World'
根据历史悠久的“传统”，我们也来写一个“Hello World”：

```
import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>Hello world!</Text>
        </View>
    );
  }
}
```

### 这段代码是什么意思呢？
初看这段代码，可能觉得并不像 `JavaScript`——没错，这是“未来”的 `JavaScript`.

首先你需要了解 `ES2015` （也叫作 `ES6`）——这是一套对 `JavaScript` 的语法改进的官方标准。但是这套标准目前还没有在所有的浏览器上完整实现，所以目前而言 `web` 开发中还很少使用。`React Native` 内置了对 `ES2015 标准`的支持，你可以放心使用而无需担心兼容性问题。上面的示例代码中的`import`、`from`、`class`、`extends`、以及`() =>箭头函数`等新语法都是 `ES2015 `中的特性。如果你不熟悉 `ES2015` 的话，可以看看[阮一峰老师的书](http://es6.ruanyifeng.com/)，还有论坛的这篇[总结](http://bbs.reactnative.cn/topic/15)。

示例中的这一行`<View><Text>Hello world!</Text></View>`看起来可能觉得陌生。这叫做 `JSX`——是一种在 `JavaScript` 中嵌入 `XML` 结构的语法。很多传统的应用框架会设计自有的模板语法，让你在结构标记中嵌入代码。`React` 反其道而行之，设计的 `JSX` 语法却是让你在代码中嵌入结构标记。初看起来，这种写法很像 `web` 上的 `HTML`，只不过使用的并不是 `web` 上常见的标签如`<div>`或是`<span>`等，这里我们使用的是 `React Native` 的组件。上面的示例代码中，使用的是内置的`<Text>`组件，它专门用来显示文本，而`<View>`就类似 `html` 中的`div`或是`span`这样的容器。

### 组件
上面的代码定义了一个名为`HelloWorldApp`的新的组件（`Component`）。你在编写 `React Native` 应用时，肯定会写出很多新的组件。而一个 `App` 的最终界面，其实也就是各式各样的组件的组合。组件本身结构可以非常简单——唯一必须的就是在`render`方法中返回一些用于渲染结构的 `JSX` 语句。

## Props（属性）
大多数组件在创建时就可以使用各种参数来进行定制。用于定制的这些参数就称为`props`（属性）。
以常见的基础组件`Image`为例，在创建一个图片时，可以传入一个名为`source`的 `prop` 来指定要显示的图片的地址，以及使用名为`style`的 `prop` 来控制其尺寸。

```
import React, { Component } from 'react';
import { Image } from 'react-native';

export default class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={{width: 193, height: 110}} />
    );
  }
}
```
请注意`{pic}`外围有一层括号，我们需要用括号来把`pic`这个变量嵌入到 `JSX `语句中。括号的意思是括号内部为一个 `js` 变量或表达式，需要执行后取值。因此我们可以把任意合法的 `JavaScript` 表达式通过括号嵌入到 `JSX` 语句中。

自定义的组件也可以使用`props`。通过在不同的场景使用不同的属性定制，可以尽量提高自定义组件的复用范畴。只需在`render`函数中引用`this.props`，然后按需处理即可。下面是一个例子：

```
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}

export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
      </View>
    );
  }
}
```

## State（状态）
我们使用两种数据来控制一个组件：`props`和`state`。`props`是在父组件中指定，而且一经指定，在被指定的组件的生命周期中则不再改变。 对于需要改变的数据，我们需要使用`state`。

一般来说，你需要在 `constructor `中初始化`state`（译注：这是 `ES6` 的写法，早期的很多 `ES5` 的例子使用的是 `getInitialState` 方法来初始化 `state`，这一做法会逐渐被淘汰），然后在需要修改时调用`setState`方法。

假如我们需要**制作一段不停闪烁的文字**。文字内容本身在组件创建时就已经指定好了，所以文字内容应该是一个`prop`。而文字的显示或隐藏的状态（快速的显隐切换就产生了闪烁的效果）则是随着时间变化的，因此这一状态应该写到`state`中。

```
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };

    // 每1000毫秒对showText状态做一次取反操作
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1000);
  }

  render() {
    // 根据当前showText的值决定是否显示text内容
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <Text>{this.props.text}</Text>
    );
  }
}

export default class BlinkApp extends Component {
  render() {
    return (
      <View>
        <Blink text='I love to blink' />
        <Blink text='Yes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML' />
        <Blink text='Look at me look at me look at me' />
      </View>
    );
  }
}
```
```
var f = v => v;

// 等同于
var f = function (v) {
  return v;
};
```
实际开发中，我们一般不会在定时器函数（`setInterval`、`setTimeout` 等）中来操作 state。典型的场景是在接收到服务器返回的新数据，或者在用户输入数据之后。你也可以使用一些“状态容器”比如[Redux](http://redux.js.org/index.html)来统一管理数据流。

每次调用`setState`时，`BlinkApp` 都会重新执行 `render` 方法重新渲染。这里我们使用定时器来不停调用`setState`，于是组件就会随着时间变化不停地重新渲染。

`State` 的工作原理和 `React.js` 完全一致，所以对于处理 `state` 的一些更深入的细节，你可以参阅[React.Component API](https://reactjs.org/docs/react-component.html#setstate)。

**应该牢记的要点：**

一切界面变化都是`状态state变化`
`state`的修改必须通过`setState()`方法

1. this.state.likes = 100; // 这样的`直接赋值修改无效！`
2. setState 是一个 merge 合并操作，只修改指定属性，不影响其他属性
3. setState 是`异步`操作，修改`不会马上生效`

## 样式
在 `React Native` 中，我们并不需要学习什么特殊的语法来定义样式。我们仍然是使用 `JavaScript` 来写样式。所有的核心组件都接受名为`style`的属性。这些样式名基本上是遵循了 `web` 上的 `CSS` 的命名，只是按照 `JS` 的语法要求使用了驼峰命名法，例如将`background-color`改为`backgroundColor`。

`style`属性可以是一个普通的 `JavaScript` 对象。这是最简单的用法，因而在示例代码中很常见。你还可以传入一个数组——在数组中位置居后的样式对象比居前的优先级更高，这样你可以间接实现样式的继承。

实际开发中组件的样式会越来越复杂，我们建议使用`StyleSheet.create`来集中定义组件的样式。比如像下面这样：

```
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class LotsOfStyles extends Component {
  render() {
    return (
      <View>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigBlue}>just bigBlue</Text>
        <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
        <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
```
常见的做法是按顺序声明和使用`style`属性，以借鉴 `CSS` 中的“层叠”做法（即后声明的属性会覆盖先声明的同名属性）。

文本的样式定义请参阅[Text 组件的文档](https://reactnative.cn/docs/text)。

## 常用控件
### View
作为创建 UI 时最基础的组件，[View](https://reactnative.cn/docs/view/) 是一个支持 `Flexbox` 布局、样式、一些触摸处理、和一些无障碍功能的容器，并且它可以放到其它的视图里，也可以有任意多个任意类型的子视图。不论在什么平台上，`View` 都会直接对应一个平台的原生视图，无论它是 `UIView`、还是 `android.view.View`。

### Text
[Text](https://reactnative.cn/docs/text/)是一个用于显示文本的React组件，并且它也支持嵌套、样式，以及触摸处理。

### Image
[Image](https://reactnative.cn/docs/image/)用于显示多种不同类型图片的 `React` 组件，包括网络图片、静态资源、临时的本地图片、以及本地磁盘上的图片（如相册）等。

### Navigator
我用的是第三方的[react-navigation](https://reactnavigation.org/docs/zh-Hans/getting-started.html)

#### 主要的方法是
##### 1.创建一个 stack navigator
`createStackNavigator`是一个返回 React 组件的方法。 它需要 *a route configuration object*（一个路由配置对象） 和 *an options object*（一个可选对象） (现在我们忽略下面的内容). 由于` createStackNavigator `函数会返回一个React组件，因此我们可以直接从` App.js `中导出它以用作我们应用程序的根组件。

```
// In App.js in a new project

import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
});

export default createAppContainer(AppNavigator);
```
##### 2.路由配置
假设我们对Home唯一的路由配置是页面组件，我们不需要使用`{screen：HomeScreen}`配置格式，我们可以直接使用页面组件。

```
const AppNavigator = createStackNavigator({
  Home: HomeScreen
});
```
##### 3.添加第二个路由
`<AppContainer />`组件不接受任何 `props` -- 所有配置都在`createStackNavigator` 函数的可选参数中指定。 我们将`options`留空，所以它只使用默认配置。 为了展示一个使用`options`对象的示例，我们将向 `stack navigator` 添加第二个页面。

```
// Other code for HomeScreen here...

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: "Home"
  }
);

// Other code for App component here...
```
现在我们的堆栈有两个路由，一个`Home`和一个`Details`。 `Home`路由对应`HomeScreen`组件，`Details`路由对应`DetailsScreen`组件。 堆栈的初始路由是Home路由。

##### 4.跳转到新的页面
```
import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

// ... other code from the previous section
```

### ScrollView
一个封装了平台的[ScrollView](https://reactnative.cn/docs/scrollview/)（滚动视图）的组件，同时还集成了触摸锁定的“响应者”系统。

记住`ScrollView`必须有一个`确定的高度`才能正常工作，因为它实际上所做的就是将一系列不确定高度的子组件装进一个确定高度的容器（通过滚动操作）。要给ScrollView一个确定的高度的话，要么直接给它设置高度（不建议），要么确定所有的父容器都有确定的高度。一般来说我们会给ScrollView设置`flex: 1`以使其自动填充父容器的空余空间，但前提条件是所有的父容器本身也设置了`flex`或者指定了高度，否则就会导致无法正常滚动，你可以使用元素查看器来查找具体哪一层高度不正确。

`ScrollView`内部的其他响应者尚无法阻止`ScrollView`本身成为响应者。

`ScrollView`和`FlatList`**应该如何选择？**

`ScrollView`会简单粗暴地把所有子元素一次性全部渲染出来。其原理浅显易懂，使用上自然也最简单。然而这样简单的渲染逻辑自然带来了性能上的不足。想象一下你有一个特别长的列表需要显示，可能有好几屏的高度。创建和渲染那些屏幕以外的`JS`组件和原生视图，显然对于渲染性能和内存占用都是一种极大的拖累和浪费。

这就是为什么我们还有专门的`FlatList`组件。`FlatList`会惰性渲染子元素，只在它们将要出现在屏幕中时开始渲染。这种惰性渲染逻辑要复杂很多，因而`API`在使用上也更为繁琐。除非你要渲染的数据特别少，否则你都应该尽量使用`FlatList`，哪怕它们用起来更麻烦。

此外`FlatList`还可以方便地渲染行间分隔线，支持多列布局，无限滚动加载等等。

### FlatList
[FlatList](https://reactnative.cn/docs/flatlist/)是一个高性能的简单列表组件，支持下面这些常用的功能：

1. 完全跨平台。
2. 支持水平布局模式。
3. 行组件显示或隐藏时可配置回调事件。
4. 支持单独的头部组件。
5. 支持单独的尾部组件。
6. 支持自定义行间分隔线。
7. 支持下拉刷新。
8. 支持上拉加载。
9. 支持跳转到指定行（`ScrollToIndex`）。
如果需要分组/类/区（`section`），请使用`<SectionList>.`

下面有些需要注意的事项：

1. 当某行滑出渲染区域之外后，其内部状态将不会保留。请确保你在行组件以外的地方保留了数据。
2. 本组件继承自`PureComponent`而非通常的`Component`，这意味着如果其`props`在浅比较中是相等的，则不会重新渲染。所以请先检查你的`renderItem`函数所依赖的`props`数据（包括`data`属性以及可能用到的父组件的 `state`），如果是一个引用类型（`Object` 或者`数组`都是引用类型），则需要先修改其引用地址（比如先复制到一个新的 `Object` 或者数组中），然后再修改其值，否则界面很可能不会刷新。（译注：这一段不了解的朋友建议先学习下`js` 中的`基本类型`和`引用类型`。）
3. 为了优化内存占用同时保持滑动的流畅，列表内容会在屏幕外异步绘制。这意味着如果用户滑动的速度超过渲染的速度，则会先看到空白的内容。这是为了优化不得不作出的妥协，你可以根据自己的需求调整相应的参数，而我们也在设法持续改进。
4. 默认情况下每行都需要提供一个不重复的 `key` 属性。你也可以提供一个`keyExtractor`函数来生成 `key`。

本组件如果嵌套在其他同滚动方向的 `FlatList` 中，则不会继承`ScrollView 的 Props`。

### SectionList
[SectionList](https://reactnative.cn/docs/sectionlist/)是一个高性能的分组(`section`)列表组件，支持下面这些常用的功能：

1. 完全跨平台。
2. 行组件显示或隐藏时可配置回调事件。
3. 支持单独的头部组件。
4. 支持单独的尾部组件。
5. 支持自定义行间分隔线。
6. 支持分组的头部组件。
7. 支持分组的分隔线。
8. 支持多种数据源结构
9. 支持下拉刷新。
10. 支持上拉加载。

注意事项与`FlatList`相同

### Button
[Button](https://reactnative.cn/docs/button/)是一个简单的跨平台的按钮组件。可以进行一些简单的定制。而且在两端显示的效果不一样，所以要么自己制作，要么用第三方。
我选了一款叫[react-native-button](https://yarnpkg.com/en/package/react-native-button)的第三方。

顺便加了个滑动控件玩了玩：[react-native-swipeout](https://yarnpkg.com/en/package/react-native-swipeout)

### TextInput
[TextInput](https://reactnative.cn/docs/textinput/)是一个允许用户在应用中通过键盘输入文本的基本组件。本组件的属性提供了多种特性的配置，譬如自动完成、自动大小写、占位文字，以及多种不同的键盘类型（如纯数字键盘）等等。

最简单的用法就是丢一个`TextInput`到应用里，然后订阅它的`onChangeText`事件来读取用户的输入。注意，从`TextInput`里取值这就是目前唯一的做法！也就是使用在`onChangeText`中用`setState`把用户的输入写入到`state`中，然后在需要取值的地方从`this.state`中取出值。

选中输入框后，键盘弹出，往往伴随着遮挡及释放响应的问题，但是这个组件不支持，我们还要另外的一个三方组件[react-native-keyboard-aware-scroll-view](https://yarnpkg.com/en/package/react-native-keyboard-aware-scroll-view)，实现键盘弹出后的页面上移，及点击空白处，键盘消失的功能。

### ActivityIndicator
[ActivityIndicator](https://reactnative.cn/docs/activityindicator/)显示一个圆形的 `loading 提示符号`。在`iOS`中是菊花。

这个可以根据项目需求寻找合适的控件。

### Picker
我在`Demo`里用了[DatePickerIOS](https://reactnative.cn/docs/datepickerios/)和[Picker](https://reactnative.cn/docs/picker/),前者只支持iOS,后者兼容，但是效果不同。

### TabBar
这个在Demo里展示的主要是用第三方[react-native-tab-navigator](https://yarnpkg.com/en/package/react-native-tab-navigator)实现的效果，但由于`react-navigation`已有创建`tabbar`的方法，所以最好还是用react-navigation的方法。

**React Navigation的文档中也提及了这个问题：**
>为什么我们需要 `TabNavigator` 而不是 `TabBarIOS `或其他组件？
>
>使用独立的 `tab bar `组件，而不将其集成到你在应用中使用的导航库中是很常见的。 在某些情况下，这没有任何问题！ 但是，你应该警告自己，在这样做时可能会遇到一些令人沮丧的意外问题。
>
>例如，`React Navigation` 的`TabNavigator`可以负责为您处理 `Android `返回按钮，而独立组件通常不会。 此外，如果你执行 “跳转到此 `Tab`, 然后转到此页面” 这种需要调用两个不同`API`的操作，将会更加困难。 最后，手机用户界面有许多小的设计细节，需要某些组件知道其他组件的布局或存在 — 例如，如果您有一个半透明的 `tab bar`，内容应该滚动到其下方，并且滚动视图的底部应该有一个等于 `tab bar` 高度的插图，以便您可以看到所有内容。 双击 `tab bar `应使活动导航堆栈弹出到堆栈顶部，再次双击时应将该堆栈中的当前滚动视图滚动到顶部。 尽管并非所有这些行为都是通过` React Navigation` 来实现的，但如果你使用独立的 `tab `视图组件，则也许不能进行这些操作。

### Swiper
Swiper的一个经典运用就是在首页头部作滚动视图(Banner)，用了一款叫[react-native-swiper](https://yarnpkg.com/en/package/react-native-swiper)的第三方。

### Webview
官方作出以下声明：
>
Warning Please use the [react-native-community/react-native-webview](https://github.com/react-native-community/react-native-webview) fork of this component instead. To reduce the surface area of React Native, <WebView/> is going to be removed from the React Native core. For more information, please read [The Slimmening proposal](https://github.com/react-native-community/discussions-and-proposals/issues/6).

>机翻：警告请使用此组件的react-native-community / react-native-webview fork。 为了减少React Native的表面积，将从React Native核心中删除<WebView />。 有关更多信息，请阅读Slimmening提案。

在Demo中也只是简单地做了一个加载网页的功能。