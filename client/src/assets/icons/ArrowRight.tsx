import * as React from 'react';
import Svg, {G, Polyline} from 'react-native-svg';
const ArrowRight = (props: any) => (
  <Svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="800px"
    height="800px"
    viewBox="0 0 64 64"
    enableBackground="new 0 0 64 64"
    xmlSpace="preserve"
    {...props}>
    <G>
      <Polyline
        fill="none"
        stroke="grey"
        strokeWidth={2}
        strokeLinejoin="bevel"
        strokeMiterlimit={10}
        points="27,15 44,32  27,49  "
      />
    </G>
  </Svg>
);
export default ArrowRight;
