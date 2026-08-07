const MAP = [
  "###############",
  "#S....#....1..#",
  "#.###.#.#####.#",
  "#...#.#.....#.#",
  "###.#.###.#.#.#",
  "#3..#....2#...#",
  "#.#####.#.###.#",
  "#...4...#...5.#",
  "#.#######.###.#",
  "#6..........F.#",
  "###############",
];

const CHARACTERS = [
  {
    id: 1,
    name: "赵山河",
    role: "一线青年筑渠工",
    unit: "林扒团 · 引汉战士",
    source: "《口号整理》“按连队切分”表，第3条",
    image: "assets/worker.png",
    quote: "红旗如画歌如潮，地动山河铁臂摇。三山角下加油干，南水北调早实现。",
    fullQuote: "红旗如画歌如潮，地动山河铁臂摇，三山角下加油干，南水北调早实现。坝基战斗打冲锋，粉身碎骨献生命。",
    story: "铁锹、扒子与架子车，是当时渠首工地最常见的劳动工具；一线土方工的每一次挥锹，都在让渠线向前延伸。",
    typeLabel: "对句选择",
    title: "接上最后一句工地回声",
    prompt: "从四个选项中选出口号的下句。",
    display: ["红旗如画歌如潮，", "地动山河铁臂摇，", "三山角下加油干，", "____"],
    type: "choice",
    options: ["南水北调早实现。", "汉水奔流到眼前。", "两岸新村换新颜。", "万里长渠一线牵。"],
    answer: 0,
    hint: "原句以工程的远景目标收束，并直接出现“南水北调”四字。",
  },
  {
    id: 2,
    name: "周木成",
    role: "工地木工",
    unit: "林扒团 · 团后勤木工组",
    source: "《口号整理》“按连队切分”表，第6条；原表注明第2句末字迹较模糊",
    image: "assets/carpenter.png",
    quote: "何惧斧把磨老茧，支援工地打硬仗，修理拉车在前线，备战拉车象大炮。",
    fullQuote: "赤臂拉锯劲冲天，挥汗如雨只等闲，日夜奋战大跃进。何惧斧把磨老茧，支援工地打硬仗，修理拉车在前线，备战拉车象大炮，炮口对准帝修反。",
    story: "木工负责修理架子车、制作构件，使土方运输能够持续运转；锯、斧、锉子也是工地不可缺少的保障。",
    typeLabel: "句序复原",
    title: "凭记忆复原木工组的四行口号",
    prompt: "题干不再给出每句开头。请根据展厅中读到的原文，依次点击四行；点击已选句子可撤回。",
    display: ["木工组口号共四行，", "纸面顺序已经散乱。", "请凭浏览记忆还原原序。"],
    type: "order",
    options: ["修理拉车在前线，", "何惧斧把磨老茧，", "备战拉车象大炮。", "支援工地打硬仗，"],
    answer: [1, 3, 0, 2],
    hint: "先写双手磨出老茧，再写支援工地，继而修车，最后以“大炮”作比。",
  },
  {
    id: 3,
    name: "何桂香",
    role: "工地炊事女工",
    unit: "林扒团 · 二营北灶炊事员",
    source: "《口号整理》“按连队切分”表，第7条",
    image: "assets/cook.png",
    quote: "要打坝基攻坚战，喜坏我们炊事员，保证战士吃好饭，再忙再累也心甘。",
    fullQuote: "要打坝基攻坚战，喜坏我们炊事员，保证战士吃好饭，再忙再累也心甘。四卷雄文擎在手，誓为跃进把力添。",
    story: "不断增加的民工人数，让做饭、送水和粮食供应也成为工程节奏的一部分；炊烟背后同样是紧张的劳动。",
    typeLabel: "选词填空",
    title: "炊烟升起时，补上她的承诺",
    prompt: "选择最符合原始口号的三个字。",
    display: ["要打坝基攻坚战，", "喜坏我们炊事员，", "保证战士____，", "再忙再累也心甘。"],
    type: "choice",
    options: ["吃好饭", "穿好衣", "歇好脚", "唱好歌"],
    answer: 0,
    hint: "炊事员最直接的职责，是让工地上的劳动者按时吃上饭。",
  },
  {
    id: 4,
    name: "程素兰",
    role: "巡回医务女工",
    unit: "十林团 · 卫生防治所",
    source: "《口号整理》“按连队切分”表，第52条",
    image: "assets/doctor.png",
    quote: "赤脚医生志如钢，毛泽东思想来武装，走路走的防修路，誓为革命背药箱。眼熬烂，腿跑断，服务工地到前线。",
    fullQuote: "赤脚医生志如钢，毛泽东思想来武装，走路走的防修路，誓为革命背药箱，眼熬烂，腿跑断，服务工地到前线，完全彻底为革命，永做人民的勤务员。",
    story: "卫生防治所的医务人员背着药箱往返工地，为劳动者进行基础诊疗与卫生防治。",
    typeLabel: "角色辨识",
    title: "这段口号来自哪一支队伍？",
    prompt: "根据“背药箱”“服务工地到前线”等线索判断口号出处。",
    display: ["誓为革命背药箱，", "眼熬烂，腿跑断，", "服务工地到前线。"],
    type: "choice",
    options: ["卫生防治所", "团后勤木工组", "炊食班", "后勤铁业组"],
    answer: 0,
    hint: "药箱、熬夜和奔走前线，都指向承担医疗与防治工作的单位。",
  },
  {
    id: 5,
    name: "孙春梅",
    role: "工地供水女工",
    unit: "十林团 · 担水员",
    source: "《口号整理》“按连队切分”表，第55条",
    image: "assets/water_carrier.png",
    quote: "胸怀朝阳战三山，为了革命搞引丹，担水不惜肩膀断，两脚踏出新河山。",
    fullQuote: "胸怀朝阳战三山，为了革命搞引丹，担水不惜肩膀断，两脚踏出新河山，今日流下血和汗，双手挖出幸福泉，南水北调起宏图，彻底埋葬帝修反。",
    story: "在供水设施有限的工地，扁担与水桶维系着饮水、做饭和基本生活；担水员用脚步连接起工棚与渠线。",
    typeLabel: "上下联",
    title: "为担水员找到对应的下联",
    prompt: "选择与“担水不惜肩膀断”相接的原文。",
    display: ["胸怀朝阳战三山，", "为了革命搞引丹，", "担水不惜肩膀断，", "____"],
    type: "choice",
    options: ["两脚踏出新河山。", "一渠清水到良田。", "千担万担送甘泉。", "同心合力过险滩。"],
    answer: 0,
    hint: "下句仍然落在人的身体行动上，与“肩膀”形成呼应。",
  },
  {
    id: 6,
    name: "梁铁生",
    role: "后勤锻修匠",
    unit: "十林团 · 后勤铁业组",
    source: "《口号整理》“按连队切分”表，第98条",
    image: "assets/blacksmith.png",
    quote: "炉火红，干劲添，多打工具来支前，铁锤钳子是枪杆，彻底埋葬帝修反。",
    fullQuote: "炉火红，干劲添，多打工具来支前，铁锤钳子是枪杆，彻底埋葬帝修反。",
    story: "铁业组锻打并修理铁锹、铁镐等工具；炉火不熄，前线的工具才能不断档。",
    typeLabel: "词语拾取",
    title: "从炉火旁拾回两件工具",
    prompt: "原文把哪两件工具连在一起写作“是枪杆”？请选择两项。",
    display: ["炉火红，干劲添，", "多打工具来支前，", "____ ____是枪杆。"],
    type: "multi",
    options: ["铁锤", "钳子", "铁锹", "尺子"],
    answer: [0, 1],
    hint: "它们分别用来锻打与夹持，是传统铁匠手边最典型的一对工具。",
  },
];

