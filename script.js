const products = [
  {
    id: "online-mini-single",
    name: "雅思线上 Lmini 单科",
    type: "group",
    delivery: ["online", "hybrid"],
    scoreRange: [0, 7.5],
    levelGap: [0, 0.5],
    officialPrice: 10200,
    lowestPrice: 7400,
    duration: "6 个月有效期 · 总 55H",
    targetAfter: "单项提升 0.5 分左右，帮助总分更接近目标",
    hours: "12H 主课（6 次课）+ 43H 录播",
    format: "线上单科小班/私教服务",
    cp: "产品表未列 CP 码",
    services: ["单科秘研备考资料", "每一场纸笔考前口语/写作预测", "学期内无限次免费代报名雅思考试", "考后成绩分析与单项高分奖学金机会"],
    description: "适合只有一个单项需要补、预算需要控制、总分差距不大的学生。",
    fit: "如果学生只是某一项拖后腿，可以先用单科把短板补上，不必一开始买全科。"
  },
  {
    id: "online-double-fast",
    name: "雅思线上双科速提",
    type: "group",
    delivery: ["online", "hybrid"],
    scoreRange: [0, 7.5],
    levelGap: [0, 0.5],
    officialPrice: 19900,
    lowestPrice: 14900,
    duration: "6 个月有效期 · 总 83H",
    targetAfter: "两科短板各提升 0.5 分左右，稳定总分",
    hours: "24H 主课（12 次课）+ 16H 考前直播课 + 43H 录播",
    format: "线上双科小班/私教服务",
    cp: "产品表未列 CP 码",
    services: ["双科秘研备考资料", "赠送智慧学习系统 3 个月：词汇、背单词检测、形成个性化学习报告", "每一场纸笔考前口语/写作预测与考后分析", "学期内无限次免费代报名雅思考试"],
    description: "适合两个单项都低、但总分目标不需要大幅跨级的学生。",
    fit: "如果小分有两科明显低于目标，双科比单独拆买更完整，价格也比全 1V1 友好。"
  },
  {
    id: "online-1v1-one-point",
    name: "雅思线上 1V1 速提课",
    type: "oneOnOne",
    delivery: ["online", "hybrid"],
    scoreRange: [0, 6.5],
    levelGap: [0.5, 1],
    officialPrice: 39800,
    lowestPrice: 28800,
    duration: "12 个月有效期 · 总 141H",
    targetAfter: "总分预计提升约 1 分",
    hours: "48H 主课（24 次课）+ 32H 考前直播 + 61H 录播",
    format: "1V1 主课 + 考前直播 + 录播体系课",
    cp: "产品表未列 CP 码",
    services: ["秘研配套资料", "赠送智慧学习系统 3 个月：词汇/刷题/学习报告", "1V1 课后作业检查与阶段反馈", "学期内无限次免费雅思考试代报名"],
    description: "适合总分需要提升约 1 分、基础在 6.5 分以下、需要老师盯学习闭环的学生。",
    fit: "总分差 1 分时，单靠刷题容易卡在输出项，1V1 可以按学生错误定制讲解。"
  },
  {
    id: "online-1v1-one-half",
    name: "雅思线上 1V1 尊享课",
    type: "oneOnOne",
    delivery: ["online", "hybrid"],
    scoreRange: [0, 6],
    levelGap: [1, 1.5],
    officialPrice: 59900,
    lowestPrice: 41800,
    duration: "12 个月有效期 · 总 165H",
    targetAfter: "总分预计提升约 1.5 分",
    hours: "72H 主课（36 次课）+ 32H 考前直播 + 61H 录播",
    format: "1V1 尊享主课 + 双阶段直播 + 录播",
    cp: "产品表未列 CP 码",
    services: ["秘研配套资料", "赠送智慧学习系统 3 个月", "写作精批与口语逐题反馈", "单项高分奖学金最高 2W 元紫藤雅思单项高分奖学金"],
    description: "适合目标提升约 1.5 分、基础 6 分以下、希望系统补基础再冲刺的学生。",
    fit: "这个分差建议不要只靠短期冲刺，先补基础，再用 1V1 拉输出分更稳。"
  },
  {
    id: "online-1v1-two-points",
    name: "雅思线上 1V1 睿享课",
    type: "oneOnOne",
    delivery: ["online", "hybrid"],
    scoreRange: [0, 6],
    levelGap: [1.5, 2.5],
    officialPrice: 127500,
    lowestPrice: 82800,
    duration: "12 个月有效期 · 总 243H",
    targetAfter: "总分预计提升约 2 分",
    hours: "150H 主课（75 次课）+ 32H 考前直播 + 61H 录播",
    format: "高课时 1V1 主课 + 完整录播体系",
    cp: "产品表未列 CP 码",
    services: ["秘研配套资料", "赠送智慧学习系统 3 个月", "全程学习计划与作业闭环", "每场纸笔考前口语/写作预测与考后分析"],
    description: "适合总分需要提升 2 分左右、基础低于 6 分、需要长期定制督学的学生。",
    fit: "目标跨度大时，建议全程定制，避免听读输入和口写输出不同步导致总分上不去。"
  },
  {
    id: "online-1v1-hourly",
    name: "紫藤雅思 1V1 加班课",
    type: "oneOnOne",
    delivery: ["online", "offline", "hybrid"],
    scoreRange: [0, 8],
    levelGap: [0, 2.5],
    officialPrice: 800,
    lowestPrice: 600,
    duration: "按 6/8/10/12/16/18/20/22/24/30/32/40/48/50/60/64/80/160H 购买",
    targetAfter: "按短板科目补到目标小分线",
    hours: "1 次课 = 2 小时；可补单项，也可全科滚动补弱项",
    format: "任意基础学生 · 线上/线下可交付",
    cp: "CP-091068 至 CP-091087",
    services: ["授课老师 1V1 答疑", "口语测评、写作精批每 1 小时送 1 次", "建立 1V1 私教群，督促作业完成情况", "免费考试代报名，学期内雅思免费考试代报名", "报名满 20H 赠送智慧学习系统 3 个月"],
    description: "适合需要额外加课、考前补短板、班课之外做个性化纠偏的学生。",
    fit: "加班课建议按小分短板买：单项卡分补单项，多项都低就按全科计划滚动上。"
  },
  {
    id: "offline-all-55",
    name: "紫藤雅思全能 5.5",
    type: "group",
    delivery: ["online", "offline", "hybrid"],
    scoreRange: [4.5, 5.5],
    levelGap: [0.5, 1],
    officialPrice: 18000,
    lowestPrice: 15800,
    duration: "12 个月有效期 · 总 123H",
    targetAfter: "上完目标 5.5-6.0",
    hours: "64H 面授 + 16H 直播 + 43H 录播",
    format: "可线上/线下交付全科班课",
    cp: "CPB-078565",
    services: ["口语测评、写作精批各 12 次", "课后一辅导 8 次", "课前导学计划、结课复习计划各 1 套", "雅思核心词汇、口语题库+解析、写作高分范文资料"],
    description: "适合基础 4.5 起、目标 5.5-6.0，需要线下课堂节奏和全科框架的学生。",
    fit: "如果学生需要先把雅思方法体系搭起来，线下全能班比单补更适合。"
  },
  {
    id: "offline-all-65",
    name: "紫藤雅思全能 6.5",
    type: "group",
    delivery: ["online", "offline", "hybrid"],
    scoreRange: [5.5, 6.5],
    levelGap: [0.5, 1],
    officialPrice: 18000,
    lowestPrice: 15800,
    duration: "12 个月有效期 · 总 127H",
    targetAfter: "上完目标 6.5-7.0",
    hours: "64H 面授 + 16H 直播 + 47H 录播",
    format: "可线上/线下交付全科班课",
    cp: "CPB-078576",
    services: ["口语测评、写作精批各 12 次", "课后一辅导 8 次", "雅思核心词汇/口语题库+解析/写作高分范文礼包", "入学测试、阶段测评、全真模考"],
    description: "适合基础 5.5 起、冲 6.5-7.0 的主流目标学生。",
    fit: "6.5 是大部分申请常见目标，班课先保证全科方法和作业节奏。"
  },
  {
    id: "offline-all-70",
    name: "紫藤雅思全能 7.0",
    type: "group",
    delivery: ["online", "offline", "hybrid"],
    scoreRange: [6.0, 7.5],
    levelGap: [0.5, 1],
    officialPrice: 14000,
    lowestPrice: 13300,
    duration: "12 个月有效期 · 总 109H",
    targetAfter: "上完目标 7.0 及以上",
    hours: "48H 面授 + 16H 直播 + 45H 录播",
    format: "可线上/线下交付高分全科班课",
    cp: "CPB-078892",
    services: ["高分段题型精讲与评分标准拆解", "课前导学计划、结课复习计划", "口语测评、写作精批与阶段/全真模考", "高分表达与错题复盘资料"],
    description: "适合基础 6.5 起、目标 7.0 及以上，需要高分段技巧和稳定输出的学生。",
    fit: "高分段不是单纯多刷题，需要按评分标准优化表达和错误率。"
  },
  {
    id: "offline-connect-65",
    name: "紫藤雅思全能 5.5 + 6.5 连报",
    type: "combo",
    delivery: ["online", "offline", "hybrid"],
    scoreRange: [4.5, 5.5],
    levelGap: [1, 1.5],
    officialPrice: 36000,
    lowestPrice: 31600,
    duration: "18 个月有效期 · 总 213H",
    targetAfter: "第一阶段到 5.5，第二阶段到 6.5-7.0",
    hours: "128H 面授 + 32H 直播 + 53H 录播",
    format: "可线上/线下交付两阶段连报",
    cp: "CPB-077898",
    services: ["口语测评、写作精批各 20 次", "课后一辅导 24 次", "课前导学计划、结课复习计划各 2 套", "外加雅思阅读 200 长难句资料", "阶段测评与全真模考"],
    description: "适合基础 4.5 起、目标 6.5-7.0，跨度较大又想控制预算的学生。",
    fit: "连报适合先打基础再进阶，比分开报更连贯，也比全程 1V1 更省。"
  },
  {
    id: "offline-connect-70",
    name: "紫藤雅思全能 6.5 + 7.0 连报",
    type: "combo",
    delivery: ["online", "offline", "hybrid"],
    scoreRange: [5.5, 6.5],
    levelGap: [1, 1.5],
    officialPrice: 28800,
    lowestPrice: 26800,
    duration: "18 个月有效期 · 总 215H",
    targetAfter: "第一阶段到 6.5，第二阶段到 7.0 及以上",
    hours: "112H 面授 + 32H 直播 + 55H 录播",
    format: "可线上/线下交付两阶段高分连报",
    cp: "CPB-077905",
    services: ["外加雅思阅读 200 长难句", "口语测评、写作精批各 20 次", "课后一辅导 24 次", "阶段/全真模考", "两阶段学习计划与复习计划各 2 套"],
    description: "适合基础 5.5 起、目标 7.0 及以上，想从 6.5 稳步冲高分的学生。",
    fit: "目标 7 分以上，建议把 6.5 段和 7 分段拆阶段推进，避免直接冲高分压力过大。"
  },
  {
    id: "flight-a",
    name: "紫藤雅思飞跃 A 计划",
    type: "combo",
    delivery: ["online", "offline", "hybrid"],
    scoreRange: [6, 7],
    levelGap: [0.5, 0.5],
    officialPrice: 35800,
    lowestPrice: 32800,
    duration: "2 个月 · 折合 56H 1V1",
    targetAfter: "入班 6.0 左右，目标总分 +0.5",
    hours: "40H 私教 1V1 主课 + 2 个月飞跃督导服务（16H）",
    format: "1V1 私教 + 督导服务",
    cp: "ZHB-091243",
    services: ["适合各种基础，入班 6.0 目标总分 +0.5", "未达分补偿 1 次雅思考试与 1 个月飞跃督导服务", "赠送雅思核心 900 词、口语题库+解析、写作高分范文、阅读 200 长难句等礼包", "口语测评与写作精批每日各 1 次"],
    description: "适合已有 6.0 左右基础、目标短期加 0.5 分，需要督导闭环的学生。",
    fit: "A 计划更适合小幅提分但执行力要被带起来的学生，周期短、服务密度高。"
  },
  {
    id: "flight-b",
    name: "紫藤雅思飞跃 B 计划",
    type: "combo",
    delivery: ["online", "offline", "hybrid"],
    scoreRange: [4, 6.5],
    levelGap: [1, 1.5],
    officialPrice: 55800,
    lowestPrice: 50800,
    duration: "4 个月 · 折合 96H 1V1",
    targetAfter: "入班 4.0-6.5，冲 7.0 或 6.5 小分 6",
    hours: "64H 私教 1V1 主课 + 3 个月飞跃督导服务，送 1 个月",
    format: "1V1 私教 + 长线督导",
    cp: "ZHB-091242",
    services: ["入班 4.0-6.5，冲 7.0 或 6.5 小分 6", "未达分补偿 2 次雅思考试与 2 个月飞跃督导服务", "主课老师全程督导服务无限次", "线上自习室、学管老师答疑、单词督导无限次", "赠送雅思核心 900 词等 5 件套资料"],
    description: "适合目标提升 1 分左右且希望有更强结果保障和督导的学生。",
    fit: "B 计划适合咨询时重点讲保障和督导，尤其是目标明确、家长看重结果的学生。"
  },
  {
    id: "flight-c",
    name: "紫藤雅思飞跃 C 计划",
    type: "combo",
    delivery: ["online", "offline", "hybrid"],
    scoreRange: [4, 6],
    levelGap: [1.5, 2.5],
    officialPrice: 108800,
    lowestPrice: 95800,
    duration: "9 个月 · 折合 200H 1V1",
    targetAfter: "入班 4.0-6.0，冲 7.0 或 6.5 小分 6",
    hours: "128H 私教 1V1 主课 + 6 个月飞跃督导服务，送 3 个月",
    format: "高课时 1V1 私教 + 长期督导",
    cp: "ZHB-091241",
    services: ["入班 4.0-6.0，冲 7.0 或 6.5 小分 6", "未达分补偿 4 次雅思考试与 4 个月飞跃督导服务", "课前导学、主课老师督导、学管答疑、单词督导不限次", "赠送雅思核心 900 词、口语题库、写作范文、阅读长难句等资料"],
    description: "适合低基础冲高分、跨度大、需要长期投入和强监督的学生。",
    fit: "如果学生目标跨度很大，C 计划能把主课、督导、补偿服务都打包，咨询时可作为高保障方案。"
  }
];

