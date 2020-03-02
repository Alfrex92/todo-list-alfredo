// Mixins, etc

import { css } from "styled-components";

const size = {
  small: 400,
  med: 768,
  large: 992,
  extra: 1200
};

export const media = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

// const MyPlayers = styled.div`
//   margin: ${spaceM} 0;
//   display: grid;
//   grid-template-columns: 1fr;
//   grid-row-gap: ${spaceM};
//   ${media.`med
//         grid-template-columns: 1fr 1fr 1fr;
//         grid-gap: ${spaceS};
//     `}
// `;