// 每个岔路包含三道题：首题沿用人物主口号，另外两题来自同一工程语境下的原始整理表。
// 玩家答对至少两题即可解锁该岗位人物，既扩大史料覆盖，也避免单题偶然性。
const QUESTION_BANK = [
  [
    { ...CHARACTERS[0] },
    {
      unit: "刘集团 · 高河连队", source: "《口号整理》“按连队切分”表，第17条",
      fullQuote: "大干苦干加油干，要把丹水引邓县，邓县变成米粮川，幸福生活万万年。",
      quote: "大干苦干加油干，要把丹水引邓县，邓县变成米粮川，幸福生活万万年。",
      typeLabel: "地名填空", title: "听清水要流向哪里", prompt: "选择原文中“要把丹水引……”的目的地。",
      display: ["大干苦干加油干，", "要把丹水引____。"],
      type: "choice", options: ["邓县", "北京", "渭河", "黄河"], answer: 0,
      hint: "下一句仍以同一个县名开头，并写它将变成“米粮川”。",
    },
    {
      unit: "十林团 · 罗岗连队", source: "《口号整理》“按连队切分”表，第46条",
      fullQuote: "红色宝书捧手中，心红眼亮方向明，千难万险何所惧，越是艰险越冲锋，新老战士团结紧，艰巨的任务走在前，苦干实干拼命干，誓与帝修反抢时间，早日引来汉江水，农业产量跃江南，双脚踢开穷白帽，双手开出幸福泉。",
      quote: "早日引来汉江水，农业产量跃江南，双脚踢开穷白帽，双手开出幸福泉。",
      typeLabel: "上下联", title: "接住最后一锹土的回声", prompt: "选择与“双脚踢开穷白帽”相接的原句。",
      display: ["早日引来汉江水，", "农业产量跃江南，", "双脚踢开穷白帽，", "____"],
      type: "choice", options: ["双手开出幸福泉。", "两岸同看稻花香。", "红旗漫卷三山角。", "一渠清水到北方。"], answer: 0,
      hint: "上句写“双脚”，下句以另一处身体部位起笔。",
    },
  ],
  [
    { ...CHARACTERS[1] },
    {
      unit: "十林团 · 后勤木业组", source: "《口号整理》“按连队切分”表，第50条",
      fullQuote: "争速度抢时间，锯斧飞舞锉子钻，多做大炮为备战（架子车），狠狠打击帝修反。",
      quote: "争速度抢时间，锯斧飞舞锉子钻，多做大炮为备战（架子车），狠狠打击帝修反。",
      typeLabel: "注释辨识", title: "读懂木业组口号里的比喻", prompt: "整理表在“大炮”后用括号注明了哪一种工地运输工具？",
      display: ["争速度抢时间，", "锯斧飞舞锉子钻，", "多做“大炮”为备战。"],
      type: "choice", options: ["架子车", "独轮车", "水桶", "药箱"], answer: 0,
      hint: "这种两轮人力车常用来装土，也是木工组重点修制的物件。",
    },
    {
      unit: "十林团 · 缝纫组", source: "《口号整理》“按连队切分”表，第51条",
      fullQuote: "缝纫机子嗒嗒响，主席教导记心上，增产节约搞备战，坚决服务小引丹，为了革命拼命干，誓与帝修反抢时间，尺子剪刀是枪杆，彻底埋葬帝修反。",
      quote: "缝纫机子嗒嗒响，主席教导记心上，尺子剪刀是枪杆。",
      typeLabel: "工具拾取", title: "从缝纫组口号里找到两件工具", prompt: "原文把哪两件缝纫工具连在一起写作“是枪杆”？请选择两项。",
      display: ["缝纫机子嗒嗒响，", "坚决服务小引丹，", "____ ____是枪杆。"],
      type: "multi", options: ["尺子", "剪刀", "铁锤", "钳子"], answer: [0, 1],
      hint: "一件用来量，一件用来裁。",
    },
  ],
  [
    { ...CHARACTERS[2] },
    {
      unit: "十林团 · 炊食班", source: "《口号整理》“按连队切分”表，第53条",
      fullQuote: "炊食班，总动员，掀起跃进新局面，一天到晚不停闲，誓为革命来做饭，民工增加近一半，不添一个炊食员，保证饭菜供应好，也是打击帝修反。",
      quote: "民工增加近一半，不添一个炊食员，保证饭菜供应好。",
      typeLabel: "承诺填空", title: "人多了，炊食班怎样回答", prompt: "民工增加近一半后，原文作出了什么承诺？",
      display: ["民工增加近一半，", "____，", "保证饭菜供应好。"],
      type: "choice", options: ["不添一个炊食员", "再添十名炊食员", "暂把饭灶停一天", "只做一顿节约饭"], answer: 0,
      hint: "这句强调在不增加人手的情况下保障供应。",
    },
    {
      unit: "十林团 · 烧火员", questionUnit: "十林团 · 岗位待辨", source: "《口号整理》“按连队切分”表，第54条",
      fullQuote: "手举煤铲当枪杆，狠狠打击帝修反，节约用煤闹革命，绣出全球一片红。",
      quote: "手举煤铲当枪杆，节约用煤闹革命。",
      typeLabel: "岗位辨识", title: "煤铲旁是谁的岗位", prompt: "根据“煤铲”“节约用煤”等线索，判断这则口号来自哪个岗位。",
      display: ["手举煤铲当枪杆，", "节约用煤闹革命，", "绣出全球一片红。"],
      type: "choice", options: ["烧火员", "担水员", "木工", "医务员"], answer: 0,
      hint: "这个岗位守着炉灶，也最直接负责用煤。",
    },
  ],
  [
    { ...CHARACTERS[3], questionUnit: "十林团 · 单位待辨" },
    {
      unit: "九重团 · 水闸连队", source: "《口号整理》“按连队切分”表，第75条",
      fullQuote: "引汉战士心向党，三山脚下炼忠场，苦干硬干拼命干，何惧风雪和剑霜，汗水滴破三尺冰，热血洒遍黄土岗，一年任务半年完，七零年农业早上纲。",
      quote: "苦干硬干拼命干，何惧风雪和剑霜，汗水滴破三尺冰。",
      typeLabel: "词语填空", title: "补上严寒工地的两个字", prompt: "选择原文中“何惧……和剑霜”缺少的词语。",
      display: ["苦干硬干拼命干，", "何惧____和剑霜，", "汗水滴破三尺冰。"],
      type: "choice", options: ["风雪", "烈日", "山河", "险滩"], answer: 0,
      hint: "下一句写“三尺冰”，空缺也与冬季天气有关。",
    },
    {
      unit: "九重团 · 孔北连队", source: "《口号整理》“按连队切分”表，第79条",
      fullQuote: "为了革命搞引丹，愿把天下苦吃完，风刀剑霜何所惧，烈日酷暑只等闲。下定决心排万难，同心协力拼命干，引汉工程早实现，狠狠痛击帝修反。",
      quote: "风刀剑霜何所惧，烈日酷暑只等闲。下定决心排万难，同心协力拼命干。",
      typeLabel: "句序复原", title: "把四句风霜口号排回原序", prompt: "依次点击四句，复原整理表中的顺序。",
      display: ["严寒、酷暑、决心与协力，", "四句被风吹散在渠岸。", "请按原文排回。"],
      type: "order", options: ["同心协力拼命干。", "风刀剑霜何所惧，", "下定决心排万难，", "烈日酷暑只等闲。"], answer: [1, 3, 2, 0],
      hint: "先对严寒，再对酷暑；随后写下决心，最后落到同心协力。",
    },
  ],
  [
    { ...CHARACTERS[4] },
    {
      unit: "桑庄团 · 西桥连队", source: "《口号整理》“按连队切分”表，第69条",
      fullQuote: "铁扒子三根齿，下下挖的是大米子，苦干实干加油干，“南水北调”早实现。",
      quote: "铁扒子三根齿，下下挖的是大米子。",
      typeLabel: "工具辨识", title: "三根齿指的是哪件工具", prompt: "整理表中哪件工具被写作“三根齿”？",
      display: ["____三根齿，", "下下挖的是大米子，", "苦干实干加油干。"],
      type: "choice", options: ["铁扒子", "铁锹", "木锯", "煤铲"], answer: 0,
      hint: "原文第一句直接写出工具名，第二个字是“扒”。",
    },
    {
      unit: "刁河团 · 十里铺连队", source: "《口号整理》“按连队切分”表，第30条",
      fullQuote: "风捲红旗过大关，引汉工地大会战，三山角下排战场，誓把蛟龙往北牵，亩亩旱地早浇灌，粮堆高过东太山。",
      quote: "三山角下排战场，誓把蛟龙往北牵，亩亩旱地早浇灌。",
      typeLabel: "意象理解", title: "辨认被牵向北方的“蛟龙”", prompt: "结合引汉、浇灌的语境，“蛟龙”在这里指什么？",
      display: ["三山角下排战场，", "誓把蛟龙往北牵，", "亩亩旱地早浇灌。"],
      type: "choice", options: ["汉江渠水", "工地架子车", "山间风雪", "施工红旗"], answer: 0,
      hint: "它能沿渠道北流，并最终浇灌旱地。",
    },
  ],
  [
    { ...CHARACTERS[5] },
    {
      unit: "十林团 · 大东连队", source: "《口号整理》“按连队切分”表，第44条",
      fullQuote: "三山角下红旗展，革命重担挑在肩，引汉工地作战场，扒子铁铣当枪杆，苦干实干加巧干，誓与帝修反抢时间，掀起全面大跃进，提前完成小引丹，全连干群总动员，争取提前再提前。为了革命搞备战，来犯之敌全部歼，祖国山河尽朝晖，笑迎全球红烂漫。",
      quote: "引汉工地作战场，扒子铁铣当枪杆，苦干实干加巧干。",
      typeLabel: "工具拾取", title: "找出被并列写下的两件工具", prompt: "原文在“当枪杆”之前连续写了两件劳动工具。请根据展厅记忆选择两项。",
      display: ["引汉工地作战场，", "____ ____当枪杆，", "苦干实干加巧干。"],
      type: "multi", options: ["扒子", "铁铣", "木尺", "药箱"], answer: [0, 1],
      hint: "答案就是原句开头连续出现的两个工具名。",
    },
    {
      unit: "桑庄团 · 新华连队", source: "《口号整理》“按连队切分”表，第65条",
      fullQuote: "雄心壮志冲云天，苦干实干拼命干，引汉工地是战场，手中工具当刀枪，为了彻底埋葬帝修反，筋骨使断也情愿。",
      quote: "雄心壮志冲云天，苦干实干拼命干，引汉工地是战场，手中工具当刀枪。",
      typeLabel: "对句选择", title: "为“工地是战场”找到下句", prompt: "选择整理表中紧接“引汉工地是战场”的原句。",
      display: ["雄心壮志冲云天，", "苦干实干拼命干，", "引汉工地是战场，", "____"],
      type: "choice", options: ["手中工具当刀枪。", "渠水奔流到北方。", "炉火映红半边天。", "木轮飞转过山岗。"], answer: 0,
      hint: "上句把工地比作战场，下句继续用同一组战斗意象。",
    },
  ],
];

