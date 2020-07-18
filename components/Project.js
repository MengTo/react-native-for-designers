import React from "react";
import styled from "styled-components";
import {
  Animated,
  TouchableWithoutFeedback,
  Dimensions,
  StatusBar,
  TouchableOpacity
} from "react-native";
import * as Icon from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    action: state.action
  };
}

function mapDispatchToProps(dispatch) {
  return {
    openCard: () =>
      dispatch({
        type: "OPEN_CARD"
      }),
    closeCard: () =>
      dispatch({
        type: "CLOSE_CARD"
      })
  };
}

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const tabBarHeight = 83;

class Project extends React.Component {
  state = {
    cardWidth: new Animated.Value(315),
    cardHeight: new Animated.Value(460),
    titleTop: new Animated.Value(20),
    opacity: new Animated.Value(0),
    textHeight: new Animated.Value(100)
  };

  openCard = () => {
    if (!this.props.canOpen) return;

    Animated.spring(this.state.cardWidth, { toValue: screenWidth, useNativeDriver: false}).start();
    Animated.spring(this.state.cardHeight, {
      toValue: screenHeight - tabBarHeight,
      useNativeDriver: false,
    }).start();
    Animated.spring(this.state.titleTop, { toValue: 40, useNativeDriver: false,  }).start();
    Animated.timing(this.state.opacity, { toValue: 1, useNativeDriver: false,  }).start();
    Animated.spring(this.state.textHeight, { toValue: 1000, useNativeDriver: false,  }).start();

    StatusBar.setHidden(true);
    this.props.openCard();
  };

  closeCard = () => {
    Animated.spring(this.state.cardWidth, { toValue: 315, useNativeDriver: false,  }).start();
    Animated.spring(this.state.cardHeight, {
      toValue: 460,
      useNativeDriver: false,
    }).start();
    Animated.spring(this.state.titleTop, { toValue: 20, useNativeDriver: false,  }).start();
    Animated.timing(this.state.opacity, { toValue: 0, useNativeDriver: false,  }).start();
    Animated.spring(this.state.textHeight, { toValue: 100, useNativeDriver: false,  }).start();

    StatusBar.setHidden(false);
    this.props.closeCard();
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.openCard}>
        <AnimatedContainer
          style={{ width: this.state.cardWidth, height: this.state.cardHeight }}
        >
          <Cover>
            <Image source={this.props.image} />
            <AnimatedTitle style={{ top: this.state.titleTop }}>
              {this.props.title}
            </AnimatedTitle>
            <Author>by {this.props.author}</Author>
          </Cover>
          <AnimatedText style={{ height: this.state.textHeight }}>
            {this.props.text}
          </AnimatedText>
          <AnimatedLinearGradient
            colors={["rgba(255,255,255, 0)", "rgba(255,255,255, 1)"]}
            style={{
              position: "absolute",
              top: 330,
              width: "100%",
              height: this.state.textHeight
            }}
          />
          <TouchableOpacity
            style={{ position: "absolute", top: 20, right: 20 }}
            onPress={this.closeCard}
          >
            <AnimatedCloseView style={{ opacity: this.state.opacity }}>
              <Icon.Ionicons name="ios-close" size={32} color="#546bfb" />
            </AnimatedCloseView>
          </TouchableOpacity>
        </AnimatedContainer>
      </TouchableWithoutFeedback>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Project);

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

const CloseView = styled.View`
  width: 32px;
  height: 32px;
  background: white;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
`;

const AnimatedCloseView = Animated.createAnimatedComponent(CloseView);

const Container = styled.View`
  width: 315px;
  height: 460px;
  border-radius: 14px;
  background-color: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
  height: 290px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;

const Image = styled.Image`
  width: 100%;
  height: 290px;
`;

const Title = styled.Text`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 24px;
  font-weight: bold;
  color: white;
  width: 300px;
`;

const AnimatedTitle = Animated.createAnimatedComponent(Title);

const Author = styled.Text`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
`;

const Text = styled.Text`
  font-size: 17px;
  margin: 20px;
  line-height: 24px;
  color: #3c4560;
`;

const AnimatedText = Animated.createAnimatedComponent(Text);
