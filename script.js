const SCORE_OPTIONS = ["", 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5];
const TOTAL_SCORE_OPTIONS = [4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5];
const OFFICIAL_ONE_ON_ONE_PRICE = 800;
const hourlyPriceTiers = [
  { min: 0, max: 19, label: "<20小时", price: 720 },
  { min: 20, max: 39, label: "20–39小时", price: 680 },
  { min: 40, max: 59, label: "40–59小时", price: 650 },
  { min: 60, max: Infinity, label: "≥60小时", price: 600 }
];
const oneOnOneCpMap = {
  6: "CP-091068", 8: "CP-091069", 10: "CP-091070", 12: "CP-091071", 16: "CP-091072", 18: "CP-091073",
  20: "CP-091074", 22: "CP-091075", 24: "CP-091076", 30: "CP-091078", 32: "CP-091079", 40: "CP-091080",
  48: "CP-091081", 50: "CP-091082", 60: "CP-091083", 64: "CP-091084", 80: "CP-091085", 160: "CP-091087"
};
const classTypeLabels = {
  online_large: "线上大班", online_small: "线上小班", offline_class: "线下班课", one_on_one: "1V1",
  combo: "班课+1V1", flight: "飞跃计划", single: "单项课"
};
const skillLabels = { listening: "听力", reading: "阅读", writing: "写作", speaking: "口语" };
const classServices = {
  online_large: {
    advantages: ["5–25人线上大班，价格更友好", "适合预算敏感学生系统学习题型和方法", "适合作为后续小班/1V1冲刺前的基础段课程"],
    services: ["梯研配套资料", "赠送智慧学习系统3个月", "1:1还原机考刷题", "背单词、检测单词并形成个性化学习报告", "写作预测题", "每场纸笔考前口语/写作预测", "考前后考情回访和分析", "优秀学员奖学金", "雅思考试代报名", "学辅期内无限次免费代报名", "入学测试/阶段测/全真模考", "无限次AI口语智能陪练", "课前导学计划", "结课复习计划"],
    gifts: ["雅思备考资料包", "雅思核心词", "口语当季题库", "写作范文", "高频题资料", "机考练习资源", "智慧学习系统"],
    warning: "大班适合系统学习和预算友好，但个性化弱于小班/1V1；写作/口语短板明显或目标7.0+时建议搭配1V1。"
  },
  online_small: {
    advantages: ["3–10人线上小班，互动和关注度高于大班", "直播授课，节奏固定", "比1V1更有价格优势，比大班更有针对性", "适合4.5到5.5、5.5到6.5、6.5到7.0+阶段提升"],
    services: ["入学测试", "阶段测试", "全真模考", "课前导学计划", "结课复习计划", "课后统一辅导", "学管督学", "作业跟进", "口语测评", "写作精批", "无限次AI口语智能陪练", "雅思考试代报名", "学辅期内免费代报名", "考前后考情回访和分析", "优秀学员奖学金"],
    gifts: ["梯研配套资料", "雅思备考资料包", "雅思核心词", "口语当季题库", "写作范文", "高频题资料", "智慧学习系统3个月", "1:1还原机考刷题资源"],
    warning: "适合系统提升但不想全程1V1的学生；写作/口语明显短板或目标7.0+建议小班后接1V1。"
  },
  offline_class: {
    advantages: ["线下面授，学习氛围更强", "课堂互动直接，适合需要固定节奏和监督的学生", "阶段课程清晰，连报适合目标分差较大的学生"],
    services: ["入学测试", "阶段测试", "全真模考", "课前导学计划", "结课复习计划", "学管督学", "课堂出勤跟进", "作业跟进", "口语测评", "写作精批", "无限次AI口语智能陪练", "雅思考试代报名", "学辅期内免费代报名", "部分课程满足条件可申请重读"],
    gifts: ["学员线下上课发放讲义", "雅思备考大礼包", "雅思核心词", "口语当季题库", "写作范文", "高频题资料", "机考/模考资源", "自研教材/讲义"],
    warning: "线下课适合自律性一般、需要环境带动的学生；线下课程不寄送讲义，学员线下上课时发放。"
  },
  one_on_one: {
    advantages: ["完全按照学生当前基础、小分短板和目标定制", "适合写作、口语这类需要批改、反馈、纠错的输出项", "适合时间不固定、目标高、需要冲刺小分或班课后查漏补缺的学生"],
    services: ["授课老师1V1答疑", "建立1V1私教群", "督促及检查作业完成情况", "学管跟进", "课后作业反馈", "免费考试报名", "学辅期内可免费考试代报名", "口语测评", "写作精批", "课前导学计划", "结课复习计划"],
    gifts: ["雅思备考礼包", "电子词汇书", "雅思核心词", "口语当季题库", "写作范文", "高频题资料", "达到一定小时数赠送伴学服务/学习系统", "口语/写作训练权益"],
    warning: "如果只是系统入门，纯1V1成本较高，可以考虑班课打底；写作/口语卡分时1V1优先级高于大班。"
  },
  combo: {
    advantages: ["班课负责系统打底，1V1负责精准补弱", "比全程1V1更节省预算，比只上班课更能解决小分短板", "特别适合总分要提升、写作/口语不稳定的学生"],
    services: ["班课阶段系统讲解听说读写方法和题型", "1V1阶段针对短板科目个性化纠错和冲刺", "入学测试", "阶段测试", "全真模考", "课后答疑", "学管督学", "写作精批", "口语点评", "课前导学计划", "结课复习计划"],
    gifts: ["雅思备考资料包", "雅思核心词", "口语题库", "写作范文", "高频题资料", "机考练习资源", "自研讲义/配套资料"],
    warning: "组合方案必须按班课测评结果再微调1V1重点；适合既控预算又要解决小分短板的学生。"
  },
  flight: {
    advantages: ["高保障、高服务、高客单方案", "1V1主课 + 飞跃督导服务组合", "比普通1V1多督导、监督、阶段管理和补偿机制", "适合目标明确、基础跨度大、家长希望服务完整的学生"],
    services: ["主课老师全程督导服务不限次", "线上自习室", "学管老师答疑", "单词督背不限次", "口语写作精批每日各1次", "课前导学计划", "结课复习计划", "阶段性学习反馈", "出分跟踪", "未达分补偿服务按产品规则展示"],
    gifts: ["雅思核心词", "口语当季题库", "写作范文", "高频题资料", "雅思备考资料包", "飞跃督导配套学习资料"],
    warning: "飞跃适合高保障需求，不是最低预算方案；低价入门建议大班/小班，高目标且自律一般可优先飞跃。"
  },
  single: {
    advantages: ["适合总分基本够但单项短板明显", "价格比1V1低", "适合单项基础相对接近目标的学生"],
    services: ["单项方法讲解", "单项题型训练", "入学/阶段测评", "课后作业", "学管跟进", "相关资料支持"],
    gifts: ["单项训练资料", "题型练习资料", "阶段测评反馈"],
    warning: "如果短板很严重，尤其口语/写作低很多，单项课可能不如1V1精准；目标7.0+建议单项课后接1V1。"
  }
};

