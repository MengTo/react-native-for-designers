import React from "react";
import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";
import CourseSection from "../components/CourseSection";
import Courses from "../components/Courses";
import { Dimensions } from "react-native";

let screenWidth = Dimensions.get("window").width;

class CoursesScreen extends React.Component {

  render() {
    return (
      <Container>
        <ScrollView>
          <Hero>
            <Background source={require("../assets/background12.jpg")} />
            <LinearGradient
              colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.5)"]}
              style={{ position: "absolute", width: screenWidth, height: 460 }}
            />
            <Logo source={require("../assets/logo-react.png")} />
            <Caption>12 Sections</Caption>
            <Title>React Native for Designers</Title>
            <Sections>
              <SectionScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {sections.map((section, index) => (
                  <CourseSection
                    key={index}
                    title={section.title}
                    image={section.image}
                    progress={section.progress}
                  />
                ))}
              </SectionScrollView>
            </Sections>
            <Author>
              <Avatar source={require("../assets/avatar.jpg")} />
              <Name>Taught by Meng To</Name>
            </Author>
          </Hero>
          <Subtitle>Latest Courses</Subtitle>
          <Courses />
        </ScrollView>
      </Container>
    );
  }
}

export default CoursesScreen;

const Container = styled.View`
  background: #f0f3f5;
`;

const ScrollView = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

const Hero = styled.View`
  height: 460px;
  background: #3c4560;
`;

const Background = styled.Image`
  position: absolute;
  top: 0;
  left: 0;
  width: ${screenWidth}px;
  height: 460px;
`;

const Logo = styled.Image`
  width: 48px;
  height: 48px;
  margin-top: 50px;
  margin-left: 20px;
  align-self: center;
`;

const Caption = styled.Text`
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  color: #b8bece;
  margin-top: 20px;
  margin-left: 20px;
`;

const Title = styled.Text`
  font-size: 32px;
  color: white;
  font-weight: 600;
  margin-top: 4px;
  margin-left: 20px;
  width: 220px;
`;

const Sections = styled.View`
  margin-top: 20px;
  flex-direction: row;
`;

const SectionScrollView = styled.ScrollView`
  padding: 10px 0;
`;

const Author = styled.View`
  flex-direction: row;
  margin-top: 10px;
  align-items: center;
  margin-left: 20px;
`;

const Avatar = styled.Image`
  width: 22px;
  height: 22px;
  border-radius: 11px;
  background: white;
`;

const Name = styled.Text`
  margin-left: 8px;
  color: #b8bece;
`;

const Subtitle = styled.Text`
  font-size: 15px;
  text-transform: uppercase;
  font-weight: 600;
  color: #b8bece;
  margin: 20px 0 0 20px;
`;

const sections = [
  {
    title: "React Native for Designers",
    progress: 0.2,
    image: require("../assets/background1.jpg")
  },
  {
    title: "Styled Components",
    progress: 0.3,
    image: require("../assets/background2.jpg")
  },
  {
    title: "Assets, Icons and SVG",
    progress: 0.9,
    image: require("../assets/background3.jpg")
  },
  {
    title: "Props and Data",
    progress: 0.5,
    image: require("../assets/background4.jpg")
  },
  {
    title: "States and Layout Animation",
    progress: 0.1,
    image: require("../assets/background6.jpg")
  }
];
