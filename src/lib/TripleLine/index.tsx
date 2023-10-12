import React, { useEffect } from 'react';
import { fontSize, getChartTooltip } from '../../utils';
import * as echarts from 'echarts';

interface ChartProps {
  id: string;
  width: number;
  height: number;
  dataList: any;
  legendList: any;
  length?: any;
  carousel?: boolean;
}
const TripleLine: React.FC<ChartProps> = ({
  id,
  width,
  height,
  dataList,
  legendList,
  length,
  carousel,
}) => {
  const initLineChart = () => {
    const chartDom: any = document.getElementById(`${id}_chart`);
    if (chartDom) {
      const myChart = echarts.init(chartDom);
      const option: any = {
        tooltip: {
          // alwaysShowContent: true,
          trigger: 'axis',
          backgroundColor: 'rgba(7, 29, 74, 0.8)',
          borderWidth: 0,
          extraCssText: `width: fontSize(150)`,
          textStyle: {
            color: '#fff',
            decoration: 'none',
            fontFamily: 'PingFang SC',
            fontSize: fontSize(14),
            fontStyle: 'normal',
            fontWeight: '400',
            zIndex: 999,
          },
        },
        legend: {
          show: true,
          top: '0',
          icon: 'circle',
          itemWidth: fontSize(8),
          itemHeight: fontSize(8),
          textStyle: {
            color: '#fff',
            fontSize: fontSize(12),
          },
        },
        color: ['#158FFF', '#FFD058', '#309E42'],
        grid: {
          top: '20%',
          left: '2%',
          right: '2%',
          bottom: '0%',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: true,
            data: (dataList || []).map((item: any) => {
              return item?.key;
            }),
            axisLabel: {
              color: '#fff',
              interval: 0,
              fontSize: fontSize(12),
              formatter: function(value: any) {
                var ret = '';
                var maxLength = length || 3;
                var valLength = value.length;
                var rowN = Math.ceil(valLength / maxLength);
                if (rowN > 1) {
                  for (var i = 0; i < rowN; i++) {
                    var temp = '';
                    var start = i * maxLength; //开始截取的位置
                    var end = start + maxLength; //结束截取的位置
                    temp = value.substring(start, end) + '\n';
                    ret += temp;
                  }
                  return ret;
                } else {
                  return value;
                }
              },
            },
            axisLine: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.7)',
                type: 'solid',
              },
            },
            axisTick: {
              show: false,
              alignWithLabel: true,
            },
            splitLine: {
              //修改背景线条样式
              show: false, //是否展示
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            // name: '(kw.h)',
            // nameLocation: 'end',
            // nameTextStyle: {
            //   align: 'right',
            //   color: 'rgba(230, 247, 255, 0.5)',
            //   padding: [-5, 5, 0, 0],
            //   fontSize: fontSize(12),
            // },
            // interval: 5,
            axisLabel: {
              color: '#fff',
              fontSize: fontSize(14),
            },
            splitLine: {
              show: true,
              lineStyle: {
                // 使用深浅的间隔色
                color: ['rgba(255, 2557, 255, 0.2)'],
                type: 'dashed',
              },
            },
          },
          {
            type: 'value',
            // name: '累计增速（%）',
            axisLabel: {
              color: '#fff',
              fontSize: fontSize(12),
            },
            splitLine: {
              show: true,
              lineStyle: {
                // 使用深浅的间隔色
                color: ['rgba(255, 2557, 255, 0.2)'],
                type: 'dashed',
              },
            },
            // min: 0,
            // max: 100,
            // interval: 5,
          },
        ],
        series: [
          {
            name: legendList[0],
            type: 'line',
            smooth: true,
            symbolSize: fontSize(12),
            symbol:
              'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGwSURBVHgBpVVNSwJRFD33zViQUJQZblwkYZsCl+37K0GLFkZC/YciSKhF0V+Jtm4CIYRyYQs39qGQMIbNOLf7RDHHN0bjgXnvzb1zD5f3zjtDMOGaY0sO0raPBGJYpB4WdJgUPn0PX0xotApUN5VSMJA85VRvHjnVE6opYAsd9lANEo8RLp/xlmVhHf+Bi+rHCT1PEK5echbf2EQE+ECtdUQVvVZ6WDnndFSyAUkmecWpwVratJHFrOgih3u2SXenSF4MkP1YkyEPRkbmuJxuiXzcMvBm+t7qoqKIkQolA4rybGuyfoyxI+viIDcBL4aE0jozJaWLvSFRAHGJH5pqNJcainaiQ5JuwmGUluZSU4qcKbl4WEJpxYfkXsKKpPuSMS5XU4nS28YqxgVMXTIclpM2leh7rmyFpplPpMHI87Ab7pM/ypMPk402DdLOknSwy5huBn/BYnReC3SnsE9uZx5lzAgXqOq5f8rOATX8OdQQFe7IxsbsK4rj2OI0jYHTTBBq6Lstm5ntkVnwvwpdeCi/H1MjEDdDE5Ml95xGv4C+Zhltz0dz4wn1hxtyg3U/r1yRBw1V7aMAAAAASUVORK5CYII=',

            data: (dataList || []).map((item: any) => {
              return item?.value;
            }),
          },
          {
            name: legendList[1],
            type: 'line',
            smooth: true,
            symbolSize: fontSize(12),
            symbol:
              'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHDSURBVHgBrZQ9TxtBEIbfmTs7spFMYSkdRShcRUoKREJa+vTJz0iRIkpxBaJB4g/QQw09NR9CCAMVDSBTGNAhIeGzOd/tsLdwILjdE19vtbfvzHO7szsLvLOozBQJfGxIHbV6A5wMEVGCyfiSKEheBJSN2SYqaIH9pjVLxV0M+ZC+/QtLgdKZr+F88NUJKoBVB4PqAf340y8ADewindL7rOMlIorQ89ZyKL8JZpJ1zkgyYeqdA3EZt14Fu4diFO3quFmwWV2YTJeEjyhR35lwpf9/qL/P7GFqiC+DVR9hPJ4vtBAi6pcIfmfjVMyMLhkWmXipGM0V7HpjDOU1HLDpHPZod3ou82w54GqTdcSozbPBHkzYgYobDA++I+0jXCK3x0jhaqMe3LJ7aZowiCObp4u/DKdoxTrtqyHrpg9t3u1JyooNxkSrVqCkXR/XqosP/Mnme+wtKJF1Hfn5DravYXtw6Tg9Nb0s23NTYHneg+BSjBOa/Ltze6NVr60vXh+vVZbbjQ6yoQHSRBAhlK2SEy+HnfTX6GdgDvfxe7gV1ME1vX2qPQvGFOKo185hBeA9eHNmDH6l5QRnoMG1rtn/zlPrBhEhvWxa8yqhAAAAAElFTkSuQmCC',

            data: (dataList || []).map((item: any) => {
              return item?.value1;
            }),
          },
          {
            name: legendList[2],
            type: 'line',
            smooth: true,
            symbolSize: fontSize(12),
            symbol:
              'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHVSURBVHgBrZTNK7xRFMfPOc+daWZ+NfgpK5NYKFEUxewUKZIFpdjL1v9jb0oJT2Ily7Egb9mMhQUL1BND82Kel+PeJ6Mx3SuG7+re55zv5zmde+4F+GPhV8FB2060dbj/q/sKCbfY/PqcTc2XfgScvNpo5xKmCEWrLu4T5cl7vd7rn7v9Epi+WY83PYoBE6heAXtOvsU7ra0Ya2HN+VgaGRLwAzFC8ampnK1C6TewsCLpUd5RPhAfwGQ+3t0IrBaaOHvsCtequpan2JgpOWDoY+AwmRAOEfBBm4fklnv/7YukE+sCSw/zA1hBhDF8bzUzLAUAaxZCpj6XOIhEz19SZBHrR4NxQcHqv0v0os88o/MIySIw9Y6DcTBIQke0FsQkycYIrQmxDYxAc4zUdBpsBTBKH0PJIvm7otbDnAGj2AZtdb4rKxR32iDBtt7IGXlY+zpPpUy3ouIV7qNWrFsLRVyVY2Ij47CctII8xkP0wdiKKJETDtjUyeYACKsdfiPh5XZ7ZnPh1bv3Hy6DAEsNokB5FUytQ+Dx0LIrXM42AlUe5a3uP72H00d2wotgmojj32DJ64YOVPhsZ2imqAVWNXGxlRKMnXK6kyZQJOLmNntmnfrYG9z4ucu4M7YSAAAAAElFTkSuQmCC',

            data: (dataList || []).map((item: any) => {
              return item?.value2;
            }),
          },
        ],
      };
      option && myChart.setOption(option, true);
      carousel && getChartTooltip(myChart, dataList);

      setTimeout(function() {
        window.addEventListener('resize', function() {
          myChart.resize();
        });
      }, 200);
    }
  };
  useEffect(() => {
    initLineChart();
  }, [id, dataList]);
  return (
    <div
      id={`${id}_chart`}
      style={{ width: fontSize(width), height: fontSize(height) }}
    ></div>
  );
};
export default TripleLine;
