import { useState, useReducer } from "react";
import Header from "../components/Header";
import Funnel from "../components/Funnel";
import styled from "styled-components";

import SelectType from "../components/SelectType";
import ThingType1 from "../components/ThingType1";
import ThingType2 from "../components/ThingType2";
import ThingType3 from "../components/ThingType3";
import ThingTypeResult from "../components/ThingTypeResult";
import Counter from "../components/Counter";
import RandomResult from "../components/RandomResult";
import CheckType from "../components/CheckType";

const MainPage = () => {
  const [page, setPage] = useState(0);
  const [type, setType] = useState<"Thing" | "Random" | "Default">("Default");
  // const [countryType, setCountryType] = useState<
  //   "Japan" | "Korea" | "Chinese" | "Default"
  // >("Default");
  // const [ingredients, setIngredients] = useState<
  //   "meat" | "seafood" | "etc" | "Default"
  // >("Default");
  // const [fried, setFried] = useState<"fried" | "nonFried" | "default">(
  //   "default"
  // );
  const initialState = {
    countryType: "",
    ingredient: "",
    fried: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "setCountry": {
        return {
          ...state,
          countryType: state.value,
        };
      }
      case "setIngredient": {
        return {
          ...state,
          ingredient: state.value,
        };
      }
      case "setFried": {
        return {
          ...state,
          fried: state.value,
        };
      }
      case "reset": {
        return { ...initialState };
      }
    }
    throw Error("Unknown action:" + action.type);
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(page);

  const setCountry = (e: React.MouseEvent<HTMLInputElement>) => {
    dispatch({ type: "setCountry", value: e.currentTarget.value });
  };
  const setIngredient = (e: React.MouseEvent<HTMLInputElement>) => {
    dispatch({ type: "setIngredient", value: e.currentTarget.value });
  };
  const setFried = (e: React.MouseEvent<HTMLInputElement>) => {
    dispatch({ type: "setFried", value: e.currentTarget.value });
  };
  return (
    <MainPageWrapper>
      <Header page={page} setType={setType} setPage={setPage}></Header>

      {type === "Default" && <SelectType setType={setType}></SelectType>}

      {type === "Thing" && (
        <Funnel page={page} type={type} setPage={setPage}>
          <CheckType type={type}></CheckType>
          <ThingType1></ThingType1>
          <ThingType2></ThingType2>
          <ThingType3></ThingType3>
          <ThingTypeResult></ThingTypeResult>
          {/* <Counter></Counter>
        <RandomResult></RandomResult> */}
        </Funnel>
      )}
      {type === "Random" && (
        <Funnel page={page} type={type} setPage={setPage}>
          <CheckType type={type}></CheckType>
          <RandomResult></RandomResult>
        </Funnel>
      )}
    </MainPageWrapper>
  );
};

const MainPageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default MainPage;