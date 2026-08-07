const DEMO_SCENES = [
  { id:0, duration:10200, effect:"work", kicker:"05:40 · 天刚放亮", title:"女工、农工和技术员一起走进渠线", text:"有人开挖，有人测量，有人推着架子车运土。第一锹落下，工地上的一天也随口号一同醒来。", speaker:"众人齐声", quote:"红旗如画歌如潮，地动山河铁臂摇。" },
  { id:1, duration:11000, effect:"repair", kicker:"09:30 · 架子车停在半道", title:"工具坏了，工地木工就地抢修", text:"木工和技术员卸下车轮、检查车把。工具轮换的空当，一名工人坐到土坡边翻开《毛选》，等候下一轮上工。", speaker:"工地木工", quote:"何惧斧把磨老茧，支援工地打硬仗，修理拉车在前线。" },
  { id:2, duration:9800, effect:"kitchen", kicker:"12:00 · 灶火接过正午的日头", title:"炊事女工转身回到后方灶房", text:"生火、和面、翻动大铁锅，再把饭菜一份份装进篮筐。渠线上不停工，灶房里也不能慢。", speaker:"炊事女工", quote:"保证战士吃好饭，再忙再累也心甘。" },
  { id:3, duration:9800, effect:"steps", kicker:"13:00 · 饭菜沿渠线送来", title:"饭篮和水桶走到每一双沾满泥土的手边", text:"炊事女工、供水女工穿过渠岸。修车的人、挖土的人、背药箱的人围坐片刻，吃完又回到各自岗位。", speaker:"炊事班回应", quote:"民工增加近一半，保证饭菜供应好。" },
  { id:4, duration:15200, effect:"meeting", kicker:"19:30 · 灯火在工棚前亮起", title:"一天的劳动，在晚间大会里重新汇拢", text:"木工汇报修车，医务员讲卫生，炊事女工盘点口粮，技术员记下进度。白天完成的土方，成为明天继续出发的起点。", speaker:"全体干群", quote:"全连干群总动员，争取提前再提前。" },
];

const stage = document.getElementById("demoStage");
const progress = document.getElementById("demoProgress");
const caption = document.getElementById("demoCaption");
const quoteCard = document.getElementById("demoQuoteCard");
const endCard = document.getElementById("demoEndCard");
const totalDuration = DEMO_SCENES.reduce((sum, scene) => sum + scene.duration, 0);
let timers = [];
let audioContext = null;
let soundEnabled = false;
let musicTimer = null;

function tone(frequency, duration, type = "sine", volume = .02, delay = 0) {
  if (!soundEnabled) return;
  const AudioCtor = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtor) return;
  audioContext ||= new AudioCtor();
  if (audioContext.state === "suspended") audioContext.resume();
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  oscillator.type = type;
  oscillator.frequency.value = frequency;
  gain.gain.setValueAtTime(.0001, audioContext.currentTime + delay);
  gain.gain.exponentialRampToValueAtTime(volume, audioContext.currentTime + delay + .02);
  gain.gain.exponentialRampToValueAtTime(.0001, audioContext.currentTime + delay + duration);
  oscillator.connect(gain).connect(audioContext.destination);
  oscillator.start(audioContext.currentTime + delay);
  oscillator.stop(audioContext.currentTime + delay + duration + .03);
}

function playEffect(effect, id) {
  tone(110 + id * 42, .45, "sine", .022);
  if (effect === "work") [0,.32,.64,.96].forEach((delay,index)=>tone(118+index*4,.08,"triangle",.025,delay));
  if (effect === "repair") [0,.25,.56,1.1].forEach((delay)=>tone(540,.055,"square",.018,delay));
  if (effect === "kitchen") [0,.18,.51,.84].forEach((delay,index)=>tone(230+index*22,.09,"sine",.012,delay));
  if (effect === "steps") [0,.34,.68,1.02].forEach((delay,index)=>tone(105+index*5,.07,"triangle",.021,delay));
  if (effect === "meeting") { tone(196,1.4,"sine",.034,.1); tone(294,1.8,"triangle",.022,.42); tone(392,2.1,"sine",.018,.7); }
}