const ALL_SLOGANS = Array.isArray(window.ALL_SLOGANS) ? window.ALL_SLOGANS : [];
const SLOGAN_GROUPS = [...new Set(ALL_SLOGANS.map((slogan) => slogan.group))];
const ARCHIVE_EXTRA_IDS = [
  [1, 2],
  [45, 81],
  [15, 28],
  [64, 49],
  [14, 40],
  [10, 42],
];
const ARCHIVE_GROUPS = QUESTION_BANK.map((questions, groupIndex) => [
  ...questions.map((question, sloganIndex) => ({
    key: `display-${groupIndex + 1}-${sloganIndex + 1}`,
    unit: question.unit,
    source: question.source,
    quote: question.fullQuote || question.quote,
  })),
  ...ARCHIVE_EXTRA_IDS[groupIndex].map((sourceId, extraIndex) => {
    const slogan = ALL_SLOGANS.find((item) => item.id === sourceId);
    return {
      key: `display-${groupIndex + 1}-${extraIndex + 4}`,
      unit: `${slogan.group} · ${slogan.unit}`,
      source: `《口号整理》“按连队切分”表，第${slogan.id}条`,
      quote: slogan.text,
    };
  }),
]);

const STORAGE_KEY = "canalEchoMaze.v1";
const byId = (id) => document.getElementById(id);
const els = {
  intro: byId("introScreen"), archiveHall: byId("archiveScreen"), game: byId("gameScreen"), maze: byId("maze"),
  brandHome: byId("brandHome"), start: byId("startButton"),
  resume: byId("continueButton"), reset: byId("resetButton"), mapHome: byId("mapHomeButton"),
  shelf: byId("sloganShelf"), readerNumber: byId("readerNumber"), readerUnit: byId("readerUnit"),
  readerRole: byId("readerRole"), readerQuote: byId("readerQuote"), readerSloganTabs: byId("readerSloganTabs"),
  readerImage: byId("readerImage"), archivePrev: byId("archivePrev"),
  archiveNext: byId("archiveNext"), archiveBack: byId("archiveBack"),
  archiveReadCount: byId("archiveReadCount"), archiveReadBar: byId("archiveReadBar"), enterGame: byId("enterGameButton"),
  info: byId("infoModal"), infoButton: byId("infoButton"), sound: byId("soundButton"),
  sloganLibrary: byId("sloganLibraryModal"), sloganSearch: byId("sloganSearchInput"),
  sloganGroupNav: byId("sloganGroupNav"), sloganList: byId("allSloganList"),
  sloganResultsTitle: byId("sloganResultsTitle"), sloganResultCount: byId("sloganResultCount"),
  score: byId("scoreText"), progress: byId("progressBar"), portraits: byId("portraitGrid"),
  location: byId("locationText"), status: byId("statusText"), toast: byId("toast"),
  question: byId("questionModal"), questionIndex: byId("questionIndex"),
  questionType: byId("questionType"), questionUnit: byId("questionUnit"),
  questionTitle: byId("questionTitle"), questionPortrait: byId("questionPortrait"),
  sourceLines: byId("sourceLines"), questionPrompt: byId("questionPrompt"),
  answerArea: byId("answerArea"), feedback: byId("questionFeedback"),
  hint: byId("hintButton"), refreshQuestion: byId("refreshQuestionButton"), questionHome: byId("questionHomeButton"), submit: byId("submitAnswer"),
  archive: byId("archiveModal"), archiveImage: byId("archiveImage"), archiveName: byId("archiveName"),
  archiveRole: byId("archiveRole"), archiveQuote: byId("archiveQuote"),
  archiveStory: byId("archiveStory"),
  ending: byId("endingLayer"), endingStage: byId("endingStage"), endingSummary: byId("endingSummary"),
  morningCast: byId("morningCast"), repairCast: byId("repairCast"), kitchenCast: byId("kitchenCast"),
  deliveryCast: byId("deliveryCast"), meetingCast: byId("meetingCast"), dustField: byId("dustField"),
  repairSparks: byId("repairSparks"),
  endingTierLabel: byId("endingTierLabel"), endingProgress: byId("endingProgressBar"),
  endingSceneKicker: byId("endingSceneKicker"), endingSceneTitle: byId("endingSceneTitle"), endingSceneText: byId("endingSceneText"),
  endingQuoteCard: byId("endingQuoteCard"), endingQuoteSpeaker: byId("endingQuoteSpeaker"), endingQuoteText: byId("endingQuoteText"),
  endingTitle: byId("endingTitle"), endingDescription: byId("endingDescription"),
  endingScore: byId("endingScore"), skip: byId("skipEnding"), replay: byId("replayButton"),
  returnMap: byId("returnMapButton"),
};

let state = freshState();
let currentQuestion = null;
let selectedAnswer = null;
let evaluated = false;
let soundEnabled = true;
let audioContext = null;
let endingTimer = null;
let archiveIndex = 0;
let archiveSloganIndex = 0;
let archiveSeen = new Set();
let checkpointId = null;
let checkpointQuestionIndex = 0;
let checkpointResults = [];
let checkpointFinished = false;
let checkpointQuestions = [];
let checkpointQuestionPool = [];
let usedQuestionKeys = new Set();
let questionRefreshesLeft = 2;
let sloganGroupFilter = "全部";
let ambientNodes = [];
let ambientBeatTimer = null;
let endingMusicTimer = null;
let endingFxNodes = [];
let endingSceneTimers = [];
let activeEndingSettings = null;

function freshState() {
  return { position: [1, 1], checkpoints: {}, steps: 0, finished: false };
}

function score() {
  return Object.keys(state.checkpoints).filter((id) => checkpointStatus(id) === "correct").length;
}

function checkpointStatus(id) {
  const value = state.checkpoints[String(id)];
  return typeof value === "string" ? value : value?.status;
}

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadSaved() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed.position) || typeof parsed.checkpoints !== "object") return false;
    state = parsed;
    return true;
  } catch {
    return false;
  }
}

function showArchiveHall() {
  els.intro.hidden = true;
  els.game.hidden = true;
  els.archiveHall.hidden = false;
  activateAudio();
  selectArchive(archiveIndex);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderSloganShelf() {
  els.shelf.innerHTML = "";
  CHARACTERS.forEach((character, index) => {
    const viewed = [...archiveSeen].some((key) => key.startsWith(`${index}-`));
    const tab = document.createElement("button");
    tab.type = "button";
    tab.className = `slogan-tab ${index === archiveIndex ? "active" : ""} ${viewed ? "viewed" : ""}`;
    tab.innerHTML = `
      <span class="tab-no">${String(character.id).padStart(2, "0")}</span>
      <span><b>${character.role}</b><small>收录 5 则口号</small></span>
      <span class="seen">${viewed ? "✓" : "○"}</span>
    `;
    tab.addEventListener("click", () => selectArchive(index));
    els.shelf.appendChild(tab);
  });
}

function selectArchive(index) {
  archiveIndex = (index + CHARACTERS.length) % CHARACTERS.length;
  archiveSloganIndex = 0;
  selectArchiveSlogan(0);
  renderSloganShelf();
  playTone(285 + archiveIndex * 24, .07, "sine", .018);
}

function renderArchiveSloganTabs() {
  els.readerSloganTabs.innerHTML = "";
  ARCHIVE_GROUPS[archiveIndex].forEach((slogan, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = index === archiveSloganIndex ? "active" : "";
    button.innerHTML = `<span>${String(index + 1).padStart(2, "0")}</span><b>${slogan.unit.split("·").pop().trim()}</b>`;
    button.addEventListener("click", () => selectArchiveSlogan(index));
    els.readerSloganTabs.appendChild(button);
  });
}

function selectArchiveSlogan(index) {
  archiveSloganIndex = (index + ARCHIVE_GROUPS[archiveIndex].length) % ARCHIVE_GROUPS[archiveIndex].length;
  const character = CHARACTERS[archiveIndex];
  const slogan = ARCHIVE_GROUPS[archiveIndex][archiveSloganIndex];
  archiveSeen.add(`${archiveIndex}-${archiveSloganIndex}`);
  els.readerImage.classList.add("changing");
  setTimeout(() => {
    els.readerNumber.textContent = `${String(character.id).padStart(2, "0")}.${archiveSloganIndex + 1}`;
    els.readerUnit.textContent = slogan.unit;
    els.readerRole.textContent = character.role;
    els.readerQuote.textContent = slogan.quote.replace(/。/g, "。\n").trim();
    els.readerImage.src = character.image;
    els.readerImage.alt = `${character.role}人物立绘`;
    els.readerImage.classList.remove("changing");
  }, 130);
  renderArchiveSloganTabs();
  updateArchiveProgress();
}

function updateArchiveProgress() {
  const count = archiveSeen.size;
  els.archiveReadCount.textContent = count;
  els.archiveReadBar.style.width = `${(count / 30) * 100}%`;
  els.enterGame.disabled = count < 6;
  els.enterGame.querySelector("span").textContent = count < 6 ? `还需浏览 ${6 - count} 则` : "浏览完毕，进入迷宫";
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[character]);
}