const typeLabels = {
  group: "班课",
  oneOnOne: "一对一/加班课",
  combo: "组合/飞跃"
};

const deliveryLabels = {
  online: "线上",
  offline: "线下",
  hybrid: "线上 + 线下"
};

const skillLabels = {
  listening: "听力",
  reading: "阅读",
  speaking: "口语",
  writing: "写作"
};

const skillKindLabels = {
  input: "输入项（听力/阅读）",
  output: "输出项（口语/写作）",
  mixed: "全科滚动补弱项"
};

const hourlyPriceTiers = [
  { min: 0, max: 19, label: "<20小时", price: 720 },
  { min: 20, max: 39, label: "20-39小时", price: 680 },
  { min: 40, max: 59, label: "40-59小时", price: 650 },
  { min: 60, max: Infinity, label: "≥60小时", price: 600 }
];

const commonServiceNotes = {
  group: ["班主任/学管跟进出勤、作业与阶段学习状态", "入学测试、阶段测评或全真模考用于课后调课", "线上上课发放电子讲义，线下课按校区安排资料"],
  oneOnOne: ["按小分诊断定制课表，可只补单项也可全科滚动", "课后布置针对性作业，下一次课复盘错误", "适合搭配班课作为考前冲刺或输出项纠偏"],
  combo: ["分阶段规划：先搭体系，再冲目标分", "督导/学管跟进学习计划、作业与模考结果", "适合目标跨度大、需要更强服务闭环和结果保障的学生"]
};

