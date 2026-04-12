var posts=["2026/04/09/hello-world/","2026/04/11/clash代理/","2026/04/12/三角洲/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };