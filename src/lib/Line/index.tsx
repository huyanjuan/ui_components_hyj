import React, { useEffect } from 'react';
import { fontSize, getChartTooltip } from '../../utils';
import * as echarts from 'echarts';

interface ChartProps {
  id: string;
  width: number;
  height: number;
  dataList: any;
  legendList: any;
  dataZoom?: any;
  endNumber?: any;
  length?: any;
  selectType?: any;
}
const Line: React.FC<ChartProps> = ({
  id,
  width,
  height,
  dataList,
  legendList,
  dataZoom,
  endNumber,
  length,
  selectType,
}) => {
  console.log(selectType, 'selectType', endNumber);
  const initLineChart = () => {
    const chartDom: any = document.getElementById(`${id}_chart`);

    if (chartDom) {
      const myChart = echarts.init(chartDom);
      let option: any = {
        tooltip: {
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
        color: ['rgba(252, 206, 136, 1)', '#158FFF'],
        grid: {
          top: '20%',
          left: '2%',
          right: '2%',
          bottom: '0',
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
            connectNulls: true,
            // symbolSize: fontSize(12),
            // symbol:
            //   'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGwSURBVHgBpVVNSwJRFD33zViQUJQZblwkYZsCl+37K0GLFkZC/YciSKhF0V+Jtm4CIYRyYQs39qGQMIbNOLf7RDHHN0bjgXnvzb1zD5f3zjtDMOGaY0sO0raPBGJYpB4WdJgUPn0PX0xotApUN5VSMJA85VRvHjnVE6opYAsd9lANEo8RLp/xlmVhHf+Bi+rHCT1PEK5echbf2EQE+ECtdUQVvVZ6WDnndFSyAUkmecWpwVratJHFrOgih3u2SXenSF4MkP1YkyEPRkbmuJxuiXzcMvBm+t7qoqKIkQolA4rybGuyfoyxI+viIDcBL4aE0jozJaWLvSFRAHGJH5pqNJcainaiQ5JuwmGUluZSU4qcKbl4WEJpxYfkXsKKpPuSMS5XU4nS28YqxgVMXTIclpM2leh7rmyFpplPpMHI87Ab7pM/ypMPk402DdLOknSwy5huBn/BYnReC3SnsE9uZx5lzAgXqOq5f8rOATX8OdQQFe7IxsbsK4rj2OI0jYHTTBBq6Lstm5ntkVnwvwpdeCi/H1MjEDdDE5Ml95xGv4C+Zhltz0dz4wn1hxtyg3U/r1yRBw1V7aMAAAAASUVORK5CYII=',
            symbol:
              'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG9SURBVHgBpZU9TwJBEIZn5u4igcRCE0NjAQUWaEKBhh9ktMRKLSwolMLCaGv4QSRakBAKKaSgISYUkMjX3t64e3zIxy4J8CQH2Zmdl+V4eQ/BAH9eecMgcUweHCLRPvoc1XXHg46Q3PeEbOHFQ9M0iytitUJcDqIZgMCDNTBiz/VFfVl4QXD48XTqkJOADfADrEfO776ma5p9YqWY2lRM4xKnuPKSXhDk6uOxlHQCWyLlKMm15/hM0A+8FOyIHMgMc8HF8HQjN2PchXCkbnKeAZJqFVNXWV0lYPgxbfcl1wh8J24TU69vSuxsIqbJ6dqkt4K2GfnKZ2Dmck5onhgz35gGkGmfpqY1kLPUARETZkGOEtj5XdOL2RrELvZMDfW1GmAFy8YZdDvkBkHXOIL4ajmlqnHJLCj6NBTQBmM3tEYexlYJhZSFqmHNYhsdGu4eHTQldFLGMBgPFv+XdnRY6KAgzF4LJwIV2BGdPPo9/JUxfdtyHPiGLdGJM42xhfjSibNpSOiDYOa+Nl2vBqz6b+uwWGP4CaRuVa+C6UJrvoq27VpY+JE4kpw9ArRnOXC6gRDtPWo0Mfsuluf+ALDQtPh6gE++AAAAAElFTkSuQmCC',
            symbolSize: fontSize(10),
            data: (dataList || []).map((item: any) => {
              return item?.value;
            }),
          },
        ],
      };
      if (dataZoom) {
        option = {
          ...option,
          grid: {
            top: '20%',
            left: '0%',
            right: '0%',
            bottom: '10%',
            containLabel: true,
          },
          dataZoom: [
            {
              type: 'slider',
              start: 0,
              end: endNumber,
              height: 12,
              bottom: '0',
              moveHandleSize: 12,
              preventDefaultMouseMove: true,
              textStyle: {
                color: '#fff',
              },
            },
          ],
        };
      }
      option && myChart.setOption(option, true);
      getChartTooltip(myChart, dataList);
      // let index = 0; //播放所在下标
      // setInterval(function () {
      //   myChart.dispatchAction({
      //     type: 'showTip',
      //     seriesIndex: 0,
      //     dataIndex: index,
      //   });
      //   index++;
      //   if (index > dataList?.length) {
      //     index = 0;
      //   }
      // }, 3000);
      setTimeout(function() {
        window.addEventListener('resize', function() {
          myChart.resize();
        });
      }, 200);
    }
  };
  useEffect(() => {
    if (dataList?.length > 0) {
      initLineChart();
    }
    // initLineChart();
  }, [id, dataList, dataZoom, selectType, endNumber]);
  return (
    <div
      style={{
        height: fontSize(height),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        id={`${id}_chart`}
        style={{
          width: fontSize(width),
          height: fontSize(height),
          display: dataList?.length !== 0 ? 'block' : 'none',
        }}
      ></div>
      {/* {dataList?.length !== 0 ? (
        <div
          id={`${id}_chart`}
          style={{ width: fontSize(width), height: fontSize(height) }}
        ></div>
      ) : (
        <div style={{ fontSize: fontSize(14) }}>暂无数据</div>
      )} */}
      {dataList?.length === 0 && (
        <div style={{ fontSize: fontSize(14) }}>暂无数据</div>
      )}
    </div>
  );
};
export default Line;
