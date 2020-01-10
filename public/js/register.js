(function(){
  $('input').blur(function(){
    $this=$(this);
    if($this.val()==''){
      $this.siblings('.close-btn').addClass('d-none');
    }
  });
  $('input').focus(function(){
    $this=$(this);
    $this.siblings('.close-btn').removeClass('d-none');
    $this.css('border-bottom-color','#ccc');
    $this.siblings('.tips-icon').addClass('d-none');
    $this.parent().siblings('.error-tip').children().addClass('d-none');
  });
  $('.close-btn').click(function(){
    $this=$(this);
    $this.siblings('input').val('');
    $this.addClass('d-none')
  })
  // 判断注册提交按钮是否变色
  // 当所有内容不为空时&&复选框选择 背景变黑
  var inputLen=$('input').length;
  $('.reg-box').click(function(){
    submitBack($(this));
  })
  $('.email-reg-box').click(function(){
    submitBack($(this));
  })
  function submitBack($this){
    var inputArr=0;
    var inputs=$this.find('input');
    inputLen=inputs.length;
    inputs.each((i,arr)=>{
      var $arr=$(arr)
      if($arr.prop('type')=='text'||$arr.prop('type')=='password'){
        if($arr.val()!=''){inputArr+=1}
      }else if($arr.prop('type')=='checkbox'){
        if($arr.prop('checked')){inputArr+=1}
      }else{
        return;
      }
      if(inputArr==inputLen){
        $('.register-btn').css('background','#000')
      }
    })
  }
  $('.register-btn').hover(function(){
    $this=$(this);
    if($this.css('background-color')=='rgb(0, 0, 0)'){
      $this.addClass('ok-hover');
    }
  },function(){
    $this=$(this);
    $this.removeClass('ok-hover')
  })
  $('.get-code').hover(function(){
    $this=$(this);
    if($this.css('background-color')=='rgb(0, 0, 0)'){
      $this.addClass('code-red');
    }
  },function(){
    $this=$(this);
    $this.removeClass('code-red');
  })

  // 获取验证码按钮变色
  $code_img=$('.code-img');
  $code_img.keyup(function(){
    $this=$(this);
    if($this.val().length==4){
      $('.get-code').removeClass('code-no')
      $('.get-code').addClass('code-ok')
    }else{
      $('.get-code').addClass('code-no')
    }
  })

  var phoneReg=/^[1][3-9]\d{9}$/;//手机正则
  var passReg=/^[0-9a-zA-Z.]{8,}$/;//密码正则
  var emailReg=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;//邮箱正则

  // 点击获取验证码
  $get_code=$('.get-code');
  $get_code.click(function(){
    $this=$(this);
    // 判断是否可以点击
    if($this.css('background-color')!='rgb(0, 0, 0)'){
      return;
    }

    $('.phoneReg').siblings('.tips-icon').removeClass('d-none')
    $('.phoneReg').siblings('.close-btn').addClass('d-none')

    var $phone=$('.phoneReg');
    if(regF(phoneReg,$phone)){
      // 可以进行获取验证码
    }
  })

  // 使用正则验证
  $('.register-btn').click(function(){
    $this=$(this);
    if($this.css('background-color')!='rgb(0, 0, 0)') return;
    $('.tips-icon').removeClass('d-none')
    // 验证手机号
    var phone=$('.phoneReg')
    var phoneRes=regF(phoneReg,phone);
    // 验证密码
    var pass=$('.passReg');
    var passRes=regF(passReg,pass)
    // 验证邮箱
    var email=$('.emailReg');
    var emailRes=regF(emailReg,email);
    // 邮箱的密码验证
    var email_pass=$('.email-passReg');
    var email_passRes=regF(passReg,email_pass);

    $('.close-btn').addClass('d-none')
    // 如果验证都通过，进行注册功能
    //邮箱的验证
    if($this.parent().is('.email-reg-box')){
      if(emailRes&&email_passRes){
        alert('邮箱验证通过');
      }
    }else{//手机验证通过
      if(phoneRes&&passRes){
        alert('手机验证通过');
      }
    }
  })
  // 验证函数
  function regF(reg,ele){
    console.log(reg,ele.val())
    if(reg.test(ele.val())){//验证通过
      ele.css('border-bottom-color','lightgreen');
      ele.siblings('.tips-icon').addClass('ok');
      return true;
    }else{//验证不通过
      ele.css('border-bottom-color','#e00');
      ele.siblings('.tips-icon').removeClass('ok');
      ele.siblings('.tips-icon').addClass('no');
      ele.parent().siblings('.error-tip').children().removeClass('d-none')
      return false;
    }
  }

  // 切换注册方式
  $('.to-email-reg').click(function(){
    toggleConF($(this))
  })
  $('.to-phone-reg').click(function(){
    toggleConF($(this));
  })
  function toggleConF($this){
    $this.parent().parent().addClass('d-none');
    $this.parent().parent().siblings().removeClass('d-none');
  }
})();