const scoreOptions = ["4.0", "4.5", "5.0", "5.5", "6.0", "6.5", "7.0", "7.5"];
const subscoreOptions = ["", ...scoreOptions];
const categoryOrder = ["线上大班", "线上小班", "线下班课", "1V1", "班课+1V1", "飞跃计划", "单项课"];
const skillLabels = { listening: "听力", reading: "阅读", writing: "写作", speaking: "口语" };
const outputSkills = ["writing", "speaking"];

const brandAdvantages = [
  "高顿紫藤国际教育雅思项目", "雅思教师强调官方认证和单科高分", "听说读写分科授课", "线上/线下均有课程", "线下超小班，3人开班", "线上直播小班", "线上大班，适合预算友好型学生", "1V1可定制", "入学测评", "学管督学", "阶段测试", "模考反馈", "课后答疑", "作业批改", "写作精批", "口语点评", "外教口语模考", "口语题库/预测资料", "高频题资料", "自研教材和题库更新", "结课复习规划", "奖学金机制", "推荐金机制", "部分课程满足条件可申请重读"
];

const serviceBundles = {
  "线上大班": {
    advantages: ["价格更友好，适合预算敏感学生", "系统学习雅思基础题型和方法", "适合入门、基础梳理、技巧建立", "可作为后续小班/1V1冲刺前的基础段课程"],
    services: ["梯研配套资料", "智慧学习系统3个月", "1:1还原机考刷题", "背单词、检测单词并形成个性化学习报告", "写作预测题", "每场纸笔考前口语/写作预测", "考前后考情回访和分析", "优秀学员奖学金", "雅思考试代报名", "学辅期内无限次免费代报名", "入学测试/阶段测/全真模考", "无限次AI口语智能陪练", "课前导学计划", "结课复习计划"],
    gifts: ["雅思备考资料包", "雅思核心词", "口语当季题库", "写作范文", "高频题资料", "机考练习资源", "智慧学习系统"],
    risk: "大班适合系统学习和预算友好，但个性化弱于小班/1V1；写作/口语短板明显建议搭配1V1；目标7.0+不建议只靠大班完成。"
  },
  "线上小班": {
    advantages: ["3–10人小班，互动和关注度高于大班", "直播授课，节奏固定", "比1V1更有价格优势，比大班更有针对性", "适合阶段性从4.5到5.5、5.5到6.5、6.5到7.0+"],
    services: ["入学测试", "阶段测试", "全真模考", "课前导学计划", "结课复习计划", "课后统一辅导", "学管督学", "作业跟进", "口语测评", "写作精批", "无限次AI口语智能陪练", "雅思考试代报名", "学辅期内免费代报名", "考前后考情回访和分析", "优秀学员奖学金"],
    gifts: ["梯研配套资料", "雅思备考资料包", "雅思核心词", "口语当季题库", "写作范文", "高频题资料", "智慧学习系统3个月", "1:1还原机考刷题资源"],
    risk: "适合系统提升但不想直接全程1V1的学生；写作/口语明显短板建议小班后接1V1；目标7.0+建议搭配1V1冲刺更稳。"
  },
  "线下班课": {
    advantages: ["线下面授，学习氛围更强", "老师课堂互动更直接", "适合需要固定节奏、线下监督和学习氛围的学生", "阶段课程清晰，连报产品适合目标分差较大的学生"],
    services: ["入学测试", "阶段测试", "全真模考", "课前导学计划", "结课复习计划", "学管督学", "课堂出勤跟进", "作业跟进", "口语测评", "写作精批", "无限次AI口语智能陪练", "雅思考试代报名", "学辅期内免费代报名", "部分课程满足条件可申请重读"],
    gifts: ["学员线下上课发放讲义", "雅思备考大礼包", "雅思核心词", "口语当季题库", "写作范文", "高频题资料", "机考/模考资源", "自研教材/讲义"],
    risk: "线下适合自律性一般、需要环境带动的学生；写作/口语明显短板建议线下班课后接1V1；线下课不寄送讲义，学员线下上课时发放。"
  },
  "1V1": {
    advantages: ["完全按照学生当前基础、小分短板和目标定制", "适合写作、口语这类需要批改、反馈、纠错的输出项", "适合时间不固定、无法跟班课节奏的学生", "适合目标高、需要冲刺小分的学生", "适合班课后查漏补缺和考前冲刺"],
    services: ["授课老师1V1答疑", "建立1V1私教群", "管促及检查学生作业完成情况", "学管跟进", "课后作业反馈", "免费考试报名", "学辅期内可免费考试代报名", "口语测评", "写作精批", "课前导学计划", "结课复习计划"],
    gifts: ["雅思备考礼包", "电子词汇书", "雅思核心词", "口语当季题库", "写作范文", "高频题资料", "达到一定小时数赠送伴学服务/学习系统", "可按课程规则展示口语/写作训练权益"],
    risk: "系统入门纯1V1成本较高，可考虑班课打底；写作/口语卡分时，1V1优先级高于大班；推荐1V1必须核对小时数、单价、总价、CP码。"
  },
  "班课+1V1": {
    advantages: ["班课负责系统打底，1V1负责精准补弱", "比全程1V1更节省预算", "比只上班课更能解决小分短板", "特别适合总分要提升、写作/口语不稳定的学生", "适合从5.0/5.5冲6.5/7.0的学生"],
    services: ["班课阶段系统讲解听说读写方法和题型", "1V1阶段针对短板科目个性化纠错和冲刺", "入学测试", "阶段测试", "全真模考", "课后答疑", "学管督学", "写作精批", "口语点评", "课前导学计划", "结课复习计划"],
    gifts: ["雅思备考资料包", "雅思核心词", "口语题库", "写作范文", "高频题资料", "机考练习资源", "自研讲义/配套资料"],
    risk: "组合不是简单相加，必须先用班课解决框架和方法，再用1V1补输出或纠错；如果目标跨度很大，1V1小时数不能过短。"
  },
  "飞跃计划": {
    advantages: ["适合目标明确、需要高保障出分的学生", "1V1主课 + 飞跃督导服务组合", "比普通1V1多了督导、监督、阶段管理和补偿机制", "适合基础跨度大、目标分高、家长希望服务更完整的学生", "适合需要强督学、自律性一般、备考周期较长的学生"],
    services: ["主课老师全程督导服务不限次", "线上自习室", "学管老师答疑", "单词督背不限次", "口语写作精批每日各1次", "课前导学计划", "结课复习计划", "阶段性学习反馈", "出分跟踪", "未达分补偿服务按产品规则展示"],
    gifts: ["雅思核心词", "口语当季题库", "写作范文", "高频题资料", "雅思备考资料包", "飞跃督导配套学习资料"],
    risk: "适合高保障需求，不是最低预算方案；低价入门优先线上大班/小班；目标高、短板明显、自律性一般时飞跃优先级更高。"
  },
  "单项课": {
    advantages: ["适合总分基本够但单项短板明显的学生", "适合只卡听力/阅读/口语/写作某一科", "价格比1V1低，适合单项基础相对接近目标的学生"],
    services: ["单项方法讲解", "单项题型训练", "入学/阶段测评", "课后作业", "学管跟进", "相关资料支持"],
    gifts: ["单项讲义", "高频题资料", "对应科目训练资料"],
    risk: "如果短板很严重，尤其口语/写作低很多，单项课可能不如1V1精准；目标7.0+建议单项课后接1V1冲刺。"
  }
};

