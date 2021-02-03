const cacheName="kumar-v3",staticAssets=["index.html","manifest.webmanifest","assets/style/bootstrap.min.css","assets/style/style.css","assets/script/jquery-3.5.1.min.js","assets/script/script.js","assets/images/icon-96.png","assets/images/icon-512.png","assets/images/menu/work.svg","assets/images/menu/skill.svg","assets/images/menu/contact.svg","assets/images/menu/about.svg","assets/images/skills/css.png","assets/images/skills/html.png","assets/images/skills/js.png","assets/images/skills/jq.png","assets/images/skills/python.png","assets/images/skills/sql.png","assets/images/skills/api.png","assets/images/skills/dj.png","assets/images/skills/git.png","assets/images/skills/node.png","assets/images/websites/twitter.png","assets/images/websites/user-genaretor.png","assets/images/websites/gtn.png","assets/images/websites/blackjack.png","assets/images/websites/n-d.png","assets/images/websites/tic-tac-toe.png","assets/images/websites/beat.png","assets/images/websites/my-blog.png","assets/images/websites/weather.png","assets/images/about/email.png","assets/images/about/fiverr.png","assets/images/about/upwork.png","/kumar/"];self.addEventListener("install",async s=>{const e=await caches.open(cacheName);return await e.addAll(staticAssets),self.skipWaiting()}),self.addEventListener("activate",s=>{s.waitUntil(caches.keys().then(s=>Promise.all(s.filter(s=>s!==cacheName).map(s=>caches.delete(s)))))}),self.addEventListener("fetch",s=>{s.respondWith(caches.match(s.request).then(e=>e||fetch(s.request)))});