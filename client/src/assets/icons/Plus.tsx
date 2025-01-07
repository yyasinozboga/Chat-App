import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const Plus = (props: any) => (
  <Svg
    fill="#ffffff"
    width="800px"
    height="800px"
    viewBox="0 0 24 24"
    id="plus"
    data-name="Flat Line"
    xmlns="http://www.w3.org/2000/svg"
    className="icon flat-line"
    {...props}>
    <Path
      id="primary"
      d="M5,12H19M12,5V19"
      style={{
        fill: 'none',
        stroke: '#ffffff',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: 2,
      }}
    />
  </Svg>
);
export default Plus;
