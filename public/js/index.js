(function(){
  window.onload=function(){

    $('.nav-left>.nav-menu-list').removeClass('d-none')

    // 轮播图函数:渐变
    // 变量
    var DURATION=3000;
    var parent=$('.brand-body-left');
    var imgParent=$('.brand-body-left .slide-box');
    var indicatorParen=$('.brand-body-left .slide-indacator');
    var arrowParent=$('.brand-body-left .slide-arrow');
    // var IMGCOUNT=$('.brand-body-left .slide-box').children().length;//2
    var IMGCOUNT=2;
    var canClick=true;
    var i=0;//0 1
    // slideFade();data-id="1
    var timer=setInterval(slideFade,DURATION);
    function slideFade(to){
      imgParent.children(`[data-index=${i}]`).removeClass('active');
      indicatorParen.children(`[data-id=${i}]`).removeClass('active');
      if(to==undefined){
        if(i<IMGCOUNT-1) i++;
        else i=0;
      }else if(to=='+1'){
        if(i<IMGCOUNT-1) i++;
        else i=0;
      }else if(to=='-1'){
        // 如果是0 就为1
        // 否则i--
        if(i==0) i=IMGCOUNT-1;
        else i--;
      }
      
      imgParent.children(`[data-index=${i}]`).addClass('active');
      indicatorParen.children(`[data-id=${i}]`).addClass('active');
    }
    // 鼠标移上去时，暂停
    parent.hover(function(){
      clearInterval(timer);
    },function(){
      timer=setInterval(slideFade,DURATION);
    });
    // 鼠标点击箭头切换
    arrowParent.on('click','.ar-left',function(){
      if(canClick){
        canClick=false;
        moveTo('-1');
        setTimeout(function(){
          canClick=true;
        },1000);
      }
    });
    arrowParent.on('click','.ar-right',function(){
      if(canClick){
        canClick=false;
        moveTo('-1');
        setTimeout(function(){
          canClick=true;
        },1000);
      }
    });
    function moveTo(to){
      slideFade(to);
    }
    
    // 主页全部品牌切换
    var clickParent=$('.brand-title-ul');//获取点击父元素，事件委托 
    var canClickEle=clickParent.attr('data-to');//可以点击的子元素
    // var conParent=$('.brand-body');
    var conParent=$('.brand-body-right');
    // 先让不为active的元素隐藏掉，避免hover事件不管用
    conParent.children('.active').siblings().addClass('d-none');
    clickParent.on('click',canClickEle,function(e){
      $this=$(e.target);
      $currentId=clickParent.find('.active').attr('data-to');//当前的下标
      // 先让当前元素隐藏
      conParent.children(`[data-brand-id=${$currentId}]`).addClass('d-none');
      $clickId=$this.attr('data-to');//点击的下标
      // 先让标题所有的子元素去掉active
      clickParent.children().children().removeClass('active');
      // 让标题id为点击id的元素加上active
      $this.addClass('active');
      
      // 让点击的元素去掉隐藏的class
      conParent.children(`[data-brand-id=${$clickId}]`).removeClass('d-none');
      
      // 让id为currentId的子元素去掉active
      // 让id为clickId的元素添加active
      setTimeout(function(){
        conParent.children(`[data-brand-id=${$currentId}]`).removeClass('active');
        conParent.children(`[data-brand-id=${$clickId}]`).addClass('active');
      },100);
  })


  // 标识每层
  var floor1=$('.floor .floor-1');
  var floor2=$('.floor .floor-2');
  var floor3=$('.floor .floor-3');
  var floor4=$('.floor .floor-4');
  var floor5=$('.floor .floor-5');
  var floor6=$('.floor .floor-6');
  var floor7=$('.floor .floor-7');
  var floor8=$('.floor .floor-8');

  // 标识网页超出部分
  var top=document.body.scrollTop||document.documentElement.scrollTop;
  floor(top);
  fixed(top);

  // 页面滚动事件
  window.onscroll=function(){
    var top=document.body.scrollTop||document.documentElement.scrollTop;

    // 去改变左侧楼层
    floor(top);
    // 改变顶部固定搜索框&&侧边栏函数
    fixed(top);
  };

  // ******************顶部固定搜索框&&侧边栏函数********************
  function fixed(top){
    // 计算顶部固定搜索框&&侧边栏
    if(top>=760){
      $('.fixedTop').css('top','0px');
      $('.slidebar').addClass('active');
    }else{
      $('.fixedTop').css('top','-40px');
      $('.slidebar').removeClass('active');
    }
  }

  // *************************楼层函数*************************
  function floor(top){
    // 计算左侧楼层是否显示
    if(top>=1539){
      $('.floor').addClass('active');
    }else{
      $('.floor').removeClass('active');
    }
    
    // 计算左侧楼层显示哪层
    // 找到当前有active的
    var currentFloor=$('.floor .active');
    if(top>=1539-347&&top<2225-347){//一层
      currentFloor.removeClass('active')
      floor1.addClass('active');
    }else if(top>=2225-347&&top<2911-347){//二层
      currentFloor.removeClass('active')
      floor2.addClass('active');
    }else if(top>=2911-347&&top<3597-347){//三层
      currentFloor.removeClass('active')
      floor3.addClass('active');
    }else if(top>=3597-347&&top<4283-347){
      currentFloor.removeClass('active')
      floor4.addClass('active');
    }else if(top>=4283-347&&top<4969-347){
      currentFloor.removeClass('active')
      floor5.addClass('active');
    }else if(top>=4969-347&&top<5655-347){
      currentFloor.removeClass('active')
      floor6.addClass('active');
    }else if(top>=5655-347&&top<6341-347){
      currentFloor.removeClass('active')
      floor7.addClass('active');
    }else{
      currentFloor.removeClass('active')
      floor8.addClass('active');
    }
  }

  // *************************楼层选择变换事件*************************
  var floorNum=['floor-1','floor-2','floor-3','floor-4','floor-5','floor-6','floor-7','floor-8'];
  var floorDis=[1539,2260,2911,3597,4283,4969,5855,6341];
  // 楼层点击事件
  $('.floor').on('click','div',function(){
    // 获取当前的楼层i
    var currentI=$('.floor>div.active').attr('data-i');
    // 当前元素
    $this=$(this);
    // 页面超出顶部距离
    var totop=document.body.scrollTop||document.documentElement.scrollTop;
    // var floorDis=$this.attr('data-dis');
    for(var i=0;i<floorNum.length;i++){
      if(floorNum[i]==$this.prop('class')){
        // toDis=floorDis[i];
        // var distance=floorDis[i];
        // 要移动的楼层数量
        var num=(i+1)>currentI?(i+1)-currentI:currentI-(i+1);

        // 总移动的距离
        var distance=totop-floorDis[i];
        // 总步数
        // var steps=200;
        var steps=50*num;
        // 移动的时间
        var duration=10;
        // 一步走多远
        var step=distance/steps;
        // 一步走多久
        var interval=duration/steps;
        var timer=setInterval(function(){
          window.scrollBy(0,-step);
          steps--;
          if(steps==0){
            clearInterval(timer);
          }
        },interval);
        break;
      }
    }
  })

  // *************************顶部搜索框变换内容*************************
  var searArr=['中性香','彩妆节日献礼','圣诞节日香氛','冬季补水精华','圣诞限量护肤精选'];//变换的内容数组
  // 先获取要变换的搜索框
  var searInp=$('.inputBox>input');
  // 定义一个变量i，标识当前走到数组第几个
  var searIndex=0;
  // 每隔1秒变换一次内容
  setInterval(function(){
    if(searIndex<searArr.length-1){
      searIndex++;
    }else{
      searIndex=0;
    }
    // 自动变换指定搜索框的placeholder
    searInp.attr('placeholder',searArr[searIndex]);
  },3000);

  // *************************回到顶部*************************
  // 找到回到顶部按钮
  var toTopBtn=$('.slidebar>.to-top');
  toTopBtn.click(function(){
    console.log($(this));
    var topDis=document.documentElement.scrollTop||document.body.scrollTop;
    // 总的距离
    var distance=topDis;
    // 总的时间
    var duration=500;
    // 总的步数
    var steps=50;
    // 一步走多长时间
    var interval=duration/steps;
    // 一步走多长距离
    var step=distance/steps;
    var totopTimer=setInterval(function(){
      window.scrollBy(0,-step);
      steps--;
      if(steps==0){
        clearInterval(totopTimer);
      }
    },interval);
  });

}})()