const form = document.querySelector("#matcher-form");
const results = document.querySelector("#results");
const summary = document.querySelector("#match-summary");
const diagnosis = document.querySelector("#diagnosis");
const template = document.querySelector("#course-card-template");

function readOptionalScore(data, key) {
  const value = data.get(key);
  return value === "" ? null : Number(value);
}

function readForm() {
  const data = new FormData(form);
  return {
    currentScore: Number(data.get("currentScore")),
    targetScore: Number(data.get("targetScore")),
    delivery: data.get("delivery"),
    courseType: data.get("courseType"),
    subscores: {
      listening: readOptionalScore(data, "listeningScore"),
      reading: readOptionalScore(data, "readingScore"),
      speaking: readOptionalScore(data, "speakingScore"),
      writing: readOptionalScore(data, "writingScore")
    }
  };
}

function currency(value) {
  return `¥${value.toLocaleString("zh-CN")}`;
}

function getGap(preferences) {
  return Math.max(preferences.targetScore - preferences.currentScore, 0);
}

function getSubscoreDiagnosis(preferences) {
  const entries = Object.entries(preferences.subscores).filter(([, value]) => value !== null);
  if (entries.length === 0) {
    return {
      mode: "unknown",
      weakSkills: [],
      skillKind: "mixed",
      advice: "小分未填：先按全科方案讲，建议咨询时追问最近一次听说读写小分，再决定是否追加单项 1V1。"
    };
  }

  const expectedFloor = Math.max(preferences.targetScore - 0.5, 4);
  const weakSkills = entries
    .filter(([, value]) => value < expectedFloor)
    .map(([skill, value]) => ({ skill, value, gap: expectedFloor - value }))
    .sort((a, b) => b.gap - a.gap);

  if (weakSkills.length === 0) {
    return {
      mode: "balanced",
      weakSkills: [],
      skillKind: "mixed",
      advice: `已填小分整体接近目标，建议按全科冲刺和模考反馈推进，1V1 主要用于考前纠错。`
    };
  }

  const outputCount = weakSkills.filter((item) => item.skill === "speaking" || item.skill === "writing").length;
  const inputCount = weakSkills.filter((item) => item.skill === "listening" || item.skill === "reading").length;
  const skillKind = weakSkills.length >= 3 ? "mixed" : outputCount >= inputCount ? "output" : "input";
  const weakNames = weakSkills.map((item) => `${skillLabels[item.skill]}${item.value.toFixed(1)}`).join("、");

  return {
    mode: weakSkills.length >= 3 ? "all" : "single",
    weakSkills,
    skillKind,
    advice: weakSkills.length >= 3
      ? `小分短板较多（${weakNames}），建议不是只补单科，而是全科滚动补弱项。`
      : `小分显示主要短板在 ${weakNames}，建议优先补这些单项，尤其口语/写作更适合 1V1 精批精改。`
  };
}