function renderSloganGroupNav() {
  if (!els.sloganGroupNav) return;
  const groups = ["全部", ...SLOGAN_GROUPS];
  els.sloganGroupNav.innerHTML = groups.map((group) => {
    const count = group === "全部" ? ALL_SLOGANS.length : ALL_SLOGANS.filter((slogan) => slogan.group === group).length;
    return `<button type="button" class="${group === sloganGroupFilter ? "active" : ""}" data-slogan-group="${escapeHtml(group)}"><span>${escapeHtml(group)}</span><b>${count}</b></button>`;
  }).join("");
  els.sloganGroupNav.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      sloganGroupFilter = button.dataset.sloganGroup;
      renderSloganLibrary();
    });
  });
}

function renderSloganLibrary() {
  if (!els.sloganList) return;
  const query = (els.sloganSearch?.value || "").trim().toLowerCase();
  const filtered = ALL_SLOGANS.filter((slogan) => {
    const inGroup = sloganGroupFilter === "全部" || slogan.group === sloganGroupFilter;
    const haystack = `${slogan.id} ${slogan.group} ${slogan.unit} ${slogan.category} ${slogan.text}`.toLowerCase();
    return inGroup && (!query || haystack.includes(query));
  });
  renderSloganGroupNav();
  els.sloganResultsTitle.textContent = query
    ? `${sloganGroupFilter === "全部" ? "全部团别" : sloganGroupFilter} · “${query}”`
    : (sloganGroupFilter === "全部" ? "全部口号" : sloganGroupFilter);
  els.sloganResultCount.textContent = `${filtered.length} 组`;
  els.sloganList.innerHTML = filtered.length ? filtered.map((slogan) => `
    <article class="slogan-record">
      <div class="slogan-record-meta">
        <span>${String(slogan.id).padStart(2, "0")}</span>
        <p><b>${escapeHtml(slogan.group)}</b><small>${escapeHtml(slogan.unit)} · ${escapeHtml(slogan.category)}</small></p>
      </div>
      <blockquote>${slogan.lines.map((line) => escapeHtml(line)).join("<br>")}</blockquote>
    </article>
  `).join("") : `<div class="slogan-empty"><b>没有找到对应口号</b><span>换一个关键词，或选择其他团别试试。</span></div>`;
}

function openSloganLibrary() {
  sloganGroupFilter = "全部";
  if (els.sloganSearch) els.sloganSearch.value = "";
  renderSloganLibrary();
  openLayer(els.sloganLibrary);
  setTimeout(() => els.sloganSearch?.focus(), 80);
}

function shuffled(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const target = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[target]] = [copy[target], copy[index]];
  }
  return copy;
}