function product(base) {
  const bundle = serviceBundles[base.classType] || serviceBundles[base.category] || serviceBundles["线上小班"];
  return {
    classSize: "—", totalHours: "—", mainHours: "—", liveHours: "—", recordedHours: "—", supportPeriod: "—", originalPrice: 0, dailyPrice: 0, battlePrice: 0,
    retake: "无", retakeRule: "—", suggestedWith1v1: "视小分短板而定", rating: "主推", notSuitable: "时间无法配合课程节奏，或目标/小分要求与课程阶段不匹配的学生。",
    advantages: bundle.advantages, services: bundle.services, gifts: bundle.gifts, risk: bundle.risk,
    ...base
  };
}

const products = [
  product({ id:"large-basic", category:"线上大班课", name:"紫藤基础班", deliveryMode:"线上", classType:"线上大班", classSize:"5–25人", level:"0基础/基础薄弱", target:"冲5分", suitable:"低基础入门、预算敏感学生", notSuitable:"目标6.5/7.0以上且需要强个性化反馈的学生。", originalPrice:9999, dailyPrice:6888, battlePrice:6888, cp:"—", retake:"无", rating:"性价比", scoreMin:0, scoreMax:4.5, targetMin:4.5, targetMax:5.0, totalHours:"约56H", mainHours:"系统基础段", liveHours:"线上直播大班", recordedHours:"配套录播/学习系统", supportPeriod:"12个月" }),
  product({ id:"large-skill", category:"线上大班课", name:"紫藤技巧班", deliveryMode:"线上", classType:"线上大班", classSize:"5–25人", level:"5分左右", target:"冲6.5分", suitable:"已有一定基础，需要技巧和方法提升的学生", notSuitable:"写作/口语小分明显低且需要大量批改纠错的学生。", originalPrice:9999, dailyPrice:6888, battlePrice:6888, cp:"—", retake:"无", rating:"性价比", scoreMin:4.8, scoreMax:5.8, targetMin:6.0, targetMax:6.5, totalHours:"约56H", mainHours:"技巧主课", liveHours:"线上直播大班", recordedHours:"配套录播/学习系统", supportPeriod:"12个月" }),
  product({ id:"large-65-full", category:"线上大班课", name:"雅思6.5分全程班", deliveryMode:"线上", classType:"线上大班", classSize:"5–25人", level:"0基础/基础薄弱", target:"冲6.5分", suitable:"基础弱但想系统冲6.5的学生；基础薄弱+技巧班连报", notSuitable:"目标7.0+且小分要求高、需要强反馈的学生。", originalPrice:18800, dailyPrice:12800, battlePrice:12800, cp:"—", retake:"无", rating:"性价比", scoreMin:0, scoreMax:4.5, targetMin:6.0, targetMax:6.5, totalHours:"约144H", mainHours:"基础段+技巧段", liveHours:"线上直播大班", recordedHours:"配套录播/学习系统", supportPeriod:"18个月" }),
  product({ id:"large-single", category:"线上大班课", name:"雅思技巧班单科", deliveryMode:"线上", classType:"线上大班", classSize:"5–25人", level:"单科基础5分", target:"单科冲6.5分", suitable:"只想补单项方法的学生", notSuitable:"单项差距大、需要持续批改反馈的学生。", totalHours:"14H", mainHours:"单科技巧课", liveHours:"线上直播大班", originalPrice:2599, dailyPrice:1999, battlePrice:1999, cp:"—", retake:"无", rating:"补弱专项", scoreMin:5, scoreMax:6, targetMin:6, targetMax:6.5 }),

  product({ id:"small-prep", category:"线上小班课", name:"紫藤雅思优学预备VIP小班", deliveryMode:"线上", classType:"线上小班", classSize:"3–10人", level:"基础4.0及以下", target:"冲4.5–5.0", suitable:"低基础线上小班入门", totalHours:"45H", mainHours:"24H", recordedHours:"21H", originalPrice:5080, dailyPrice:4580, battlePrice:4580, cp:"CPB-136811", retake:"有", retakeRule:"完课后三个月内未达4.5分可重修该课程。", rating:"主推", scoreMin:0, scoreMax:4.0, targetMin:4.5, targetMax:5.0, supportPeriod:"12个月" }),
  product({ id:"small-55", category:"线上小班课", name:"紫藤雅思优学5.5VIP小班", deliveryMode:"线上", classType:"线上小班", classSize:"3–10人", level:"基础4.5", target:"冲5.5", suitable:"4.5左右系统冲5.5", totalHours:"123H", mainHours:"64H", liveHours:"16H", recordedHours:"43H", originalPrice:13500, dailyPrice:12600, battlePrice:12600, cp:"CPB-136875", retake:"有", retakeRule:"达到入班基础4.5，完课后三个月内未达5.5可重修。", rating:"主推", scoreMin:4.5, scoreMax:5.0, targetMin:5.5, targetMax:5.5, supportPeriod:"12个月" }),
  product({ id:"small-65", category:"线上小班课", name:"紫藤雅思优学6.5VIP小班", deliveryMode:"线上", classType:"线上小班", classSize:"3–10人", level:"基础5.5–6.0", target:"冲6.5–7.0", suitable:"5.5/6.0冲6.5/7.0", totalHours:"127H", mainHours:"64H", liveHours:"16H", recordedHours:"47H", originalPrice:13500, dailyPrice:12600, battlePrice:12600, cp:"CPB-136883", retake:"有", retakeRule:"达到入班基础5.5，完课后三个月内未达6.5可重修。", rating:"主推", scoreMin:5.5, scoreMax:6.0, targetMin:6.5, targetMax:7.0, supportPeriod:"12个月" }),
  product({ id:"small-70", category:"线上小班课", name:"紫藤雅思优学7.0VIP小班", deliveryMode:"线上", classType:"线上小班", classSize:"3–10人", level:"基础6.5起", target:"冲7.0–7.5", suitable:"6.5冲7.0+", totalHours:"109H", mainHours:"48H", liveHours:"16H", recordedHours:"45H", originalPrice:12800, dailyPrice:11800, battlePrice:11800, cp:"CPB-136892", retake:"有", retakeRule:"达到入班基础6.5，完课后三个月内未达7.0可重修。", rating:"主推", scoreMin:6.5, scoreMax:7.0, targetMin:7.0, targetMax:7.5, supportPeriod:"12个月" }),
  product({ id:"small-prep-55", category:"线上小班课", name:"紫藤雅思优学预备+5.5", deliveryMode:"线上", classType:"线上小班", classSize:"3–10人", level:"基础4.0及以下", target:"冲5.5–6.0", suitable:"低基础到5.5/6.0系统提升", totalHours:"147H", mainHours:"88H", liveHours:"16H", recordedHours:"43H", originalPrice:18580, dailyPrice:16800, battlePrice:16800, cp:"CPB-136927", retake:"有", retakeRule:"达到入班基础4.0，完课后三个月未达5.5可重修。", rating:"主推", scoreMin:0, scoreMax:4.0, targetMin:5.5, targetMax:6.0, supportPeriod:"18个月" }),
  product({ id:"small-55-65", category:"线上小班课", name:"紫藤雅思优学5.5+6.5", deliveryMode:"线上", classType:"线上小班", classSize:"3–10人", level:"基础4.5–5.0", target:"冲6.5–7.0", suitable:"4.5/5.0起步，目标6.5/7.0", totalHours:"213H", mainHours:"128H", liveHours:"32H", recordedHours:"53H", originalPrice:27000, dailyPrice:23800, battlePrice:23800, cp:"CPB-136939", retake:"有", retakeRule:"达到入班基础4.5，完课后三个月未达6.5可重修。", rating:"主推", scoreMin:4.5, scoreMax:5.0, targetMin:6.5, targetMax:7.0, supportPeriod:"18个月" }),
  product({ id:"small-65-70", category:"线上小班课", name:"紫藤雅思优学6.5+7.0", deliveryMode:"线上", classType:"线上小班", classSize:"3–10人", level:"基础5.5及以上", target:"冲7.0–7.5", suitable:"5.5/6.0冲7.0+", totalHours:"199H", mainHours:"112H", liveHours:"32H", recordedHours:"55H", originalPrice:26300, dailyPrice:23700, battlePrice:23700, cp:"CPB-136965", retake:"有", retakeRule:"达到入班基础5.5，完课后三个月未达7.0可重修。", rating:"主推", scoreMin:5.5, scoreMax:6.5, targetMin:7.0, targetMax:7.5, supportPeriod:"18个月" }),

  product({ id:"off-prep", category:"线下班课", name:"紫藤雅思全能预备", deliveryMode:"线下", classType:"线下班课", classSize:"3–8人", level:"基础4.0及以下", target:"冲4.5–5.0", suitable:"低基础入门", totalHours:"45H", mainHours:"24H主课面授", recordedHours:"21H录播", originalPrice:6000, dailyPrice:6000, battlePrice:6000, cp:"CPB-078893", supportPeriod:"12个月", retake:"是", retakeRule:"满足入学、学习过程和考试要求后可申请重读。", rating:"主推", scoreMin:0, scoreMax:4.0, targetMin:4.5, targetMax:5.0 }),
  product({ id:"off-55", category:"线下班课", name:"紫藤雅思全能5.5", deliveryMode:"线下", classType:"线下班课", classSize:"3–8人", level:"基础4.5起", target:"冲5.5–6.0", suitable:"4.5/5.0打基础到5.5/6.0", totalHours:"123H", mainHours:"64H面授", liveHours:"16H直播", recordedHours:"43H录播", originalPrice:18000, dailyPrice:16800, battlePrice:15800, cp:"CPB-078565", supportPeriod:"12个月", retake:"是", retakeRule:"满足重读条件可申请重读。", rating:"主推", scoreMin:4.5, scoreMax:5.0, targetMin:5.5, targetMax:6.0 }),
  product({ id:"off-65", category:"线下班课", name:"紫藤雅思全能6.5", deliveryMode:"线下", classType:"线下班课", classSize:"3–8人", level:"基础5.5起", target:"冲6.5–7.0", suitable:"5.5左右冲6.5", totalHours:"127H", mainHours:"64H面授", liveHours:"16H直播", recordedHours:"47H录播", originalPrice:18000, dailyPrice:16800, battlePrice:15800, cp:"CPB-078576", supportPeriod:"12个月", retake:"是", retakeRule:"满足重读条件可申请重读。", rating:"主推", scoreMin:5.5, scoreMax:6.0, targetMin:6.5, targetMax:7.0 }),
  product({ id:"off-70", category:"线下班课", name:"紫藤雅思全能7.0", deliveryMode:"线下", classType:"线下班课", classSize:"3–8人", level:"基础6.5起", target:"冲7.0及以上", suitable:"6.5冲7.0+", totalHours:"109H", mainHours:"48H面授", liveHours:"16H直播", recordedHours:"45H录播", originalPrice:13800, dailyPrice:13300, battlePrice:13300, cp:"CPB-078892", supportPeriod:"12个月", retake:"是", retakeRule:"满足重读条件可申请重读。", rating:"主推", scoreMin:6.5, scoreMax:7.0, targetMin:7.0, targetMax:7.5 }),
  product({ id:"off-prep-55", category:"线下班课", name:"紫藤雅思全能预备+5.5连报", deliveryMode:"线下", classType:"线下班课", classSize:"3–8人", level:"基础4.0及以下", target:"冲5.5–6.0", suitable:"低基础完整系统提升", totalHours:"147H", mainHours:"88H面授", liveHours:"16H直播", recordedHours:"43H录播", originalPrice:24000, dailyPrice:19780, battlePrice:19780, cp:"CPB-077899", supportPeriod:"18个月", retake:"是", retakeRule:"满足入学/出勤/作业/考试要求可申请重读。", rating:"主推", scoreMin:0, scoreMax:4.0, targetMin:5.5, targetMax:6.0 }),
  product({ id:"off-55-65", category:"线下班课", name:"紫藤雅思全能5.5+6.5连报", deliveryMode:"线下", classType:"线下班课", classSize:"3–8人", level:"基础4.5起", target:"冲6.5–7.0", suitable:"4.5/5.0起步，目标6.5/7.0", totalHours:"213H", mainHours:"128H面授", liveHours:"32H直播", recordedHours:"53H录播", originalPrice:36000, dailyPrice:32600, battlePrice:31600, cp:"CPB-077898", supportPeriod:"18个月", retake:"是", retakeRule:"满足重读条件可申请重读。", rating:"主推", scoreMin:4.5, scoreMax:5.0, targetMin:6.5, targetMax:7.0 }),
  product({ id:"off-65-70", category:"线下班课", name:"紫藤雅思全能6.5+7.0连报", deliveryMode:"线下", classType:"线下班课", classSize:"3–8人", level:"基础5.5起", target:"冲7.0及以上", suitable:"5.5/6.0起步，目标7.0+", totalHours:"215H", mainHours:"112H面授", liveHours:"32H直播", recordedHours:"55H录播", originalPrice:28800, dailyPrice:26800, battlePrice:26800, cp:"CPB-077905", supportPeriod:"18个月", retake:"是", retakeRule:"满足重读条件可申请重读。", rating:"主推", scoreMin:5.5, scoreMax:6.5, targetMin:7.0, targetMax:7.5 }),

  product({ id:"combo-55-32", category:"班课+1V1组合产品", name:"紫藤雅思全能一阶5.5 + 32小时口写私教1V1", deliveryMode:"线上线下均可", classType:"班课+1V1", classSize:"3–8人班课+1人私教", level:"基础4.5起", target:"冲5.5，小分5.0", suitable:"基础段学生，班课打底后重点补口语写作", totalHours:"64H主课 + 32H私教", mainHours:"64H主课", liveHours:"班课阶段", recordedHours:"配套录播/资料", originalPrice:42000, dailyPrice:37800, battlePrice:35800, cp:"CPB-077918", retake:"有", retakeRule:"按班课与1V1组合产品规则执行。", rating:"主推", scoreMin:4.5, scoreMax:5.0, targetMin:5.5, targetMax:6.0, supportPeriod:"12个月", sequence:"先上全能一阶5.5系统打底，解决题型、方法、基础词汇和输出框架；班课后预计稳定到5.5左右，再上32小时口写1V1重点补写作和口语，冲5.5/6.0与小分5.0。" }),
  product({ id:"combo-65-32", category:"班课+1V1组合产品", name:"紫藤雅思全能二阶6.5 + 32小时口写私教1V1", deliveryMode:"线上线下均可", classType:"班课+1V1", classSize:"3–8人班课+1人私教", level:"基础5.5起", target:"冲6.5，小分6.0", suitable:"冲6.5，尤其适合口语写作短板明显的学生", totalHours:"64H主课 + 32H私教", mainHours:"64H主课", liveHours:"班课阶段", recordedHours:"配套录播/资料", originalPrice:42000, dailyPrice:37800, battlePrice:35800, cp:"CPB-077919", retake:"有", retakeRule:"按班课与1V1组合产品规则执行。", rating:"主推", scoreMin:5.5, scoreMax:6.0, targetMin:6.5, targetMax:7.0, supportPeriod:"12个月", sequence:"先上全能二阶6.5系统强化听说读写方法，预计班课后稳定到6.5阶段；之后接32小时口写私教1V1，重点做口语表达、写作审题展开、批改反馈和纠错，最终冲6.5/7.0。" }),

  product({ id:"flight-a", category:"飞跃A/B/C计划", name:"紫藤雅思飞跃A计划", deliveryMode:"线上线下均可", classType:"飞跃计划", classSize:"1人+督导", level:"入班6.0", target:"目标总分+0.5", suitable:"6.0左右短期冲0.5分，已有基础但缺规划和督学", totalHours:"40小时1V1主课 + 2个月飞跃督导服务（含16小时督导）", mainHours:"40H 1V1", liveHours:"2个月督导", originalPrice:35800, dailyPrice:33800, battlePrice:32800, cp:"ZHB-091243", supportPeriod:"2个月", retake:"补偿", retakeRule:"未达分，补偿1次雅思考试 + 1个月督导服务。", rating:"高保障", scoreMin:6.0, scoreMax:6.5, targetMin:6.5, targetMax:7.0 }),
  product({ id:"flight-b", category:"飞跃A/B/C计划", name:"紫藤雅思飞跃B计划", deliveryMode:"线上线下均可", classType:"飞跃计划", classSize:"1人+督导", level:"入班4.0–6.5", target:"冲7.0或6.5小分6", suitable:"基础中等，需要系统1V1+督导冲6.5/7.0", totalHours:"64小时1V1主课 + 3个月飞跃督导服务，送1个月", mainHours:"64H 1V1", liveHours:"4个月督导", originalPrice:55800, dailyPrice:53800, battlePrice:50800, cp:"ZHB-091242", supportPeriod:"4个月", retake:"补偿", retakeRule:"未达分，补偿2次雅思考试 + 2个月督导服务。", rating:"高保障", scoreMin:4.0, scoreMax:6.5, targetMin:6.5, targetMax:7.0 }),
  product({ id:"flight-c", category:"飞跃A/B/C计划", name:"紫藤雅思飞跃C计划", deliveryMode:"线上线下均可", classType:"飞跃计划", classSize:"1人+督导", level:"入班4.0–6.0", target:"冲7.0或6.5小分6", suitable:"基础较弱但目标较高，需要长线强督学和1V1系统提升", totalHours:"128小时1V1主课 + 6个月飞跃督导服务，送3个月", mainHours:"128H 1V1", liveHours:"9个月督导", originalPrice:108800, dailyPrice:97800, battlePrice:95800, cp:"ZHB-091241", supportPeriod:"9个月", retake:"补偿", retakeRule:"未达分，补偿4次雅思考试 + 4个月督导服务。", rating:"高保障", scoreMin:4.0, scoreMax:6.0, targetMin:6.5, targetMax:7.0 }),

  product({ id:"single-listening", category:"单项课", name:"紫藤雅思全能6.5听力单项", deliveryMode:"线下", classType:"单项课", classSize:"3–8人", level:"听力单项基础5.5", target:"听力冲6.5", suitable:"只补听力单项", totalHours:"16H面授", mainHours:"16H面授", originalPrice:5000, dailyPrice:5000, battlePrice:5000, cp:"CP-077781", supportPeriod:"12个月", retake:"是", retakeRule:"仅单项重修。", rating:"补弱专项", scoreMin:5.5, scoreMax:6.5, targetMin:6.5, targetMax:7.0, subject:"listening" }),
  product({ id:"single-reading", category:"单项课", name:"紫藤雅思全能6.5阅读单项", deliveryMode:"线下", classType:"单项课", classSize:"3–8人", level:"阅读单项基础5.5", target:"阅读冲6.5", suitable:"只补阅读单项", totalHours:"16H面授", mainHours:"16H面授", originalPrice:5000, dailyPrice:5000, battlePrice:5000, cp:"CP-077754", supportPeriod:"12个月", retake:"是", retakeRule:"仅单项重修。", rating:"补弱专项", scoreMin:5.5, scoreMax:6.5, targetMin:6.5, targetMax:7.0, subject:"reading" }),
  product({ id:"single-speaking", category:"单项课", name:"紫藤雅思全能6.5口语单项", deliveryMode:"线下", classType:"单项课", classSize:"3–8人", level:"口语单项基础5.5", target:"口语冲6.5", suitable:"只补口语单项", totalHours:"16H面授", mainHours:"16H面授", originalPrice:5000, dailyPrice:5000, battlePrice:5000, cp:"CP-077796", supportPeriod:"12个月", retake:"是", retakeRule:"仅单项重修。", rating:"补弱专项", scoreMin:5.5, scoreMax:6.5, targetMin:6.5, targetMax:7.0, subject:"speaking" }),
  product({ id:"single-writing", category:"单项课", name:"紫藤雅思全能6.5写作单项", deliveryMode:"线下", classType:"单项课", classSize:"3–8人", level:"写作单项基础5.5", target:"写作冲6.5", suitable:"只补写作单项", totalHours:"16H面授", mainHours:"16H面授", originalPrice:5000, dailyPrice:5000, battlePrice:5000, cp:"CP-077795", supportPeriod:"12个月", retake:"是", retakeRule:"仅单项重修。", rating:"补弱专项", scoreMin:5.5, scoreMax:6.5, targetMin:6.5, targetMax:7.0, subject:"writing" })
];