function makeProduct(data) {
  const base = classServices[data.classType] || { advantages: [], services: [], gifts: [], warning: "" };
  return {
    dailyPrice: data.dailyPrice ?? data.originalPrice,
    campaignPrice: data.campaignPrice ?? data.dailyPrice ?? data.originalPrice,
    mainHours: data.mainHours || "-",
    liveHours: data.liveHours || "-",
    recordedHours: data.recordedHours || "-",
    supportPeriod: data.supportPeriod || "-",
    reread: data.reread || "无",
    rereadRule: data.rereadRule || "不支持重读/补偿，按产品规则执行。",
    recommendationTag: data.recommendationTag || "主推",
    advantages: [...base.advantages, ...(data.advantages || [])],
    services: [...base.services, ...(data.services || [])],
    gifts: [...base.gifts, ...(data.gifts || [])],
    warning: data.warning || base.warning,
    nextStep: data.nextStep || "建议先完成入学测评/试听，再根据小分确认最终班型和1V1小时数。",
    ...data
  };
}

const products = [
  makeProduct({ id: "large-foundation", name: "紫藤基础班", deliveryMode: "online", classType: "online_large", classSize: "5–25人", foundation: "0基础/基础薄弱", target: "冲5.0", scoreRange: [0, 4.5], targetRange: [5, 5.5], totalHours: "系统基础课", originalPrice: 9999, dailyPrice: 6888, campaignPrice: 6888, cp: "未提供", suitable: "低基础入门、预算敏感学生", unsuitable: "目标7.0+或写作/口语短板明显且不愿后续加1V1的学生", recommendationTag: "性价比" }),
  makeProduct({ id: "large-skills", name: "紫藤技巧班", deliveryMode: "online", classType: "online_large", classSize: "5–25人", foundation: "5.0左右", target: "冲6.5", scoreRange: [4.5, 5.5], targetRange: [6, 6.5], totalHours: "系统技巧课", originalPrice: 9999, dailyPrice: 6888, campaignPrice: 6888, cp: "未提供", suitable: "已有一定基础，需要技巧和方法提升的学生", unsuitable: "完全零基础或需要强个性化督学的学生", recommendationTag: "性价比" }),
  makeProduct({ id: "large-65-full", name: "雅思6.5分全程班", deliveryMode: "online", classType: "online_large", classSize: "5–25人", foundation: "0基础/基础薄弱", target: "冲6.5", scoreRange: [0, 4.5], targetRange: [6.5, 6.5], totalHours: "约144H", originalPrice: 18800, dailyPrice: 12800, campaignPrice: 12800, cp: "未提供", suitable: "基础弱但想系统冲6.5的预算友好型学生", unsuitable: "需要高关注度、强督学或小分硬要求的学生", recommendationTag: "性价比", warning: "基础薄弱+技巧班连报；目标6.5以上建议后续接1V1冲刺输出项。" }),
  makeProduct({ id: "large-single-skill", name: "雅思技巧班单科", deliveryMode: "online", classType: "online_large", classSize: "5–25人", foundation: "单科基础5.0", target: "单科冲6.5", scoreRange: [5, 6], targetRange: [6, 6.5], totalHours: "14H", mainHours: "14H", originalPrice: 2599, dailyPrice: 1999, campaignPrice: 1999, cp: "未提供", suitable: "只想补单项方法的学生", unsuitable: "单项低很多或需要老师逐题纠错的学生", recommendationTag: "补弱专项" }),

  makeProduct({ id: "small-prep", name: "紫藤雅思优学预备VIP小班", deliveryMode: "online", classType: "online_small", classSize: "3–10人", foundation: "4.0及以下", target: "4.5–5.0", scoreRange: [0, 4], targetRange: [4.5, 5], totalHours: "45H", mainHours: "24H", recordedHours: "21H", originalPrice: 5080, dailyPrice: 4580, campaignPrice: 4580, cp: "CPB-136811", suitable: "低基础线上小班入门", unsuitable: "目标6.5以上且不愿连报或加课的学生" }),
  makeProduct({ id: "small-55", name: "紫藤雅思优学5.5VIP小班", deliveryMode: "online", classType: "online_small", classSize: "3–10人", foundation: "4.5左右", target: "5.5", scoreRange: [4.5, 5], targetRange: [5.5, 6], totalHours: "123H", mainHours: "64H", liveHours: "16H", recordedHours: "43H", originalPrice: 13500, dailyPrice: 12600, campaignPrice: 12600, cp: "CPB-136875", suitable: "4.5左右系统冲5.5", unsuitable: "只差单项小分或目标7.0+的学生" }),
  makeProduct({ id: "small-65", name: "紫藤雅思优学6.5VIP小班", deliveryMode: "online", classType: "online_small", classSize: "3–10人", foundation: "5.5–6.0", target: "6.5–7.0", scoreRange: [5.5, 6], targetRange: [6.5, 7], totalHours: "127H", mainHours: "64H", liveHours: "16H", recordedHours: "47H", originalPrice: 13500, dailyPrice: 12600, campaignPrice: 12600, cp: "CPB-136883", suitable: "5.5/6.0冲6.5/7.0", unsuitable: "输出项严重低且不愿加1V1的学生" }),
  makeProduct({ id: "small-70", name: "紫藤雅思优学7.0VIP小班", deliveryMode: "online", classType: "online_small", classSize: "3–10人", foundation: "6.5起", target: "7.0–7.5", scoreRange: [6.5, 7.5], targetRange: [7, 7.5], totalHours: "109H", mainHours: "48H", liveHours: "16H", recordedHours: "45H", originalPrice: 12800, dailyPrice: 11800, campaignPrice: 11800, cp: "CPB-136892", suitable: "6.5冲7.0+", unsuitable: "低基础未完成6.5阶段的学生" }),
  makeProduct({ id: "small-prep-55", name: "紫藤雅思优学预备+5.5", deliveryMode: "online", classType: "online_small", classSize: "3–10人", foundation: "4.0及以下", target: "5.5–6.0", scoreRange: [0, 4], targetRange: [5.5, 6], totalHours: "147H", mainHours: "88H", liveHours: "16H", recordedHours: "43H", originalPrice: 18580, dailyPrice: 16800, campaignPrice: 16800, cp: "CPB-136927", suitable: "低基础到5.5/6.0系统提升", unsuitable: "只需要短期单项补弱的学生" }),
  makeProduct({ id: "small-55-65", name: "紫藤雅思优学5.5+6.5", deliveryMode: "online", classType: "online_small", classSize: "3–10人", foundation: "4.5–5.0", target: "6.5–7.0", scoreRange: [4.5, 5], targetRange: [6.5, 7], totalHours: "213H", mainHours: "128H", liveHours: "32H", recordedHours: "53H", originalPrice: 27000, dailyPrice: 23800, campaignPrice: 23800, cp: "CPB-136939", suitable: "4.5/5.0起步，目标6.5/7.0", unsuitable: "只想低价体验或无法跟固定节奏的学生" }),
  makeProduct({ id: "small-65-70", name: "紫藤雅思优学6.5+7.0", deliveryMode: "online", classType: "online_small", classSize: "3–10人", foundation: "5.5及以上", target: "7.0–7.5", scoreRange: [5.5, 6.5], targetRange: [7, 7.5], totalHours: "199H", mainHours: "112H", liveHours: "32H", recordedHours: "55H", originalPrice: 26300, dailyPrice: 23700, campaignPrice: 23700, cp: "CPB-136965", suitable: "5.5/6.0冲7.0+", unsuitable: "输出项严重低且拒绝1V1纠偏的学生" }),

  makeProduct({ id: "offline-prep", name: "紫藤雅思全能预备", deliveryMode: "offline", classType: "offline_class", classSize: "线下小班/面授", foundation: "4.0及以下", target: "4.5–5.0", scoreRange: [0, 4], targetRange: [4.5, 5], totalHours: "45H", mainHours: "24H面授", recordedHours: "21H", supportPeriod: "12个月", originalPrice: 6000, dailyPrice: 6000, campaignPrice: 6000, cp: "CPB-078893", reread: "是", rereadRule: "按重读条件申请，需满足入学/学习/考试要求。", suitable: "低基础入门", unsuitable: "目标6.5以上且不愿连报的学生" }),
  makeProduct({ id: "offline-55", name: "紫藤雅思全能5.5", deliveryMode: "offline", classType: "offline_class", classSize: "线下面授", foundation: "4.5起", target: "5.5–6.0", scoreRange: [4.5, 5], targetRange: [5.5, 6], totalHours: "123H", mainHours: "64H面授", liveHours: "16H直播", recordedHours: "43H", supportPeriod: "12个月", originalPrice: 18000, dailyPrice: 16800, campaignPrice: 15800, cp: "CPB-078565", reread: "是", rereadRule: "达入班基础、学习过程、考试要求后可申请重读。", suitable: "4.5/5.0打基础到5.5/6.0", unsuitable: "只缺单项高分的学生" }),
  makeProduct({ id: "offline-65", name: "紫藤雅思全能6.5", deliveryMode: "offline", classType: "offline_class", classSize: "线下面授", foundation: "5.5起", target: "6.5–7.0", scoreRange: [5.5, 6], targetRange: [6.5, 7], totalHours: "127H", mainHours: "64H面授", liveHours: "16H直播", recordedHours: "47H", supportPeriod: "12个月", originalPrice: 18000, dailyPrice: 16800, campaignPrice: 15800, cp: "CPB-078576", reread: "是", rereadRule: "达入班基础、学习过程、考试要求后可申请重读。", suitable: "5.5左右冲6.5", unsuitable: "无法到校或需要完全个性化排课的学生" }),
  makeProduct({ id: "offline-70", name: "紫藤雅思全能7.0", deliveryMode: "offline", classType: "offline_class", classSize: "线下面授", foundation: "6.5起", target: "7.0及以上", scoreRange: [6.5, 7.5], targetRange: [7, 7.5], totalHours: "109H", mainHours: "48H面授", liveHours: "16H直播", recordedHours: "45H", supportPeriod: "12个月", originalPrice: 13800, dailyPrice: 13300, campaignPrice: 13300, cp: "CPB-078892", reread: "是", rereadRule: "达入班基础、学习过程、考试要求后可申请重读。", suitable: "6.5冲7.0+", unsuitable: "低基础学生" }),
  makeProduct({ id: "offline-prep-55", name: "紫藤雅思全能预备+5.5连报", deliveryMode: "offline", classType: "offline_class", classSize: "线下面授连报", foundation: "4.0及以下", target: "5.5–6.0", scoreRange: [0, 4], targetRange: [5.5, 6], totalHours: "147H", mainHours: "88H面授", liveHours: "16H直播", recordedHours: "43H", supportPeriod: "18个月", originalPrice: 24000, dailyPrice: 19780, campaignPrice: 19780, cp: "CPB-077899", reread: "是", rereadRule: "达入班基础、学习过程、考试要求后可申请重读。", suitable: "低基础完整系统提升", unsuitable: "预算极敏感且无法线下上课的学生" }),
  makeProduct({ id: "offline-55-65", name: "紫藤雅思全能5.5+6.5连报", deliveryMode: "offline", classType: "offline_class", classSize: "线下面授连报", foundation: "4.5起", target: "6.5–7.0", scoreRange: [4.5, 5.5], targetRange: [6.5, 7], totalHours: "213H", mainHours: "128H面授", liveHours: "32H直播", recordedHours: "53H", supportPeriod: "18个月", originalPrice: 36000, dailyPrice: 32600, campaignPrice: 31600, cp: "CPB-077898", reread: "是", rereadRule: "达入班基础、学习过程、考试要求后可申请重读。", suitable: "4.5/5.0起步，目标6.5/7.0", unsuitable: "只想短期冲刺的学生" }),
  makeProduct({ id: "offline-65-70", name: "紫藤雅思全能6.5+7.0连报", deliveryMode: "offline", classType: "offline_class", classSize: "线下面授连报", foundation: "5.5起", target: "7.0及以上", scoreRange: [5.5, 6.5], targetRange: [7, 7.5], totalHours: "215H", mainHours: "112H面授", liveHours: "32H直播", recordedHours: "55H", supportPeriod: "18个月", originalPrice: 28800, dailyPrice: 26800, campaignPrice: 26800, cp: "CPB-077905", reread: "是", rereadRule: "达入班基础、学习过程、考试要求后可申请重读。", suitable: "5.5/6.0起步，目标7.0+", unsuitable: "基础低于5.0且目标很高的学生" }),

  makeProduct({ id: "single-listening", name: "紫藤雅思全能6.5听力单项", deliveryMode: "offline", classType: "single", classSize: "单项班", skill: "listening", foundation: "听力单项基础5.5", target: "听力6.5", scoreRange: [5.5, 6.5], targetRange: [6.5, 6.5], totalHours: "16H面授", mainHours: "16H面授", supportPeriod: "12个月", originalPrice: 5000, dailyPrice: 5000, campaignPrice: 5000, cp: "CP-077781", suitable: "只补听力单项", unsuitable: "听力低于5.0或四科都低的学生", recommendationTag: "补弱专项" }),
  makeProduct({ id: "single-reading", name: "紫藤雅思全能6.5阅读单项", deliveryMode: "offline", classType: "single", classSize: "单项班", skill: "reading", foundation: "阅读单项基础5.5", target: "阅读6.5", scoreRange: [5.5, 6.5], targetRange: [6.5, 6.5], totalHours: "16H面授", mainHours: "16H面授", supportPeriod: "12个月", originalPrice: 5000, dailyPrice: 5000, campaignPrice: 5000, cp: "CP-077754", suitable: "只补阅读单项", unsuitable: "阅读低于5.0或四科都低的学生", recommendationTag: "补弱专项" }),
  makeProduct({ id: "single-speaking", name: "紫藤雅思全能6.5口语单项", deliveryMode: "offline", classType: "single", classSize: "单项班", skill: "speaking", foundation: "口语单项基础5.5", target: "口语6.5", scoreRange: [5.5, 6.5], targetRange: [6.5, 6.5], totalHours: "16H面授", mainHours: "16H面授", supportPeriod: "12个月", originalPrice: 5000, dailyPrice: 5000, campaignPrice: 5000, cp: "CP-077796", suitable: "只补口语单项", unsuitable: "口语低很多、需要持续纠音和反馈的学生", recommendationTag: "补弱专项" }),
  makeProduct({ id: "single-writing", name: "紫藤雅思全能6.5写作单项", deliveryMode: "offline", classType: "single", classSize: "单项班", skill: "writing", foundation: "写作单项基础5.5", target: "写作6.5", scoreRange: [5.5, 6.5], targetRange: [6.5, 6.5], totalHours: "16H面授", mainHours: "16H面授", supportPeriod: "12个月", originalPrice: 5000, dailyPrice: 5000, campaignPrice: 5000, cp: "CP-077795", suitable: "只补写作单项", unsuitable: "写作低很多、需要逐篇精批的学生", recommendationTag: "补弱专项" }),

  makeProduct({ id: "base-1v1", name: "紫藤雅思1V1定制课", deliveryMode: "both", classType: "one_on_one", classSize: "1人", foundation: "任意基础", target: "按目标定制", scoreRange: [0, 7.5], targetRange: [4.5, 7.5], totalHours: "按6/8/10/12/16/18/20/22/24/30/32/40/48/50/60/64/80/160H购买", mainHours: "每次课2小时", supportPeriod: "按购买课时和排课周期", originalPrice: 800, dailyPrice: 720, campaignPrice: 600, cp: "CP-091068 至 CP-091087", suitable: "任何基础、单项短板明显、写作/口语弱、目标高或无法跟班课节奏的学生", unsuitable: "只想低价系统入门且没有明显短板的学生", recommendationTag: "补弱专项", reread: "否", rereadRule: "按1V1课时交付，不设置重读；可根据测评和作业反馈调整授课重点。", warning: "推荐时必须按实际小时数匹配阶梯单价，并展示最低总价、官方参考价、节省金额和对应CP码。" }),

  makeProduct({ id: "combo-55-32", name: "紫藤雅思全能一阶5.5 + 32小时口写私教1V1", deliveryMode: "both", classType: "combo", classSize: "班课+1V1", foundation: "4.5起", target: "冲5.5，小分5.0", scoreRange: [4.5, 5], targetRange: [5.5, 6], totalHours: "64H主课 + 32H私教", mainHours: "64H主课", liveHours: "32H私教1V1", originalPrice: 42000, dailyPrice: 37800, campaignPrice: 35800, cp: "CPB-077918", suitable: "基础段学生，班课打底后重点补口语写作", unsuitable: "只想低价入门或完全不需要输出项反馈的学生", recommendationTag: "主推" }),
  makeProduct({ id: "combo-65-32", name: "紫藤雅思全能二阶6.5 + 32小时口写私教1V1", deliveryMode: "both", classType: "combo", classSize: "班课+1V1", foundation: "5.5起", target: "冲6.5，小分6.0", scoreRange: [5.5, 6], targetRange: [6.5, 7], totalHours: "64H主课 + 32H私教", mainHours: "64H主课", liveHours: "32H私教1V1", originalPrice: 42000, dailyPrice: 37800, campaignPrice: 35800, cp: "CPB-077919", suitable: "冲6.5，尤其适合口语写作短板明显的学生", unsuitable: "预算极敏感且不愿加1V1的学生", recommendationTag: "主推" }),

  makeProduct({ id: "flight-a", name: "紫藤雅思飞跃A计划", deliveryMode: "both", classType: "flight", classSize: "1V1+督导", foundation: "入班6.0", target: "目标总分+0.5", scoreRange: [6, 7], targetRange: [6.5, 7.5], totalHours: "40小时1V1主课 + 2个月飞跃督导服务，含16小时督导", mainHours: "40H 1V1", liveHours: "16H督导", supportPeriod: "2个月", originalPrice: 35800, dailyPrice: 33800, campaignPrice: 32800, cp: "ZHB-091243", reread: "补偿", rereadRule: "未达分，补偿1次雅思考试 + 1个月督导服务", suitable: "6.0左右短期冲0.5分，已有基础但缺规划和督学", unsuitable: "低基础且目标跨度很大的学生", recommendationTag: "高保障" }),
  makeProduct({ id: "flight-b", name: "紫藤雅思飞跃B计划", deliveryMode: "both", classType: "flight", classSize: "1V1+督导", foundation: "入班4.0–6.5", target: "冲7.0或6.5小分6", scoreRange: [4, 6.5], targetRange: [6.5, 7], totalHours: "64小时1V1主课 + 3个月飞跃督导服务，送1个月", mainHours: "64H 1V1", supportPeriod: "4个月", originalPrice: 55800, dailyPrice: 53800, campaignPrice: 50800, cp: "ZHB-091242", reread: "补偿", rereadRule: "未达分，补偿2次雅思考试 + 2个月督导服务", suitable: "基础中等，需要系统1V1+督导冲6.5/7.0", unsuitable: "预算优先且只想入门的学生", recommendationTag: "高保障" }),
  makeProduct({ id: "flight-c", name: "紫藤雅思飞跃C计划", deliveryMode: "both", classType: "flight", classSize: "1V1+督导", foundation: "入班4.0–6.0", target: "冲7.0或6.5小分6", scoreRange: [4, 6], targetRange: [6.5, 7], totalHours: "128小时1V1主课 + 6个月飞跃督导服务，送3个月", mainHours: "128H 1V1", supportPeriod: "9个月", originalPrice: 108800, dailyPrice: 97800, campaignPrice: 95800, cp: "ZHB-091241", reread: "补偿", rereadRule: "未达分，补偿4次雅思考试 + 4个月督导服务", suitable: "基础较弱但目标较高，需要长线强督学和1V1系统提升", unsuitable: "预算优先或只需短期单项补弱的学生", recommendationTag: "高保障" })
];

