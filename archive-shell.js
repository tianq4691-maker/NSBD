(function(){
  const root='https://tianq4691-maker.github.io/NSBD-redesign/';
  const path=(location.pathname.split('/').pop()||'index.html').toLowerCase();
  if(path==='index.html'||path==='') return;
  document.body.classList.add('archive-unified');
  if(path==='story.html'||path==='guxiang.html') document.body.classList.add('archive-dark');

  const nav=[
    ['世纪问水',root+'qa.html'],['勘绘蓝图',root+'map3d.html'],['调水纪事',root+'time.html'],
    ['工程载录',root+'story.html'],['旧制复刻',root+'tools.html'],['故土迁流',root+'guxiang.html']
  ];
  const header=document.createElement('header');
  header.className='archive-site-header';
  header.innerHTML=
    '<a class="archive-brand" href="'+root+'index.html" aria-label="返回首页">'+
      '<span class="archive-seal">南水<br>往事</span><span><b>南水往事记忆空间</b>'+
      '<small>MEMORY OF THE SOUTH–NORTH WATER DIVERSION</small></span></a>'+
    '<nav aria-label="全站导航">'+nav.map(x=>'<a href="'+x[1]+'">'+x[0]+'</a>').join('')+'</nav>'+
    '<a class="archive-home-link" href="'+root+'index.html">返回首页</a>';
  document.body.prepend(header);

  document.querySelectorAll('img').forEach(img=>{
    const alt=(img.alt||'').toLowerCase();
    if(img.closest('.archive-site-header')||img.closest('.archive-site-footer')) return;
    let type='';
    if(alt.includes('三视图')||alt.includes('模型')||path==='tools.html') type='3D复原模型';
    else if(alt.includes('复原')||path==='guxiang.html') type='情境复原图';
    else if(alt.includes('地图')||alt.includes('规划')) type='文献资料';
    if(type && img.parentElement && !img.parentElement.querySelector(':scope > .archive-evidence-tag')){
      const tag=document.createElement('span');tag.className='archive-evidence-tag';tag.textContent=type;
      img.insertAdjacentElement('afterend',tag);
    }
  });

  const footer=document.createElement('footer');
  footer.className='archive-site-footer';
  footer.innerHTML='<div class="archive-seal">南水<br>往事</div><b>南水往事记忆空间</b>'+
    '<p>让档案可见，让记忆相连，让普通人走向历史前台。</p>';
  document.body.appendChild(footer);
})();