const oneOnOneCp = { 6:"CP-091068", 8:"CP-091069", 10:"CP-091070", 12:"CP-091071", 16:"CP-091072", 18:"CP-091073", 20:"CP-091074", 22:"CP-091075", 24:"CP-091076", 30:"CP-091078", 32:"CP-091079", 40:"CP-091080", 48:"CP-091081", 50:"CP-091082", 60:"CP-091083", 64:"CP-091084", 80:"CP-091085", 160:"CP-091087" };
const oneOnOneHours = Object.keys(oneOnOneCp).map(Number).sort((a,b)=>a-b);

Object.entries(oneOnOneCp).forEach(([hoursText, cp]) => {
  const hours = Number(hoursText);
  const rate = get1v1Rate(hours);
  products.push(product({
    id: `one-static-${hours}`,
    category: "线上/线下1V1",
    name: `紫藤雅思1V1 - ${hours}小时`,
    deliveryMode: "线上线下均可",
    classType: "1V1",
    classSize: "1人",
    level: "任何基础学生",
    target: "按当前基础、小分短板和目标定制",
    suitable: "需要定制化、单项短板明显、目标分较高、时间不适合班课、写作/口语弱、需要班课后补弱的学生",
    notSuitable: "仅需要低价系统入门且没有明显短板的学生，可先用班课打底。",
    totalHours: `${hours}H（每次课2小时，约${Math.ceil(hours/2)}次课）`,
    mainHours: `${hours}H 1V1`,
    liveHours: "线上/线下可交付",
    recordedHours: "—",
    supportPeriod: hours < 20 ? "6个月" : "12个月",
    originalPrice: hours * 800,
    dailyPrice: hours * rate,
    battlePrice: hours * rate,
    cp,
    retake: "无",
    retakeRule: "1V1定制课通常不承诺重读，按实际课包服务执行。",
    suggestedWith1v1: "本身为1V1",
    rating: "补弱专项",
    scoreMin: 0,
    scoreMax: 7.5,
    targetMin: 5.0,
    targetMax: 7.5
  }));
});

