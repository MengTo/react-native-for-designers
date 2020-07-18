import React from "react";
import styled from "styled-components";
import {
  ScrollView,
  SafeAreaView,
  Animated,
  TouchableOpacity,
  Dimensions
} from "react-native";
import * as Icon from '@expo/vector-icons';
import { connect } from "react-redux";

let screenWidth = Dimensions.get("window").width;
let cardWith = screenWidth - 40;
if (screenWidth > 500) {
  cardWith = 460;
}

function mapStateToProps(state) {
  return { action: state.action };
}

function mapDispatchToProps(dispatch) {
  return {
    closeNotif: () =>
      dispatch({
        type: "CLOSE_NOTIF"
      })
  };
}

class Notifications extends React.Component {
  state = {
    translateY: new Animated.Value(30),
    opacity: new Animated.Value(0),
    top: new Animated.Value(3000)
  };

  componentDidUpdate = () => {
    this.toggleNotif();
  };

  toggleNotif = () => {
    if (this.props.action === "openNotif") {
      Animated.parallel([
        Animated.spring(this.state.translateY, {
          toValue: 0,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.opacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.top, {
          toValue: 0,
          duration: 0,
          useNativeDriver: false,
        })
      ]).start();
    }

    if (this.props.action === "closeNotif") {
      Animated.parallel([
        Animated.spring(this.state.translateY, {
          toValue: 30,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.opacity, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.top, {
          toValue: 3000,
          duration: 0,
          useNativeDriver: false,
        })
      ]).start();
    }
  };

  render() {
    return (
      <AnimatedContainer style={{ top: this.state.top }}>
        <TouchableOpacity
          onPress={this.props.closeNotif}
          style={{
            position: "absolute",
            top: 40,
            left: "50%",
            marginLeft: -22,
            zIndex: 100
          }}
        >
          <CloseButton style={{ elevation: 20 }}>
            <Icon.Ionicons name="ios-close" size={44} color="#546bfb" />
          </CloseButton>
        </TouchableOpacity>
        <SafeAreaView>
          <ScrollView style={{ padding: 20 }}>
            <Wrapper>
              <Subtitle>New</Subtitle>
              {items.map((item, index) => (
                <AnimatedItem
                  key={index}
                  style={{
                    opacity: this.state.opacity,
                    transform: [{ translateY: this.state.translateY }]
                  }}
                >
                  <Header>
                    <Logo source={{ uri: item.logo }} resizeMode="contain" />
                    <Title>{item.title}</Title>
                    <DateContainer>
                      <Date>{item.date}</Date>
                    </DateContainer>
                  </Header>
                  <Text>{item.text}</Text>
                </AnimatedItem>
              ))}
            </Wrapper>
          </ScrollView>
        </SafeAreaView>
      </AnimatedContainer>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notifications);

const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background: #f0f3f5;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const CloseButton = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background: white;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const Wrapper = styled.View`
  align-self: center;
  width: ${cardWith}px;
  padding-top: 50px;
`;

const Subtitle = styled.Text`
  font-size: 15px;
  text-transform: uppercase;
  font-weight: 600;
  color: #b8bece;
`;

const Item = styled.View`
  width: 100%;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  margin-top: 20px;
`;

const AnimatedItem = Animated.createAnimatedComponent(Item);

const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Logo = styled.Image`
  width: 24px;
  height: 24px;
`;

const DateContainer = styled.View`
  background: #4775f2;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  padding: 0 8px;
  height: 20px;
  position: absolute;
  top: 0px;
  right: 0px;
`;

const Date = styled.Text`
  color: white;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
`;

const Title = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
  margin-left: 8px;
`;

const Text = styled.Text`
  font-size: 17px;
  color: #3c4560;
  margin-top: 20px;
  line-height: 24px;
`;

const items = [
  {
    logo: "https://cl.ly/a4d00a918f39/download/logo-vue.png",
    title: "Vue.js for Designers",
    text:
      "Make a dashboard web-app with a complete login system, dark mode, and animated charts for your data.",
    date: "23 Jan"
  },
  {
    logo: "https://cl.ly/5c470805a500/download/logo-invision.png",
    title: "InVision Studio",
    text:
      "Learn how to prototype interactions directly in the design tool in this 10-section course.",
    date: "27 Nov"
  },
  {
    logo: "https://cl.ly/cc8368bef551/download/logo-framerx.png",
    title: "Framer X",
    text: "Create production-ready React components right in the design tool.",
    date: "26 SEP"
  },
  {
    logo: "https://cl.ly/c01bb29804bd/download/logo-figma.png",
    title: "Design System",
    text:
      "Complete guide to designing a site using a collaborative and powerful design system.",
    date: "4 SEP"
  }
];