function stripChoicePunctuation(value) {
  return String(value ?? "").replace(/[，。！？；、,.!?;:"“”‘’（）()《》【】—\-]/g, "").replace(/\s+/g, " ").trim();
}

function normalizeChoiceKey(value) {
  return stripChoicePunctuation(value).replace(/\s+/g, "");
}

function isUsefulChoiceText(value) {
  return normalizeChoiceKey(value).length >= 2;
}

function makeChoiceOptions(correct, distractors) {
  const cleanCorrect = stripChoicePunctuation(correct);
  if (!isUsefulChoiceText(cleanCorrect)) return null;
  const seen = new Set([normalizeChoiceKey(cleanCorrect)]);
  const unique = [];
  distractors.forEach((item) => {
    const clean = stripChoicePunctuation(item);
    const key = normalizeChoiceKey(clean);
    if (!key || seen.has(key) || key.length < 2) return;
    seen.add(key);
    unique.push(clean);
  });
  const options = shuffled([cleanCorrect, ...shuffled(unique).slice(0, 3)]);
  return options.length === 4 ? { options, answer: options.indexOf(cleanCorrect) } : null;
}

function splitDisplayedSlogan(text) {
  return (text.match(/[^，。！？；]+[，。！？；]?/g) || [text])
    .map((line) => line.trim())
    .filter(isUsefulChoiceText);
}

function buildDynamicQuestions(checkpoint) {
  const matches = ARCHIVE_GROUPS[checkpoint - 1];
  const displayed = ARCHIVE_GROUPS.flat();
  const lineBank = displayed.flatMap((slogan) => splitDisplayedSlogan(slogan.quote)).filter((line) => line.length >= 5 && line.length <= 34);
  const unitBank = [...new Set(displayed.map((slogan) => slogan.unit))];
  const generated = [];

  matches.forEach((slogan) => {
    const lines = splitDisplayedSlogan(slogan.quote);
    if (lines.length >= 2) {
      const correct = lines.at(-1);
      const context = lines.slice(Math.max(0, lines.length - 4), -1);
      const visible = context.join("");
      const choices = !visible.includes(correct) && makeChoiceOptions(correct, lineBank);
      if (choices) generated.push({
        key: `${slogan.key}-ending`,
        unit: slogan.unit,
        questionUnit: slogan.unit,
        quote: slogan.quote,
        fullQuote: slogan.quote,
        typeLabel: "随机补句",
        title: "补回展厅口号的收束句",
        prompt: "这道题来自游戏前的口号展厅，请选出被遮住的最后一句。",
        display: [...context, "____"],
        type: "choice",
        ...choices,
        hint: "这则口号就在游戏前展厅的本组材料中，可返回首页重新浏览。",
      });
    }

    const correctUnit = slogan.unit;
    const unitChoices = makeChoiceOptions(correctUnit, unitBank);
    const excerpt = lines.slice(0, Math.min(2, lines.length));
    if (unitChoices && !excerpt.join("").includes(correctUnit)) generated.push({
      key: `${slogan.key}-unit`,
      unit: correctUnit,
      questionUnit: `展厅题库 · 第 ${slogan.key.split("-").at(-1)} 则`,
      quote: slogan.quote,
      fullQuote: slogan.quote,
      typeLabel: "随机辨识",
      title: "辨认这段展厅口号所属的队伍",
      prompt: "这道题来自游戏前的口号展厅，请选择对应的团别和单位。",
      display: excerpt,
      type: "choice",
      ...unitChoices,
      hint: "先看其中的岗位、工具或工程任务，再回想展厅标签中的单位名称。",
    });
  });
  return generated;
}

function prepareCheckpointQuestions(id) {
  const base = QUESTION_BANK[id - 1].map((question, index) => ({ ...question, key: `base-${id}-${index}` }));
  const dynamic = buildDynamicQuestions(id);
  checkpointQuestionPool = [...base, ...dynamic];
  if (window.__CANAL_TEST_STATIC_BANK__ || dynamic.length < 2) {
    checkpointQuestions = base;
  } else {
    checkpointQuestions = [shuffled(base)[0], ...shuffled(dynamic).slice(0, 2)];
  }
  usedQuestionKeys = new Set(checkpointQuestions.map((question) => question.key));
  questionRefreshesLeft = 2;
}

function refreshCurrentQuestion() {
  if (evaluated || checkpointFinished || questionRefreshesLeft <= 0) return;
  const candidates = checkpointQuestionPool.filter((question) => !usedQuestionKeys.has(question.key));
  if (!candidates.length) {
    els.feedback.textContent = "本关题库已经全部看过了。";
    return;
  }
  const replacement = shuffled(candidates)[0];
  checkpointQuestions[checkpointQuestionIndex] = replacement;
  usedQuestionKeys.add(replacement.key);
  questionRefreshesLeft -= 1;
  loadCheckpointQuestion();
  els.feedback.textContent = `已换入展厅中展示过的新题，本关还可更换 ${questionRefreshesLeft} 次。`;
  playTone(315, .09, "sine", .022);
}

function showGame() {
  els.intro.hidden = true;
  els.archiveHall.hidden = true;
  els.game.hidden = false;
  activateAudio();
  renderAll();
  window.scrollTo({ top: 0, behavior: "smooth" });
  const currentTile = MAP[state.position[0]]?.[state.position[1]];
  if (/\d/.test(currentTile) && !state.checkpoints[currentTile]) {
    setTimeout(() => openQuestion(Number(currentTile)), 220);
  }
}

function startNewGame() {
  state = freshState();
  save();
  showGame();
  playTone(220, 0.12, "triangle");
}

function renderAll() {
  renderMaze();
  renderPortraits();
  const total = score();
  els.score.textContent = `${total} / 6`;
  els.progress.style.width = `${(total / 6) * 100}%`;
  updateLocation();
}

function renderMaze() {
  els.maze.innerHTML = "";
  MAP.forEach((row, r) => {
    [...row].forEach((value, c) => {
      const tile = document.createElement("div");
      tile.className = tileClass(value);
      tile.dataset.row = r;
      tile.dataset.col = c;
      if (/\d/.test(value)) {
        tile.dataset.label = value;
        const mark = document.createElement("span");
        mark.textContent = value;
        tile.appendChild(mark);
        const checkpointState = checkpointStatus(value);
        if (checkpointState === "correct") tile.classList.add("done");
        if (checkpointState === "wrong") tile.classList.add("missed");
        tile.setAttribute("aria-label", `口号关卡${value}`);
      }
      if (r === state.position[0] && c === state.position[1]) {
        const player = document.createElement("span");
        player.className = "player-token walking";
        player.setAttribute("aria-label", "你的位置");
        tile.appendChild(player);
        requestAnimationFrame(() => player.classList.remove("walking"));
      }
      if (value !== "#") {
        tile.addEventListener("click", () => moveToAdjacent(r, c));
      }
      els.maze.appendChild(tile);
    });
  });
}

function tileClass(value) {
  if (value === "#") return "tile wall";
  if (value === "S") return "tile start";
  if (value === "F") return "tile finish";
  if (/\d/.test(value)) return "tile checkpoint";
  return "tile path";
}

function moveToAdjacent(r, c) {
  const [cr, cc] = state.position;
  if (Math.abs(cr - r) + Math.abs(cc - c) !== 1) return;
  move(r - cr, c - cc);
}

function move(dr, dc) {
  if (els.game.hidden || !els.question.hidden || !els.archive.hidden || !els.info.hidden || !els.sloganLibrary.hidden || !els.ending.hidden) return;
  const nr = state.position[0] + dr;
  const nc = state.position[1] + dc;
  if (!MAP[nr] || MAP[nr][nc] === "#") {
    els.status.textContent = "前方是山壁，换一条路试试";
    playTone(90, 0.06, "square", 0.025);
    return;
  }

  state.position = [nr, nc];
  state.steps += 1;
  save();
  renderMaze();
  updateLocation();
  footstep();

  const tileValue = MAP[nr][nc];
  if (/\d/.test(tileValue) && !state.checkpoints[tileValue]) {
    setTimeout(() => openQuestion(Number(tileValue)), 180);
  } else if (tileValue === "F") {
    state.finished = true;
    save();
    setTimeout(playEnding, 260);
  }
}

function updateLocation() {
  const [r, c] = state.position;
  const value = MAP[r][c];
  if (value === "S") els.location.textContent = "起点 · 工棚";
  else if (value === "F") els.location.textContent = "终点 · 渠首观水台";
  else if (/\d/.test(value)) els.location.textContent = `岔路 ${value} · ${CHARACTERS[Number(value) - 1].role}`;
  else if (r < 4) els.location.textContent = "北坡 · 石埂道";
  else if (r < 8) els.location.textContent = "三山角 · 土方道";
  else els.location.textContent = "南渠 · 临水道";
  els.status.textContent = `已行走 ${state.steps} 步 · ${score()} 位同行者已归队`;
}

function renderPortraits() {
  els.portraits.innerHTML = "";
  CHARACTERS.forEach((character) => {
    const status = checkpointStatus(character.id);
    const button = document.createElement("button");
    button.type = "button";
    button.className = `portrait-card ${status === "correct" ? "unlocked" : ""} ${status === "wrong" ? "missed" : ""}`;
    button.disabled = status !== "correct";
    button.innerHTML = `
      <img src="${character.image}" alt="" />
      <span class="lock-mark">${status === "correct" ? "✓" : character.id}</span>
      <span class="portrait-label"><b>${status === "correct" ? character.name : "待寻人物"}</b><small>${status === "correct" ? character.role : `岔路 0${character.id}`}</small></span>
    `;
    if (status === "correct") button.addEventListener("click", () => openArchive(character));
    els.portraits.appendChild(button);
  });
}

function openQuestion(id) {
  checkpointId = id;
  checkpointQuestionIndex = 0;
  checkpointResults = [];
  checkpointFinished = false;
  prepareCheckpointQuestions(id);
  loadCheckpointQuestion();
  openLayer(els.question);
  playTone(440, 0.12, "sine");
  setTimeout(() => els.answerArea.querySelector("button")?.focus(), 100);
}

function loadCheckpointQuestion() {
  const character = CHARACTERS[checkpointId - 1];
  currentQuestion = { ...checkpointQuestions[checkpointQuestionIndex], id: checkpointId, image: character.image, name: character.name };
  selectedAnswer = currentQuestion.type === "multi" || currentQuestion.type === "order" ? [] : null;
  evaluated = false;
  els.questionIndex.textContent = `关卡 ${String(checkpointId).padStart(2, "0")} · 第 ${checkpointQuestionIndex + 1} / 3 题`;
  els.questionType.textContent = currentQuestion.typeLabel;
  els.questionUnit.textContent = currentQuestion.questionUnit || currentQuestion.unit;
  els.questionTitle.textContent = currentQuestion.title;
  els.questionPortrait.querySelector("img").src = currentQuestion.image;
  els.questionPortrait.querySelector("img").style.filter = "";
  els.sourceLines.innerHTML = currentQuestion.display.map((line) => `<div>${escapeHtml(line).replace(/____/g, '<span class="blank">　</span>')}</div>`).join("");
  els.questionPrompt.textContent = currentQuestion.prompt;
  els.feedback.textContent = "";
  els.feedback.className = "question-feedback";
  els.submit.querySelector("span").textContent = "确认答案";
  els.hint.disabled = false;
  els.refreshQuestion.disabled = questionRefreshesLeft <= 0;
  els.refreshQuestion.textContent = `换一道题（${questionRefreshesLeft}）`;
  renderAnswers();
  setTimeout(() => els.answerArea.querySelector("button")?.focus(), 100);
}

function renderAnswers() {
  els.answerArea.innerHTML = "";
  const q = currentQuestion;
  if (q.type === "choice") {
    q.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `choice-button ${selectedAnswer === index ? "selected" : ""}`;
      button.dataset.key = String.fromCharCode(65 + index);
      button.textContent = stripChoicePunctuation(option);
      button.addEventListener("click", () => { if (!evaluated) { selectedAnswer = index; renderAnswers(); } });
      els.answerArea.appendChild(button);
    });
  }
  if (q.type === "order") {
    const bank = document.createElement("div");
    bank.className = "order-bank";
    q.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `order-chip ${selectedAnswer.includes(index) ? "used" : ""}`;
      button.textContent = stripChoicePunctuation(option);
      button.addEventListener("click", () => { if (!evaluated && !selectedAnswer.includes(index)) { selectedAnswer.push(index); renderAnswers(); } });
      bank.appendChild(button);
    });
    const slots = document.createElement("div");
    slots.className = "order-slots";
    for (let i = 0; i < q.answer.length; i += 1) {
      const slot = document.createElement("button");
      slot.type = "button";
      slot.className = "order-slot";
      slot.textContent = selectedAnswer[i] === undefined ? "点击上方句子填入" : stripChoicePunctuation(q.options[selectedAnswer[i]]);
      slot.addEventListener("click", () => { if (!evaluated && selectedAnswer[i] !== undefined) { selectedAnswer.splice(i, 1); renderAnswers(); } });
      slots.appendChild(slot);
    }
    els.answerArea.append(bank, slots);
  }
  if (q.type === "multi") {
    const bank = document.createElement("div");
    bank.className = "multi-bank";
    q.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `multi-chip ${selectedAnswer.includes(index) ? "selected" : ""}`;
      button.textContent = stripChoicePunctuation(option);
      button.addEventListener("click", () => {
        if (evaluated) return;
        selectedAnswer = selectedAnswer.includes(index) ? selectedAnswer.filter((item) => item !== index) : [...selectedAnswer, index];
        renderAnswers();
      });
      bank.appendChild(button);
    });
    els.answerArea.appendChild(bank);
  }
}

function isAnswered() {
  if (currentQuestion.type === "choice") return selectedAnswer !== null;
  if (currentQuestion.type === "order") return selectedAnswer.length === currentQuestion.answer.length;
  if (currentQuestion.type === "multi") return selectedAnswer.length === currentQuestion.answer.length;
  return false;
}

function isCorrect() {
  if (currentQuestion.type === "choice") return selectedAnswer === currentQuestion.answer;
  if (currentQuestion.type === "order") return selectedAnswer.every((value, index) => value === currentQuestion.answer[index]);
  if (currentQuestion.type === "multi") {
    const selected = [...selectedAnswer].sort().join(",");
    const answer = [...currentQuestion.answer].sort().join(",");
    return selected === answer;
  }
  return false;
}