function getHourlyTier(hours) {
  return hourlyPriceTiers.find((tier) => hours >= tier.min && hours <= tier.max) || hourlyPriceTiers.at(-1);
}

function recommendOneOnOneHours(preferences, diagnosisResult) {
  const gap = getGap(preferences);
  const weakCount = diagnosisResult.weakSkills.length;
  let hours;

  if (gap <= 0.5) hours = weakCount <= 1 && weakCount > 0 ? 12 : 16;
  else if (gap <= 1) hours = weakCount <= 1 && weakCount > 0 ? 20 : 32;
  else if (gap <= 1.5) hours = weakCount <= 2 && weakCount > 0 ? 40 : 60;
  else hours = 80;

  if (preferences.courseType === "oneOnOne" && hours < 40) hours = 40;

  const tier = getHourlyTier(hours);
  const officialHourly = 800;
  const focus = diagnosisResult.weakSkills.length
    ? diagnosisResult.weakSkills.map((item) => skillLabels[item.skill]).join("、")
    : skillKindLabels[diagnosisResult.skillKind];

  return {
    hours,
    band: tier.label,
    officialHourly,
    officialTotal: hours * officialHourly,
    lowestTotal: hours * tier.price,
    hourlyLowest: tier.price,
    lessonCount: Math.ceil(hours / 2),
    focus,
    howToRun: diagnosisResult.skillKind === "output"
      ? "建议口语/写作为主：每次课 2 小时，课前交作文或口语录音，课中按评分标准改表达，课后用精批反馈二次修改。"
      : diagnosisResult.skillKind === "input"
        ? "建议听力/阅读为主：每次课 2 小时，先复盘错题归因，再补题型方法，课后用限时训练检查正确率。"
        : "建议全科滚动：每次课 2 小时，按模考数据切换听说读写优先级，输出项配精批，输入项配错题复盘。"
  };
}

