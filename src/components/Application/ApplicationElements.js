import styled from "styled-components";

export const AppContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: blueviolet;
`

export const Page = styled.div`
    display: flex;
    flex-direction: column;
    height: 800px;
    width: 800px;
    background-color: #EDEDED;
    border: 8px solid #D5D6E2;
`

export const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 600px;
    width: 80%;
    align-self: center;
    justify-self: center;
`

export const ProgressBar = styled.div`
    background-color: black;
    width: ${({prop}) => (prop*5)}%;
    height: 20px;
`

export const Heading = styled.h1`
    align-self: flex-start;
    justify-self: flex-start;
    margin-top: 30px;
    margin-bottom: 10px;
    font-size: 36px;
`

export const SubHeading = styled.p`
    align-self: flex-start;
    justify-self: flex-start;
    margin-top: 0px;
    font-size: 16px;
    font-weight: 500;
`

export const StarOne = styled.img`
    opacity: ${({show}) => (show ? "100%" : "0")};
    position: relative;
    top: 0px;
    left: 0px;
    height: 20px;
    width: 20px;
    cursor: pointer;
`

export const StarTwo = styled.img`
    opacity: ${({show}) => (show ? "100%" : "0")};
    position: relative;
    left: 30px;
    top: -20px;
    height: 20px;
    width: 20px;
    cursor: pointer;
`

export const StarThree = styled.img`
    opacity: ${({show}) => (show ? "100%" : "0")};
    position: relative;
    left: 60px;
    top: -40px;
    height: 20px;
    width: 20px;
    cursor: pointer;
`

export const StarNotOne = styled.img`
    position: relative;
    top: -60px;
    left: 0px;
    height: 20px;
    width: 20px;
    cursor: pointer;
`

export const StarNotTwo = styled.img`
    position: relative;
    left: 30px;
    top: -80px;
    height: 20px;
    width: 20px;
    cursor: pointer;
`

export const StarNotThree = styled.img`
    position: relative;
    left: 60px;
    top: -100px;
    height: 20px;
    width: 20px;
    cursor: pointer;
`

export const Question = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 130px;
    width: 100%;
    font-size: 24px;
    margin-top: -50px;
`

export const RowWrapper1 = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 50px;
`

export const RowWrapper2 = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 50px;
`

export const Choice1 = styled.input`
    background-color: brown;
    width: 300px;
    height: 60px;
    border: none;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    background-color: blueviolet;
    color: white;
    border-radius: 15px;
    font-weight: 600;
    cursor: pointer;
`

export const Choice2 = styled.input`
    background-color: brown;
    width: 300px;
    height: 60px;
    border: none;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    background-color: blueviolet;
    color: white;
    border-radius: 15px;
    font-weight: 600;
    cursor: pointer;
`

export const Choice3 = styled.input`
    display: ${({visible}) => (visible?"none":"flex")};
    width: 300px;
    height: 60px;
    border: none;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    background-color: blueviolet;
    color: white;
    border-radius: 15px;
    font-weight: 600;
    cursor: pointer;
`

export const Choice4 = styled.input`
    display: ${({visible}) => (visible?"none":"flex")};   
    width: 300px;
    height: 60px;
    border: none;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    background-color: blueviolet;
    color: white;
    border-radius: 15px;
    font-weight: 600;
    cursor: pointer; 
`

export const Score = styled.h2`
    font-size: 18px;
    font-weight: 600;
    margin-top: 20px;
`

export const ScoreWrapper = styled.div`
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const MaxScore = styled.h2`
    font-size: 18px;
    font-weight: 600;
    margin-top: 20px;
`

export const BarWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 200px;
    flex-direction: column;
`

export const MaxScoreBar = styled.div`
    position: relative;
    background-color: #D5D6E2;
    width: ${({prop}) => (prop)}%;
    height: 40px;
    bottom: 0px;
    left: 0px;
    z-index: 1;
    border-radius: 5px;
`

export const ScoreBar = styled.div`
    position: relative;
    background-color: #939093;
    width: ${({prop}) => (prop)}%;
    height: 40px;
    bottom: 40px;
    left: 0px;
    z-index: 2;
    border-radius: 5px;
`

export const LowestScoreBar = styled.div`
    position: relative;
    background-color: #000;
    width: ${({prop}) => (prop)}%;
    height: 40px;
    bottom: 80px;
    left: 0px;
    z-index: 3;
    border-radius: 5px;
`

export const Border = styled.div`
    position: relative;
    background-color: transparent;
    width: 99%;
    height: 35px;
    bottom: 120px;
    left: 0px;
    z-index: 4;
    border: 5px solid black;
    border-radius: 5px;
`