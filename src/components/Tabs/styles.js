import styled, { css, keyframes } from "styled-components";
import {
  Tab as UnstyledTab,
  TabList as UnstyledTabList,
  TabPanel as UnstyledTabPanel
} from "react-tabs";
import { space, colors } from "../Styles/vars";
import { media } from "../Styles/tools";

// This tabs will be only displayed on small and medium screens

const TabList = styled(UnstyledTabList)`
  ${media.large`
    
  `}
`;

const Tab = styled(UnstyledTab).attrs(() => ({
  selectedClassName: "selected",
  disabledClassName: "disabled"
}))`
  cursor: pointer;
  color: ${colors.grey.normal};
  padding: ${space.s} ${space.m};
  border-top-left-radius: ${space.xs};
  border-top-right-radius: ${space.xs};
  &:last-of-type {
    margin-right: 0;
  }
  &.selected {
    color: ${colors.grey.dark};
    background-color: white;
    font-weight: 700;
  }
  &.disabled {
    color: ${colors.grey.lighter};
    cursor: not-allowed;
  }
`;

const fadeIn = keyframes`
0% {
    opacity: 0;
}
100% {
    opacity: 1;
}
`;

const fadeInAnimation = css`
  ${fadeIn} .5s ease-in;
`;

const TabPanel = styled(UnstyledTabPanel).attrs(() => ({
  selectedClassName: "selected"
}))`
  position: relative;
  z-index: 10;
  display: none;
  opacity: 0;
  &.selected {
    display: block;
    opacity: 1;
    animation: ${fadeInAnimation};
  }
`;

Tab.tabsRole = "Tab";
TabPanel.tabsRole = "TabPanel";
TabList.tabsRole = "TabList";

export { Tab, TabList, TabPanel };
