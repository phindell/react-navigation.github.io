(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[1047],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},99333:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var a=n(74034),i=n(79973),o=(n(67294),n(3905)),r={id:"navigation-prop",title:"Navigation prop reference",sidebar_label:"Navigation prop"},s={unversionedId:"navigation-prop",id:"version-6.x/navigation-prop",isDocsHomePage:!1,title:"Navigation prop reference",description:"Each screen component in your app is provided with the navigation prop automatically. The prop contains various convenience functions that dispatch navigation actions. It looks like this:",source:"@site/versioned_docs/version-6.x/navigation-prop.md",sourceDirName:".",slug:"/navigation-prop",permalink:"/docs/navigation-prop",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/navigation-prop.md",version:"6.x",sidebar_label:"Navigation prop",frontMatter:{id:"navigation-prop",title:"Navigation prop reference",sidebar_label:"Navigation prop"},sidebar:"version-6.x/docs",previous:{title:"Route prop reference",permalink:"/docs/route-prop"},next:{title:"NavigationContext",permalink:"/docs/navigation-context"}},l=[{value:"Navigator-dependent functions",id:"navigator-dependent-functions",children:[]},{value:"Common API reference",id:"common-api-reference",children:[{value:"<code>navigate</code>",id:"navigate",children:[]},{value:"<code>goBack</code>",id:"goback",children:[]},{value:"<code>reset</code>",id:"reset",children:[]},{value:"<code>setParams</code>",id:"setparams",children:[]},{value:"<code>setOptions</code>",id:"setoptions",children:[]}]},{value:"Navigation events",id:"navigation-events",children:[{value:"<code>isFocused</code>",id:"isfocused",children:[]}]},{value:"Advanced API Reference",id:"advanced-api-reference",children:[{value:"<code>dispatch</code>",id:"dispatch",children:[]},{value:"<code>getParent</code>",id:"getparent",children:[]},{value:"<code>getState</code>",id:"getstate",children:[]}]}],p={toc:l};function c(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Each ",(0,o.kt)("inlineCode",{parentName:"p"},"screen")," component in your app is provided with the ",(0,o.kt)("inlineCode",{parentName:"p"},"navigation")," prop automatically. The prop contains various convenience functions that dispatch navigation actions. It looks like this:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"navigation"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"navigate")," - go to another screen, figures out the action it needs to take to do it"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"reset")," - wipe the navigator state and replace it with a new route"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"goBack")," - close active screen and move back in the stack"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setParams")," - make changes to route's params"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"dispatch")," - send an action object to update the ",(0,o.kt)("a",{parentName:"li",href:"/docs/navigation-state"},"navigation state")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setOptions")," - update the screen's options"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"isFocused")," - check whether the screen is focused"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"addListener")," - subscribe to updates to events from the navigators")))),(0,o.kt)("p",null,"It's important to highlight the ",(0,o.kt)("inlineCode",{parentName:"p"},"navigation")," prop is ",(0,o.kt)("em",{parentName:"p"},"not")," passed in to ",(0,o.kt)("em",{parentName:"p"},"all")," components; only ",(0,o.kt)("inlineCode",{parentName:"p"},"screen")," components receive this prop automatically! React Navigation doesn't do any magic here. For example, if you were to define a ",(0,o.kt)("inlineCode",{parentName:"p"},"MyBackButton")," component and render it as a child of a screen component, you would not be able to access the ",(0,o.kt)("inlineCode",{parentName:"p"},"navigation")," prop on it. If, however, you wish to access the ",(0,o.kt)("inlineCode",{parentName:"p"},"navigation")," prop in any of your components, you may use the ",(0,o.kt)("a",{parentName:"p",href:"/docs/use-navigation"},(0,o.kt)("inlineCode",{parentName:"a"},"useNavigation"))," hook."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"setParams"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"setOptions")," etc. should only be called in ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"useLayoutEffect"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"componentDidMount"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"componentDidUpdate")," etc. Not during render or in constructor.")),(0,o.kt)("h3",{id:"navigator-dependent-functions"},"Navigator-dependent functions"),(0,o.kt)("p",null,"There are several additional functions present on ",(0,o.kt)("inlineCode",{parentName:"p"},"navigation")," prop based on the kind of the current navigator."),(0,o.kt)("p",null,"If the navigator is a stack navigator, several alternatives to ",(0,o.kt)("inlineCode",{parentName:"p"},"navigate")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"goBack")," are provided and you can use whichever you prefer. The functions are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"navigation"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"replace")," - replace the current route with a new one"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"push")," - push a new route onto the stack"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pop")," - go back in the stack"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"popToTop")," - go to the top of the stack")))),(0,o.kt)("p",null,"If the navigator is a tab navigator, the following are also available:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"navigation"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"jumpTo")," - go to a specific screen in the tab navigator")))),(0,o.kt)("p",null,"If the navigator is a drawer navigator, the following are also available:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"navigation"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"jumpTo")," - go to a specific screen in the drawer navigator"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"openDrawer")," - open the drawer"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"closeDrawer")," - close the drawer"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"toggleDrawer")," - toggle the state, ie. switch from closed to open and vice versa")))),(0,o.kt)("p",null,"You can find more details about navigator dependent functions in the documentation for the navigator that you're using."),(0,o.kt)("h2",{id:"common-api-reference"},"Common API reference"),(0,o.kt)("p",null,"The vast majority of your interactions with the ",(0,o.kt)("inlineCode",{parentName:"p"},"navigation")," prop will involve ",(0,o.kt)("inlineCode",{parentName:"p"},"navigate"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"goBack"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"setParams"),"."),(0,o.kt)("h3",{id:"navigate"},(0,o.kt)("inlineCode",{parentName:"h3"},"navigate")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"navigate")," method lets us navigate to another screen in your app. It takes the following arguments:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"navigation.navigate(name, params)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name")," - A destination name of the route that has been defined somewhere"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"params")," - Params to pass to the destination route.")),(0,o.kt)("samp",{id:"navigate"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function HomeScreen({ navigation: { navigate } }) {\n  return (\n    <View>\n      <Text>This is the home screen of the app</Text>\n      <Button\n        onPress={() =>\n          navigate('Profile', { names: ['Brent', 'Satya', 'Micha\u015b'] })\n        }\n        title=\"Go to Brent's profile\"\n      />\n    </View>\n  );\n}\n")),(0,o.kt)("p",null,"In a ",(0,o.kt)("a",{parentName:"p",href:"/docs/native-stack-navigator"},"native stack navigator"),", calling ",(0,o.kt)("inlineCode",{parentName:"p"},"navigate")," with a screen name will result in different behavior based on if the screen is already present or not. If the screen is already present in the stack's history, it'll go back to that screen and remove any screens after that. If the screen is not present, it'll push a new screen."),(0,o.kt)("p",null,"For example, if you have a stack with the history ",(0,o.kt)("inlineCode",{parentName:"p"},"Home > Profile > Settings")," and you call ",(0,o.kt)("inlineCode",{parentName:"p"},"navigate(Profile)"),", the resulting screens will be ",(0,o.kt)("inlineCode",{parentName:"p"},"Home > Profile")," as it goes back to ",(0,o.kt)("inlineCode",{parentName:"p"},"Profile")," and removes the ",(0,o.kt)("inlineCode",{parentName:"p"},"Settings")," screen."),(0,o.kt)("p",null,"By default, the screen is identified by its name. But you can also customize it to take the params into account by using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/screen#getid"},(0,o.kt)("inlineCode",{parentName:"a"},"getId"))," prop."),(0,o.kt)("p",null,"For example, say you have specified a ",(0,o.kt)("inlineCode",{parentName:"p"},"getId")," prop for ",(0,o.kt)("inlineCode",{parentName:"p"},"Profile")," screen:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<Tab.Screen name={Profile} component={ProfileScreen} getId={({ params }) => params.userId} />\n")),(0,o.kt)("p",null,"Now, if you have a stack with the history ",(0,o.kt)("inlineCode",{parentName:"p"},"Home > Profile (userId: bob) > Settings")," and you call ",(0,o.kt)("inlineCode",{parentName:"p"},"navigate(Profile, { userId: 'alice' })"),", the resulting screens will be ",(0,o.kt)("inlineCode",{parentName:"p"},"Home > Profile (userId: bob) > Settings > Profile (userId: alice)")," since it'll add a new ",(0,o.kt)("inlineCode",{parentName:"p"},"Profile")," screen as no matching screen was found."),(0,o.kt)("h3",{id:"goback"},(0,o.kt)("inlineCode",{parentName:"h3"},"goBack")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"goBack")," method lets us go back to the previous screen in the navigator."),(0,o.kt)("p",null,"By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"goBack")," will go back from the screen that it is called from:"),(0,o.kt)("samp",{id:"navigate"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function ProfileScreen({ navigation: { goBack } }) {\n  return (\n    <View>\n      <Button onPress={() => goBack()} title="Go back from ProfileScreen" />\n    </View>\n  );\n}\n')),(0,o.kt)("h4",{id:"going-back-from-a-specific-screen"},"Going back from a specific screen"),(0,o.kt)("p",null,"Consider the following navigation stack history:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"navigation.navigate({ name: SCREEN, key: SCREEN_KEY_A });\nnavigation.navigate({ name: SCREEN, key: SCREEN_KEY_B });\nnavigation.navigate({ name: SCREEN, key: SCREEN_KEY_C });\nnavigation.navigate({ name: SCREEN, key: SCREEN_KEY_D });\n")),(0,o.kt)("p",null,"Now you are on ",(0,o.kt)("em",{parentName:"p"},"screen D")," and want to go back to ",(0,o.kt)("em",{parentName:"p"},"screen A")," (popping D, C, and B).\nThen you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"navigate"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"navigation.navigate({ key: SCREEN_KEY_A }); // will go to screen A FROM screen D\n")),(0,o.kt)("p",null,"Alternatively, as ",(0,o.kt)("em",{parentName:"p"},"screen A")," is the top of the stack, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"navigation.popToTop()"),"."),(0,o.kt)("h3",{id:"reset"},(0,o.kt)("inlineCode",{parentName:"h3"},"reset")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"reset")," method lets us replace the navigator state with a new state:"),(0,o.kt)("samp",{id:"navigate-replace-reset"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"navigation.reset({\n  index: 0,\n  routes: [{ name: 'Profile' }],\n});\n")),(0,o.kt)("p",null,"The state object specified in ",(0,o.kt)("inlineCode",{parentName:"p"},"reset")," replaces the existing ",(0,o.kt)("a",{parentName:"p",href:"/docs/navigation-state"},"navigation state")," with the new one, i.e. removes existing screens and add new ones. If you want to preserve the existing screens when changing the state, you can use ",(0,o.kt)("a",{parentName:"p",href:"/docs/navigation-actions#reset"},(0,o.kt)("inlineCode",{parentName:"a"},"CommonActions.reset"))," with ",(0,o.kt)("a",{parentName:"p",href:"#dispatch"},(0,o.kt)("inlineCode",{parentName:"a"},"dispatch"))," instead."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: Consider the navigator's state object to be internal and subject to change in a minor release. Avoid using properties from the ",(0,o.kt)("a",{parentName:"p",href:"/docs/navigation-state"},"navigation state")," object except ",(0,o.kt)("inlineCode",{parentName:"p"},"index")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"routes"),", unless you really need it. If there is some functionality you cannot achieve without relying on the structure of the state object, please open an issue.")),(0,o.kt)("h3",{id:"setparams"},(0,o.kt)("inlineCode",{parentName:"h3"},"setParams")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"setParams")," method lets us update the params (",(0,o.kt)("inlineCode",{parentName:"p"},"route.params"),") of the current screen. ",(0,o.kt)("inlineCode",{parentName:"p"},"setParams")," works like React's ",(0,o.kt)("inlineCode",{parentName:"p"},"setState")," - it shallow merges the provided params object with the current params."),(0,o.kt)("samp",{id:"navigate-set-params"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function ProfileScreen({ navigation: { setParams } }) {\n  return (\n    <Button\n      onPress={() =>\n        setParams({\n          friends:\n            route.params.friends[0] === 'Brent'\n              ? ['Wojciech', 'Szymon', 'Jakub']\n              : ['Brent', 'Satya', 'Micha\u015b'],\n          title:\n            route.params.title === \"Brent's Profile\"\n              ? \"Lucy's Profile\"\n              : \"Brent's Profile\",\n        })\n      }\n      title=\"Swap title and friends\"\n    />\n  );\n}\n")),(0,o.kt)("h3",{id:"setoptions"},(0,o.kt)("inlineCode",{parentName:"h3"},"setOptions")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"setOptions")," method lets us set screen options from within the component. This is useful if we need to use the component's props, state or context to configure our screen."),(0,o.kt)("samp",{id:"navigate-set-options"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function ProfileScreen({ navigation, route }) {\n  const [value, onChangeText] = React.useState(route.params.title);\n\n  React.useLayoutEffect(() => {\n    navigation.setOptions({\n      title: value === '' ? 'No title' : value,\n    });\n  }, [navigation, value]);\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <TextInput\n        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}\n        onChangeText={onChangeText}\n        value={value}\n      />\n      <Button title=\"Go back\" onPress={() => navigation.goBack()} />\n    </View>\n  );\n}\n")),(0,o.kt)("p",null,"Any options specified here are shallow merged with the options specified when defining the screen."),(0,o.kt)("h2",{id:"navigation-events"},"Navigation events"),(0,o.kt)("p",null,"Screens can add listeners on the ",(0,o.kt)("inlineCode",{parentName:"p"},"navigation")," prop with the ",(0,o.kt)("inlineCode",{parentName:"p"},"addListener")," method. For example, to listen to the ",(0,o.kt)("inlineCode",{parentName:"p"},"focus")," event:"),(0,o.kt)("samp",{id:"simple-focus-and-blur"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function Profile({ navigation }) {\n  React.useEffect(() => {\n    const unsubscribe = navigation.addListener('focus', () => {\n      // do something\n    });\n\n    return unsubscribe;\n  }, [navigation]);\n\n  return <ProfileContent />;\n}\n")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/navigation-events"},"Navigation events")," for more details on the available events and the API usage."),(0,o.kt)("h3",{id:"isfocused"},(0,o.kt)("inlineCode",{parentName:"h3"},"isFocused")),(0,o.kt)("p",null,"This method lets us check whether the screen is currently focused. Returns ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if the screen is focused and ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const isFocused = navigation.isFocused();\n")),(0,o.kt)("p",null,"This method doesn't re-render the screen when the value changes and mainly useful in callbacks. You probably want to use ",(0,o.kt)("a",{parentName:"p",href:"/docs/use-is-focused"},"useIsFocused")," instead of using this directly, it will return a boolean a prop to indicating if the screen is focused."),(0,o.kt)("h2",{id:"advanced-api-reference"},"Advanced API Reference"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatch")," function is much less commonly used, but a good escape hatch if you can't do what you need with the available methods such as ",(0,o.kt)("inlineCode",{parentName:"p"},"navigate"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"goBack")," etc. We recommend to avoid using the ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatch")," method often unless absolutely necessary."),(0,o.kt)("h3",{id:"dispatch"},(0,o.kt)("inlineCode",{parentName:"h3"},"dispatch")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatch")," method lets us send a navigation action object which determines how the ",(0,o.kt)("a",{parentName:"p",href:"/docs/navigation-state"},"navigation state")," will be updated. All of the navigation functions like ",(0,o.kt)("inlineCode",{parentName:"p"},"navigate")," use ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatch")," behind the scenes."),(0,o.kt)("p",null,"Note that if you want to dispatch actions you should use the action creators provided in this library instead of writing the action object directly."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/navigation-actions"},"Navigation Actions Docs")," for a full list of available actions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { CommonActions } from '@react-navigation/native';\n\nnavigation.dispatch(\n  CommonActions.navigate({\n    name: 'Profile',\n    params: {},\n  })\n);\n")),(0,o.kt)("p",null,"When dispatching action objects, you can also specify few additional properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"source")," - The key of the route which should be considered as the source of the action. For example, the ",(0,o.kt)("inlineCode",{parentName:"li"},"replace")," action will replace the route with the given key. By default, it'll use the key of the route that dispatched the action. You can explicitly pass ",(0,o.kt)("inlineCode",{parentName:"li"},"undefined")," to override this behavior."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"target")," - The key of the ",(0,o.kt)("a",{parentName:"li",href:"/docs/navigation-state"},"navigation state")," the action should be applied on. By default, actions bubble to other navigators if not handled by a navigator. If ",(0,o.kt)("inlineCode",{parentName:"li"},"target")," is specified, the action won't bubble if the navigator with the same key didn't handle it.")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { CommonActions } from '@react-navigation/native';\n\nnavigation.dispatch({\n  ...CommonActions.navigate('Profile'),\n  source: 'someRoutekey',\n  target: 'someStatekey',\n});\n")),(0,o.kt)("h4",{id:"custom-action-creators"},"Custom action creators"),(0,o.kt)("p",null,"It's also possible to pass a action creator function to ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatch"),". The function will receive the current state and needs to return a navigation action object to use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { CommonActions } from '@react-navigation/native';\n\nnavigation.dispatch((state) => {\n  // Add the home route to the start of the stack\n  const routes = [{ name: 'Home' }, ...state.routes];\n\n  return CommonActions.reset({\n    ...state,\n    routes,\n    index: routes.length - 1,\n  });\n});\n")),(0,o.kt)("p",null,"You can use this functionality to build your own helpers that you can utilize in your app. Here is an example which implements inserting a screen just before the last one:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { CommonActions } from '@react-navigation/native';\n\nconst insertBeforeLast = (routeName, params) => (state) => {\n  const routes = [\n    ...state.routes.slice(0, -1),\n    { name: routeName, params },\n    state.routes[state.routes.length - 1],\n  ];\n\n  return CommonActions.reset({\n    ...state,\n    routes,\n    index: routes.length - 1,\n  });\n};\n")),(0,o.kt)("p",null,"Then use it like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"navigation.dispatch(insertBeforeLast('Home'));\n")),(0,o.kt)("h3",{id:"getparent"},(0,o.kt)("inlineCode",{parentName:"h3"},"getParent")),(0,o.kt)("p",null,"This method returns the navigation prop from the parent navigator that the current navigator is nested in. For example, if you have a stack navigator and a tab navigator nested inside the stack, then you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"getParent")," inside a screen of the tab navigator to get the navigation prop passed from the stack navigator."),(0,o.kt)("p",null,"This method will return ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," if there is no parent navigator. Be sure to always check for ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," when using this method."),(0,o.kt)("h3",{id:"getstate"},(0,o.kt)("inlineCode",{parentName:"h3"},"getState")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: Consider the navigator's state object to be internal and subject to change in a minor release. Avoid using properties from the ",(0,o.kt)("a",{parentName:"p",href:"/docs/navigation-state"},"navigation state")," object except ",(0,o.kt)("inlineCode",{parentName:"p"},"index")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"routes"),", unless you really need it. If there is some functionality you cannot achieve without relying on the structure of the state object, please open an issue.")),(0,o.kt)("p",null,"This method returns the state object of the navigator which contains the screen. Getting the navigator state could be useful in very rare situations. You most likely don't need to use this method. If you do, make sure you have a good reason."),(0,o.kt)("p",null,"If you need the state for rendering content, you should use ",(0,o.kt)("a",{parentName:"p",href:"/docs/use-navigation-state"},(0,o.kt)("inlineCode",{parentName:"a"},"useNavigationState"))," instead of this method."))}c.isMDXComponent=!0}}]);