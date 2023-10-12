import React, { useEffect } from 'react';
import {
  fontSize,
  getMaxData,
  getMinData,
  getInterval,
  getChartTooltip,
} from '../../utils';
import * as echarts from 'echarts';

interface ChartProps {
  id: string;
  width: number;
  height: number;
  dataList: any;
  legendList: any;
  word?: number;
  carousel?: boolean;
}
const Bar_line: React.FC<ChartProps> = ({
  id,
  width,
  height,
  dataList,
  legendList,
  word,
  carousel,
}) => {
  const initLineChart = () => {
    const chartDom: any = document.getElementById(`${id}_chart`);
    if (chartDom) {
      const myChart = echarts.init(chartDom);
      const option: any = {
        tooltip: {
          trigger: 'axis',
          backgroundColor: 'rgba(7, 29, 74, 0.8)',
          borderWidth: 0,
          // alwaysShowContent: true,
          // appendToBody: true,
          extraCssText: `width: fontSize(150)`,
          className: 'chart_tooltip',
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
          // icon: 'circle',
          itemWidth: fontSize(14),
          itemHeight: fontSize(14),
          textStyle: {
            color: '#fff',
            fontSize: fontSize(12),
          },
        },
        color: ['rgba(252, 206, 136, 1)'],
        grid: {
          top: '20%',
          left: '0',
          right: '0',
          bottom: '1%',
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
                var maxLength = word || 3;
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
            // min: getMinData(dataList, 'value1'),
            min: 0,
            // max: getMaxData(dataList, 'value1'),
            interval: getInterval(
              getMaxData(dataList, 'value1'),
              getMinData(dataList, 'value1'),
              5
            ),
            splitNumber: 5,
          },
          {
            type: 'value',
            axisLabel: {
              color: '#fff',
              fontSize: fontSize(12),
            },
            splitLine: {
              show: false,
              lineStyle: {
                // 使用深浅的间隔色
                color: ['rgba(255, 2557, 255, 0.2)'],
                type: 'dashed',
              },
            },
            // splitNumber: 5,
            min: getMinData(dataList, 'value2'),
            // max: getMaxData(dataList, 'value2'),
            interval: getInterval(
              getMaxData(dataList, 'value2'),
              getMinData(dataList, 'value2'),
              5
            ),
          },
        ],
        series: [
          {
            name: legendList[0],
            type: 'bar',
            barWidth: fontSize(14),
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#66E1DF' },
                { offset: 1, color: 'rgba(0, 89, 84, 0.00)' },
              ]),
            },
            data: (dataList || []).map((item: any) => {
              return item?.value1;
            }),
          },
          {
            name: legendList[1],
            type: 'line',
            smooth: true,
            connectNulls: true,
            yAxisIndex: 1,
            symbol:
              'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG9SURBVHgBpZU9TwJBEIZn5u4igcRCE0NjAQUWaEKBhh9ktMRKLSwolMLCaGv4QSRakBAKKaSgISYUkMjX3t64e3zIxy4J8CQH2Zmdl+V4eQ/BAH9eecMgcUweHCLRPvoc1XXHg46Q3PeEbOHFQ9M0iytitUJcDqIZgMCDNTBiz/VFfVl4QXD48XTqkJOADfADrEfO776ma5p9YqWY2lRM4xKnuPKSXhDk6uOxlHQCWyLlKMm15/hM0A+8FOyIHMgMc8HF8HQjN2PchXCkbnKeAZJqFVNXWV0lYPgxbfcl1wh8J24TU69vSuxsIqbJ6dqkt4K2GfnKZ2Dmck5onhgz35gGkGmfpqY1kLPUARETZkGOEtj5XdOL2RrELvZMDfW1GmAFy8YZdDvkBkHXOIL4ajmlqnHJLCj6NBTQBmM3tEYexlYJhZSFqmHNYhsdGu4eHTQldFLGMBgPFv+XdnRY6KAgzF4LJwIV2BGdPPo9/JUxfdtyHPiGLdGJM42xhfjSibNpSOiDYOa+Nl2vBqz6b+uwWGP4CaRuVa+C6UJrvoq27VpY+JE4kpw9ArRnOXC6gRDtPWo0Mfsuluf+ALDQtPh6gE++AAAAAElFTkSuQmCC',
            symbolSize: fontSize(10),
            data: (dataList || []).map((item: any) => {
              return item?.value2;
            }),
          },
        ],
      };
      option && myChart.setOption(option, true);
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
      carousel && getChartTooltip(myChart, dataList);
      setTimeout(function() {
        window.addEventListener('resize', function() {
          myChart.resize();
        });
      }, 200);
    }
  };
  console.log(dataList, 'dataList');
  useEffect(() => {
    initLineChart();
  }, [id, dataList]);
  return (
    <div
      style={{
        height: fontSize(height),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {dataList?.length !== 0 ? (
        <div
          id={`${id}_chart`}
          style={{ width: fontSize(width), height: fontSize(height) }}
        ></div>
      ) : (
        <div style={{ fontSize: fontSize(14) }}>暂无数据</div>
      )}
    </div>
  );
};
export default Bar_line;