function yuan(value) { return value ? `¥${Number(value).toLocaleString("zh-CN")}` : "—"; }
function parseScore(value) { return Number.parseFloat(value || "0"); }
function list(items, max = 99) { return `<ul>${items.slice(0, max).map(item => `<li>${item}</li>`).join("")}</ul>`; }
function textList(items) { return items.map(i => `- ${i}`).join("\n"); }
function copySafe(text) { return String(text).replace(/[&<>]/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;"}[ch])); }

function get1v1Rate(hours) {
  if (hours < 20) return 720;
  if (hours < 40) return 680;
  if (hours < 60) return 650;
  return 600;
}
function nearestCpHours(hours) { return oneOnOneHours.find(h => h >= hours) || oneOnOneHours.at(-1); }
function build1v1(hours, focus, reason) {
  const cpHours = nearestCpHours(hours);
  const rate = get1v1Rate(hours);
  const total = hours * rate;
  const official = hours * 800;
  return product({
    id:`one-${hours}-${focus.join("-")}`, category:"线上/线下1V1", name:`紫藤雅思1V1 - ${hours}小时`, deliveryMode:"线上线下均可", classType:"1V1", classSize:"1人", level:"任何基础", target:"按学生目标定制", suitable:"需要定制化、单项短板明显、目标分较高、时间不适合班课、写作/口语弱、班课后补弱的学生", notSuitable:"只是系统入门且预算非常有限的学生，可先班课打底。", totalHours:`${hours}H（每次课2小时，约${Math.ceil(hours/2)}次课）`, mainHours:`${hours}H 1V1`, originalPrice:official, dailyPrice:total, battlePrice:total, cp:`${oneOnOneCp[cpHours]}（按${cpHours}小时CP码就近匹配）`, retake:"无", retakeRule:"1V1定制课通常不承诺重读，按实际课包服务执行。", suggestedWith1v1:"本身为1V1", rating:"补弱专项", scoreMin:0, scoreMax:7.5, targetMin:5, targetMax:7.5,
    oneOnOne: { hours, rate, total, official, saved: official - total, focus: focus.map(s => skillLabels[s] || s), reason, cpHours }
  });
}

function readForm() {
  const data = Object.fromEntries(new FormData(document.querySelector("#matcher-form")).entries());
  return { ...data, current: parseScore(data.currentScore), target: parseScore(data.targetScore), gap: parseScore(data.targetScore) - parseScore(data.currentScore), subscores: { listening: parseScore(data.listeningScore), reading: parseScore(data.readingScore), writing: parseScore(data.writingScore), speaking: parseScore(data.speakingScore) } };
}

function analyze(data) {
  const filled = Object.entries(data.subscores).filter(([,v]) => v > 0);
  const weak = filled.filter(([,v]) => v <= Math.max(data.current - 0.5, 5.0) || (data.subscoreRequired === "yes" && v < Math.min(data.target, 6.5))).map(([k]) => k);
  const outputWeak = weak.filter(k => outputSkills.includes(k));
  const inputWeak = weak.filter(k => !outputSkills.includes(k));
  const allLow = filled.length === 4 && filled.every(([,v]) => v <= data.current);
  const totalEnoughSubNot = data.current >= data.target && weak.length > 0;
  const noSubscores = filled.length === 0;
  let base = "";
  if (data.current <= 4) base = "4.0及以下：基础薄弱，需要先补雅思基础、词汇、题型认知和基本方法。";
  else if (data.current <= 4.5) base = "4.5左右：有一定英语基础，但雅思体系和方法薄弱，适合预备/一阶课程。";
  else if (data.current <= 5.5) base = "5.0–5.5：已有基础，但方法、速度、输出稳定性不足，适合一阶/二阶课程。";
  else if (data.current <= 6.5) base = "6.0–6.5：适合强化技巧、补短板、冲6.5/7.0，尤其要看写作口语。";
  else base = "6.5以上：适合高分段冲刺，重点突破写作、口语和小分要求。";
  return { filled, weak, outputWeak, inputWeak, allLow, totalEnoughSubNot, noSubscores, base };
}

function recommend1v1Hours(data, analysis) {
  let hours = 16;
  const focus = analysis.weak.length ? analysis.weak : ["writing", "speaking"];
  if (data.gap <= 0.5) hours = 20;
  if (data.gap >= 1) hours = 40;
  if (data.gap >= 1.5) hours = 60;
  if (analysis.outputWeak.length) hours = Math.max(hours, data.target >= 7 ? 32 : 24);
  if (data.target >= 7 && analysis.outputWeak.length) hours = Math.max(hours, 32);
  if (data.target >= 7.5) hours = Math.max(hours, 40);
  if (analysis.totalEnoughSubNot) hours = analysis.outputWeak.length ? 24 : 16;
  if (data.classPreference === "oneOnOne") hours = Math.max(hours, data.gap >= 1 ? 40 : 24);
  if (hours > 60 && data.gap < 2) hours = 60;
  return build1v1(hours, focus, `${data.currentScore}到${data.targetScore}差距${data.gap.toFixed(1)}分；${analysis.outputWeak.length ? "写作/口语属于输出项，需要批改、反馈、纠错，" : "结合小分和目标，"}按规则匹配${hours}小时。`);
}

function fitsDelivery(productItem, delivery) {
  if (delivery === "any") return true;
  if (delivery === "online") return productItem.deliveryMode.includes("线上") || productItem.deliveryMode.includes("均可");
  if (delivery === "offline") return productItem.deliveryMode.includes("线下") || productItem.deliveryMode.includes("均可");
  return true;
}
function scoreFit(p, data) {
  const scoreOk = data.current >= (p.scoreMin ?? 0) - 0.25 && data.current <= (p.scoreMax ?? 8) + 0.25;
  const targetOk = data.target >= (p.targetMin ?? 0) - 0.25 && data.target <= (p.targetMax ?? 8) + 0.25;
  return (scoreOk ? 2 : 0) + (targetOk ? 2 : 0) - Math.abs(((p.scoreMin+p.scoreMax)/2 || data.current) - data.current) * 0.2;
}
function bestProduct(data, types, fallbackTypes = types) {
  const source = products.filter(p => types.includes(p.classType) && fitsDelivery(p, data.delivery));
  const fallback = products.filter(p => fallbackTypes.includes(p.classType));
  const pool = source.length ? source : fallback;
  return pool.sort((a,b) => scoreFit(b,data) - scoreFit(a,data) || a.battlePrice - b.battlePrice)[0];
}

function choosePlans(data, analysis) {
  const one = recommend1v1Hours(data, analysis);
  const preferOnline = data.delivery === "online";
  const preferOffline = data.delivery === "offline";
  let main;
  if (data.budget === "guarantee" || data.classPreference === "flight") main = bestProduct(data, ["飞跃计划"], ["飞跃计划"]);
  else if (data.classPreference === "oneOnOne" || analysis.totalEnoughSubNot || (analysis.outputWeak.length && data.target >= 7)) main = one;
  else if (data.classPreference === "hybridClass" || data.gap >= 1.5 || analysis.outputWeak.length) main = bestProduct(data, ["班课+1V1"], ["班课+1V1"]);
  else if (preferOffline) main = bestProduct(data, ["线下班课"], ["线下班课", "线上小班"]);
  else if (preferOnline) main = bestProduct(data, ["线上小班"], ["线上小班", "线上大班"]);
  else main = bestProduct(data, ["线上小班", "线下班课"], ["线上小班", "线下班课"]);

  let value;
  if (data.classPreference === "small") value = bestProduct(data, ["线上小班"], ["线上小班"]);
  else if (analysis.totalEnoughSubNot && analysis.inputWeak.length && data.delivery !== "online") value = products.find(p => p.classType === "单项课" && analysis.inputWeak.includes(p.subject)) || bestProduct(data, ["单项课"], ["单项课"]);
  else value = bestProduct({ ...data, delivery: data.delivery === "offline" ? "offline" : "online" }, ["线上大班"], ["线上大班"]);

  let guarantee;
  if (data.gap >= 1.5 || data.target >= 7 || data.budget === "guarantee") guarantee = bestProduct(data, ["飞跃计划"], ["飞跃计划"]);
  else guarantee = bestProduct(data, ["班课+1V1"], ["班课+1V1"]);

  const plans = [
    buildPlan("主推方案", main, data, analysis, one),
    buildPlan("性价比方案", value, data, analysis, one),
    buildPlan("高保障方案", guarantee, data, analysis, one)
  ];
  return plans;
}

function buildPlan(position, p, data, analysis, one) {
  let productItem = p;
  let sequence = p.sequence || `先上【${p.name}】，用${p.classType}解决${p.classType.includes("班") ? "雅思题型、方法、词汇、听说读写框架和学习节奏" : "当前短板和冲分需求"}；结课后根据阶段测试/模考反馈决定是否继续接1V1专项。`;
  let expected = p.classType === "线上大班" ? "完成基础题型与方法梳理，后续按小分短板接小班或1V1冲刺。" : `围绕${p.target}推进，先稳定到课程对应阶段，再看写作/口语或小分要求补弱。`;
  let price = { original: p.originalPrice, daily: p.dailyPrice, battle: p.battlePrice };
  let cp = p.cp;
  let extra = "";
  if (p.classType === "1V1") {
    extra = `推荐小时数：${p.oneOnOne.hours}H；最低单价：${p.oneOnOne.rate}元/小时；最低总价：${yuan(p.oneOnOne.total)}；官方参考总价：${yuan(p.oneOnOne.official)}；节省：${yuan(p.oneOnOne.saved)}；重点补：${p.oneOnOne.focus.join("、")}；推荐原因：${p.oneOnOne.reason}`;
  }
  if (p.classType !== "1V1" && (p.classType === "班课+1V1" || (analysis.outputWeak.length && !p.classType.includes("飞跃")))) {
    const comboTotal = p.battlePrice + one.oneOnOne.total;
    extra = `组合补充建议：先上【${p.name}】解决系统框架和阶段方法，班课结束预计到${p.target}阶段；后续继续上${one.oneOnOne.hours}小时1V1，重点补${one.oneOnOne.focus.join("、")}。1V1最低价${yuan(one.oneOnOne.total)}（${one.oneOnOne.rate}元/小时，官方参考${yuan(one.oneOnOne.official)}），班课/产品会战价${yuan(p.battlePrice)}，组合测算总价${yuan(comboTotal)}。这样比纯1V1更省预算，也比只上班课更能解决小分短板。`;
  }
  if (p.classType === "班课+1V1") {
    extra = `${p.sequence} 组合产品价格：原价${yuan(p.originalPrice)}，日常优惠${yuan(p.dailyPrice)}，会战/最低价${yuan(p.battlePrice)}。`;
  }
  return {
    position, product: productItem, sequence, expected, price, cp, extra,
    reason: reasonFor(p, data, analysis, position),
    next: nextAction(data),
  };
}
function reasonFor(p, data, analysis, position) {
  const parts = [`当前${data.currentScore}到目标${data.targetScore}，差距${data.gap.toFixed(1)}分。`];
  if (analysis.noSubscores) parts.push("小分未填，先按全科体系课匹配，并建议补充小分或做入学测试。");
  if (analysis.totalEnoughSubNot) parts.push("目前不是从零系统学的问题，而是卡在单项要求，需要集中解决短板。");
  if (analysis.outputWeak.length) parts.push(`写作/口语输出项偏弱（${analysis.outputWeak.map(k=>skillLabels[k]).join("、")}），需要批改、反馈和纠错。`);
  if (analysis.inputWeak.length) parts.push(`听力/阅读输入项偏弱（${analysis.inputWeak.map(k=>skillLabels[k]).join("、")}），适合先班课系统方法，再刷题纠错。`);
  if (position === "性价比方案") parts.push("该方案优先控制预算，适合作为系统入门或方法建立。");
  if (position === "高保障方案") parts.push("该方案强调督学、服务闭环和补偿机制，适合目标明确、希望更稳的学生/家长。");
  return parts.join(" ");
}
function nextAction(data) {
  if (data.trial === "yes") return "建议下一步安排入学测试/试听，确认小分、班型节奏和最终CP码。";
  return "建议下一步先补充四科小分和可上课时间，再确认班型与预算区间。";
}

function renderDiagnosis(data, analysis) {
  const subText = analysis.noSubscores ? "建议补充小分或先做入学测试，这样能判断是适合班课系统提升，还是需要1V1精准补弱。" : `已填小分：${analysis.filled.map(([k,v]) => `${skillLabels[k]}${v}`).join("、")}；短板判断：${analysis.weak.length ? analysis.weak.map(k => skillLabels[k]).join("、") : "暂未发现明显低分项"}。`;
  document.querySelector("#diagnosis-output").innerHTML = `<strong>学生情况诊断：</strong>${analysis.base}<br><strong>当前分数与目标差距：</strong>${data.currentScore} → ${data.targetScore}，差距${data.gap.toFixed(1)}分。<br><strong>小分短板判断：</strong>${subText}`;
}

function renderRecommendations(plans) {
  document.querySelector("#recommendations").innerHTML = plans.map(plan => {
    const p = plan.product;
    return `<article class="plan-card">
      <div class="plan-head"><span>${plan.position}</span><strong>${p.name}</strong></div>
      <div class="meta-grid">
        <span><b>班型类型</b>${p.classType}</span><span><b>上课形式</b>${p.deliveryMode}</span><span><b>班级人数</b>${p.classSize}</span><span><b>推荐等级</b>${p.rating}</span>
      </div>
      <div class="detail-grid">
        <section><h4>适合原因</h4><p>${plan.reason}</p></section>
        <section><h4>学习顺序</h4><p>${plan.sequence}</p></section>
        <section><h4>课时拆分</h4><p>总课时：${p.totalHours}；主课：${p.mainHours}；直播/面授：${p.liveHours}；录播：${p.recordedHours}；学辅期：${p.supportPeriod}。</p></section>
        <section><h4>预计解决的问题</h4><p>${plan.expected}</p></section>
        <section><h4>价格与CP码</h4><p>原价：${yuan(plan.price.original)}；日常优惠价：${yuan(plan.price.daily)}；会战价/最低价：${yuan(plan.price.battle)}；CP码：${plan.cp}。</p>${plan.extra ? `<p class="highlight">${plan.extra}</p>` : ""}</section>
        <section><h4>课程优势</h4>${list(p.advantages, 8)}</section>
        <section><h4>配套服务</h4>${list(p.services, 10)}</section>
        <section><h4>赠送资料/增值服务</h4>${list(p.gifts, 8)}</section>
        <section><h4>可重读/补偿</h4><p>${p.retake}；${p.retakeRule}</p></section>
        <section><h4>适合人群</h4><p>${p.suitable}</p></section>
        <section><h4>不适合人群</h4><p>${p.notSuitable}</p></section>
        <section><h4>风险提示</h4><p>${p.risk}</p></section>
        <section><h4>下一步建议</h4><p>${plan.next}</p></section>
      </div>
    </article>`;
  }).join("");
}

function scriptsFor(data, analysis, plans) {
  const internal = [`【内部顾问版】`, `1. 学生情况诊断：${analysis.base}`, `2. 当前分数与目标差距：${data.currentScore} → ${data.targetScore}，差距${data.gap.toFixed(1)}分。`, `3. 小分短板判断：${analysis.noSubscores ? "小分未填，建议补充小分或先做入学测试。" : analysis.weak.length ? analysis.weak.map(k=>skillLabels[k]).join("、") : "暂未发现明显短板。"}`,
    ...plans.map((plan, idx) => {
      const p = plan.product;
      return `\n${idx+4}. 推荐方案${idx+1}：${plan.position}\n- 推荐课程名称：${p.name}\n- 班型/形式：${p.classType} / ${p.deliveryMode}\n- 适合原因：${plan.reason}\n- 课程顺序：${plan.sequence}\n- 课时拆分：总课时${p.totalHours}；主课${p.mainHours}；直播/面授${p.liveHours}；录播${p.recordedHours}；学辅期${p.supportPeriod}\n- 价格明细：原价${yuan(p.originalPrice)}；日常优惠${yuan(p.dailyPrice)}；会战/最低${yuan(p.battlePrice)}\n- CP码：${p.cp}\n${plan.extra ? `- 1V1/组合测算：${plan.extra}\n` : ""}- 课程优势：${p.advantages.join("；")}\n- 配套服务：${p.services.join("；")}\n- 赠送资料：${p.gifts.join("；")}\n- 重读/补偿：${p.retake}；${p.retakeRule}\n- 风险提示：${p.risk}\n- 下一步动作：${plan.next}`;
    })].join("\n");

  const main = plans[0];
  const p = main.product;
  const parent = `从目前${data.currentScore}到目标${data.targetScore}，差距${data.gap.toFixed(1)}分，${analysis.noSubscores ? "目前还缺四科小分，建议先做入学测试确认短板。" : analysis.weak.length ? `主要需要关注${analysis.weak.map(k=>skillLabels[k]).join("、")}。` : "整体可以按全科阶段提升来规划。"}我这边主推【${p.name}】，因为${main.reason}学习上建议${main.sequence}价格方面：原价${yuan(p.originalPrice)}，日常优惠${yuan(p.dailyPrice)}，会战/最低价${yuan(p.battlePrice)}，CP码${p.cp}。课程会配套${p.services.slice(0,6).join("、")}，资料包含${p.gifts.slice(0,5).join("、")}。${main.extra || ""} 如果您接受，我们下一步可以先安排测评/试听，再确认最终班型和开课安排。`;
  document.querySelector("#consultant-script").value = internal;
  document.querySelector("#parent-script").value = parent;
}

function renderProductTable() {
  const delivery = document.querySelector("#filter-delivery").value;
  const type = document.querySelector("#filter-type").value;
  const current = document.querySelector("#filter-current").value;
  const target = document.querySelector("#filter-target").value;
  const budget = document.querySelector("#filter-budget").value;
  let rows = products.filter(p => delivery === "all" || p.deliveryMode === delivery || (delivery !== "all" && p.deliveryMode.includes(delivery)));
  rows = rows.filter(p => type === "all" || p.classType === type);
  rows = rows.filter(p => current === "all" || (Number(current) >= p.scoreMin - .25 && Number(current) <= p.scoreMax + .25));
  rows = rows.filter(p => target === "all" || (Number(target) >= p.targetMin - .25 && Number(target) <= p.targetMax + .25));
  if (budget === "budget") rows = rows.filter(p => p.rating === "性价比" || p.battlePrice <= 13000 || p.classType === "线上大班");
  if (budget === "guarantee") rows = rows.filter(p => p.rating === "高保障" || p.classType === "飞跃计划" || p.classType === "班课+1V1");

  document.querySelector("#product-table").innerHTML = categoryOrder.map(typeName => {
    const categoryRows = rows.filter(p => p.classType === typeName);
    if (!categoryRows.length) return "";
    return `<article class="category-block"><h3>${typeName}</h3><div class="table-wrap"><table><thead><tr><th>产品名称</th><th>形式</th><th>人数</th><th>适合基础</th><th>目标分</th><th>课时</th><th>价格</th><th>CP码</th><th>重读/补偿</th><th>查看课程详情</th></tr></thead><tbody>${categoryRows.map(p => `<tr><td><b>${p.name}</b><br><small>${p.suitable}</small></td><td>${p.deliveryMode}</td><td>${p.classSize}</td><td>${p.level}</td><td>${p.target}</td><td>${p.totalHours}</td><td>原${yuan(p.originalPrice)}<br>日${yuan(p.dailyPrice)}<br>会${yuan(p.battlePrice)}</td><td>${p.cp}</td><td>${p.retake}<br><small>${p.retakeRule}</small></td><td><details><summary>详情</summary><p><b>不适合：</b>${p.notSuitable}</p><p><b>优势：</b>${p.advantages.join("；")}</p><p><b>服务：</b>${p.services.join("；")}</p><p><b>资料：</b>${p.gifts.join("；")}</p><p><b>风险：</b>${p.risk}</p></details></td></tr>`).join("")}</tbody></table></div></article>`;
  }).join("") || `<p class="empty">当前筛选无产品，请放宽筛选条件。</p>`;
}

function init() {
  const currentSelect = document.querySelector("#current-score");
  const targetSelect = document.querySelector("#target-score");
  currentSelect.innerHTML = scoreOptions.slice(0,7).map(v => `<option value="${v}" ${v==="5.0"?"selected":""}>${v}${v==="4.0"?"及以下":v==="7.0"?"+":""}</option>`).join("");
  targetSelect.innerHTML = scoreOptions.slice(3).map(v => `<option value="${v}" ${v==="6.5"?"selected":""}>${v}${v==="7.5"?"+":""}</option>`).join("");
  document.querySelectorAll("[data-subscore]").forEach(sel => sel.innerHTML = subscoreOptions.map(v => `<option value="${v}">${v ? (v === "7.5" ? "7.5+" : v) : "未填"}</option>`).join(""));
  document.querySelector("#brand-points").innerHTML = brandAdvantages.map(item => `<span>${item}</span>`).join("");
  ["#filter-current", "#filter-target"].forEach(selector => {
    document.querySelector(selector).innerHTML += scoreOptions.map(v => `<option value="${v}">${v}</option>`).join("");
  });
  document.querySelector("#category-tabs").innerHTML = categoryOrder.map(c => `<button type="button" data-tab="${c}">${c}</button>`).join("");
  document.querySelector("#matcher-form").addEventListener("submit", event => { event.preventDefault(); runMatch(); });
  document.querySelectorAll(".filters select").forEach(sel => sel.addEventListener("change", renderProductTable));
  document.querySelector("#category-tabs").addEventListener("click", event => {
    if (event.target.matches("button")) { document.querySelector("#filter-type").value = event.target.dataset.tab; renderProductTable(); }
  });
  document.querySelectorAll("[data-copy]").forEach(btn => btn.addEventListener("click", async () => {
    const text = document.querySelector(`#${btn.dataset.copy}`).value;
    try { await navigator.clipboard.writeText(text); showToast("已复制"); }
    catch { document.querySelector(`#${btn.dataset.copy}`).select(); document.execCommand("copy"); showToast("已复制"); }
  }));
  renderProductTable();
  runMatch();
}
function runMatch() {
  const data = readForm();
  const analysis = analyze(data);
  const plans = choosePlans(data, analysis);
  renderDiagnosis(data, analysis);
  renderRecommendations(plans);
  scriptsFor(data, analysis, plans);
}
function showToast(message) { const toast = document.querySelector("#toast"); toast.textContent = message; toast.classList.add("show"); setTimeout(() => toast.classList.remove("show"), 1600); }

document.addEventListener("DOMContentLoaded", init);
