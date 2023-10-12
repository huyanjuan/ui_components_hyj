import React, { useEffect } from 'react';
import { fontSize, getChartTooltip } from '../../utils';
import * as echarts from 'echarts';

interface ChartProps {
  id: string;
  width: number;
  height: number;
  dataList: any;
  legendList: any;
  word?: number;
  barWidth?: any;
  carousel?: boolean;
}
const Bar: React.FC<ChartProps> = ({
  id,
  width,
  height,
  dataList,
  legendList,
  word,
  barWidth,
  carousel,
}) => {
  const initBarChart = () => {
    const chartDom: any = document.getElementById(`${id}_chart`);
    if (chartDom) {
      const myChart = echarts.init(chartDom);
      const option: any = {
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
        emphasis: {
          disabled: true,
        },
        series: [
          {
            name: legendList[0],
            type: 'bar',
            barWidth: fontSize(barWidth) || fontSize(14),
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#66E1DF' },
                { offset: 1, color: 'rgba(0, 89, 84, 0.00)' },
              ]),
            },
            data: (dataList || []).map((item: any) => {
              return item?.value;
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
    initBarChart();
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
export default Bar;