const form = document.querySelector("#matcher-form");
const recommendations = document.querySelector("#recommendations");
const diagnosisSummary = document.querySelector("#diagnosis-summary");
const diagnosisCards = document.querySelector("#diagnosis-cards");
const consultantCopy = document.querySelector("#consultant-copy");
const parentCopy = document.querySelector("#parent-copy");
const recommendationTemplate = document.querySelector("#recommendation-template");
const productTemplate = document.querySelector("#product-template");
const productLibrary = document.querySelector("#product-library");

function currency(value) {
  return `¥${Number(value).toLocaleString("zh-CN")}`;
}
function parseScore(value) {
  return value === "" ? null : Number(value);
}
function fillScoreSelects() {
  document.querySelectorAll('select[name$="Score"]').forEach((select) => {
    const isTotal = select.name === "currentScore" || select.name === "targetScore";
    const options = isTotal ? TOTAL_SCORE_OPTIONS : SCORE_OPTIONS;
    select.innerHTML = options.map((score) => score === "" ? '<option value="">未填</option>' : `<option value="${score}">${score}${score === 7.5 ? "+" : ""}</option>`).join("");
  });
  document.querySelector('select[name="currentScore"]').value = "5";
  document.querySelector('select[name="targetScore"]').value = "6.5";
}
function readForm() {
  const data = new FormData(form);
  return {
    currentScore: Number(data.get("currentScore")),
    targetScore: Number(data.get("targetScore")),
    subscores: {
      listening: parseScore(data.get("listeningScore")),
      reading: parseScore(data.get("readingScore")),
      writing: parseScore(data.get("writingScore")),
      speaking: parseScore(data.get("speakingScore"))
    },
    deliveryPreference: data.get("deliveryPreference"),
    classPreference: data.get("classPreference"),
    budgetPreference: data.get("budgetPreference"),
    purpose: data.get("purpose"),
    acceptsTrial: data.get("acceptsTrial"),
    hasSubscoreRequirement: data.get("hasSubscoreRequirement")
  };
}
function getHourlyTier(hours) {
  return hourlyPriceTiers.find((tier) => hours >= tier.min && hours <= tier.max) || hourlyPriceTiers.at(-1);
}
function nearestCpHours(hours) {
  const available = Object.keys(oneOnOneCpMap).map(Number).sort((a, b) => a - b);
  return available.find((item) => item >= hours) || available.at(-1);
}
function getOneOnOneQuote(hours) {
  const cpHours = nearestCpHours(hours);
  const tier = getHourlyTier(cpHours);
  const officialTotal = cpHours * OFFICIAL_ONE_ON_ONE_PRICE;
  const lowestTotal = cpHours * tier.price;
  return { requestedHours: hours, hours: cpHours, tier, unitPrice: tier.price, officialTotal, lowestTotal, saving: officialTotal - lowestTotal, cp: oneOnOneCpMap[cpHours], lessons: Math.ceil(cpHours / 2) };
}
function getDiagnosis(preferences) {
  const gap = Math.max(preferences.targetScore - preferences.currentScore, 0);
  const expected = preferences.hasSubscoreRequirement === "yes" ? preferences.targetScore : Math.max(preferences.targetScore - 0.5, 4.5);
  const entries = Object.entries(preferences.subscores).filter(([, score]) => score !== null);
  const weak = entries.filter(([, score]) => score < expected).map(([skill, score]) => ({ skill, score, gap: expected - score })).sort((a, b) => b.gap - a.gap);
  const outputWeak = weak.filter((item) => item.skill === "writing" || item.skill === "speaking");
  const inputWeak = weak.filter((item) => item.skill === "listening" || item.skill === "reading");
  let type = "unknown";
  if (!entries.length) type = "no_subscores";
  else if (!weak.length) type = "balanced";
  else if (weak.length >= 3) type = "all_weak";
  else if (outputWeak.length >= inputWeak.length) type = "output_weak";
  else type = "input_weak";
  const weakText = weak.length ? weak.map((item) => `${skillLabels[item.skill]}${item.score}`).join("、") : "暂无明确短板";
  const focus = weak.length ? weak.map((item) => skillLabels[item.skill]).join("、") : (gap >= 1 ? "全科基础与输出项" : "考前薄弱点");
  const message = type === "no_subscores"
    ? "小分未填：建议补充小分或先做入学测评，判断适合班课系统提升还是1V1精准补弱。"
    : type === "all_weak"
      ? `四科/多科都低（${weakText}）：不要只推单项，应先班课系统学，再用1V1补弱。`
      : type === "output_weak"
        ? `输出项短板明显（${weakText}）：写作/口语需要批改、反馈、纠错，优先考虑1V1或班课后接1V1。`
        : type === "input_weak"
          ? `输入项短板明显（${weakText}）：可先用班课补方法和题型，再用1V1错题纠偏。`
          : "小分整体接近目标：以系统课、模考反馈和考前纠错为主。";
  return { gap, expected, weak, outputWeak, inputWeak, type, weakText, focus, message };
}
function recommendOneOnOneHours(preferences, diagnosis) {
  let hours;
  if (diagnosis.type === "output_weak") hours = preferences.targetScore >= 7 ? 32 : 24;
  else if (diagnosis.type === "input_weak") hours = preferences.targetScore >= 7 ? 24 : 16;
  else if (diagnosis.type === "all_weak") hours = diagnosis.gap >= 1 ? 40 : 24;
  else if (diagnosis.gap <= 0.5) hours = 20;
  else if (diagnosis.gap <= 1) hours = 40;
  else if (diagnosis.gap <= 1.5) hours = 60;
  else hours = 80;
  if (preferences.targetScore >= 7.5) hours = Math.max(hours, 40);
  if (preferences.classPreference === "one_on_one") hours = Math.max(hours, diagnosis.gap >= 1 ? 60 : 32);
  return getOneOnOneQuote(hours);
}
function deliveryMatches(product, preference) {
  if (preference === "flexible") return true;
  return product.deliveryMode === preference || product.deliveryMode === "both";
}
function classMatches(product, preference) {
  if (preference === "any") return true;
  return product.classType === preference || (preference === "online_large" && product.classType === "online_large") || (preference === "online_small" && product.classType === "online_small");
}
function scoreProduct(product, preferences, diagnosis, strategy) {
  let score = 0;
  if (deliveryMatches(product, preferences.deliveryPreference)) score += 22;
  if (classMatches(product, preferences.classPreference)) score += 16;
  if (preferences.currentScore >= product.scoreRange[0] && preferences.currentScore <= product.scoreRange[1]) score += 20;
  if (preferences.targetScore >= product.targetRange[0] && preferences.targetScore <= product.targetRange[1]) score += 18;
  if (strategy === "budget" && product.classType === "online_large") score += 30;
  if (strategy === "main" && ["online_small", "offline_class", "combo"].includes(product.classType)) score += 14;
  if (strategy === "guarantee" && product.classType === "flight") score += 35;
  if (preferences.budgetPreference === "budget" && product.campaignPrice <= 13000) score += 10;
  if (preferences.budgetPreference === "guarantee" && product.classType === "flight") score += 12;
  if (diagnosis.outputWeak.length && ["combo", "one_on_one", "flight"].includes(product.classType)) score += 14;
  if (diagnosis.gap >= 1.5 && ["combo", "flight"].includes(product.classType)) score += 14;
  if (product.classType === "single" && diagnosis.weak.length === 1 && product.skill === diagnosis.weak[0].skill) score += 35;
  return score;
}
function findBestProduct(preferences, diagnosis, strategy) {
  const candidates = products.filter((product) => deliveryMatches(product, preferences.deliveryPreference));
  return candidates.map((product) => ({ product, score: scoreProduct(product, preferences, diagnosis, strategy) })).sort((a, b) => b.score - a.score || a.product.campaignPrice - b.product.campaignPrice)[0];
}
function shouldAddOneOnOne(product, preferences, diagnosis) {
  return product.classType === "combo" || product.classType === "flight" || product.classType === "one_on_one" || diagnosis.outputWeak.length || preferences.targetScore >= 7 || diagnosis.gap >= 1;
}
function makeOneOnOneProduct(quote, preferences, diagnosis) {
  return makeProduct({
    id: "dynamic-1v1", name: `紫藤雅思1V1定制课 ${quote.hours}小时`, deliveryMode: preferences.deliveryPreference === "offline" ? "offline" : preferences.deliveryPreference === "online" ? "online" : "both", classType: "one_on_one", classSize: "1人", foundation: "任意基础", target: `冲${preferences.targetScore}`, scoreRange: [0, 7.5], targetRange: [4.5, 7.5], totalHours: `${quote.hours}H（约${quote.lessons}次课，每次2小时）`, mainHours: `${quote.hours}H 1V1`, originalPrice: quote.officialTotal, dailyPrice: quote.lowestTotal, campaignPrice: quote.lowestTotal, cp: quote.cp, suitable: "写作/口语卡分、单项短板明显、目标高或无法跟班课节奏的学生", unsuitable: "只想低价系统入门且没有明显短板的学生", recommendationTag: "补弱专项", reread: "否", rereadRule: "按1V1课时交付，不设置重读；课后按作业和测评反馈调整重点。", warning: classServices.one_on_one.warning
  });
}
function buildLearningPath(plan, preferences, diagnosis) {
  const p = plan.product;
  if (plan.addOnQuote && p.classType !== "one_on_one" && p.classType !== "combo" && p.classType !== "flight") {
    return [
      `先上【${p.name}】，这是${classTypeLabels[p.classType]}，先解决${p.foundation}阶段的题型认知、方法框架、基础词汇和做题节奏问题。`,
      `班课结束后预计达到/进入：${p.target}阶段；通过阶段测评或全真模考确认听说读写短板。`,
      `后续继续上【${plan.addOnQuote.hours}小时1V1】，重点补${diagnosis.focus}，最低单价${currency(plan.addOnQuote.unitPrice)}/H，最低总价${currency(plan.addOnQuote.lowestTotal)}，官方参考价${currency(plan.addOnQuote.officialTotal)}。`,
      `最终目标：冲刺到${preferences.targetScore}分${preferences.hasSubscoreRequirement === "yes" ? "并满足小分要求" : "，若后续有小分要求再按小分调整"}。`
    ];
  }
  if (p.classType === "combo") {
    return [
      `先上组合内的班课阶段：${p.name}，班课负责系统讲解听说读写方法和题型。`,
      `班课阶段目标：${p.target}；完成后用阶段测试/模考判断是否达到阶段分。`,
      `再进入组合内口写私教1V1阶段，重点补${diagnosis.outputWeak.length ? "写作和口语输出" : diagnosis.focus}，解决批改、反馈、纠错和表达框架问题。`,
      `组合总价按产品会战价${currency(p.campaignPrice)}展示，比全程1V1更省预算，也比只上班课更能解决小分短板。`
    ];
  }
  if (p.classType === "flight") {
    return [
      `直接进入【${p.name}】：1V1主课 + 飞跃督导服务。`,
      `主课解决${diagnosis.focus}和总分提升问题，督导服务负责学习计划、单词、作业、模考和出分跟踪。`,
      `阶段目标：${p.target}；若未达分，按产品规则执行补偿：${p.rereadRule}。`,
      `适合目标明确、需要强督学和高保障的学生，不是最低预算方案。`
    ];
  }
  if (p.classType === "one_on_one") {
    return [
      `直接上【${p.name}】，每次课2小时，按${diagnosis.focus}定制。`,
      `课前交作业/录音/作文，课中按评分标准纠错，课后复盘并布置下一轮训练。`,
      `推荐小时数${plan.addOnQuote.hours}H，对应CP码${plan.addOnQuote.cp}，最低总价${currency(plan.addOnQuote.lowestTotal)}。`,
      `适合小分卡分、输出项弱、目标高或无法跟班课节奏的学生。`
    ];
  }
  return [`先上【${p.name}】完成系统学习。`, `课程结束前做阶段测试/全真模考。`, `根据模考结果判断是否追加1V1或单项课。`];
}
function makePlan(position, product, preferences, diagnosis, score, forceAddOn = false) {
  const addOnQuote = (forceAddOn || shouldAddOneOnOne(product, preferences, diagnosis)) && !["flight"].includes(product.classType)
    ? recommendOneOnOneHours(preferences, diagnosis)
    : null;
  const priceTotal = product.campaignPrice + (product.classType === "combo" ? 0 : addOnQuote?.lowestTotal || 0);
  const originalTotal = product.originalPrice + (product.classType === "combo" ? 0 : addOnQuote?.officialTotal || 0);
  const tag = position;
  const plan = { position, product, score, addOnQuote, priceTotal, originalTotal, saving: originalTotal - priceTotal, tag };
  plan.learningPath = buildLearningPath(plan, preferences, diagnosis);
  plan.fitReason = buildFitReason(plan, preferences, diagnosis);
  return plan;
}
function buildFitReason(plan, preferences, diagnosis) {
  const p = plan.product;
  const reasons = [`当前${preferences.currentScore}到目标${preferences.targetScore}，分差${diagnosis.gap.toFixed(1)}。`, diagnosis.message, `该方案匹配${p.foundation} → ${p.target}，班型为${classTypeLabels[p.classType]}。`];
  if (plan.addOnQuote) reasons.push(`额外${plan.addOnQuote.hours}H 1V1用于补${diagnosis.focus}，能解决班课个性化不足。`);
  return reasons.join(" ");
}
function buildPlans(preferences) {
  const diagnosis = getDiagnosis(preferences);
  const main = findBestProduct(preferences, diagnosis, preferences.classPreference === "one_on_one" ? "one_on_one" : "main");
  const budget = findBestProduct({ ...preferences, classPreference: preferences.classPreference === "any" ? "online_large" : preferences.classPreference }, diagnosis, "budget");
  const guarantee = findBestProduct({ ...preferences, classPreference: "flight" }, diagnosis, "guarantee");
  let mainProduct = main.product;
  if (preferences.classPreference === "one_on_one" || (diagnosis.outputWeak.length && preferences.budgetPreference !== "budget" && diagnosis.gap <= 0.5)) {
    const q = recommendOneOnOneHours(preferences, diagnosis);
    mainProduct = makeOneOnOneProduct(q, preferences, diagnosis);
  }
  const plans = [
    makePlan("方案1｜主推方案", mainProduct, preferences, diagnosis, main.score, mainProduct.classType === "one_on_one"),
    makePlan("方案2｜性价比方案", budget.product, preferences, diagnosis, budget.score, diagnosis.outputWeak.length && budget.product.classType === "online_large"),
    makePlan("方案3｜高保障方案", guarantee.product, preferences, diagnosis, guarantee.score, false)
  ];
  return { diagnosis, plans };
}
function setList(node, items) {
  node.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    node.append(li);
  });
}
function addMeta(dl, entries) {
  dl.innerHTML = "";
  entries.forEach(([term, detail]) => {
    const dt = document.createElement("dt");
    const dd = document.createElement("dd");
    dt.textContent = term;
    dd.textContent = detail;
    dl.append(dt, dd);
  });
}
function renderDiagnosis(preferences, diagnosis, quote) {
  diagnosisSummary.textContent = `当前${preferences.currentScore}分，目标${preferences.targetScore}分，备考用途：${preferences.purpose}；${diagnosis.message}`;
  const cards = [
    ["总分差距", `${diagnosis.gap.toFixed(1)}分`, diagnosis.gap >= 1 ? "建议系统课/连报/组合方案，不要只靠短课时。" : "可用阶段课程或1V1专项补弱。"],
    ["小分短板", diagnosis.weakText, diagnosis.message],
    ["1V1建议", `${quote.hours}H｜${currency(quote.unitPrice)}/H｜最低${currency(quote.lowestTotal)}`, `官方参考${currency(quote.officialTotal)}，节省${currency(quote.saving)}，CP码${quote.cp}。`],
    ["下一步", preferences.acceptsTrial === "yes" ? "先测评/试听" : "先确认班型和预算", preferences.hasSubscoreRequirement === "unknown" ? "建议补充是否有小分要求。" : "按已有小分要求细化方案。"]
  ];
  diagnosisCards.innerHTML = cards.map(([title, value, note]) => `<article><span>${title}</span><strong>${value}</strong><p>${note}</p></article>`).join("");
}
function renderPlan(plan) {
  const fragment = recommendationTemplate.content.cloneNode(true);
  const p = plan.product;
  fragment.querySelector(".rec-position").textContent = plan.position;
  fragment.querySelector("h3").textContent = p.name;
  fragment.querySelector(".rec-score").textContent = `${p.recommendationTag}｜${classTypeLabels[p.classType]}`;
  fragment.querySelector(".rec-tags").innerHTML = [p.deliveryMode, p.classSize, p.foundation, p.target].map((tag) => `<span>${tag}</span>`).join("");
  addMeta(fragment.querySelector(".rec-meta"), [
    ["推荐课程名称", p.name], ["班型类型", classTypeLabels[p.classType]], ["上课形式", p.deliveryMode], ["对应课时", p.totalHours],
    ["主课/直播/录播", `${p.mainHours} / ${p.liveHours} / ${p.recordedHours}`], ["学辅期", p.supportPeriod],
    ["价格", `原价${currency(plan.originalTotal)}｜日常优惠${currency(p.dailyPrice)}｜会战/最低${currency(plan.priceTotal)}｜节省${currency(plan.saving)}`],
    ["CP码", p.cp + (plan.addOnQuote ? `；1V1 ${plan.addOnQuote.cp}` : "")],
    ["1V1明细", plan.addOnQuote ? `${plan.addOnQuote.hours}H × ${currency(plan.addOnQuote.unitPrice)}/H = ${currency(plan.addOnQuote.lowestTotal)}；官方${currency(plan.addOnQuote.officialTotal)}；节省${currency(plan.addOnQuote.saving)}` : "本方案内已含对应服务或暂不额外加1V1"]
  ]);
  fragment.querySelector(".fit-reason").textContent = plan.fitReason;
  setList(fragment.querySelector(".learning-path"), plan.learningPath);
  setList(fragment.querySelector(".advantages"), p.advantages);
  setList(fragment.querySelector(".services"), p.services);
  setList(fragment.querySelector(".gifts"), p.gifts);
  fragment.querySelector(".suitable").textContent = p.suitable;
  fragment.querySelector(".unsuitable").textContent = `${p.unsuitable} 风险提示：${p.warning}`;
  fragment.querySelector(".reread").textContent = `${p.reread}｜${p.rereadRule}`;
  fragment.querySelector(".next-step").textContent = p.nextStep;
  recommendations.append(fragment);
}
function buildConsultantCopy(preferences, diagnosis, plans) {
  return [
    "【内部顾问版方案】",
    `1. 学生情况诊断：当前${preferences.currentScore}，目标${preferences.targetScore}，用途${preferences.purpose}，线上/线下偏好${preferences.deliveryPreference}，班型偏好${preferences.classPreference}，预算偏好${preferences.budgetPreference}。`,
    `2. 当前分数与目标差距：${diagnosis.gap.toFixed(1)}分。`,
    `3. 小分短板判断：${diagnosis.message}`,
    ...plans.flatMap((plan, index) => [
      `${index + 4}. ${plan.position}：${plan.product.name}`,
      `   - 课程顺序：${plan.learningPath.join(" ")}`,
      `   - 课时拆分：${plan.product.totalHours}；主课/直播/录播：${plan.product.mainHours}/${plan.product.liveHours}/${plan.product.recordedHours}`,
      `   - 价格明细：原价${currency(plan.originalTotal)}，日常优惠${currency(plan.product.dailyPrice)}，会战/最低${currency(plan.priceTotal)}，CP码${plan.product.cp}${plan.addOnQuote ? `，1V1 CP码${plan.addOnQuote.cp}` : ""}`,
      `   - 课程优势：${plan.product.advantages.join("；")}`,
      `   - 配套服务：${plan.product.services.join("；")}`,
      `   - 赠送资料：${plan.product.gifts.join("；")}`,
      `   - 风险提示：${plan.product.warning}`,
      `   - 下一步动作：${plan.product.nextStep}`
    ]),
    "备注：价格以实际活动政策为准，咨询时建议先确认小分、预算和是否接受测评/试听。"
  ].join("\n");
}
function buildParentCopy(preferences, diagnosis, plans) {
  const best = plans[0];
  const addon = best.addOnQuote ? `后面再接${best.addOnQuote.hours}小时1V1，重点补${diagnosis.focus}，1V1按${currency(best.addOnQuote.unitPrice)}/小时计算，最低${currency(best.addOnQuote.lowestTotal)}，官方参考价${currency(best.addOnQuote.officialTotal)}。` : "课程里会结合阶段测试和模考反馈继续调整学习重点。";
  return `从目前${preferences.currentScore}到目标${preferences.targetScore}，差距是${diagnosis.gap.toFixed(1)}分。${diagnosis.message} 我这边更建议先看【${best.product.name}】，它属于${classTypeLabels[best.product.classType]}，适合${best.product.suitable}。学习顺序是：${best.learningPath.join(" ")} ${addon} 这套方案的价格是原价${currency(best.originalTotal)}，当前会战/最低参考${currency(best.priceTotal)}，包含${best.product.services.slice(0, 6).join("、")}，资料有${best.product.gifts.slice(0, 5).join("、")}。下一步建议先做入学测评/试听，确认小分和班型后再最终锁定方案。`;
}
function renderRecommendations(preferences) {
  const { diagnosis, plans } = buildPlans(preferences);
  const quote = recommendOneOnOneHours(preferences, diagnosis);
  recommendations.innerHTML = "";
  renderDiagnosis(preferences, diagnosis, quote);
  plans.forEach(renderPlan);
  consultantCopy.value = buildConsultantCopy(preferences, diagnosis, plans);
  parentCopy.value = buildParentCopy(preferences, diagnosis, plans);
}
function productDetailHtml(product) {
  return `<p><strong>适合人群：</strong>${product.suitable}</p><p><strong>不适合人群：</strong>${product.unsuitable}</p><p><strong>课程优势：</strong>${product.advantages.join("；")}</p><p><strong>配套服务：</strong>${product.services.join("；")}</p><p><strong>赠送资料：</strong>${product.gifts.join("；")}</p><p><strong>重读/补偿：</strong>${product.reread}｜${product.rereadRule}</p><p><strong>风险提示：</strong>${product.warning}</p>`;
}
function renderProductLibrary() {
  const delivery = document.querySelector("#filter-delivery").value;
  const classType = document.querySelector("#filter-class").value;
  const current = document.querySelector("#filter-current").value;
  const target = document.querySelector("#filter-target").value;
  const budget = document.querySelector("#filter-budget").value;
  const filtered = products.filter((product) => {
    if (delivery !== "all" && product.deliveryMode !== delivery && !(delivery === "both" && product.deliveryMode === "both")) return false;
    if (classType !== "all" && product.classType !== classType) return false;
    if (current !== "all" && !(Number(current) >= product.scoreRange[0] && Number(current) <= product.scoreRange[1])) return false;
    if (target !== "all" && !(Number(target) >= product.targetRange[0] && Number(target) <= product.targetRange[1])) return false;
    if (budget === "budget" && product.campaignPrice > 15000) return false;
    if (budget === "guarantee" && product.classType !== "flight") return false;
    return true;
  });
  productLibrary.innerHTML = "";
  filtered.forEach((product) => {
    const card = productTemplate.content.cloneNode(true);
    card.querySelector("h3").textContent = product.name;
    card.querySelector("span").textContent = classTypeLabels[product.classType];
    addMeta(card.querySelector("dl"), [["上课形式", product.deliveryMode], ["人数", product.classSize], ["基础→目标", `${product.foundation} → ${product.target}`], ["课时", product.totalHours], ["价格", `原价${currency(product.originalPrice)}｜日常${currency(product.dailyPrice)}｜最低${currency(product.campaignPrice)}`], ["CP码", product.cp]]);
    card.querySelector(".product-detail").innerHTML = productDetailHtml(product);
    productLibrary.append(card);
  });
}
function initFilters() {
  const classFilter = document.querySelector("#filter-class");
  classFilter.insertAdjacentHTML("beforeend", Object.entries(classTypeLabels).map(([value, label]) => `<option value="${value}">${label}</option>`).join(""));
  document.querySelector("#filter-current").insertAdjacentHTML("beforeend", TOTAL_SCORE_OPTIONS.map((score) => `<option value="${score}">${score}</option>`).join(""));
  document.querySelector("#filter-target").insertAdjacentHTML("beforeend", TOTAL_SCORE_OPTIONS.map((score) => `<option value="${score}">${score}</option>`).join(""));
  document.querySelectorAll(".filters select").forEach((select) => select.addEventListener("change", renderProductLibrary));
}
async function copyText(id) {
  const textarea = document.getElementById(id);
  textarea.select();
  try {
    await navigator.clipboard.writeText(textarea.value);
  } catch {
    document.execCommand("copy");
  }
}

fillScoreSelects();
initFilters();
renderProductLibrary();
renderRecommendations(readForm());
form.addEventListener("submit", (event) => {
  event.preventDefault();
  renderRecommendations(readForm());
});
document.querySelectorAll("[data-copy]").forEach((button) => {
  button.addEventListener("click", () => copyText(button.dataset.copy));
});
