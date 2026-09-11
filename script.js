@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700;800&display=swap');

:root{--blue:#7ed0e5;--blue2:#4fa8c2;--sky:#dff7fa;--yellow:#ffd66b;--butter:#fff1bd;--peach:#ffc3a6;--peach2:#ffe4d7;--cream:#fffaf0;--brown:#765039;--brown2:#543421;--muted:#806653;--green:#79b98d;--white:#fff;--shadow:0 18px 45px rgba(82,75,55,.12);--line:rgba(118,80,57,.14)}
*{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}body{font-family:"DM Sans",sans-serif;color:var(--brown2);background:#fffaf0;overflow-x:hidden}a{text-decoration:none;color:inherit}button,input,select,textarea{font:inherit}.container{width:min(1120px,90%);margin:auto}.section{position:relative;padding:100px 0}.section-label{display:inline-flex;align-items:center;gap:7px;padding:8px 14px;border-radius:999px;background:var(--butter);color:#9a6928;font-size:9px;font-weight:800;letter-spacing:1.5px}.section-heading{max-width:760px;margin-bottom:48px}.section-heading.center{text-align:center;margin-left:auto;margin-right:auto}.section-heading h2{font-family:"Playfair Display",serif;font-size:clamp(40px,6vw,70px);line-height:.98;margin:17px 0;color:var(--brown2)}.section-heading h2 em{color:#d39a4e;font-weight:600}.section-heading p{color:var(--muted);font-size:13px;line-height:1.8}

/* NAV */
.navbar{position:fixed;top:16px;left:50%;transform:translateX(-50%);width:min(1120px,92%);z-index:999;background:rgba(255,250,240,.84);backdrop-filter:blur(18px);border:1px solid rgba(255,255,255,.9);border-radius:999px;box-shadow:0 12px 35px rgba(65,95,100,.14)}.nav-container{min-height:68px;padding:0 23px;display:flex;align-items:center;justify-content:space-between;gap:20px}.logo{display:flex;align-items:center;gap:7px;font-family:"Playfair Display",serif;font-size:15px;font-weight:800;color:var(--brown2)}.logo-symbol{color:#efad45;font-size:19px}.logo b{color:var(--blue2)}nav{display:flex;gap:21px}nav a{font-size:10px;font-weight:800;color:var(--brown);position:relative;white-space:nowrap}nav a:after{content:"";position:absolute;left:50%;bottom:-7px;width:0;height:3px;border-radius:9px;background:var(--yellow);transform:translateX(-50%);transition:.25s}nav a:hover:after{width:70%}.menu-toggle{display:none;border:0;background:none;color:var(--brown);font-size:24px;cursor:pointer}

/* HERO */
.hero{position:relative;min-height:100svh;display:grid;place-items:center;text-align:center;overflow:hidden;padding:140px 20px 100px;background:radial-gradient(circle at 50% 28%,rgba(255,255,255,.95),transparent 26%),radial-gradient(circle at 10% 65%,rgba(255,214,107,.35),transparent 23%),radial-gradient(circle at 90% 62%,rgba(255,195,166,.4),transparent 25%),linear-gradient(180deg,#72c6df 0%,#a7dfeb 48%,#e5f4e8 76%,#fff0cb 100%)}.hero:before{content:"";position:absolute;width:800px;height:180px;left:50%;bottom:-75px;transform:translateX(-50%);background:rgba(255,255,255,.5);border-radius:50%;filter:blur(8px)}.hero:after{content:"✦  ✿  ☁  ✿  ✦";position:absolute;bottom:22px;left:50%;transform:translateX(-50%);color:rgba(255,255,255,.62);font-size:20px;letter-spacing:13px;white-space:nowrap}.hero-content{position:relative;z-index:5;max-width:900px}.eyebrow{display:inline-flex;padding:9px 17px;border-radius:999px;background:rgba(255,250,240,.75);border:1px solid rgba(255,255,255,.9);box-shadow:0 8px 25px rgba(75,65,48,.1);font-size:9px;font-weight:800;letter-spacing:1.6px;color:var(--brown)}.hero h1{margin-top:22px;font-family:"Playfair Display",serif;font-size:clamp(55px,10vw,125px);line-height:.84;letter-spacing:-4px;color:var(--brown);text-shadow:3px 4px 0 rgba(255,226,145,.85)}.hero h1 span{display:block;margin-top:13px;font-family:"DM Sans",sans-serif;font-size:clamp(23px,4vw,43px);line-height:1.05;letter-spacing:1px;text-shadow:none}.hero-subtitle{margin-top:25px;color:var(--brown);font-size:11px;font-weight:800;letter-spacing:3px}.hero-description{max-width:590px;margin:15px auto 28px;color:#715743;font-size:13px;line-height:1.8}.hero-buttons{display:flex;justify-content:center;gap:11px}.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:13px 20px;border-radius:999px;font-size:10px;font-weight:800;transition:.25s;cursor:pointer}.btn-primary{background:linear-gradient(135deg,#ffd46a,#f1a848);color:#60421f;border:2px solid rgba(255,255,255,.7);box-shadow:0 9px 24px rgba(237,171,69,.3)}.btn-outline{background:rgba(255,255,255,.55);color:var(--brown);border:1.5px solid rgba(118,80,57,.25)}.btn:hover{transform:translateY(-4px)}.floating-mascot{position:absolute;z-index:6;width:190px;object-fit:contain;filter:drop-shadow(0 18px 15px rgba(75,55,35,.2));animation:float 4.5s ease-in-out infinite}.mascot-left{left:1.5%;bottom:8%}.mascot-right{right:1.5%;top:20%;animation-delay:-2.2s}@keyframes float{0%,100%{transform:translateY(0) rotate(-3deg)}50%{transform:translateY(-18px) rotate(3deg)}}

/* INTRO */
.intro{background:linear-gradient(180deg,#fff8e9,#fffdf7)}.intro-grid{display:grid;grid-template-columns:1fr 1fr;gap:70px;align-items:center}.intro h2{font-family:"Playfair Display",serif;font-size:clamp(42px,6vw,70px);line-height:.95}.intro h2 em{color:#d59c4e}.intro-text p{font-size:13px;line-height:1.9;color:var(--muted);margin-bottom:16px}

/* TIMELINE */
.timeline-section{background:radial-gradient(circle at 10% 15%,rgba(255,255,255,.85),transparent 23%),radial-gradient(circle at 90% 80%,rgba(255,207,107,.25),transparent 24%),linear-gradient(180deg,#c8edf4,#eaf7ee)}.timeline{max-width:930px;margin:auto;position:relative}.timeline:before{content:"";position:absolute;left:135px;top:0;bottom:0;width:4px;border-radius:10px;background:linear-gradient(#ffd36a,#82cde0,#ffd36a)}.timeline-item{display:grid;grid-template-columns:105px 60px 1fr;gap:15px;margin-bottom:32px}.timeline-date{text-align:right;padding-top:13px}.timeline-date strong{display:block;font-family:"Playfair Display",serif;font-size:25px;color:var(--brown)}.timeline-date span{font-size:8px;letter-spacing:1px;color:#a0836c}.timeline-dot{width:19px;height:19px;margin-top:17px;border:4px solid #eaf7ee;border-radius:50%;background:linear-gradient(135deg,#ffd66b,#efa94d);box-shadow:0 0 0 5px rgba(255,202,108,.18);z-index:2}.timeline-card{position:relative;padding:24px;background:rgba(255,250,240,.82);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.9);border-radius:21px;box-shadow:var(--shadow);transition:.25s}.timeline-card:hover{transform:translateY(-5px)}.timeline-tag{font-size:8px;font-weight:800;letter-spacing:1.5px;color:#d0913e}.timeline-card h3{font-family:"Playfair Display",serif;font-size:26px;margin:7px 0;color:var(--brown2)}.timeline-card>p{font-size:11px;line-height:1.75;color:var(--muted)}.timeline-item.important .timeline-card{border:2px solid rgba(255,198,89,.7);background:linear-gradient(145deg,#fff9df,#fff1d9)}.important-badge{display:inline-flex;margin-top:13px;padding:7px 10px;border-radius:999px;background:#ffe6a2;color:#936222;font-size:8px;font-weight:800;letter-spacing:1px}.highlight-box{display:grid;grid-template-columns:42px 1fr;gap:11px;margin-top:17px;padding:15px;border-radius:17px;background:linear-gradient(135deg,#fff0c6,#ffe1d5);border:1px solid rgba(255,255,255,.9)}.highlight-icon{font-size:23px}.highlight-box small{display:block;font-size:8px;color:#9b713d;font-weight:800;letter-spacing:1px}.highlight-box b{font-family:"Playfair Display",serif;font-size:18px;color:var(--brown2)}.highlight-box p{font-size:10px;color:var(--muted);line-height:1.6;margin-top:4px}.detail-button,.dc-detail-btn{display:inline-flex;margin-top:10px;padding:8px 11px;border-radius:999px;background:#fffaf0;color:#b57935;font-size:8px;font-weight:800;border:1px solid #ecd3a5}.dress-code{display:flex;gap:11px;align-items:flex-start;margin-top:17px;padding-top:15px;border-top:1px dashed #ddc79d}.dress-code>span{font-size:20px}.dress-code-content{flex:1}.dress-code-content small{display:block;color:#9b7b62;font-size:8px;font-weight:800;letter-spacing:1px}.dress-code-row{display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap}.dress-code-row b{font-size:10px;color:var(--brown)}.holiday .timeline-tag{color:#5da7a8}

/* INFO */
.info-section{background:linear-gradient(180deg,#fff5d8,#ffe9d9)}.info-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:15px}.info-card{padding:24px;border-radius:22px;background:rgba(255,255,255,.7);border:1px solid rgba(255,255,255,.95);box-shadow:var(--shadow);transition:.25s}.info-card:hover{transform:translateY(-6px) rotate(-.4deg)}.info-card:nth-child(2){background:rgba(223,247,250,.8)}.info-card:nth-child(3){background:rgba(255,231,218,.8)}.info-card:nth-child(4){background:rgba(255,244,203,.85)}.info-icon{font-size:28px}.info-card h3{font-family:"Playfair Display",serif;font-size:22px;margin:15px 0 8px}.info-card p{font-size:10px;color:var(--muted);line-height:1.7}.info-card a{display:inline-flex;margin-top:15px;color:#c18435;font-size:9px;font-weight:800}

/* CHECKLIST */
.checklist{background:linear-gradient(180deg,#dff7fa,#fff8e6)}.check-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px}.check-card{padding:28px;border-radius:24px;background:rgba(255,250,240,.8);border:1px solid rgba(255,255,255,.9);box-shadow:var(--shadow)}.check-card h3{font-family:"Playfair Display",serif;font-size:27px;margin-bottom:15px}.check-item{display:flex;gap:11px;align-items:flex-start;padding:11px 0;border-bottom:1px dashed #e1cfaa}.check-item:last-child{border-bottom:0}.check-item input{appearance:none;width:20px;height:20px;border:2px solid #e2b45b;border-radius:7px;background:white;cursor:pointer;flex:0 0 auto}.check-item input:checked{background:#efb253;box-shadow:inset 0 0 0 4px white}.check-item label{font-size:11px;color:var(--muted);cursor:pointer}.optional{display:inline-flex;margin-left:5px;padding:2px 6px;border-radius:999px;background:#e4f4e9;color:#5e9770;font-size:7px;font-weight:800}

/* GROUPS */
.groups{background:linear-gradient(180deg,#dff7fa,#fff8e6)}.group-search{margin-bottom:22px}.group-search input{width:100%;padding:15px 20px;border:2px solid rgba(255,255,255,.85);border-radius:999px;background:rgba(255,255,255,.7);outline:none;color:var(--brown);box-shadow:0 8px 25px rgba(78,113,120,.08)}.group-search input:focus{border-color:#e9ba61}.groups-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.group-card{overflow:hidden;background:rgba(255,250,240,.86);border:1px solid rgba(255,255,255,.9);border-radius:22px;box-shadow:var(--shadow);transition:.25s}.group-card:hover{transform:translateY(-6px)}.group-number{padding:10px 15px;background:var(--butter);color:#b27430;font-size:9px;font-weight:800;letter-spacing:2px}.group-content{padding:22px}.group-label{font-size:8px;color:#5ca8bc;font-weight:800;letter-spacing:1.5px}.group-content h3{font-family:"Playfair Display",serif;font-size:27px;margin:7px 0 18px}.member-title{display:flex;align-items:center;gap:7px;margin-bottom:10px;color:#c18435}.member-title small{font-size:8px;font-weight:800;letter-spacing:1px}.member-list{padding-left:18px;color:var(--muted);font-size:10px;line-height:1.75;min-height:128px}.mentor{display:flex;gap:10px;align-items:center;margin:17px 0;padding-top:15px;border-top:1px dashed #decaa5}.mentor>span{font-size:20px}.mentor small{display:block;font-size:7px;letter-spacing:1px;color:#9a806c}.mentor b{display:block;font-size:10px;color:var(--brown)}.group-actions{display:flex;gap:7px;flex-wrap:wrap}.whatsapp-btn,.pin-btn{display:inline-flex;padding:10px 13px;border-radius:999px;font-size:8px;font-weight:800;transition:.25s}.whatsapp-btn{background:#76b98b;color:white}.pin-btn{background:#fff1bd;color:#9a682a;border:1px solid #ecd09a}.whatsapp-btn:hover,.pin-btn:hover{transform:translateY(-2px)}.group-empty{display:none;padding:25px;text-align:center;color:var(--muted);font-size:11px;background:rgba(255,255,255,.5);border-radius:20px}

/* DOWNLOAD */
.downloads{background:linear-gradient(180deg,#fff8e8,#e0f6f8)}.download-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:17px}.download-card{position:relative;padding:27px;display:flex;gap:17px;background:rgba(255,255,255,.72);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.95);border-radius:22px;box-shadow:var(--shadow);transition:.25s}.download-card:hover{transform:translateY(-5px)}.download-card.national{background:linear-gradient(145deg,#e3f7fa,#fff9e7)}.download-card.regional{background:linear-gradient(145deg,#fff0dc,#e6f7f7)}.download-icon{font-size:31px}.download-card span{font-size:8px;color:#5ca5b8;letter-spacing:1.5px;font-weight:800}.download-card h3{font-family:"Playfair Display",serif;font-size:21px;margin:5px 0 7px}.download-card p{font-size:10px;line-height:1.7;color:var(--muted)}.caption-box{margin-top:13px;padding:12px;border-radius:13px;background:rgba(255,255,255,.65);border:1px solid rgba(118,80,57,.1);font-size:9px;line-height:1.7;color:#6f5948;white-space:pre-line;max-height:180px;overflow:auto}.download-actions{display:flex;gap:7px;flex-wrap:wrap;margin-top:13px}.download-btn,.copy-btn{display:inline-flex;padding:9px 12px;border-radius:999px;font-size:8px;font-weight:800;cursor:pointer}.download-btn{background:#fffaf0;color:#b87932;border:1px solid #e9c989}.copy-btn{border:0;background:#72b5c6;color:white}.missing{margin-top:12px;padding:10px;border-radius:12px;background:#fff1e4;color:#a06c4a;font-size:8px}.asset-note{font-size:9px!important;margin-top:9px!important;color:#a0826b!important}

/* TALENT */
.talent-section{background:linear-gradient(180deg,#dff7fa,#fff0cf)}.talent-board{position:relative;overflow:hidden;padding:70px 35px;text-align:center;background:radial-gradient(circle at 20% 30%,rgba(255,214,107,.5),transparent 22%),radial-gradient(circle at 80% 70%,rgba(255,183,156,.5),transparent 22%),linear-gradient(135deg,#72bfd7,#9edbe4);border:2px solid rgba(255,255,255,.7);border-radius:30px;box-shadow:0 25px 55px rgba(77,121,130,.2)}.talent-board:before{content:"✦  ✿  ✦  ✿  ✦";position:absolute;top:18px;left:50%;transform:translateX(-50%);color:rgba(255,255,255,.65);letter-spacing:12px}.talent-board h2{margin:18px 0;font-family:"Playfair Display",serif;font-size:clamp(42px,7vw,72px);line-height:.95;color:white;text-shadow:2px 3px 0 rgba(96,72,51,.15)}.talent-board h2 em{color:#fff0b5}.talent-board>p{max-width:560px;margin:0 auto 25px;color:rgba(255,255,255,.92);font-size:12px;line-height:1.8}.talent-tags{display:flex;justify-content:center;flex-wrap:wrap;gap:8px;margin-bottom:28px}.talent-tags span{padding:8px 13px;border-radius:999px;background:rgba(255,255,255,.2);border:1px solid rgba(255,255,255,.5);color:white;font-size:9px}.btn-light{background:#fff8df;color:var(--brown);border:0}

/* MODAL */
.modal{position:fixed;inset:0;z-index:2000;display:none;align-items:center;justify-content:center;padding:20px;background:rgba(65,73,68,.55);backdrop-filter:blur(8px)}.modal.show{display:flex}.modal-content{position:relative;width:min(560px,100%);max-height:90vh;overflow-y:auto;padding:34px;background:linear-gradient(145deg,#fffaf0,#fff0d0);border:2px solid rgba(255,255,255,.9);border-radius:25px;box-shadow:0 25px 70px rgba(64,55,40,.3)}.modal-content h2{font-family:"Playfair Display",serif;font-size:39px}.modal-description{margin:7px 0 24px;color:var(--muted);font-size:11px}.modal-close{position:absolute;right:16px;top:12px;border:0;background:none;color:var(--brown);font-size:27px;cursor:pointer}.form-group{margin-bottom:15px}.form-group label{display:block;margin-bottom:6px;font-size:9px;font-weight:800;color:var(--brown)}.form-group input,.form-group select,.form-group textarea{width:100%;padding:12px 14px;border:1px solid #ead3a7;border-radius:12px;background:rgba(255,255,255,.85);outline:none;color:var(--brown);font-size:11px}.form-group input:focus,.form-group select:focus,.form-group textarea:focus{border-color:#eab45b;box-shadow:0 0 0 3px rgba(234,180,91,.12)}.submit-btn{width:100%;padding:14px;border:0;border-radius:999px;background:linear-gradient(135deg,#ffca60,#f0a74b);color:#62411f;font-size:10px;font-weight:800;cursor:pointer}.form-help{font-size:8px;color:#9b816c;margin-top:6px}

/* DETAIL PAGES */
.page-shell{min-height:100vh;background:linear-gradient(180deg,#dff7fa 0%,#fff8e8 45%,#ffe7d7 100%)}.page-top{padding:145px 0 45px;text-align:center}.page-top h1{font-family:"Playfair Display",serif;font-size:clamp(45px,7vw,85px);line-height:.94;margin:17px 0;color:var(--brown2)}.page-top h1 em{color:#d39a4e}.page-top p{max-width:680px;margin:auto;color:var(--muted);font-size:12px;line-height:1.8}.back-button{display:inline-flex;margin-top:24px;padding:11px 17px;border-radius:999px;background:rgba(255,255,255,.65);border:1px solid rgba(118,80,57,.18);font-size:9px;font-weight:800;color:var(--brown)}.detail-content{padding:15px 0 90px}.detail-intro{padding:28px;border-radius:22px;background:rgba(255,255,255,.65);border:1px solid rgba(255,255,255,.9);box-shadow:var(--shadow);margin-bottom:18px}.detail-intro h2{font-family:"Playfair Display",serif;font-size:28px;margin-bottom:7px}.detail-intro p{color:var(--muted);font-size:11px;line-height:1.8}.detail-list{display:grid;gap:14px}.detail-item{display:grid;grid-template-columns:65px 1fr;gap:20px;padding:25px;background:rgba(255,250,240,.8);border:1px solid rgba(255,255,255,.9);border-radius:20px;box-shadow:var(--shadow)}.detail-number{font-family:"Playfair Display",serif;font-size:25px;color:#d1984d}.detail-item h3{font-family:"Playfair Display",serif;font-size:22px;margin-bottom:7px}.detail-item p,.detail-item li{font-size:10px;line-height:1.8;color:var(--muted)}.detail-item ul,.detail-item ol{padding-left:18px}.detail-item li{margin:5px 0}.notice{margin-top:18px;padding:18px 20px;border-radius:17px;background:#fff1c8;border:1px solid #f0d38f;color:#80613e;font-size:10px;line-height:1.7}.subgrid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:14px}.subcard{padding:22px;border-radius:20px;background:rgba(255,255,255,.72);border:1px solid rgba(255,255,255,.9)}.subcard h3{font-family:"Playfair Display",serif;font-size:20px;margin-bottom:9px}.subcard li,.subcard p{font-size:10px;line-height:1.8;color:var(--muted);margin:4px 0}.subcard ul{padding-left:17px}.date-switcher{display:flex;flex-wrap:wrap;justify-content:center;gap:8px;margin-bottom:24px}.date-switcher button{border:1px solid rgba(118,80,57,.18);background:rgba(255,255,255,.7);color:var(--brown);padding:10px 13px;border-radius:999px;font-size:8px;font-weight:800;cursor:pointer}.date-switcher button.active{background:var(--brown2);color:white}.dc-panel{display:none}.dc-panel.active{display:block}.dc-header{padding:25px;border-radius:22px;background:linear-gradient(135deg,#6ebbd2,#96d9df);color:white;margin-bottom:14px}.dc-header small{font-size:8px;letter-spacing:1.5px;font-weight:800}.dc-header h2{font-family:"Playfair Display",serif;font-size:32px;margin:6px 0}.dc-header p{font-size:10px;line-height:1.7;color:rgba(255,255,255,.9)}.dc-cards{display:grid;grid-template-columns:1fr 1fr;gap:14px}.dc-card{padding:23px;border-radius:20px;background:rgba(255,250,240,.8);border:1px solid rgba(255,255,255,.9);box-shadow:var(--shadow)}.dc-card.full{grid-column:1/-1}.dc-card h3{font-family:"Playfair Display",serif;font-size:21px;margin:5px 0 12px}.dc-card small{font-size:8px;letter-spacing:1.2px;color:#b17835;font-weight:800}.dc-card li{font-size:10px;line-height:1.8;color:var(--muted);margin:5px 0}.dc-card ul{padding-left:18px}.dc-notice{padding:14px;border-radius:14px;background:#fff1c8;color:#80613e;font-size:9px;line-height:1.7}

/* FOOTER */
footer{padding:42px 0;background:linear-gradient(135deg,#75bfd2,#5da8bd);color:white;border-top:4px solid #ffd56c}.footer-content{display:flex;justify-content:space-between;align-items:center}.footer-logo{color:white}.footer-logo b{color:#fff0a8}.footer-content p{margin-top:5px;color:rgba(255,255,255,.82);font-size:9px}.footer-right{display:flex;gap:18px;font-size:9px;color:rgba(255,255,255,.8)}

/* PIN PREVIEW */
.pin-modal .modal-content{text-align:center}.pin-preview{width:180px;height:180px;margin:15px auto;border-radius:32px;background:linear-gradient(145deg,#fff1bd,#ffe0d1);border:8px solid white;box-shadow:var(--shadow);display:grid;place-items:center}.pin-preview span{font-family:"Playfair Display",serif;font-size:76px;color:var(--brown2);line-height:1}.pin-preview small{position:absolute;margin-top:130px;font-size:8px;font-weight:800;letter-spacing:2px;color:#a46f38}

@media(max-width:950px){nav{gap:13px}.floating-mascot{width:145px}.info-grid{grid-template-columns:repeat(2,1fr)}.groups-grid{grid-template-columns:repeat(2,1fr)}}
@media(max-width:700px){.section{padding:75px 0}.navbar{top:9px}.nav-container{min-height:60px;padding:0 17px}.menu-toggle{display:block}nav{position:absolute;top:67px;left:0;width:100%;padding:18px;display:none;flex-direction:column;gap:15px;background:rgba(255,250,240,.98);border-radius:20px;box-shadow:0 15px 35px rgba(70,70,50,.15)}nav.active{display:flex}nav a{font-size:10px}.hero{padding:120px 18px 75px}.hero h1{font-size:58px;letter-spacing:-2px}.hero h1 span{font-size:22px}.hero-buttons{flex-direction:column;width:235px;margin:auto}.floating-mascot{width:94px}.mascot-left{left:-18px;bottom:7%}.mascot-right{right:-18px;top:18%}.intro-grid,.check-grid,.download-grid,.subgrid,.dc-cards{grid-template-columns:1fr}.timeline:before{left:8px}.timeline-item{grid-template-columns:25px 1fr;gap:13px}.timeline-date{grid-column:2;text-align:left;padding:0}.timeline-dot{grid-column:1;grid-row:1 / span 2;margin-top:26px}.timeline-card{grid-column:2;padding:20px}.dress-code-row{align-items:flex-start}.info-grid,.groups-grid{grid-template-columns:1fr}.detail-item{grid-template-columns:43px 1fr;gap:12px;padding:20px}.dc-card.full{grid-column:auto}.talent-board{padding:60px 20px;border-radius:22px}.footer-content{flex-direction:column;align-items:flex-start;gap:20px}.page-top{padding-top:120px}.page-top h1{font-size:48px}.caption-box{max-height:220px}}

.download-btn.disabled{opacity:.6;cursor:not-allowed;border-style:dashed}

/* ===== SIMPLE INFO PAGES ===== */
.page-shell{max-width:1000px;margin:0 auto;padding:140px 24px 70px}
.page-hero{text-align:center;margin-bottom:28px}
.page-hero .eyebrow{letter-spacing:.14em;font-weight:800;font-size:.78rem;opacity:.75}
.page-hero h1{font-size:clamp(42px,7vw,76px);margin:8px 0 12px}
.page-hero p{max-width:680px;margin:auto;line-height:1.7;opacity:.82}
.content-card{background:rgba(255,255,255,.72);backdrop-filter:blur(12px);border:1px solid rgba(0,0,0,.07);border-radius:28px;padding:32px;box-shadow:0 16px 50px rgba(0,0,0,.07)}
.content-card h2{margin-top:0}
.clean-list{padding-left:1.2rem;line-height:1.9}
.clean-list li{margin:7px 0}
.notice{margin:24px 0;padding:18px 20px;border-radius:18px;background:rgba(255,214,112,.25);line-height:1.65}
.content-card .download-btn{margin-top:6px;display:inline-flex}
@media(max-width:700px){
  .page-shell{padding:120px 16px 45px}
  .content-card{padding:23px 19px;border-radius:22px}
  .page-hero h1{font-size:44px}
  .content-card .download-btn{width:100%;justify-content:center;text-align:center}
}

/* Twibbon PDF cards */
.media-card .media-content p { line-height: 1.7; }
.media-card .btn { margin-top: 8px; display: inline-block; }

/* =========================================================
   FINAL POLISH — GROUPS & INNER PAGES
   ========================================================= */

/* Group section: cleaner, more editorial, less "Arunika" branding */
.groups .section-heading { margin-bottom: 34px; }
.group-search { max-width: 620px; margin: 0 auto 30px; }
.group-search input {
  height: 54px;
  padding: 0 22px;
  border: 1px solid rgba(121,80,57,.14);
  background: rgba(255,255,255,.82);
  box-shadow: 0 12px 30px rgba(81,77,57,.08);
  font-size: 12px;
}
.group-search input::placeholder { color: #a99584; }

.groups-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
  max-width: 980px;
  margin: 0 auto;
}
.group-card {
  min-height: 0;
  border: 1px solid rgba(121,80,57,.10);
  border-radius: 24px;
  background: rgba(255,255,255,.88);
  box-shadow: 0 14px 35px rgba(81,77,57,.09);
  transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
}
.group-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 42px rgba(81,77,57,.13);
  border-color: rgba(77,168,196,.25);
}
.group-number {
  padding: 13px 20px;
  background: linear-gradient(90deg, #eefbfd, #fff9e8);
  border-bottom: 1px solid rgba(121,80,57,.08);
  color: #6b8790;
  font-size: 9px;
  letter-spacing: 1.7px;
}
.group-content { padding: 24px; }
.group-content > span.group-label {
  display: inline-flex;
  padding: 6px 10px;
  border-radius: 999px;
  background: #f5eee5;
  color: #8b6c55;
  font-size: 8px;
  letter-spacing: 1.3px;
}
.group-content h3 {
  margin: 13px 0 18px;
  font-family: "Playfair Display", serif;
  font-size: 31px;
  line-height: 1;
  color: var(--brown-dark);
}
.member-title {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
}
.member-title > span { color: #e4ad50; font-size: 14px; }
.member-title small { color: #9b8979; font-size: 8px; letter-spacing: 1.2px; font-weight: 700; }
.member-list {
  margin: 0 0 20px;
  padding-left: 22px;
  color: #6f5b4c;
  font-size: 11px;
  line-height: 1.75;
}
.member-list li { padding-left: 4px; }
.mentor {
  margin: 0 0 18px;
  padding: 13px 14px;
  border-radius: 14px;
  background: #f8fbf9;
  border: 1px solid rgba(143,200,160,.20);
}
.mentor > span { color: #79ae8b; font-size: 15px; }
.mentor b { font-size: 11px; }
.group-actions { display: flex; gap: 9px; flex-wrap: wrap; }
.group-actions .whatsapp-btn,
.group-actions .pin-btn {
  min-height: 40px;
  border-radius: 12px;
  padding: 10px 13px;
  font-size: 9px;
  font-weight: 700;
}
.whatsapp-btn {
  background: #79b98c;
  box-shadow: 0 7px 16px rgba(121,185,140,.18);
}
.pin-btn {
  border: 1px solid rgba(121,80,57,.14);
  background: #fff8e9;
  color: #9a6e32;
  cursor: pointer;
}
.pin-btn:hover, .whatsapp-btn:hover { transform: translateY(-2px); }

/* Inner-page header / home button */
.page-top {
  padding: 150px 0 70px !important;
  background:
    radial-gradient(circle at 15% 30%, rgba(255,255,255,.85), transparent 25%),
    radial-gradient(circle at 88% 15%, rgba(255,215,120,.28), transparent 24%),
    linear-gradient(145deg, #dff7fa 0%, #fff9e8 100%) !important;
  border-bottom: 1px solid rgba(121,80,57,.08);
}
.page-top .container { max-width: 900px; }
.page-top h1 {
  margin: 16px 0 14px;
  font-family: "Playfair Display", serif;
  font-size: clamp(45px, 7vw, 78px);
  line-height: .98;
  letter-spacing: -2px;
}
.page-top h1 em { color: #d79a4b; font-style: normal; }
.page-top p { max-width: 650px; font-size: 13px; line-height: 1.85; color: #806653; }
.back-button {
  display: inline-flex !important;
  align-items: center;
  gap: 8px;
  margin-top: 24px;
  padding: 11px 17px;
  border-radius: 999px;
  background: rgba(255,255,255,.86);
  border: 1px solid rgba(121,80,57,.14);
  color: #72543f;
  font-size: 10px;
  font-weight: 700;
  box-shadow: 0 8px 22px rgba(81,77,57,.08);
  transition: .25s ease;
}
.back-button:hover {
  transform: translateY(-3px);
  background: #fff;
  box-shadow: 0 12px 28px rgba(81,77,57,.12);
}

/* Make inner page navbar logo/home feel consistent */
body:has(.page-top) .navbar { box-shadow: 0 10px 30px rgba(81,77,57,.10); }

@media (max-width: 700px) {
  .groups-grid { grid-template-columns: 1fr; gap: 14px; }
  .group-content { padding: 20px; }
  .group-content h3 { font-size: 27px; }
  .group-actions > * { flex: 1 1 145px; justify-content: center; text-align: center; }
  .page-top { padding: 125px 0 55px !important; }
  .page-top h1 { font-size: clamp(40px, 13vw, 58px); letter-spacing: -1.5px; }
  .page-top p { font-size: 11px; }
  .back-button { width: 100%; justify-content: center; }
}


/* FINAL — SOCIAL MEDIA KIT & DIRECT PIN DOWNLOADS */
.media-guide-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px;margin-top:34px}
.media-guide-card{background:rgba(255,255,255,.92);border:1px solid rgba(118,80,57,.12);border-radius:24px;padding:24px;box-shadow:0 12px 35px rgba(67,45,30,.07);transition:transform .2s ease,box-shadow .2s ease}
.media-guide-card:hover{transform:translateY(-4px);box-shadow:0 18px 42px rgba(67,45,30,.11)}
.media-guide-top{display:flex;align-items:center;gap:14px;margin-bottom:14px}.media-guide-icon{width:52px;height:52px;border-radius:16px;display:grid;place-items:center;background:#fff3d7;font-size:25px;flex:none}.media-guide-top span:not(.media-guide-icon){font-size:11px;letter-spacing:.12em;font-weight:800;opacity:.62}.media-guide-top h3{margin:3px 0 0;font-size:22px}.media-guide-card>p{line-height:1.65;opacity:.78;margin:0 0 18px}.media-actions{display:flex;flex-wrap:wrap;gap:10px}.media-actions a{display:inline-flex;align-items:center;justify-content:center;text-decoration:none}.media-guide-card .download-btn,.media-guide-card .copy-btn{border:0;cursor:pointer;border-radius:12px;padding:11px 14px;font-weight:800;font-size:13px}.media-guide-card .download-btn{background:#765039;color:#fff}.media-guide-card .copy-btn{background:#f3e7cf;color:#765039}.pin-guide{grid-column:1/-1}.pin-download-grid{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:10px}.pin-download-grid a{display:flex;align-items:center;justify-content:center;text-decoration:none;border:1px solid rgba(118,80,57,.16);border-radius:12px;padding:12px 8px;color:#765039;background:#fffaf1;font-weight:800;font-size:13px;transition:.2s}.pin-download-grid a:hover{background:#765039;color:#fff;transform:translateY(-2px)}
@media(max-width:800px){.media-guide-grid{grid-template-columns:1fr}.pin-guide{grid-column:auto}.pin-download-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.media-guide-card{padding:20px}.media-guide-top h3{font-size:20px}}
@media(max-width:420px){.pin-download-grid{grid-template-columns:1fr 1fr}.media-actions{flex-direction:column}.media-actions a{width:100%}}