function scoreProduct(product, preferences, diagnosisResult) {
  const gap = getGap(preferences);
  let score = 0;

  if (product.delivery.includes(preferences.delivery)) score += 26;
  if (preferences.courseType === "any" || preferences.courseType === product.type) score += 22;
  if (preferences.currentScore >= product.scoreRange[0] && preferences.currentScore <= product.scoreRange[1]) score += 18;
  if (gap >= product.levelGap[0] && gap <= product.levelGap[1]) score += 18;

  if (diagnosisResult.mode === "single" && product.id.includes("1v1")) score += 10;
  if (diagnosisResult.mode === "all" && (product.type === "combo" || product.name.includes("全能"))) score += 10;
  if (diagnosisResult.mode === "unknown" && product.type !== "oneOnOne") score += 6;
  if (gap >= 1 && product.type === "combo") score += 8;

  return Math.min(score, 100);
}

function getServiceList(product) {
  return [...new Set([...product.services, ...(commonServiceNotes[product.type] || [])])];
}

function getProductKind(product) {
  if (product.id === "online-1v1-hourly") return "1V1 加班课";
  if (product.name.includes("飞跃")) return "飞跃计划（私教 1V1 + 督导）";
  if (product.name.includes("连报")) return "两阶段连报班课";
  if (product.type === "group") return product.delivery.includes("offline") ? "全科班课（可线上/线下交付）" : "线上班课";
  return product.format;
}