function startMusic() {
  clearInterval(musicTimer);
  if (!soundEnabled) return;
  const notes = [196,220,247,294,247,220];
  let step = 0;
  const phrase = () => {
    const note = notes[step % notes.length];
    tone(note,1.5,"sine",.007);
    tone(note/2,2.7,"triangle",.004);
    step += 1;
  };
  phrase();
  musicTimer = setInterval(phrase, 2200);
}

function showScene(scene) {
  stage.dataset.scene = String(scene.id);
  document.querySelectorAll("[data-scene-dot]").forEach((dot)=>dot.classList.toggle("active",Number(dot.dataset.sceneDot)===scene.id));
  caption.classList.add("changing");
  quoteCard.classList.add("changing");
  setTimeout(()=>{
    document.getElementById("demoKicker").textContent = scene.kicker;
    document.getElementById("demoTitle").textContent = scene.title;
    document.getElementById("demoText").textContent = scene.text;
    document.getElementById("demoSpeaker").textContent = scene.speaker;
    document.getElementById("demoQuote").textContent = scene.quote;
    caption.classList.remove("changing");
    quoteCard.classList.remove("changing");
  },260);
  playEffect(scene.effect, scene.id);
}

function buildAtmosphere() {
  const dust = document.getElementById("demoDust");
  const sparks = document.getElementById("demoSparks");
  dust.innerHTML = "";
  sparks.innerHTML = "";
  for (let index=0; index<24; index+=1) {
    const particle=document.createElement("i");
    particle.className="dust";
    particle.style.setProperty("--x",`${4+Math.random()*92}%`);
    particle.style.setProperty("--y",`${15+Math.random()*72}%`);
    particle.style.setProperty("--delay",`${Math.random()*-6}s`);
    dust.appendChild(particle);
  }
  for (let index=0; index<14; index+=1) {
    const spark=document.createElement("i");
    spark.style.setProperty("--x",`${55+Math.random()*21}%`);
    spark.style.setProperty("--y",`${48+Math.random()*20}%`);
    spark.style.setProperty("--delay",`${Math.random()*-2.2}s`);
    sparks.appendChild(spark);
  }
}

function finishDemo() {
  timers.forEach(clearTimeout);
  timers=[];
  clearInterval(musicTimer);
  progress.classList.remove("playing");
  caption.classList.add("changing");
  quoteCard.classList.add("changing");
  endCard.hidden=false;
}

function playDemo() {
  timers.forEach(clearTimeout);
  timers=[];
  endCard.hidden=true;
  caption.classList.remove("changing");
  quoteCard.classList.remove("changing");
  progress.classList.remove("playing");
  progress.style.animationDuration=`${totalDuration}ms`;
  void progress.offsetWidth;
  progress.classList.add("playing");
  let elapsed=0;
  DEMO_SCENES.forEach((scene,index)=>{
    if(index===0) showScene(scene);
    else timers.push(setTimeout(()=>showScene(scene),elapsed));
    elapsed+=scene.duration;
  });
  timers.push(setTimeout(finishDemo,totalDuration));
  startMusic();
}

document.getElementById("demoSound").addEventListener("click",(event)=>{
  soundEnabled=!soundEnabled;
  event.currentTarget.setAttribute("aria-pressed",String(soundEnabled));
  event.currentTarget.textContent=soundEnabled?"关闭声音":"开启声音";
  if(soundEnabled){ tone(330,.12,"sine",.025); startMusic(); }
  else clearInterval(musicTimer);
});
document.getElementById("demoReplay").addEventListener("click",playDemo);
document.getElementById("demoReplayFromCard").addEventListener("click",playDemo);
document.getElementById("demoSkip").addEventListener("click",finishDemo);

buildAtmosphere();
playDemo();
