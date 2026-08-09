(function () {
  'use strict';
  var nav = document.createElement('nav');
  nav.className = 'site-global-nav';
  nav.setAttribute('aria-label', '全站导航');
  nav.innerHTML =
    '<a class="site-global-brand" href="../index.html" aria-label="南水往事记忆空间首页">' +
      '<span class="site-global-seal">南水<br>往事</span>' +
      '<span><b>南水往事记忆空间</b><small>MEMORY OF THE SOUTH–NORTH WATER DIVERSION</small></span>' +
    '</a>' +
    '<div class="site-global-links">' +
      '<a href="../qa.html">世纪问水</a>' +
      '<a href="../map3d.html">勘绘蓝图</a>' +
      '<a href="../time.html">调水纪事</a>' +
      '<a href="../story.html">工程载录</a>' +
      '<a class="active" href="../tools.html" aria-current="page">旧制复刻</a>' +
      '<a href="../guxiang.html">故土迁流</a>' +
      '<a href="../canal-echo-maze/index.html">渠声成河</a>' +
      '<a class="site-home" href="../index.html">返回首页</a>' +
    '</div>';
  document.body.insertBefore(nav, document.body.firstChild);
}());
