(function(){
  const scriptUrl=document.currentScript&&document.currentScript.src;
  const root=new URL('./',scriptUrl||location.href).href;
  const path=(location.pathname.split('/').pop()||'index.html').toLowerCase();
  if(path==='index.html'||path==='') return;
  document.body.classList.add('archive-unified');
  if(path==='story.html'||path==='guxiang.html') document.body.classList.add('archive-dark');

  const nav=[
    ['世纪问水','qa.html'],['勘绘蓝图','map3d.html'],['调水纪事','time.html'],
    ['工程载录','story.html'],['旧制复刻','tools.html'],['故土迁流','guxiang.html']
  ];
  const header=document.createElement('header');
  header.className='archive-site-header';
  header.innerHTML=
    '<a class="archive-brand" href="'+root+'index.html" aria-label="返回首页">'+
      '<span class="archive-seal">南水<br>往事</span><span><b>南水往事记忆空间</b>'+
      '<small>MEMORY OF THE SOUTH–NORTH WATER DIVERSION</small></span></a>'+
    '<nav aria-label="全站导航">'+nav.map(x=>'<a class="'+(path===x[1]?'is-active':'')+'" href="'+root+x[1]+'"'+(path===x[1]?' aria-current="page"':'')+'>'+x[0]+'</a>').join('')+'</nav>'+
    '<a class="archive-home-link" href="'+root+'index.html">返回首页</a>';
  document.body.prepend(header);

  /* The legacy pages use <base> only to read large media from the old archive.
     Keep every HTML navigation inside the repository that serves this shell. */
  document.querySelectorAll('a[href]').forEach(link=>{
    const raw=link.getAttribute('href');
    if(!raw||raw.startsWith('#')||raw.startsWith('mailto:')||raw.startsWith('tel:')) return;
    let target;
    try{target=new URL(raw,document.baseURI)}catch(_){return}
    const filename=(target.pathname.split('/').pop()||'').toLowerCase();
    if(filename.endsWith('.html')&&['index.html','qa.html','map3d.html','time.html','story.html','tools.html','guxiang.html'].includes(filename)){
      link.href=root+filename+target.hash;
    }
  });

  document.querySelectorAll('[data-local-src]').forEach(media=>{
    media.src=root+media.dataset.localSrc;
  });

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

})();