function choosePrerequisiteProduct(preferences, diagnosisResult, currentProduct) {
  if (currentProduct.type !== "oneOnOne" || currentProduct.id !== "online-1v1-hourly") return currentProduct;

  const gap = getGap(preferences);
  const candidates = products
    .filter((product) => product.id !== "online-1v1-hourly" && product.type !== "oneOnOne" && product.delivery.includes(preferences.delivery))
    .map((product) => ({ ...product, prerequisiteScore: scoreProduct(product, preferences, diagnosisResult) }))
    .sort((a, b) => {
      if (gap >= 1 && a.type !== b.type) return a.type === "combo" ? -1 : 1;
      return b.prerequisiteScore - a.prerequisiteScore || a.lowestPrice - b.lowestPrice;
    });

  return candidates[0] || currentProduct;
}

function buildLearningPath(product, preferences, diagnosisResult, oneOnOnePlan) {
  const prerequisite = choosePrerequisiteProduct(preferences, diagnosisResult, product);
  const targetAfter = prerequisite.targetAfter || `上完冲到 ${preferences.targetScore.toFixed(1)}`;
  const focus = oneOnOnePlan.focus;
  const oneOnOnePrice = `${oneOnOnePlan.hours}H × 最低 ${currency(oneOnOnePlan.hourlyLowest)}/H = ${currency(oneOnOnePlan.lowestTotal)} 起`;

  if (product.id === "online-1v1-hourly") {
    return [
      `前置先上「${prerequisite.name}」（${getProductKind(prerequisite)}），先用 ${prerequisite.hours} 把全科框架/阶段目标跑完；阶段目标：${targetAfter}。`,
      `上完前置课后做阶段模考或全真模考，核对听说读写小分；当前建议重点看：${focus}。`,
      `继续追加「紫藤雅思 1V1 加班课」${oneOnOnePlan.hours}H，约 ${oneOnOnePlan.lessonCount} 次课，${oneOnOnePlan.band} 档最低单价 ${currency(oneOnOnePlan.hourlyLowest)}/H，预估最低 ${currency(oneOnOnePlan.lowestTotal)} 起。`,
      oneOnOnePlan.howToRun
    ];
  }

  return [
    `先上「${product.name}」（${getProductKind(product)}），课程课时：${product.hours}；阶段目标：${product.targetAfter || targetAfter}。`,
    `课程结束前安排阶段测评/全真模考，确认是否已经达到 ${preferences.targetScore.toFixed(1)} 或目标小分；未达标就按最低小分继续补。`,
    `建议预留 1V1 加班课 ${oneOnOnePlan.hours}H（约 ${oneOnOnePlan.lessonCount} 次课）补 ${focus}；${oneOnOnePrice}，官方价 ${currency(oneOnOnePlan.officialTotal)}。`,
    oneOnOnePlan.howToRun
  ];
}

function formatHourlyTierTable() {
  return hourlyPriceTiers.map((tier) => `${tier.label}：${currency(tier.price)}/H`).join("；");
}

function buildMeta(product, oneOnOnePlan) {
  const lowestPrice = product.id === "online-1v1-hourly"
    ? `${oneOnOnePlan.band} 档最低 ${currency(oneOnOnePlan.hourlyLowest)}/H（${formatHourlyTierTable()}）`
    : currency(product.lowestPrice);

  return [
    ["官方价", product.officialPrice === 800 ? "¥800/小时" : currency(product.officialPrice)],
    ["最低/会战价", lowestPrice],
    ["课时", product.hours],
    ["周期", product.duration],
    ["交付", product.format],
    ["CP 码", product.cp],
    ["阶段目标", product.targetAfter || "按目标分定制"],
    ["1V1最低价", `${oneOnOnePlan.hours}H · ${oneOnOnePlan.band} · 最低 ${currency(oneOnOnePlan.lowestTotal)} 起`]
  ];
}

