import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import vitalik from '../../images/vitalik.png';

import "../fonts.css"

const H1 = styled.h1`
  font-family: "roobert_bold", sans-serif;
  letter-spacing: -0.2px;
  line-height: 1;
  font-size: 64px;
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
  color: #0a1a5d;

  @media (max-width: 500px) {
    font-size: 36px;
    padding-top: 40px;
  }
`

const P = styled.p`
  font-family: "roobert_medium", sans-serif;
  font-size: 22px;
  max-width: 550px;
  margin: 15px auto 15px;
  line-height: 1.3;
  opacity: 0.7;
  color: #0a1a5d;

  @media (max-width: 500px) {
    font-size: 18px;
  }
`

const Container = styled.section`
  text-align: center;
  position: relative;
  z-index: 999;

  @media (max-width: 500px) {
    padding-bottom: 60px;
  }
`

const StatsContainer = styled.div`
  padding: 30px;
  margin: 0 auto;
  background-color: white;
  border-radius: 20px;
  margin-bottom: 30px;
  margin-top: 30px;
`
const StarterContainer = styled.div`
  min-height: 367px;
`

const LearnButton = styled(Link)`
  font-family: "roobert_semibold", sans-serif;
  letter-spacing: -0.2px;
  font-size: 18px;
  text-decoration: none;
  margin: 15px auto 0px;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 220px;
  border-radius: 50px;
  height: 50px;
  box-shadow: 0 17px 20px -5px rgba(12, 32, 117, 0.2);
  transition: all 0.2s ease;
  background-color: white;
  color: #0a1a5d;
  overflow: hidden;

  &:hover {
    outline: none;
    cursor: pointer;
    transform: translateY(-2px);
    border: 0;
    box-shadow: 0 17px 20px -5px rgba(12, 32, 117, 0.3);
    transition: all 0.2s ease;
  }

  &:active {
    transform: scale(0.97);
    transition: transform 0.2s ease;
  }
`
const CardContainer = styled.div`
  display: flex;
`

const Card = styled.div`
  margin: 1.5em;
  width: 250px;
  background: white;
  border-radius: 1em;
  box-shadow: 0px 0px 15px #000;
  padding: 2em;
`
const CardTitle = styled.div`
  font-size:1.1em;
  font-weight:600;
`
const CardText = styled.div`
  font-size:0.9em;
  font-weight: 300;
`
const Avatar = styled.div`
  width: 90px;
  height: 90px;
  margin: 0.4em auto 1em auto;
  border-radius:100%;
  background-size: cover;
`

const PriestList = [
  {
    name: "Vitalik",
    avatar: "vitalik.png",
    text: "Vitalik, impress. Happy, clapping, Vitalik is impress",
    projects: ["rdai", "tornado", "moloch"]
  },
  {
    name: "Vitalik",
    avatar: "vitalik.png",
    text: "Vitalik, impress. Happy, clapping, Vitalik is impress",
    projects: ["rdai", "tornado", "moloch"]
  }
]

const cardMap = PriestList.map(item => {
  return(
    <Card>
      <Avatar
        style={{ backgroundImage: `url(${require("../../images/" + item.avatar)})` }}
      />
      <CardTitle>{ item.name }</CardTitle>
      <CardText>{ item.text }</CardText>
    </Card>
  )
})

const MainPage = () => {
  const updateStats = async () => {
    // do stuff
  }

  useEffect(() => {
    updateStats()
  }, [])

  return (
    <Container>
      <H1>High Priests</H1>
      <P>
        Donate to Open Source the interest your DAI generates<br />
        Help fund teams building public goods on Ethereum <br />
        You can stop donating at any time.
      </P>
      <LearnButton to="/about">Learn how it works</LearnButton>
      <StarterContainer>
        <CardContainer>
          { cardMap }
        </CardContainer>
      </StarterContainer>
      <StatsContainer></StatsContainer>
    </Container>
  )
}

export default MainPage