function submitQuestion() {
  if (evaluated) {
    if (checkpointFinished) {
      closeLayer(els.question);
      currentQuestion = null;
      renderAll();
    } else {
      checkpointQuestionIndex += 1;
      loadCheckpointQuestion();
      playTone(380 + checkpointQuestionIndex * 45, .1, "sine", .02);
    }
    return;
  }
  if (!isAnswered()) {
    els.feedback.textContent = currentQuestion.type === "order" ? "请先排满四个句序。" : "请先选择答案。";
    els.feedback.className = "question-feedback error";
    return;
  }
  evaluated = true;
  els.refreshQuestion.disabled = true;
  const correct = isCorrect();
  checkpointResults.push(correct);
  const isLast = checkpointQuestionIndex === checkpointQuestions.length - 1;
  checkpointFinished = isLast;
  els.hint.disabled = true;
  if (!isLast) {
    els.submit.querySelector("span").textContent = "进入下一题";
    if (correct) {
      els.feedback.textContent = `回答正确。当前 ${checkpointResults.filter(Boolean).length} / ${checkpointResults.length}，再听一则口号。`;
      els.feedback.className = "question-feedback success";
      playSuccess();
    } else {
      els.feedback.textContent = `这一题未答对。原文是：“${currentQuestion.quote}” 下一题仍可继续争取。`;
      els.feedback.className = "question-feedback error";
      playTone(135, 0.18, "sawtooth", 0.025);
    }
    return;
  }

  const correctCount = checkpointResults.filter(Boolean).length;
  const unlocked = correctCount >= 2;
  state.checkpoints[String(checkpointId)] = {
    status: unlocked ? "correct" : "wrong",
    score: correctCount,
    total: checkpointResults.length,
    answers: [...checkpointResults],
  };
  save();
  renderPortraits();
  els.score.textContent = `${score()} / 6`;
  els.progress.style.width = `${(score() / 6) * 100}%`;
  els.submit.querySelector("span").textContent = unlocked ? "收下立绘" : "继续前行";
  if (unlocked) {
    els.feedback.textContent = `本关答对 ${correctCount} / 3。${currentQuestion.name}加入了你的行程，人物立绘已点亮。`;
    els.feedback.className = "question-feedback success";
    els.questionPortrait.querySelector("img").style.filter = "none";
    playSuccess();
  } else {
    els.feedback.textContent = `本关答对 ${correctCount} / 3，尚未达到解锁所需的两题。最后一则原文是：“${currentQuestion.quote}”`;
    els.feedback.className = "question-feedback error";
    playTone(135, 0.18, "sawtooth", 0.025);
  }
}

function openArchive(character) {
  els.archiveImage.src = character.image;
  els.archiveImage.alt = `${character.name}人物立绘`;
  els.archiveName.textContent = character.name;
  els.archiveRole.textContent = `${character.role} · ${character.unit}`;
  els.archiveQuote.textContent = character.quote;
  els.archiveStory.textContent = character.story;
  openLayer(els.archive);
}

function openLayer(layer) {
  layer.hidden = false;
  document.body.classList.add("modal-open");
}

function closeLayer(layer) {
  layer.hidden = true;
  if ([els.question, els.archive, els.info, els.sloganLibrary, els.ending].every((item) => item.hidden)) {
    document.body.classList.remove("modal-open");
  }
}

function showHome(message = "本轮位置已保存，可从首页继续行程") {
  els.game.hidden = true;
  els.archiveHall.hidden = true;
  els.intro.hidden = false;
  els.resume.hidden = false;
  save();
  window.scrollTo({ top: 0, behavior: "smooth" });
  showToast(message);
}

function returnHomeFromQuestion() {
  closeLayer(els.question);
  currentQuestion = null;
  showHome();
}

function returnHomeFromGame() {
  showHome();
}

function playEnding() {
  const collected = getCollectedCharacters();
  const total = collected.length;
  const tier = total <= 2 ? 0 : total <= 4 ? 1 : 2;
  const settings = getEndingSettings(tier, collected);
  activeEndingSettings = settings;
  clearEndingTimers();
  els.ending.hidden = false;
  els.endingStage.hidden = false;
  els.endingSummary.hidden = true;
  els.endingStage.dataset.tier = tier;
  els.endingTierLabel.textContent = settings.label;
  [els.morningCast, els.repairCast, els.kitchenCast, els.deliveryCast, els.meetingCast].forEach((container) => { container.innerHTML = ""; });
  els.dustField.innerHTML = "";
  els.repairSparks.innerHTML = "";
  const sceneIds = new Set(settings.scenes.map((scene) => scene.id));
  document.querySelectorAll("[data-scene-dot]").forEach((dot) => {
    dot.hidden = !sceneIds.has(Number(dot.dataset.sceneDot));
    dot.classList.remove("active");
  });
  document.body.classList.add("modal-open");
  stopAmbient();

  buildEndingCast(collected);
  buildEndingAtmosphere();
  const duration = settings.scenes.reduce((sum, scene) => sum + scene.duration, 0);
  settings.duration = duration;
  els.endingProgress.classList.remove("playing");
  els.endingProgress.style.animationDuration = `${duration}ms`;
  void els.endingProgress.offsetWidth;
  els.endingProgress.classList.add("playing");

  let elapsed = 0;
  settings.scenes.forEach((scene, index) => {
    if (index === 0) showEndingScene(settings, index);
    else endingSceneTimers.push(setTimeout(() => showEndingScene(settings, index), elapsed));
    elapsed += scene.duration;
  });
  startEndingMusic(tier);
  playSuccess();
  endingTimer = setTimeout(() => showEndingSummary(settings), duration);
}

function getCollectedCharacters() {
  return CHARACTERS.filter((character) => checkpointStatus(character.id) === "correct");
}

function getEndingSettings(tier, collected = getCollectedCharacters()) {
  const collectedIds = new Set(collected.map((character) => character.id));
  const roleNames = collected.map((character) => character.role.replace(/^工地/, "")).join("、");
  const scenes = [
    {
      id: 0, effect: "work", duration: [5200, 7600, 10200][tier], include: () => collected.length > 0,
      kicker: "05:40 · 天刚放亮", title: collected.length ? `${roleNames}走进渠线` : "天刚放亮，渠线仍在等待脚步",
      text: collected.length ? "被你寻回的同行者先后出现在渠岸。第一锹、第一车、第一担水，把工地上的一天重新唤醒。" : "这一次还没有人物加入行程。晨光扫过渠岸，等待下一轮把劳动者的身影带回画面。",
      speaker: "众人齐声", quote: "红旗如画歌如潮，地动山河铁臂摇。",
    },
    {
      id: 1, effect: "repair", duration: [5200, 7800, 11000][tier], include: () => collectedIds.has(1) || collectedIds.has(2),
      kicker: "09:30 · 架子车停在半道", title: collectedIds.has(2) ? "工具坏了，工地木工就地抢修" : "车轮停住，筑渠工在土坡边等候",
      text: collectedIds.has(2) ? "木工卸下车轮、检查车把。工具轮换的空当，筑渠工在一旁等候下一轮上工。" : "架子车停在半道，筑渠工把工具放在身边，短暂等候之后还要回到渠线。",
      speaker: collectedIds.has(2) ? "工地木工" : "一线青年筑渠工",
      quote: collectedIds.has(2) ? "何惧斧把磨老茧，支援工地打硬仗，修理拉车在前线。" : "三山角下加油干，南水北调早实现。",
    },
    {
      id: 2, effect: "kitchen", duration: [5000, 7300, 9800][tier], include: () => collectedIds.has(3),
      kicker: "12:00 · 灶火接过正午的日头", title: "炊事女工转身回到后方灶房",
      text: "生火、和面、翻动大铁锅，再把饭菜一份份装进篮筐。渠线上不停工，灶房里也不能慢。",
      speaker: "炊事女工", quote: "保证战士吃好饭，再忙再累也心甘。",
    },
    {
      id: 3, effect: "steps", duration: [5000, 7300, 9800][tier], include: () => [3, 4, 5].some((id) => collectedIds.has(id)),
      kicker: "13:00 · 饭菜和水沿渠线送来", title: deliveryEndingTitle(collectedIds),
      text: deliveryEndingText(collectedIds),
      speaker: collectedIds.has(5) ? "供水女工" : collectedIds.has(4) ? "巡回医务女工" : "炊事班回应",
      quote: collectedIds.has(5) ? "担水不惜肩膀断，两脚踏出新河山。" : collectedIds.has(4) ? "眼熬烂，腿跑断，服务工地到前线。" : "民工增加近一半，保证饭菜供应好。",
    },
    {
      id: 4, effect: "meeting", duration: [7600, 11000, 15200][tier], include: () => collected.length >= 2,
      kicker: "19:30 · 灯火在工棚前亮起", title: "一天的劳动，在晚间大会里重新汇拢",
      text: `灯下围坐的是${roleNames}。白天完成的土方、后勤和照护，成为明天继续出发的起点。`,
      speaker: "全体干群", quote: "全连干群总动员，争取提前再提前。",
    },
  ].filter((scene) => scene.include());
  if (!scenes.length) scenes.push({
    id: 0, effect: "work", duration: 5200, kicker: "05:40 · 天刚放亮", title: "天刚放亮，渠线仍在等待脚步",
    text: "这一次还没有人物加入行程。晨光扫过渠岸，等待下一轮把劳动者的身影带回画面。",
    speaker: "渠岸回声", quote: "苦干实干加油干。",
  });
  return { tier, ...endingSummaryFor(collected, scenes), scenes };
}

function deliveryEndingTitle(collectedIds) {
  if (collectedIds.has(3) && collectedIds.has(5) && collectedIds.has(4)) return "饭篮、水桶和药箱走到每一双沾满泥土的手边";
  if (collectedIds.has(3) && collectedIds.has(5)) return "饭篮和水桶沿渠线送来";
  if (collectedIds.has(5) && collectedIds.has(4)) return "水桶和药箱沿着渠岸奔走";
  if (collectedIds.has(3)) return "炊事女工把饭菜送向工地";
  if (collectedIds.has(5)) return "供水女工把清水送到渠岸";
  return "巡回医务女工赶往前线";
}

