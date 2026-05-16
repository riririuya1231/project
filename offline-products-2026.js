(() => {
  const offlineServices = [
    '入学测试 / 阶段测 / 全真模考',
    '课前导学计划与结课复习规划',
    '学管老师跟进出勤、作业与阶段反馈',
    '写作精批、口语点评与考前预测资料',
    '雅思核心词、口语当季题库、写作范文、高频题资料',
    '无限次AI口语智能陪练',
    '雅思考试代报名，学辅期内可协助报名',
    '优秀学员奖学金机制'
  ];

  const offlineAdvantages = [
    '北京线下面授，小班3-6人，课堂互动和老师关注度更高。',
    '适合需要固定节奏、线下学习氛围、学管督学和阶段反馈的学生。',
    '从入门、基础、强化、冲刺到连报产品分层清晰，可按当前分和目标分匹配。',
    '写作和口语可结合批改、点评、表达纠错和考前预测进行输出项提升。',
    '可与1V1组合，班课负责系统框架，1V1负责短板突破和考前冲刺。'
  ];

  const offlineGifts = [
    '线下讲义 / 自研配套资料',
    '雅思备考资料包',
    '雅思核心词',
    '口语当季题库',
    '写作范文',
    '高频题资料',
    '机考练习与模考资源'
  ];

  const offlineRisk = '线下小班适合需要学习氛围和老师关注的学生；若写作/口语明显低于目标，建议搭配1V1补短板；页面优先展示北京最优惠价，具体开班、优惠、重读/补偿规则以北京校区系统与合同为准。';

  function offlineProduct(base) {
    const original = base.originalPrice ?? base.price ?? 0;
    const best = base.bestPrice ?? base.price ?? original;
    return {
      category: base.category || '线下班课',
      deliveryMode: '线下',
      classType: base.classType || '线下班课',
      classSize: base.classSize || '3-6人',
      retake: base.retake || '按新版线下产品规则',
      retakeRule: base.retakeRule || '连报/指定产品满足入班基础与完课要求后，可按产品规则申请重读或补偿服务，具体以合同与校区规则为准。',
      supportPeriod: base.supportPeriod || '12个月',
      rating: base.rating || '北京线下新版',
      price: best,
      standardPrice: original,
      bestPrice: best,
      beijingBestPrice: best,
      originalPrice: original,
      dailyPrice: best,
      battlePrice: best,
      advantages: base.advantages || offlineAdvantages,
      services: base.services || offlineServices,
      gifts: base.gifts || offlineGifts,
      risk: base.risk || offlineRisk,
      notSuitable: base.notSuitable || '时间无法线下到校、完全不接受固定班课节奏，或目标/小分要求需要高度定制的学生。',
      cp: base.cp || '北京线下新版产品，CP码以系统为准',
      ...base,
      price: best,
      standardPrice: original,
      bestPrice: best,
      beijingBestPrice: best,
      originalPrice: original,
      dailyPrice: best,
      battlePrice: best
    };
  }

  const offlineSmallClassProducts2026 = [
    offlineProduct({
      id: 'offline-2026-entry', name: '雅思入门班', level: '0基础/基础薄弱', target: '冲4.5-5.0',
      suitable: '0基础或基础薄弱，先建立雅思题型认知、词汇基础和基本做题方法。',
      originalPrice: 7800, bestPrice: 5800, totalHours: '40H', mainHours: '线下面授主课', liveHours: '小班3-6人',
      scoreMin: 0, scoreMax: 4.5, targetMin: 4.5, targetMax: 5.0, retake: '无'
    }),
    offlineProduct({
      id: 'offline-2026-basic', name: '雅思基础班', level: '基础4.5分', target: '冲5.5',
      suitable: '有一定英语基础但雅思方法薄弱，需要从4.5左右系统提升到5.5。',
      originalPrice: 19800, bestPrice: 15800, totalHours: '68H', mainHours: '主课约44H + 配套训练', liveHours: '小班3-6人',
      scoreMin: 4.5, scoreMax: 5.0, targetMin: 5.5, targetMax: 5.5,
      retake: '有', retakeRule: '满足入班基础与完课要求，完课后三个月内未达到5.5可按新版线下产品规则申请重读。'
    }),
    offlineProduct({
      id: 'offline-2026-intensive', name: '雅思强化班', level: '基础5.5分', target: '冲6.5',
      suitable: '已有5.5左右基础，需要强化技巧、速度、写作口语输出稳定性，目标6.5。',
      originalPrice: 20800, bestPrice: 15800, totalHours: '68H', mainHours: '主课约44H + 配套训练', liveHours: '小班3-6人',
      scoreMin: 5.5, scoreMax: 6.0, targetMin: 6.5, targetMax: 6.5,
      retake: '有', retakeRule: '满足入班基础与完课要求，完课后三个月内未达到6.5可按新版线下产品规则申请重读。'
    }),
    offlineProduct({
      id: 'offline-2026-sprint', name: '雅思冲刺班', level: '基础6.5分', target: '冲7.0及以上',
      suitable: '6.5左右冲7.0+，重点解决高分段技巧、写作口语表达升级和考前稳定性。',
      originalPrice: 18800, bestPrice: 12800, totalHours: '52H', mainHours: '线下冲刺主课 + 配套训练', liveHours: '小班3-6人',
      scoreMin: 6.5, scoreMax: 7.5, targetMin: 7.0, targetMax: 7.5,
      retake: '有', retakeRule: '满足入班基础与完课要求，完课后三个月内未达到7.0可按新版线下产品规则申请重读。'
    }),
    offlineProduct({
      id: 'offline-2026-entry-basic', name: '雅思入门+基础班', level: '基础4.0及以下', target: '冲5.5',
      suitable: '低基础学生从入门到5.5，适合需要较长周期系统打底的学生。',
      originalPrice: 27600, bestPrice: 18800, totalHours: '108H', mainHours: '入门段 + 基础段', liveHours: '小班3-6人', supportPeriod: '15个月',
      scoreMin: 0, scoreMax: 4.0, targetMin: 5.5, targetMax: 5.5,
      retake: '有', retakeRule: '满足入班基础与完课要求，完课后三个月内未达到5.5可按新版线下产品规则申请重读。'
    }),
    offlineProduct({
      id: 'offline-2026-basic-intensive', name: '雅思基础+强化班', level: '基础4.5分', target: '冲6.5',
      suitable: '4.5左右到6.5，基础段解决框架，强化段提升技巧和输出稳定性。',
      originalPrice: 40600, bestPrice: 26800, totalHours: '122H', mainHours: '基础段 + 强化段', liveHours: '小班3-6人', supportPeriod: '15个月',
      scoreMin: 4.5, scoreMax: 5.0, targetMin: 6.5, targetMax: 6.5,
      retake: '有', retakeRule: '满足入班基础与完课要求，完课后三个月内未达到6.5可按新版线下产品规则申请重读。'
    }),
    offlineProduct({
      id: 'offline-2026-intensive-sprint', name: '雅思强化+冲刺班', level: '基础5.5分', target: '冲7.0及以上',
      suitable: '5.5/6.0基础冲7.0+，适合目标高、需要强化+冲刺连续推进的学生。',
      originalPrice: 39600, bestPrice: 23800, totalHours: '120H', mainHours: '强化段 + 冲刺段', liveHours: '小班3-6人', supportPeriod: '15个月',
      scoreMin: 5.5, scoreMax: 6.0, targetMin: 7.0, targetMax: 7.5,
      retake: '有', retakeRule: '满足入班基础与完课要求，完课后三个月内未达到7.0可按新版线下产品规则申请重读。'
    }),
    offlineProduct({
      id: 'offline-2026-entry-basic-intensive', name: '雅思入门+基础+强化班', level: '基础4.0及以下', target: '冲6.5',
      suitable: '低基础长线冲6.5，适合预算允许且希望线下系统陪跑的学生。',
      originalPrice: 48400, bestPrice: 30800, totalHours: '148H', mainHours: '入门段 + 基础段 + 强化段', liveHours: '小班3-6人', supportPeriod: '18个月',
      scoreMin: 0, scoreMax: 4.0, targetMin: 6.5, targetMax: 6.5,
      retake: '有', retakeRule: '满足入班基础与完课要求，完课后三个月内未达到6.5可按新版线下产品规则申请重读。'
    }),
    offlineProduct({
      id: 'offline-2026-basic-intensive-sprint', name: '雅思基础+强化+冲刺班', level: '基础4.5分', target: '冲7.0及以上',
      suitable: '4.5左右长线冲7.0+，适合目标高、需要完整线下体系和高频反馈的学生。',
      originalPrice: 59400, bestPrice: 36800, totalHours: '181H', mainHours: '基础段 + 强化段 + 冲刺段', liveHours: '小班3-6人', supportPeriod: '18个月',
      scoreMin: 4.5, scoreMax: 5.0, targetMin: 7.0, targetMax: 7.5,
      retake: '有', retakeRule: '满足入班基础与完课要求，完课后三个月内未达到7.0可按新版线下产品规则申请重读。'
    }),
    offlineProduct({
      id: 'offline-2026-fa', category: '班课+1V1', classType: '班课+1V1', name: '套餐雅思线下A计划', level: '目标总分约5.5', target: '班课+32H 1V1补弱',
      suitable: '基础偏弱或目标5.5左右，需要线下班课打底，并用1V1补写作/口语短板。',
      originalPrice: 49600, bestPrice: 32800, totalHours: '约100H', mainHours: '68H线下班课', liveHours: '32H 1V1', supportPeriod: '12个月',
      scoreMin: 0, scoreMax: 5.0, targetMin: 5.5, targetMax: 5.5, rating: '高端组合｜北京优惠',
      retake: '有', retakeRule: '班课与1V1组合产品，满足入班基础、完课和考试要求后，按新版高端产品规则执行。'
    }),
    offlineProduct({
      id: 'offline-2026-fb', category: '班课+1V1', classType: '班课+1V1', name: '套餐雅思线下B计划', level: '目标总分约6.5', target: '班课+64H 1V1补弱',
      suitable: '目标6.5，既要系统线下学习，也需要较充分1V1解决输出项和小分短板。',
      originalPrice: 78400, bestPrice: 52800, totalHours: '约132H', mainHours: '68H线下班课', liveHours: '64H 1V1', supportPeriod: '12个月',
      scoreMin: 4.5, scoreMax: 5.5, targetMin: 6.5, targetMax: 6.5, rating: '高端组合｜北京优惠',
      retake: '有', retakeRule: '班课与1V1组合产品，满足入班基础、完课和考试要求后，按新版高端产品规则执行。'
    }),
    offlineProduct({
      id: 'offline-2026-fc', category: '班课+1V1', classType: '班课+1V1', name: '套餐雅思线下C计划', level: '目标总分约7.0+', target: '班课+108H 1V1补弱',
      suitable: '目标7.0+或小分要求高，需要线下班课系统学习与较高强度1V1冲刺。',
      originalPrice: 118000, bestPrice: 76800, totalHours: '约176H', mainHours: '68H线下班课', liveHours: '108H 1V1', supportPeriod: '12个月',
      scoreMin: 4.5, scoreMax: 6.0, targetMin: 7.0, targetMax: 7.5, rating: '高端组合｜北京优惠',
      retake: '有', retakeRule: '班课与1V1组合产品，满足入班基础、完课和考试要求后，按新版高端产品规则执行。'
    })
  ];

  function applyOfflineProducts2026() {
    try {
      if (!Array.isArray(products)) return;
      for (let i = products.length - 1; i >= 0; i -= 1) {
        const item = products[i];
        const isOldOffline = item.deliveryMode === '线下' || item.classType === '线下班课' || /线下|面授/.test(item.name || '') || /^offline-/.test(item.id || '');
        if (isOldOffline) products.splice(i, 1);
      }
      products.push(...offlineSmallClassProducts2026);

      if (Array.isArray(categoryOrder)) {
        ['线下班课', '班课+1V1'].forEach(cat => {
          if (!categoryOrder.includes(cat)) categoryOrder.push(cat);
        });
      }
    } catch (error) {
      console.warn('Offline product override skipped:', error);
    }
  }

  function money(value) {
    return value ? `¥${Number(value).toLocaleString('zh-CN')}` : '按实际报价确认';
  }

  function chooseOfflinePlan(current, target, preference) {
    const pool = offlineSmallClassProducts2026.filter(p => {
      if (preference === 'hybridClass') return p.classType === '班课+1V1';
      if (preference === 'small' || preference === 'any' || !preference) return p.classType === '线下班课';
      if (preference === 'oneOnOne') return false;
      return p.classType === '线下班课' || p.classType === '班课+1V1';
    });
    return pool.find(p => current >= p.scoreMin && current <= p.scoreMax && target >= p.targetMin && target <= p.targetMax)
      || pool.find(p => target <= p.targetMax)
      || pool[pool.length - 1];
  }

  function patchOfflineAdvisor() {
    const form = document.querySelector('#matcher-form');
    if (!form) return;
    form.addEventListener('submit', () => {
      setTimeout(() => {
        const fd = new FormData(form);
        if (fd.get('delivery') !== 'offline' && fd.get('classPreference') !== 'hybridClass') return;
        const current = Number(fd.get('currentScore') || 0);
        const target = Number(fd.get('targetScore') || 0);
        const preference = fd.get('classPreference');
        const plan = chooseOfflinePlan(current, target, preference);
        if (!plan) return;

        const output = document.querySelector('#advisor-output');
        const oldCard = document.querySelector('#offline-2026-card');
        if (oldCard) oldCard.remove();
        if (output) {
          const card = document.createElement('article');
          card.id = 'offline-2026-card';
          card.className = 'advisor-card';
          card.innerHTML = `<h3>新版北京线下产品匹配</h3><p><b>${plan.name}</b>｜${plan.level}｜${plan.target}</p><p><b>原价：</b>${money(plan.standardPrice)}｜<b>北京最优惠价：</b>${money(plan.bestPrice)}｜<b>课时：</b>${plan.totalHours}｜<b>班型：</b>${plan.classSize}</p><p>${plan.suitable}</p><p class="muted">说明：已按新版北京线下产品覆盖原线下课；匹配和话术优先展示北京最优惠价，具体开班、优惠、重读/补偿规则以校区系统与合同为准。</p>`;
          output.appendChild(card);
        }

        const consultant = document.querySelector('#consultant-script');
        const parent = document.querySelector('#parent-script');
        const text = `\n\n【新版线下产品匹配｜北京优惠价】\n推荐：${plan.name}\n适合：${plan.level}，${plan.target}\n原价：${money(plan.standardPrice)}\n北京最优惠价：${money(plan.bestPrice)}\n课时：${plan.totalHours}\n推荐理由：${plan.suitable}\n备注：新版北京线下小班为3-6人，适合需要线下氛围、老师关注和学管督学的学生。`;
        if (consultant && !consultant.value.includes('【新版线下产品匹配｜北京优惠价】')) consultant.value += text;
        if (parent && !parent.value.includes('新版北京线下小班')) {
          parent.value += `\n\n如果选择线下，我们现在新版北京线下产品更适合按阶段匹配：当前基础和目标分对应「${plan.name}」，原价${money(plan.standardPrice)}，北京最优惠价${money(plan.bestPrice)}，小班3-6人，课堂关注度和学管跟进会比普通大班更强。`;
        }
      }, 180);
    });
  }

  applyOfflineProducts2026();
  document.addEventListener('DOMContentLoaded', patchOfflineAdvisor);
})();
