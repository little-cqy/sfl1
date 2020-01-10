(function(){
  // 登录删除小按钮事件
  // input框上面的删除按钮
  var all_clear_btn=$('.input-box span.clear-btn');
  all_clear_btn.click(function(){
    $this=$(this);
    $this.siblings('input').val('');
  })
  $('.input-box').on('focus','input',function(){
    $this=$(this);
    var clear_btn=$this.siblings('span.clear-btn');//删除小按钮
    clear_btn.addClass('focus');
  })
  $('.input-box').on('blur','input',function(){
    $this=$(this);
    if($this.val()==''){
      var clear_btn=$this.siblings('span.clear-btn');//删除小按钮
      clear_btn.removeClass('focus');
    }
  })
  $('span.clear-btn').click(function(){
    $this=$(this);
    $this.siblings('input').val('');
    $this.removeClass('focus')
  })
  
})()