function deliveryEndingText(collectedIds) {
  const props = [];
  if (collectedIds.has(3)) props.push("饭篮");
  if (collectedIds.has(5)) props.push("水桶");
  if (collectedIds.has(4)) props.push("药箱");
  return `${props.join("、")}穿过渠岸，来到劳动者身边。短暂歇息之后，各自又回到原来的岗位。`;
}

function endingSummaryFor(collected, scenes) {
  const duration = Math.round(scenes.reduce((sum, scene) => sum + scene.duration, 0) / 1000);
  const names = collected.map((character) => character.name).join("、");
  if (!collected.length) {
    return { label: "工地一日 · 待寻片段", title: "一天已经走过，仍有身影待寻", description: "这一次还没有人物立绘被点亮。再回到迷宫里答出口号，片尾会随你寻回的岗位补上新的段落。" };
  }
  if (collected.length < 6) {
    return {
      label: `工地一日 · ${duration}秒 · ${collected.length}人片段`,
      title: `${names}把这一天的一部分带回来了`,
      description: "片尾已按你解锁的人物重剪：解锁到哪个岗位，就出现哪个岗位参与的工地片段。继续寻访还能补齐更多场景。",
    };
  }
  return {
    label: `工地一日 · ${duration}秒 · 完整片尾`,
    title: "从晨光到灯火，众人把渠线向前推了一程",
    description: "你寻回的六位同行者共同走完了这一天：工具坏了有人修，午饭到了有人送，劳动告一段落后大家又在灯下商量明天。工程的宏大，正由这些具体而重复的日常汇成。",
  };
}

function appendStoryFigure(container, character, index, variant = "") {
  const figure = document.createElement("img");
  figure.className = `story-figure figure-${character.id} ${variant}`.trim();
  figure.src = character.image;
  figure.alt = "";
  figure.style.setProperty("--delay", `${.45 + index * .18}s`);
  container.appendChild(figure);
}

function buildEndingCast(collected = getCollectedCharacters()) {
  collected.forEach((character, index) => appendStoryFigure(els.morningCast, character, index, "at-work"));
  collected.filter((character) => [1, 2].includes(character.id)).forEach((character, index) => appendStoryFigure(els.repairCast, character, index, character.id === 2 ? "repairing" : "waiting"));
  collected.filter((character) => character.id === 3).forEach((character, index) => appendStoryFigure(els.kitchenCast, character, index, "cooking"));
  collected.filter((character) => [3, 4, 5].includes(character.id)).forEach((character, index) => appendStoryFigure(els.deliveryCast, character, index, "delivering"));
  collected.forEach((character, index) => appendStoryFigure(els.meetingCast, character, index, "at-meeting"));
}

function buildEndingAtmosphere() {
  for (let i = 0; i < 24; i += 1) {
    const dust = document.createElement("i");
    dust.className = "dust";
    dust.style.setProperty("--x", `${4 + Math.random() * 92}%`);
    dust.style.setProperty("--y", `${15 + Math.random() * 72}%`);
    dust.style.setProperty("--delay", `${Math.random() * -6}s`);
    els.dustField.appendChild(dust);
  }
  for (let i = 0; i < 14; i += 1) {
    const spark = document.createElement("i");
    spark.style.setProperty("--x", `${55 + Math.random() * 21}%`);
    spark.style.setProperty("--y", `${48 + Math.random() * 20}%`);
    spark.style.setProperty("--delay", `${Math.random() * -2.2}s`);
    els.repairSparks.appendChild(spark);
  }
}

function showEndingScene(settings, index) {
  const scene = settings.scenes[index];
  els.endingStage.dataset.scene = String(scene.id);
  document.querySelectorAll("[data-scene-dot]").forEach((dot) => dot.classList.toggle("active", Number(dot.dataset.sceneDot) === scene.id));
  const caption = els.endingSceneTitle.parentElement;
  caption.classList.add("changing");
  setTimeout(() => {
    els.endingSceneKicker.textContent = scene.kicker;
    els.endingSceneTitle.textContent = scene.title;
    els.endingSceneText.textContent = scene.text;
    els.endingQuoteSpeaker.textContent = scene.speaker;
    els.endingQuoteText.textContent = scene.quote;
    caption.classList.remove("changing");
    els.endingQuoteCard.classList.remove("changing");
  }, 260);
  els.endingQuoteCard.classList.add("changing");
  playSceneTransition(scene);
}

function playSceneTransition(scene) {
  playTone(110 + scene.id * 42, .45, "sine", .022);
  playTone(220 + scene.id * 52, .72, "triangle", .016, .12);
  if (scene.effect === "work") [0, .32, .64, .96].forEach((delay, index) => playTone(118 + index * 4, .08, "triangle", .025, delay));
  if (scene.effect === "repair") [0, .25, .56, 1.1].forEach((delay) => playTone(540, .055, "square", .018, delay));
  if (scene.effect === "kitchen") [0, .18, .51, .84].forEach((delay, index) => playTone(230 + index * 22, .09, "sine", .012, delay));
  if (scene.effect === "steps") [0, .34, .68, 1.02].forEach((delay, index) => playTone(105 + index * 5, .07, "triangle", .021, delay));
  if (scene.effect === "meeting") {
    playTone(196, 1.4, "sine", .034, .1);
    playTone(294, 1.8, "triangle", .022, .42);
    playTone(392, 2.1, "sine", .018, .7);
  }
}

function clearEndingTimers() {
  clearTimeout(endingTimer);
  endingSceneTimers.forEach(clearTimeout);
  endingSceneTimers = [];
}

function showEndingSummary(settings) {
  clearEndingTimers();
  stopEndingMusic();
  startAmbient();
  els.endingProgress.classList.remove("playing");
  els.endingStage.hidden = true;
  els.endingSummary.hidden = false;
  els.endingTitle.textContent = settings.title;
  els.endingDescription.textContent = settings.description;
  els.endingScore.textContent = score();
  setTimeout(() => els.replay.focus(), 100);
}

function skipEnding() {
  showEndingSummary(activeEndingSettings || getEndingSettings(score() <= 2 ? 0 : score() <= 4 ? 1 : 2));
}

function showToast(text) {
  els.toast.textContent = text;
  els.toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => els.toast.classList.remove("show"), 1900);
}

function getAudioContext() {
  if (!soundEnabled) return null;
  const AudioCtor = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtor) return null;
  audioContext ||= new AudioCtor();
  return audioContext;
}

async function activateAudio() {
  const ctx = getAudioContext();
  if (ctx?.state === "suspended" && ctx.resume) {
    try {
      await ctx.resume();
    } catch {
      // Some mobile browsers only unlock audio after the next direct gesture.
    }
  }
  startAmbient();
  return true;
}

function startAmbient() {
  const ctx = getAudioContext();
  if (!ctx || (ctx.state && ctx.state !== "running") || ambientBeatTimer) return;
  const chords = [
    [196.00, 246.94, 293.66, 369.99],
    [174.61, 220.00, 261.63, 329.63],
    [164.81, 207.65, 246.94, 293.66],
    [185.00, 233.08, 277.18, 349.23],
  ];
  const motif = [293.66, 329.63, 369.99, 392.00, 369.99, 329.63, 293.66, 261.63];
  let measure = 0;
  const playMeasure = () => {
    if (!soundEnabled || (ctx.state && ctx.state !== "running")) return;
    const chord = chords[measure % chords.length];
    chord.forEach((note, index) => {
      playAmbientTone(note, 5.6, "sine", .013 - index * .0014, index * .22);
      playAmbientTone(note / 2, 5.8, "sine", .0048, index * .18);
    });
    playAmbientTone(motif[measure % motif.length], 2.15, "triangle", .0105, 1.05);
    playAmbientTone(motif[(measure + 3) % motif.length], 1.75, "sine", .0075, 3.25);
    measure += 1;
  };
  playMeasure();
  ambientBeatTimer = setInterval(playMeasure, 5400);
}

function stopAmbient() {
  clearInterval(ambientBeatTimer);
  ambientBeatTimer = null;
  ambientNodes.forEach((node) => { try { node.stop(); } catch {} });
  ambientNodes = [];
}

function playAmbientTone(frequency, duration, type, volume, delay = 0) {
  const ctx = getAudioContext();
  if (!ctx || (ctx.state && ctx.state !== "running") || !ctx.createOscillator || !ctx.createGain) return;
  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();
  oscillator.type = type;
  oscillator.frequency.value = frequency;
  gain.gain.setValueAtTime(.0001, ctx.currentTime + delay);
  gain.gain.exponentialRampToValueAtTime(volume, ctx.currentTime + delay + 1.2);
  gain.gain.setValueAtTime(volume * .74, ctx.currentTime + delay + Math.max(1.6, duration - 1.1));
  gain.gain.exponentialRampToValueAtTime(.0001, ctx.currentTime + delay + duration);
  oscillator.connect(gain).connect(ctx.destination);
  oscillator.start(ctx.currentTime + delay);
  oscillator.stop(ctx.currentTime + delay + duration + .05);
  ambientNodes.push(oscillator);
  oscillator.onended = () => { ambientNodes = ambientNodes.filter((node) => node !== oscillator); };
}

