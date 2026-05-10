const courses = [
  {
    id: "foundation-online-group",
    name: "雅思基础提升线上班课",
    type: "group",
    delivery: ["online", "hybrid"],
    scoreRange: [0, 5.5],
    timeline: ["standard", "long"],
    levelGap: [0.5, 1.5],
    price: "¥4,980 / 期",
    duration: "8 周 · 48 课时",
    format: "小班直播 + 课后回放",
    description: "适合词汇、语法和题型方法需要系统补齐的学生，用固定节奏完成听说读写基础搭建。",
    benefits: ["班主任跟进出勤与作业", "直播互动成本友好", "配套阶段测评定位薄弱项"],
    fit: "当前分数 5.5 以下、目标提升 0.5-1.5 分、希望先建立完整学习框架。"
  },
  {
    id: "offline-group-boost",
    name: "雅思线下强化班课",
    type: "group",
    delivery: ["offline", "hybrid"],
    scoreRange: [4.5, 6.0],
    timeline: ["standard", "long"],
    levelGap: [0.5, 1.5],
    price: "¥7,800 / 期",
    duration: "10 周 · 60 课时",
    format: "校区面授小班",
    description: "通过面授课堂提升学习氛围和执行力，集中解决听说读写常见失分点。",
    benefits: ["线下监督强、学习状态更稳定", "课堂练习即时纠错", "适合需要环境带动的学生"],
    fit: "当前 4.5-6.0 分，希望稳步冲 6.0/6.5，且所在城市方便到校。"
  },
  {
    id: "one-on-one-diagnosis",
    name: "雅思一对一定制提分课",
    type: "oneOnOne",
    delivery: ["online", "offline", "hybrid"],
    scoreRange: [4.0, 7.5],
    timeline: ["urgent", "standard", "long"],
    levelGap: [0.5, 2.5],
    price: "¥680 / 课时起",
    duration: "按诊断结果定制",
    format: "专属老师 + 个性化课表",
    description: "先诊断单项短板，再按目标分拆解课时，适合口语写作或单项卡分明显的学生。",
    benefits: ["目标、内容和作业完全定制", "口语写作可高频精批精改", "排课灵活，适合临考冲刺"],
    fit: "目标分较高、单项分差大、备考时间紧，或需要快速解决卡分问题。"
  },
  {
    id: "sprint-online",
    name: "雅思考前冲刺线上营",
    type: "group",
    delivery: ["online", "hybrid"],
    scoreRange: [5.5, 7.5],
    timeline: ["urgent"],
    levelGap: [0, 1.0],
    price: "¥3,280 / 期",
    duration: "21 天 · 高频训练",
    format: "直播精讲 + 每日打卡",
    description: "围绕真题节奏、答题策略和考前状态管理，帮助已有基础的学生在短期内稳定输出。",
    benefits: ["考前节奏强，任务颗粒度细", "集中训练高频题型", "价格低于完整长期课程"],
    fit: "距离考试 1 个月内，当前 5.5 分以上，需要查漏补缺和稳定发挥。"
  },
  {
    id: "combo-guarantee",
    name: "雅思目标分组合保障课",
    type: "combo",
    delivery: ["online", "offline", "hybrid"],
    scoreRange: [4.5, 6.5],
    timeline: ["standard", "long"],
    levelGap: [1.0, 2.5],
    price: "¥12,800 / 套餐起",
    duration: "12-16 周 · 班课 + 一对一",
    format: "班课打底 + 一对一突破",
    description: "用班课建立体系，再用一对一解决写作、口语或阅读听力瓶颈，适合明确目标分的学生。",
    benefits: ["兼顾体系化与个性化", "总价低于全程一对一", "阶段测评后动态调整课时"],
    fit: "目标提升 1 分以上，希望既控制预算又获得个性化纠偏。"
  },
  {
    id: "premium-vip",
    name: "雅思 VIP 高分规划课",
    type: "oneOnOne",
    delivery: ["online", "offline", "hybrid"],
    scoreRange: [6.0, 8.0],
    timeline: ["standard", "long"],
    levelGap: [0.5, 1.5],
    price: "¥18,800 / 30 课时起",
    duration: "定制周期 · 高分导师",
    format: "资深教师团队 + 学管督学",
    description: "面向 6.5/7+ 高分目标，强调评分标准、表达质量和模考反馈的精细化提升。",
    benefits: ["高分段评分标准拆解", "作文逐篇精批、口语逐题反馈", "适合申请节点明确的学生"],
    fit: "已有 6.0 左右基础，目标 7.0+，需要高质量输出和申请时间倒排。"
  }
];

