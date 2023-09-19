export function fontSize(size: number) {
  const clientWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  if (!clientWidth) return;
  return (size * clientWidth) / 1920;
}
export function getMaxData(list: any, key: any) {
  const numList = (list || []).map((item: any) => {
    return item[key];
  });
  return Math.ceil(Math.max.apply(null, numList));
}
export function getMinData(list: any, key: any) {
  const numList = (list || []).map((item: any) => {
    return item[key];
  });
  return Math.ceil(Math.min.apply(null, numList));
}

export function getInterval(max: any, min: any, interval: any) {
  const result = Math.ceil((max - min) / interval)
  return result
}

// export function getChartTooltip(chart: any, dataList: any) {
//   let index = 0;
//   let timer: any = null;
//   clearInterval(timer);
//   timer = setInterval(() => {
//     chart.dispatchAction({
//       type: 'downplay', //downplay 取消高亮指定的数据图形
//       seriesIndex: 0,
//     });
//     chart.dispatchAction({
//       type: 'highlight', //highLight 高亮指定的数据图形
//       seriesIndex: 0,
//       dataIndex: index,
//     });
//     chart.dispatchAction({
//       type: 'showTip', //showTip 显示提示框
//       seriesIndex: 0,
//       dataIndex: index,
//     });
//     ++index;
//     if (index >= dataList?.length) {
//       index = 0;
//     }
//   }, 3000);

//   // 鼠标移入组件时停止轮播;
//   chart.on('mouseover', (e: any) => {
//     clearInterval(timer); //清除循环
//     timer = null;
//     if (e.componentType === 'geo') {
//       return false;
//     }
//     chart.dispatchAction({
//       type: 'downplay',
//       seriesIndex: 0,
//     });
//     chart.dispatchAction({
//       type: 'highlight',
//       seriesIndex: 0,
//       dataIndex: e.dataIndex,
//     });
//     chart.dispatchAction({
//       type: 'showTip',
//       seriesIndex: 0,
//       dataIndex: e.dataIndex,
//     });
//   });
//   // 鼠标移出组件时恢复轮播
//   chart.on('mouseout', () => {
//     chart.dispatchAction({
//       type: 'downplay', //downplay 取消高亮指定的数据图形
//       seriesIndex: 0,
//     });
//     timer = setInterval(() => {
//       chart.dispatchAction({
//         type: 'downplay', //downplay 取消高亮指定的数据图形
//         seriesIndex: 0,
//       });
//       chart.dispatchAction({
//         type: 'highlight', //highLight 高亮指定的数据图形
//         seriesIndex: 0,
//         dataIndex: index,
//       });
//       chart.dispatchAction({
//         type: 'showTip', //showTip 显示提示框
//         seriesIndex: 0,
//         dataIndex: index,
//       });
//       ++index;
//       if (index >= dataList?.length) {
//         index = 0;
//       }
//     }, 3000);
//   });
//   return
// }
export function getChartTooltip(chart: any, dataList: any) {
  console.log(chart, 'dataList', dataList)
  return false
}