function startEndingMusic(tier) {
  stopEndingMusic();
  if (!soundEnabled) return;
  const notes = tier === 2 ? [196, 220, 247, 294, 330, 392] : [196, 247, 294, 247];
  let step = 0;
  const playPhrase = () => {
    const note = notes[step % notes.length];
    playTone(note, .72, "triangle", .025);
    playTone(note / 2, 1.25, "sine", .012);
    if (step % 3 === 0) playTone(note * 1.5, .5, "sine", .012, .15);
    step += 1;
  };
  playPhrase();
  endingMusicTimer = setInterval(playPhrase, tier === 2 ? 880 : 1050);
}

function stopEndingMusic() {
  clearInterval(endingMusicTimer);
  endingMusicTimer = null;
  endingFxNodes.forEach((node) => { try { node.stop(); } catch {} });
  endingFxNodes = [];
}

function playWaterRush(seconds = 4, volume = .045) {
  const ctx = getAudioContext();
  if (!ctx || (ctx.state && ctx.state !== "running") || !ctx.createBufferSource || !ctx.createBiquadFilter) return;
  const buffer = ctx.createBuffer(1, Math.floor(ctx.sampleRate * 1.8), ctx.sampleRate);
  const data = buffer.getChannelData(0);
  let smooth = 0;
  for (let i = 0; i < data.length; i += 1) {
    smooth = smooth * .84 + (Math.random() * 2 - 1) * .16;
    data[i] = smooth;
  }
  const source = ctx.createBufferSource();
  const low = ctx.createBiquadFilter();
  const high = ctx.createBiquadFilter();
  const gain = ctx.createGain();
  source.buffer = buffer;
  source.loop = true;
  source.playbackRate.value = .88;
  low.type = "lowpass";
  low.frequency.value = 1450;
  high.type = "highpass";
  high.frequency.value = 160;
  gain.gain.setValueAtTime(.0001, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(volume, ctx.currentTime + .55);
  gain.gain.setValueAtTime(volume * .82, ctx.currentTime + Math.max(.7, seconds - .7));
  gain.gain.exponentialRampToValueAtTime(.0001, ctx.currentTime + seconds);
  source.connect(low).connect(high).connect(gain).connect(ctx.destination);
  source.start();
  source.stop(ctx.currentTime + seconds + .05);
  endingFxNodes.push(source);
  source.onended = () => { endingFxNodes = endingFxNodes.filter((item) => item !== source); };
}

function playTone(frequency, duration, type = "sine", volume = 0.04, delay = 0) {
  const ctx = getAudioContext();
  if (!ctx || (ctx.state && ctx.state !== "running") || !ctx.createOscillator || !ctx.createGain) return;
  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();
  oscillator.type = type;
  oscillator.frequency.value = frequency;
  gain.gain.setValueAtTime(0.0001, ctx.currentTime + delay);
  gain.gain.exponentialRampToValueAtTime(volume, ctx.currentTime + delay + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + delay + duration);
  oscillator.connect(gain).connect(ctx.destination);
  oscillator.start(ctx.currentTime + delay);
  oscillator.stop(ctx.currentTime + delay + duration + 0.02);
}

function footstep() {
  playTone(115 + Math.random() * 18, 0.045, "triangle", 0.018);
}

function playSuccess() {
  playTone(392, .14, "triangle", .06);
  playTone(523.25, .18, "triangle", .055, .11);
  playTone(659.25, .22, "sine", .048, .24);
  playTone(783.99, .3, "triangle", .044, .38);
  playEncouragementDrum(.02);
  playEncouragementDrum(.24);
  playEncouragementDrum(.48);
}

function playEncouragementDrum(delay = 0) {
  const ctx = getAudioContext();
  if (!ctx || (ctx.state && ctx.state !== "running") || !ctx.createBufferSource || !ctx.createGain || !ctx.createBiquadFilter) return;
  const buffer = ctx.createBuffer(1, Math.floor(ctx.sampleRate * .12), ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < data.length; i += 1) {
    data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
  }
  const source = ctx.createBufferSource();
  const filter = ctx.createBiquadFilter();
  const gain = ctx.createGain();
  filter.type = "bandpass";
  filter.frequency.value = 210;
  if (filter.Q) filter.Q.value = .8;
  gain.gain.setValueAtTime(.0001, ctx.currentTime + delay);
  gain.gain.exponentialRampToValueAtTime(.048, ctx.currentTime + delay + .01);
  gain.gain.exponentialRampToValueAtTime(.0001, ctx.currentTime + delay + .13);
  source.buffer = buffer;
  source.connect(filter).connect(gain).connect(ctx.destination);
  source.start(ctx.currentTime + delay);
  source.stop(ctx.currentTime + delay + .14);
}

function resetGame(confirmFirst = true) {
  if (confirmFirst && !window.confirm("确定清除本轮进度并重新开始吗？")) return;
  state = freshState();
  save();
  renderAll();
  showToast("新的行程已经开始");
}

els.start.addEventListener("click", showArchiveHall);
document.querySelectorAll("[data-open-slogans]").forEach((button) => button.addEventListener("click", openSloganLibrary));
els.resume.addEventListener("click", showGame);
els.mapHome.addEventListener("click", returnHomeFromGame);
els.brandHome.addEventListener("click", (event) => {
  event.preventDefault();
  if (!els.game.hidden) returnHomeFromGame();
  else if (!els.archiveHall.hidden) {
    els.archiveHall.hidden = true;
    els.intro.hidden = false;
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else window.scrollTo({ top: 0, behavior: "smooth" });
});
els.archivePrev.addEventListener("click", () => selectArchive(archiveIndex - 1));
els.archiveNext.addEventListener("click", () => selectArchive(archiveIndex + 1));
els.archiveBack.addEventListener("click", () => {
  els.archiveHall.hidden = true;
  els.intro.hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
});
els.enterGame.addEventListener("click", startNewGame);
els.reset.addEventListener("click", () => resetGame(true));
els.submit.addEventListener("click", submitQuestion);
els.refreshQuestion.addEventListener("click", refreshCurrentQuestion);
els.questionHome.addEventListener("click", returnHomeFromQuestion);
els.sloganSearch.addEventListener("input", renderSloganLibrary);
els.hint.addEventListener("click", () => {
  els.feedback.textContent = `线索：${currentQuestion.hint}`;
  els.feedback.className = "question-feedback";
  playTone(290, .08, "sine", .02);
});
els.infoButton.addEventListener("click", () => openLayer(els.info));
els.sound.addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  els.sound.setAttribute("aria-pressed", String(soundEnabled));
  showToast(soundEnabled ? "舒缓背景音乐与游戏音效已开启" : "背景音乐与音效已关闭");
  if (soundEnabled) {
    activateAudio().then(() => playTone(330, .08));
  } else {
    stopAmbient();
    stopEndingMusic();
  }
});
els.skip.addEventListener("click", skipEnding);
els.replay.addEventListener("click", () => {
  stopEndingMusic();
  closeLayer(els.ending);
  resetGame(false);
  activateAudio();
});
els.returnMap.addEventListener("click", () => {
  stopEndingMusic();
  closeLayer(els.ending);
  activateAudio();
});

document.querySelectorAll("[data-close]").forEach((button) => {
  const targets = { archive: els.archive, info: els.info, "all-slogans": els.sloganLibrary };
  button.addEventListener("click", () => closeLayer(targets[button.dataset.close]));
});

document.querySelectorAll("[data-move]").forEach((button) => {
  const deltas = { up: [-1, 0], down: [1, 0], left: [0, -1], right: [0, 1] };
  let repeatDelay = null;
  let repeatMove = null;
  const stop = () => {
    clearTimeout(repeatDelay);
    clearInterval(repeatMove);
    repeatDelay = null;
    repeatMove = null;
    button.classList.remove("pressed");
  };
  button.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    activateAudio();
    button.classList.add("pressed");
    move(...deltas[button.dataset.move]);
    repeatDelay = setTimeout(() => {
      repeatMove = setInterval(() => move(...deltas[button.dataset.move]), 145);
    }, 330);
  });
  button.addEventListener("pointerup", stop);
  button.addEventListener("pointercancel", stop);
  button.addEventListener("pointerleave", stop);
  button.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      move(...deltas[button.dataset.move]);
    }
  });
});

document.addEventListener("keydown", (event) => {
  const keymap = {
    ArrowUp: [-1, 0], w: [-1, 0], W: [-1, 0],
    ArrowDown: [1, 0], s: [1, 0], S: [1, 0],
    ArrowLeft: [0, -1], a: [0, -1], A: [0, -1],
    ArrowRight: [0, 1], d: [0, 1], D: [0, 1],
  };
  if (keymap[event.key]) {
    event.preventDefault();
    move(...keymap[event.key]);
  }
  if (event.key === "Escape") {
    if (!els.sloganLibrary.hidden) closeLayer(els.sloganLibrary);
    else if (!els.archive.hidden) closeLayer(els.archive);
    else if (!els.info.hidden) closeLayer(els.info);
  }
});

if (loadSaved()) els.resume.hidden = false;
renderPortraits();
renderSloganShelf();
["pointerdown", "click", "touchend", "keydown"].forEach((type) => {
  document.addEventListener(type, () => activateAudio().catch(() => {}), { passive: true });
});