function renderDiagnosis(preferences, diagnosisResult, oneOnOnePlan) {
  const gap = getGap(preferences);
  const subscoreText = Object.entries(preferences.subscores)
    .filter(([, value]) => value !== null)
    .map(([skill, value]) => `${skillLabels[skill]} ${value.toFixed(1)}`)
    .join(" / ") || "未填写小分";

  const weakText = diagnosisResult.weakSkills.length
    ? diagnosisResult.weakSkills.map((item) => skillLabels[item.skill]).join("、")
    : "暂无明确单项短板";

  const cards = [
    ["总分差距", `当前 ${preferences.currentScore.toFixed(1)} → 目标 ${preferences.targetScore.toFixed(1)}，共需提升 ${gap.toFixed(1)} 分。`, "先按总分差决定主方案：0.5 分可冲刺/单项补弱，1 分以上建议体系课或组合课。"],
    ["小分判断", subscoreText, diagnosisResult.advice],
    ["补课方向", weakText, `推荐方向：${skillKindLabels[diagnosisResult.skillKind]}。小分没填时先讲全科方案，拿到成绩后再决定是否补单项。`],
    ["1V1 加班课", `建议 ${oneOnOnePlan.hours}H，约 ${oneOnOnePlan.lessonCount} 次课，${oneOnOnePlan.band} 档最低 ${currency(oneOnOnePlan.hourlyLowest)}/H，共 ${currency(oneOnOnePlan.lowestTotal)} 起。`, `${oneOnOnePlan.howToRun} 价格档：${formatHourlyTierTable()}。`]
  ];

  diagnosis.innerHTML = cards.map(([title, value, note]) => `
    <article class="diagnosis-card">
      <span>${title}</span>
      <strong>${value}</strong>
      <p>${note}</p>
    </article>
  `).join("");
}

function renderProducts(preferences) {
  const diagnosisResult = getSubscoreDiagnosis(preferences);
  const oneOnOnePlan = recommendOneOnOneHours(preferences, diagnosisResult);
  const rankedProducts = products
    .map((product) => ({ ...product, matchScore: scoreProduct(product, preferences, diagnosisResult) }))
    .sort((a, b) => b.matchScore - a.matchScore || a.lowestPrice - b.lowestPrice)
    .slice(0, 4);

  results.innerHTML = "";
  summary.textContent = `当前 ${preferences.currentScore.toFixed(1)} 分，目标 ${preferences.targetScore.toFixed(1)} 分，偏好${deliveryLabels[preferences.delivery]}；系统不按备考时间匹配，优先看总分差、小分短板和课程形态。`;
  renderDiagnosis(preferences, diagnosisResult, oneOnOnePlan);

  rankedProducts.forEach((product) => {
    const card = template.content.cloneNode(true);
    card.querySelector(".course-type").textContent = typeLabels[product.type];
    card.querySelector("h3").textContent = product.name;
    card.querySelector(".match-score").textContent = `推荐度 ${product.matchScore}%`;
    card.querySelector(".course-desc").textContent = product.description;
    card.querySelector(".fit").textContent = product.fit;
    card.querySelector(".price").textContent = product.officialPrice === 800
      ? `官方 ¥800/H｜${oneOnOnePlan.band} 最低 ¥${oneOnOnePlan.hourlyLowest}/H`
      : `官方 ${currency(product.officialPrice)}｜最低 ${currency(product.lowestPrice)}`;

    const planSteps = card.querySelector(".plan-steps");
    buildLearningPath(product, preferences, diagnosisResult, oneOnOnePlan).forEach((step) => {
      const item = document.createElement("li");
      item.textContent = step;
      planSteps.append(item);
    });

    const meta = card.querySelector(".course-meta");
    buildMeta(product, oneOnOnePlan).forEach(([term, detail]) => {
      const dt = document.createElement("dt");
      const dd = document.createElement("dd");
      dt.textContent = term;
      dd.textContent = detail;
      meta.append(dt, dd);
    });

    const benefits = card.querySelector(".benefits");
    getServiceList(product).forEach((service) => {
      const item = document.createElement("li");
      item.textContent = service;
      benefits.append(item);
    });

    results.append(card);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  renderProducts(readForm());
});

renderProducts(readForm());
