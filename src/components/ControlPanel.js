import React from "react";
import styled from "styled-components";

const Panel = styled.div`
  background: white;
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 500;
  padding: 1em;
  border-radius: 1em;
`;

const ControlList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
`;
const Control = styled.li`
  flex: 1;
`;
const ControlTitle = styled.span`
  position: relative;
  top: -1em;
  margin-right: 10px;
`;

const Button = styled.label`
  margin: 5px;
  border: 4px solid grey;
  border-radius: 1em;
  padding: 5px;
  display: inline-block;
`;
/**
 * Button styling from https://codepen.io/mallendeo/pen/eLIiG
 */
const Toggle = styled.input`
  display: none;
  &,
  &:after,
  &:before,
  & *,
  & *:after,
  & *:before,
  & + ${Button} {
    box-sizing: border-box;
    &::selection {
      background: none;
    }
  }

  + ${Button} {
    outline: 0;
    width: 4em;
    height: 2em;
    position: relative;
    cursor: pointer;
    user-select: none;
    &:after,
    &:before {
      position: relative;
      display: block;
      content: "";
      width: 50%;
      height: 100%;
    }

    &:after {
      left: 0;
    }

    &:before {
      display: none;
    }
  }

  &:checked + ${Button}:after {
    left: 50%;
  }
  + {
    padding: 2px;
    transition: all 0.2s ease;
    background: #fff;
    border: 4px solid grey;
    border-radius: 2em;
    &:after {
      transition: all 0.2s ease;
      background: grey;
      content: "";
      border-radius: 1em;
    }
  }

  &:checked + ${Button} {
    border: 4px solid ${props => props.color};
    &:after {
      left: 50%;
      background: ${props => props.color};
    }
  }
`;

const ControlPanel = (props) => {
  const [showUS, setShowUS] = props.us
  const [showStates, setShowStates] = props.states
  const [showCounties, setShowCounties] = props.counties
  const [showCongress, setShowCongress] = props.congress
  return (
    <Panel>
      <ControlList>
        <Control>
          <Toggle
            color="darkseagreen"
            type="checkbox"
            name="U.S. Outline"
            id="us-outline"
            checked={showUS}
            onChange={() => setShowUS(!showUS)}
          />
          <Button htmlFor="us-outline"></Button>
          <ControlTitle>U.S. Outline</ControlTitle>
        </Control>
        <Control>
          <Toggle
            color="cadetblue"
            type="checkbox"
            name="U.S. States"
            id="us-states"
            checked={showStates}
            onChange={() => setShowStates(!showStates)}
          />
          <Button htmlFor="us-states"></Button>
          <ControlTitle>States</ControlTitle>
        </Control>
        <Control>
          <Toggle
            color="tomato"
            type="checkbox"
            name="U.S. Counties"
            id="us-counties"
            checked={showCounties}
            onChange={() => setShowCounties(!showCounties)}
          />
          <Button htmlFor="us-counties"></Button>
          <ControlTitle>Counties</ControlTitle>
        </Control>
        <Control>
          <Toggle
            color="limegreen"
            type="checkbox"
            name="U.S. Congressional Districts"
            id="us-congress"
            checked={showCongress}
            onChange={() => setShowCongress(!showCongress)}
          />
          <Button htmlFor="us-congress"></Button>
          <ControlTitle>Congressional Districts</ControlTitle>
        </Control>
      </ControlList>
    </Panel>
  );
};

export default ControlPanel;
