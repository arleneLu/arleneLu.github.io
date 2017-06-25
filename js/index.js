window.onload = function () {

  // 改变透明度
  scrollChangeColor();
  // 倒计时
  countDownTime();

  // 轮播图
  slideChange()
}



/*
  需求：
    滚动的时候
    更改 header的透明度 
    滚动到 轮播图的高度之后 透明度 就不再更改了
    透明度最大 .8
  伪代码：
    页面打开时 把透明度 变为 0
    获取header dom元素
    获取轮播图的高度
    滚动的时候--滚动事件
      获取 滚动的距离
      计算透明度 并设置给dom元素  滚动距离 / 最大的距离
      获取header.style.backgroundColor = rgba()
*/
function scrollChangeColor() {
  // 获取header标签
  var headerDom = document.querySelector('header');
  // 获取最大的滚动高度
  var maxHeight = document.querySelector('.index-banner').offsetHeight;
  // 设置即可
  headerDom.style.backgroundColor = 'rgba(201, 21, 35,0)';
  // 滚动事件
  window.onscroll = function () {
    // console.log(document.body.scrollTop);
    var alpha = document.body.scrollTop / maxHeight;
    console.log(alpha);
    //  修正 透明度
    if (alpha > 0.8) {
      alpha = 0.8;
    }
    // 设置即可
    headerDom.style.backgroundColor = 'rgba(201, 21, 35,' + alpha + ')';
  }
}

/*
    需求
      每隔一段时间
        递减1
        修改html页面中的显示
    伪代码
      这里写死一个时间 5个小时
      获取需要修改的dom元素
      定时器 setInterval
        时间递减
        时间没有 要提示用户 错过了机会哦
        格式化为 时分秒
        设置给 页面中的html元素
*/
function countDownTime() {
  // 这里写死一个时间 5个小时
  // var totalSec = 5 * 60 * 60;
  var totalSec = 5  * 60;
  //获取需要修改的dom元素 数组
  var liList = document.querySelectorAll('.secKill-left ul li');
  //定时器 setInterval
  var interId = setInterval(function () {
    //时间递减
    totalSec--;
    if(totalSec<0){
      // 清除定时器
      clearInterval(interId);
      // 提示用户 错过了机会
      // 移动端 是可以使用 alert弹框
      alert('亲,这一次的抢购没有了哦,😍,下一次可以再来嘛');
      // 防止后续代码执行
      return;
    }
    //格式化为 时分秒
    // 带入 具体的数字进行计算 方便 想出计算方法  3888秒进去  3888 / 3600 = 1.x
    var hour = Math.floor(totalSec / 3600);

    //3888秒进去  3888 % 3600 = 288  / 60 = 4.x
    var minute = Math.floor(totalSec % 3600 / 60);

    // 3888秒进去 3888 % 60 = 比 60小的数值
    var second = totalSec % 60;
    console.log(hour + '|' + minute + '|' + second);

    //设置给 页面中的html元素
    // 小时的 十位 假设 12个小时  12 / 10 = 1.x
    liList[0].innerHTML = Math.floor(hour / 10);
    // 小时的个位 12 % 10 
    liList[1].innerHTML = hour % 10;

    // 分的 十位 假设 12个分  12 / 10 = 1.x
    liList[3].innerHTML = Math.floor(minute / 10);
    // 分的个位 12 % 10 
    liList[4].innerHTML = minute % 10;
    // 秒的 十位 假设 12个秒  12 / 10 = 1.x
    liList[6].innerHTML = Math.floor(second / 10);
    // 秒的个位 12 % 10 
    liList[7].innerHTML = second % 10;
  }, 10)

}

function slideChange() {}