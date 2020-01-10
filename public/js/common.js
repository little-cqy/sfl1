// 请求头部
var result=new Promise((resolve)=>{
  $.ajax({
    url:'/header.html',
    type:'get',
    success:function(html){
      console.log('success')
      $(html).replaceAll('#header');
      resolve();
    }
  });
  // 请求底部
  $.ajax({
    url:'/footer.html',
    type:'get',
    success:function(html){
      console.log('success')
      $(html).replaceAll('#footer');
    }
  });
  // 请求侧边栏
  $.ajax({
    url:'/slidebar.html',
    type:'get',
    success:function(html){
      console.log('success')
      $(html).replaceAll('#slidebar');
    }
  });
})