const typeLabels = {
  group: "班课",
  oneOnOne: "一对一",
  combo: "组合课"
};

const deliveryLabels = {
  online: "线上",
  offline: "线下",
  hybrid: "线上 + 线下"
};

const form = document.querySelector("#matcher-form");
const results = document.querySelector("#results");
const summary = document.querySelector("#match-summary");
const template = document.querySelector("#course-card-template");

function readForm() {
  const data = new FormData(form);
  return {
    currentScore: Number(data.get("currentScore")),
    targetScore: Number(data.get("targetScore")),
    delivery: data.get("delivery"),
    courseType: data.get("courseType"),
    timeline: data.get("timeline")
  };
}

function scoreCourse(course, preferences) {
  const gap = Math.max(preferences.targetScore - preferences.currentScore, 0);
  let score = 0;

  if (course.delivery.includes(preferences.delivery)) score += 32;
  if (preferences.courseType === "any" || preferences.courseType === course.type) score += 22;
  if (preferences.currentScore >= course.scoreRange[0] && preferences.currentScore <= course.scoreRange[1]) score += 20;
  if (course.timeline.includes(preferences.timeline)) score += 14;
  if (gap >= course.levelGap[0] && gap <= course.levelGap[1]) score += 12;

  return score;
}

function buildMeta(course, preferences) {
  return [
    ["上课方式", course.delivery.map((item) => deliveryLabels[item]).join(" / ")],
    ["课程周期", course.duration],
    ["课程形态", course.format],
    ["匹配原因", `${deliveryLabels[preferences.delivery]}偏好 + 目标提升 ${Math.max(preferences.targetScore - preferences.currentScore, 0).toFixed(1)} 分`]
  ];
}

function renderCourses(preferences) {
  const rankedCourses = courses
    .map((course) => ({ ...course, matchScore: scoreCourse(course, preferences) }))
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 3);

  results.innerHTML = "";
  summary.textContent = `当前 ${preferences.currentScore.toFixed(1)} 分，目标 ${preferences.targetScore.toFixed(1)} 分，偏好${deliveryLabels[preferences.delivery]}；以下为匹配度最高的 3 个方案。`;

  rankedCourses.forEach((course) => {
    const card = template.content.cloneNode(true);
    card.querySelector(".course-type").textContent = typeLabels[course.type];
    card.querySelector("h3").textContent = course.name;
    card.querySelector(".match-score").textContent = `匹配度 ${course.matchScore}%`;
    card.querySelector(".course-desc").textContent = course.description;
    card.querySelector(".fit").textContent = course.fit;
    card.querySelector(".price").textContent = course.price;

    const meta = card.querySelector(".course-meta");
    buildMeta(course, preferences).forEach(([term, detail]) => {
      const dt = document.createElement("dt");
      const dd = document.createElement("dd");
      dt.textContent = term;
      dd.textContent = detail;
      meta.append(dt, dd);
    });

    const benefits = card.querySelector(".benefits");
    course.benefits.forEach((benefit) => {
      const item = document.createElement("li");
      item.textContent = benefit;
      benefits.append(item);
    });

    results.append(card);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  renderCourses(readForm());
});

renderCourses(readForm());
