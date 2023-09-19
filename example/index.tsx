import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  Bar,
  Line,
  Bar_line,
  DoubleBar,
  DoubleBar_Line,
  DoubleBar_DoubleLine,
  TripleLine,
} from '../src/index';
import './index.less';

const App = () => {
  return (
    <div className="home_list">
      <Bar
        id="first_chart"
        dataList={[
          { key: '1', value: 100 },
          { key: '2', value: 80 },
          { key: '3', value: 30 },
          { key: '4', value: 60 },
        ]}
        width={446}
        height={190}
        legendList={['柱状图']}
      />
      <Line
        id="second_chart"
        dataList={[
          { key: '1', value: 100 },
          { key: '2', value: 80 },
          { key: '3', value: 30 },
          { key: '4', value: 60 },
        ]}
        width={446}
        height={190}
        legendList={['折线图']}
      />
      <Bar_line
        id="third_chart"
        dataList={[
          { rank: 1, key: '2019年', value1: 12, value2: 12 },
          { rank: 2, key: '2020年', value1: 45, value2: 45 },
          { rank: 3, key: '2021年', value1: 56, value2: 56 },
          { rank: 4, key: '2020年', value1: 67, value2: 67 },
          { rank: 5, key: '2020年', value1: 67, value2: 67 },
          { rank: 6, key: '2020年', value1: 67, value2: 67 },
        ]}
        width={466}
        height={220}
        legendList={['柱状图', '折线图']}
      />
      <DoubleBar
        id="fouth_chart"
        dataList={[
          { rank: 1, key: '2019年', value1: 12, value2: 12 },
          { rank: 2, key: '2020年', value1: 45, value2: 45 },
          { rank: 3, key: '2021年', value1: 56, value2: 56 },
          { rank: 4, key: '2020年', value1: 67, value2: 67 },
          { rank: 5, key: '2020年', value1: 67, value2: 67 },
          { rank: 6, key: '2020年', value1: 67, value2: 67 },
        ]}
        width={466}
        height={220}
        legendList={['柱状图1', '柱状图2']}
      />
      <DoubleBar_Line
        id="five_chart"
        dataList={[
          { value: 1, key: '2019年', value1: 12, value2: 12 },
          { value: 2, key: '2020年', value1: 45, value2: 45 },
          { value: 3, key: '2021年', value1: 56, value2: 56 },
          { value: 4, key: '2020年', value1: 67, value2: 67 },
          { value: 5, key: '2020年', value1: 67, value2: 67 },
          { value: 6, key: '2020年', value1: 67, value2: 67 },
        ]}
        width={466}
        height={220}
        legendList={['柱状图1', '柱状图2', '折线图']}
      />
      <DoubleBar_DoubleLine
        id="six_chart"
        dataList={[
          { value: 1, key: '2019年', value1: 12, value2: 12, value3: 12 },
          { value: 2, key: '2020年', value1: 45, value2: 45, value3: 45 },
          { value: 3, key: '2021年', value1: 56, value2: 56, value3: 56 },
          { value: 4, key: '2020年', value1: 67, value2: 67, value3: 67 },
          { value: 5, key: '2020年', value1: 67, value2: 67, value3: 67 },
          { value: 6, key: '2020年', value1: 67, value2: 67, value3: 67 },
        ]}
        width={466}
        height={220}
        legendList={['柱状图1', '柱状图2', '折线图1', '折线图2']}
      />
      <TripleLine
        id="tripl_line"
        dataList={[
          { value: 10, key: '2019年', value1: 12, value2: 10 },
          { value: 12, key: '2020年', value1: 45, value2: 40 },
          { value: 30, key: '2021年', value1: 56, value2: 50 },
          { value: 43, key: '2020年', value1: 67, value2: 30 },
          { value: 50, key: '2020年', value1: 67, value2: 90 },
          { value: 26, key: '2020年', value1: 67, value2: 60 },
        ]}
        width={466}
        height={164}
        legendList={[
          '中国工艺美术大师',
          '浙江省工艺美术大师',
          '丽水市工艺美术大师',
        ]}
      />
    </div>
  );
};

// export default App;
ReactDOM.render(<App />, document.getElementById('root'));
