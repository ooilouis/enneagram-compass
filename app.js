const TOTAL_QUESTIONS = 150;

const copy = {
  en: {
    appName: "Enneagram Compass",
    appSub: "150-question personality test",
    tabTest: "Test",
    tabTypes: "Personality Types",
    tabManage: "Management Guide",
    introTitle: "Find your Enneagram pattern with a focused, reflective test.",
    introBody:
      "Answer 150 quick statements in a shuffled deck, so the test feels fresher and your answers stay more instinctive.",
    questionsLabel: "questions",
    typesLabel: "types",
    startTest: "Start",
    previous: "Previous",
    reset: "Reset",
    completed: "Completed",
    pizzaTitle: "Pentagon Pizza Index",
    pizzaIntro:
      "A five-slice animated profile of how your answers distribute across structure, connection, drive, depth, and freedom.",
    scoreBreakdown: "Score breakdown",
    whatNext: "What to do with this result",
    retake: "Retake test",
    typesTitle: "Explore all 9 Enneagram types",
    typesIntro:
      "Learn the core motivation, strengths, blind spots, growth direction, and relationship style of each type.",
    manageTitle: "Management communication guide",
    manageIntro:
      "Practical workplace advice for leading, giving feedback, handling conflict, and improving if this is your own type.",
    resultManageTitle: "How to work with this type",
    communicateLabel: "How to communicate",
    manageLabel: "Management perspective",
    feedbackLabel: "Feedback style",
    conflictLabel: "Conflict note",
    selfImproveLabel: "If this is you",
    careerLabel: "Career advice",
    suitableJobsLabel: "Suitable job examples",
    question: "Question",
    of: "of",
    resultPrefix: "Your strongest pattern is",
    likelyWing: "Likely wing",
    closestPatterns: "closest supporting patterns",
    resultGuidance:
      "Use this as a reflection map, not a fixed label. Read your top three types, notice which core fear feels most familiar, and compare your behavior when relaxed versus stressed.",
    answers: [
      "Strongly disagree",
      "Disagree",
      "Neutral",
      "Agree",
      "Strongly agree",
    ],
    funNotes: [
      "Fresh card from the shuffled deck.",
      "No pattern-spotting. Just answer honestly.",
      "Tiny instinct check, big personality clue.",
      "Go with your first real reaction.",
      "The deck is mixing work, stress, and relationship clues.",
      "Nice pace. Keep it light and honest.",
    ],
    detailLabels: {
      desire: "Core desire",
      fear: "Core fear",
      strengths: "Strengths",
      blind: "Blind spots",
      growth: "Growth",
      work: "Work and relationships",
      stress: "Under stress",
      gift: "Hidden gift",
      practice: "Daily practice",
    },
  },
  zh: {
    appName: "九型人格指南",
    appSub: "150题人格测试",
    tabTest: "测试",
    tabTypes: "人格类型",
    tabManage: "管理指南",
    introTitle: "用一套专注的反思测试，找出你的九型人格模式。",
    introBody: "回答150道已洗牌的简短陈述，让测试更有新鲜感，也让你的答案更接近直觉反应。",
    questionsLabel: "道题",
    typesLabel: "类型",
    startTest: "开始",
    previous: "上一题",
    reset: "重新开始",
    completed: "已完成",
    pizzaTitle: "五角披萨指数",
    pizzaIntro: "用五片动态披萨显示你的答案在结构、连接、驱动力、深度和自由感上的分布。",
    scoreBreakdown: "分数分布",
    whatNext: "如何使用这个结果",
    retake: "重新测试",
    typesTitle: "了解全部9种九型人格",
    typesIntro: "查看每种类型的核心动机、优势、盲点、成长方向，以及工作和关系中的表现。",
    manageTitle: "管理沟通指南",
    manageIntro: "从管理角度了解如何带领、反馈、处理冲突，以及如果你是这个类型该如何成长。",
    resultManageTitle: "如何与这个类型共事",
    communicateLabel: "如何沟通",
    manageLabel: "管理角度",
    feedbackLabel: "反馈方式",
    conflictLabel: "冲突提醒",
    selfImproveLabel: "如果你是这个类型",
    careerLabel: "职业建议",
    suitableJobsLabel: "适合工作例子",
    question: "第",
    of: "题，共",
    resultPrefix: "你最明显的模式是",
    likelyWing: "可能翼型",
    closestPatterns: "最接近的辅助模式",
    resultGuidance:
      "请把结果当成自我观察地图，而不是固定标签。建议阅读前三高类型，比较哪一种核心恐惧最熟悉，也观察自己在放松和压力下的差异。",
    answers: ["非常不同意", "不同意", "普通", "同意", "非常同意"],
    funNotes: [
      "从洗好的题卡抽出这一题。",
      "不用猜类型，诚实回答就好。",
      "小小直觉反应，可能藏着大线索。",
      "跟着第一真实反应走。",
      "题卡正在混合工作、压力和关系线索。",
      "节奏不错，轻松但诚实地答。",
    ],
    detailLabels: {
      desire: "核心渴望",
      fear: "核心恐惧",
      strengths: "优势",
      blind: "盲点",
      growth: "成长方向",
      work: "工作与关系",
      stress: "压力状态",
      gift: "隐藏天赋",
      practice: "日常练习",
    },
  },
};

const typeDeepDive = {
  1: {
    en: {
      stress:
        "When pressure rises, Ones can become tense, corrective, and privately resentful because they feel the burden of keeping things right.",
      gift:
        "Their gift is moral clarity with practical follow-through: they can transform vague dissatisfaction into concrete improvement.",
      practice:
        "At the end of each day, name one thing that was imperfect but still genuinely enough.",
    },
    zh: {
      stress: "压力升高时，1号可能变得紧绷、爱纠正，并在心里累积不满，因为他们觉得自己必须让事情保持正确。",
      gift: "他们的隐藏天赋是把道德清晰度变成实际行动，能把模糊的不满意转化成具体改进。",
      practice: "每天结束时，写下一件不完美但已经真正足够好的事。",
    },
  },
  2: {
    en: {
      stress:
        "Under stress, Twos may become intrusive or hurt because unspoken expectations are not being met.",
      gift:
        "Their gift is relational intelligence: they notice emotional needs early and often know how to restore warmth.",
      practice:
        "Before helping, pause and ask yourself: am I giving freely, or trying to secure love?",
    },
    zh: {
      stress: "压力下，2号可能变得过度介入或受伤，因为没有说出口的期待没有被满足。",
      gift: "他们的隐藏天赋是关系智慧：能早早察觉情感需要，并知道如何让关系恢复温度。",
      practice: "帮助别人前先暂停，问自己：我是自由地付出，还是在换取被爱？",
    },
  },
  3: {
    en: {
      stress:
        "When stressed, Threes may speed up, polish the image, and skip inner truth to keep looking capable.",
      gift:
        "Their gift is activation: they can translate ambition into momentum and help people believe progress is possible.",
      practice:
        "Choose one honest feeling each day that does not need to become a performance update.",
    },
    zh: {
      stress: "压力下，3号可能加速、包装形象，并跳过内在真实，好维持有能力的样子。",
      gift: "他们的隐藏天赋是启动能量：能把抱负转化为推进力，也让别人相信进展是可能的。",
      practice: "每天选择一个真实感受，不需要把它变成表现汇报。",
    },
  },
  4: {
    en: {
      stress:
        "Under stress, Fours can intensify feelings, compare themselves with others, and fixate on what is missing.",
      gift:
        "Their gift is emotional truth: they give language, beauty, and dignity to experiences others avoid.",
      practice:
        "Do one ordinary grounding action before analyzing the mood: tidy, walk, drink water, reply, begin.",
    },
    zh: {
      stress: "压力下，4号可能放大情绪、与别人比较，并执着于缺少的东西。",
      gift: "他们的隐藏天赋是情感真实：能为别人回避的经验赋予语言、美感和尊严。",
      practice: "分析情绪前先做一个普通的落地行动：整理、散步、喝水、回复、开始。",
    },
  },
  5: {
    en: {
      stress:
        "When stressed, Fives may withdraw, conserve energy, and gather more information instead of joining the moment.",
      gift:
        "Their gift is spacious insight: they can see patterns clearly because they are not easily swept into noise.",
      practice:
        "Share a small unfinished thought with a trusted person before it feels fully complete.",
    },
    zh: {
      stress: "压力下，5号可能退回去、保存精力，并继续收集信息，而不是进入当下。",
      gift: "他们的隐藏天赋是有空间的洞察：因为不容易被噪音卷走，所以能清楚看见模式。",
      practice: "在想法完全成熟前，先和可信任的人分享一个小小未完成的想法。",
    },
  },
  6: {
    en: {
      stress:
        "Under stress, Sixes may scan for threat, ask repeated questions, or swing between doubt and urgent action.",
      gift:
        "Their gift is protective wisdom: they notice weak points early and help groups prepare before trouble arrives.",
      practice:
        "Write the real risk, the imagined risk, and the next responsible step as three separate lines.",
    },
    zh: {
      stress: "压力下，6号可能不断扫描威胁、反复提问，或在怀疑和紧急行动之间摆荡。",
      gift: "他们的隐藏天赋是保护性的智慧：能早早注意弱点，帮助团队在麻烦来临前准备好。",
      practice: "把真实风险、想象风险、下一步负责任行动分成三行写出来。",
    },
  },
  7: {
    en: {
      stress:
        "When stressed, Sevens may chase options, joke away discomfort, or start new plans to avoid feeling trapped.",
      gift:
        "Their gift is possibility: they bring oxygen, imagination, and renewed energy to stuck situations.",
      practice:
        "Stay with one chosen plan for ten more minutes after the first urge to escape appears.",
    },
    zh: {
      stress: "压力下，7号可能追逐更多选择、用玩笑带过不舒服，或开启新计划来逃离受困感。",
      gift: "他们的隐藏天赋是可能性：能把空气、想象力和新能量带进卡住的局面。",
      practice: "当第一次想逃开时，继续留在已选择的计划里多十分钟。",
    },
  },
  8: {
    en: {
      stress:
        "Under stress, Eights may push harder, test loyalty, and protect vulnerability by moving into control.",
      gift:
        "Their gift is courageous presence: they can face hard truths directly and protect what is vulnerable.",
      practice:
        "Before escalating, name the tender thing underneath the anger, even if only to yourself.",
    },
    zh: {
      stress: "压力下，8号可能更用力推动、测试忠诚，并通过掌控来保护脆弱。",
      gift: "他们的隐藏天赋是勇敢的存在感：能直接面对艰难真相，也保护脆弱的人事物。",
      practice: "升级冲突前，先说出愤怒底下那个柔软的东西，哪怕只是对自己说。",
    },
  },
  9: {
    en: {
      stress:
        "When stressed, Nines may numb out, postpone decisions, and blend into other people's priorities.",
      gift:
        "Their gift is steady inclusion: they can make people feel seen while holding many perspectives at once.",
      practice:
        "Make one small preference visible each day: choose the place, the time, the order, or the answer.",
    },
    zh: {
      stress: "压力下，9号可能麻木、拖延决定，并融入别人的优先事项里。",
      gift: "他们的隐藏天赋是稳定的包容：能同时容纳多种观点，也让人感到被看见。",
      practice: "每天让一个小偏好被看见：选择地点、时间、顺序，或答案。",
    },
  },
};

const managementGuide = {
  1: {
    en: {
      communicate: [
        "Be accurate, prepared, and respectful of standards.",
        "Show the reasoning behind a decision instead of saying 'just trust me.'",
        "Acknowledge what is correct before discussing what needs to change.",
      ],
      manage: [
        "Give clear expectations, quality criteria, and ownership boundaries.",
        "Invite them to improve the process, but protect them from carrying every flaw alone.",
        "Do not reward perfectionism with unlimited extra work.",
      ],
      feedback: "Use specific, fair feedback. Separate the person from the mistake and name the better standard clearly.",
      conflict: "They may sound corrective when they are anxious. Stay calm, focus on the issue, and avoid mocking their concern.",
      self: [
        "Practice saying what you prefer before resentment builds.",
        "Choose progress over perfect control in low-risk situations.",
        "Let rest be part of responsibility, not a reward after everything is fixed.",
      ],
    },
    zh: {
      communicate: ["准确、有准备，并尊重标准。", "说明决定背后的理由，不要只说“相信我就好”。", "先承认做对的部分，再讨论需要改变的地方。"],
      manage: ["给清楚期待、品质标准和责任边界。", "邀请他们改善流程，但不要让他们独自背起所有问题。", "不要用无限加班奖励他们的完美主义。"],
      feedback: "反馈要具体、公平。把人和错误分开，并清楚说明更好的标准。",
      conflict: "他们焦虑时可能听起来爱纠正。保持冷静，聚焦问题，不要嘲笑他们的担心。",
      self: ["在不满累积前先说出偏好。", "在低风险情境练习选择进步，而不是完美掌控。", "把休息当成责任的一部分，不要等一切修好才允许自己休息。"],
    },
  },
  2: {
    en: {
      communicate: [
        "Start with warmth and genuine appreciation.",
        "Ask directly what they need instead of assuming their help means they are fine.",
        "Be kind, but do not be vague; unclear signals make them over-read the relationship.",
      ],
      manage: [
        "Define role boundaries so helping does not become invisible extra labor.",
        "Recognize their relational work publicly and fairly.",
        "Encourage them to prioritize, not only support everyone else.",
      ],
      feedback: "Give feedback with reassurance of the relationship, then be direct about the behavior to adjust.",
      conflict: "They may feel rejected before they feel angry. Keep connection visible while discussing the issue.",
      self: [
        "Ask for what you need without turning it into a hint.",
        "Say no early while you still feel warm.",
        "Let people care for you without needing to earn it first.",
      ],
    },
    zh: {
      communicate: ["先用温暖和真诚欣赏开始。", "直接问他们需要什么，不要以为他们愿意帮忙就代表没事。", "可以温和，但不要含糊；模糊信号会让他们过度解读关系。"],
      manage: ["设定角色边界，避免帮助变成看不见的额外劳动。", "公开且公平地认可他们的关系维护工作。", "鼓励他们排优先级，不只是支持所有人。"],
      feedback: "反馈时先让关系保持安全，然后直接说明需要调整的行为。",
      conflict: "他们可能先感到被拒绝，之后才感到愤怒。讨论问题时要让连接仍然可见。",
      self: ["直接提出自己的需要，不要只暗示。", "在还保持温暖时早点说不。", "允许别人照顾你，不需要先证明自己值得。"],
    },
  },
  3: {
    en: {
      communicate: [
        "Be concise, goal-oriented, and clear about success metrics.",
        "Respect their time; connect discussion to outcomes and priorities.",
        "Include the human truth, not only performance language.",
      ],
      manage: [
        "Give measurable goals and enough autonomy to execute.",
        "Reward honest learning, not only polished wins.",
        "Watch for overwork hidden behind confidence.",
      ],
      feedback: "Frame feedback as a path to higher effectiveness, but include direct honesty about image-management or shortcuts.",
      conflict: "They may move into solution mode too fast. Slow the conversation enough to include feelings and impact.",
      self: [
        "Separate your worth from the scoreboard.",
        "Tell one trusted person what is actually hard, not only what is impressive.",
        "Schedule recovery before burnout forces it.",
      ],
    },
    zh: {
      communicate: ["简洁、目标导向，并说清楚成功指标。", "尊重他们的时间，把讨论连接到结果和优先事项。", "加入真实的人性部分，不要只谈表现语言。"],
      manage: ["给可衡量目标，并给予足够自主执行空间。", "奖励诚实学习，而不只是漂亮成果。", "留意他们用自信隐藏过度工作。"],
      feedback: "把反馈表达成提升效能的路径，同时诚实指出形象管理或捷径问题。",
      conflict: "他们可能太快进入解决模式。放慢对话，让感受和影响也被看见。",
      self: ["把自我价值和成绩板分开。", "告诉一个可信任的人真正困难的部分，而不只是亮眼成果。", "在倦怠逼你停下前，先安排恢复。"],
    },
  },
  4: {
    en: {
      communicate: [
        "Be real and specific; generic praise feels thin.",
        "Make space for emotional nuance without letting the meeting lose direction.",
        "Do not flatten their individuality when asking for alignment.",
      ],
      manage: [
        "Give creative ownership with clear deliverables.",
        "Use their sensitivity to improve customer, brand, or team experience.",
        "Balance emotional processing with deadlines and next actions.",
      ],
      feedback: "Name the value of their originality, then describe the concrete change needed.",
      conflict: "They may withdraw when misunderstood. Reflect the feeling first, then return to facts and commitments.",
      self: [
        "Act on ordinary next steps even when the mood is not perfect.",
        "Check whether envy is pointing to a real desire you can pursue.",
        "Let belonging be simple; you do not need to be exceptional to be included.",
      ],
    },
    zh: {
      communicate: ["真实且具体；泛泛称赞会显得很薄。", "给情绪细节空间，但不要让会议失去方向。", "要求一致时，不要压扁他们的独特性。"],
      manage: ["给创意所有权，同时设定清楚交付物。", "运用他们的敏感度改善客户、品牌或团队体验。", "在情绪处理、期限和下一步行动之间取得平衡。"],
      feedback: "先说出他们原创性的价值，再描述需要改变的具体部分。",
      conflict: "他们觉得不被理解时可能退缩。先反映感受，再回到事实和承诺。",
      self: ["即使心情不完美，也先做普通的下一步。", "检查羡慕是否指向一个你可以追求的真实渴望。", "让归属感简单一点；你不需要很特别才值得被包含。"],
    },
  },
  5: {
    en: {
      communicate: [
        "Send context in advance and give time to think.",
        "Be precise with questions; avoid emotional pressure as the main argument.",
        "Respect privacy and energy limits.",
      ],
      manage: [
        "Protect focus time and reduce unnecessary meetings.",
        "Ask for visible milestones so research turns into usable output.",
        "Invite their insight early, especially for complex systems or risks.",
      ],
      feedback: "Use calm, evidence-based feedback. Give them space to process before expecting a full response.",
      conflict: "They may detach or go quiet. Do not chase aggressively; agree on a return time and decision point.",
      self: [
        "Share before the idea is complete enough to be perfect.",
        "Use action as data, not as a threat to competence.",
        "Let trusted people know your bandwidth instead of disappearing.",
      ],
    },
    zh: {
      communicate: ["提前发送背景，并给他们思考时间。", "问题要精准；不要把情绪压力当成主要论点。", "尊重隐私和精力限制。"],
      manage: ["保护专注时间，减少不必要会议。", "要求可见里程碑，让研究转化成可用成果。", "在复杂系统或风险议题上，早点邀请他们提供洞察。"],
      feedback: "用冷静、有证据的反馈。给他们处理空间，不要马上要求完整回应。",
      conflict: "他们可能抽离或沉默。不要猛烈追问；约定回来的时间和决策点。",
      self: ["在想法还没完美前先分享。", "把行动当成数据，而不是对能力的威胁。", "告诉可信任的人你的精力状态，而不是直接消失。"],
    },
  },
  6: {
    en: {
      communicate: [
        "Be transparent about risks, decisions, and what is still unknown.",
        "Do not dismiss questions as negativity; they are often scanning for weak points.",
        "Follow through consistently, because trust is built by repeated reliability.",
      ],
      manage: [
        "Give clear plans, backup options, and decision owners.",
        "Use their risk awareness in planning and quality checks.",
        "Avoid sudden vague changes without explaining why.",
      ],
      feedback: "Be steady, specific, and non-threatening. Clarify what is secure and what needs adjustment.",
      conflict: "They may test certainty or authority. Stay consistent and answer the real concern underneath the question.",
      self: [
        "Write down evidence for and against the fear before asking for reassurance.",
        "Take one responsible step before the whole plan feels safe.",
        "Practice trusting your own judgment in small decisions.",
      ],
    },
    zh: {
      communicate: ["对风险、决定和未知部分保持透明。", "不要把提问当成负面；他们常是在扫描薄弱点。", "稳定兑现承诺，因为信任来自重复可靠。"],
      manage: ["给清楚计划、备用方案和决策负责人。", "把他们的风险意识用于计划和品质检查。", "避免突然且含糊的改变，除非说明原因。"],
      feedback: "稳定、具体、不带威胁。说明哪些是安全的，哪些需要调整。",
      conflict: "他们可能测试确定性或权威。保持一致，并回答问题底下真正的担心。",
      self: ["在寻求保证前，写下支持和反驳恐惧的证据。", "在整个计划都安全前，先做一个负责任的小步骤。", "从小决定开始练习信任自己的判断。"],
    },
  },
  7: {
    en: {
      communicate: [
        "Keep energy forward-moving, but name constraints clearly.",
        "Offer options with a decision deadline.",
        "Use possibility language, then land it in next actions.",
      ],
      manage: [
        "Give room for ideas, then require prioritization.",
        "Pair exploration with checkpoints and finish criteria.",
        "Do not trap them with unnecessary bureaucracy, but do hold commitments.",
      ],
      feedback: "Frame feedback around focus, follow-through, and impact, not around removing their enthusiasm.",
      conflict: "They may joke, pivot, or reframe too quickly. Bring them gently back to the uncomfortable point.",
      self: [
        "Finish one meaningful commitment before opening three new ones.",
        "Stay present with discomfort long enough to learn from it.",
        "Use freedom to choose depth, not only more options.",
      ],
    },
    zh: {
      communicate: ["保持向前的能量，但清楚说明限制。", "提供选项，同时设定决定期限。", "先用可能性语言打开，再落到下一步行动。"],
      manage: ["给点子空间，然后要求排优先级。", "把探索和检查点、完成标准配对。", "不要用不必要官僚流程困住他们，但要守住承诺。"],
      feedback: "反馈聚焦在专注、完成和影响，而不是压掉他们的热情。",
      conflict: "他们可能开玩笑、转移或太快重新诠释。温和地把他们带回那个不舒服的重点。",
      self: ["在开启三个新选择前，先完成一个有意义承诺。", "在不舒服中多停留一点，好从中学习。", "用自由选择深度，而不只是选择更多选项。"],
    },
  },
  8: {
    en: {
      communicate: [
        "Be brief, direct, and straight to the point.",
        "Respect honesty; if you do not know, say you do not know.",
        "Stay engaged even when they are intense or angry.",
      ],
      manage: [
        "Give autonomy, clear authority, and real responsibility.",
        "Bring problems with proposed solutions, not vague complaints.",
        "Do not control them through politics; be transparent about power and decisions.",
      ],
      feedback: "Be courageous and constructive. Say the truth clearly, then move toward solutions.",
      conflict: "Their anger is often direct and passes quickly. Do not collapse, manipulate, or disappear; hold your ground respectfully.",
      self: [
        "Ask before pushing harder; intensity is not always clarity.",
        "Let vulnerability be information, not weakness.",
        "Use strength to protect collaboration, not only to win.",
      ],
    },
    zh: {
      communicate: ["简短、直接、切重点。", "尊重诚实；不知道就说不知道。", "即使他们强烈或生气，也要留在现场并参与。"],
      manage: ["给自主权、清楚权限和真实责任。", "带着建议方案提出问题，不要只带模糊抱怨。", "不要用政治手段控制他们；权力和决定要透明。"],
      feedback: "要有勇气且建设性。清楚说真话，然后走向解决方案。",
      conflict: "他们的愤怒通常直接，也可能很快过去。不要崩溃、操控或消失；尊重地站稳。",
      self: ["在更用力推动前先问一问；强度不等于清晰。", "把脆弱当成信息，而不是软弱。", "用力量保护合作，而不只是赢。"],
    },
  },
  9: {
    en: {
      communicate: [
        "Create a calm tone and do not rush them into intensity.",
        "Ask directly for their preference; silence does not mean agreement.",
        "Summarize decisions clearly so harmony does not hide ambiguity.",
      ],
      manage: [
        "Invite their voice early, especially before stronger personalities dominate.",
        "Break work into clear next steps and timelines.",
        "Notice quiet resistance or delay as useful information.",
      ],
      feedback: "Be gentle but clear. Explain why the issue matters and what concrete action is needed.",
      conflict: "They may avoid tension to keep peace. Make conflict safe, specific, and connected to preserving the relationship.",
      self: [
        "State one preference before adapting to everyone else.",
        "Start before you feel fully settled.",
        "Treat honest disagreement as a way to protect connection, not destroy it.",
      ],
    },
    zh: {
      communicate: ["创造平稳语气，不要逼他们立刻进入强烈状态。", "直接问他们的偏好；沉默不等于同意。", "清楚总结决定，避免和谐掩盖模糊。"],
      manage: ["早点邀请他们发声，尤其是在强势人格主导之前。", "把工作拆成清楚下一步和时间线。", "把安静的抗拒或拖延当成有用信息。"],
      feedback: "温和但清楚。说明为什么这个问题重要，以及需要什么具体行动。",
      conflict: "他们可能为了和平而回避紧张。让冲突安全、具体，并连接到保护关系。",
      self: ["在适应所有人之前，先说出一个自己的偏好。", "在完全安定前先开始。", "把诚实分歧当成保护连接的方式，而不是破坏连接。"],
    },
  },
};

const careerGuide = {
  1: {
    en: {
      career: [
        "Best fit: roles where standards, accuracy, compliance, quality, or improvement matter.",
        "They need ethical leadership, clear expectations, and authority to fix broken processes.",
        "Watch out for burnout in messy workplaces where nobody owns mistakes.",
      ],
      jobs: ["Operations manager", "Quality assurance lead", "Compliance officer", "Editor", "Auditor", "Process improvement consultant"],
    },
    zh: {
      career: ["最适合重视标准、准确性、合规、品质或改善的岗位。", "他们需要有伦理感的领导、清楚期待，以及修复坏流程的权限。", "如果环境混乱且没人承担错误，他们容易耗竭。"],
      jobs: ["运营经理", "品质管理主管", "合规专员", "编辑", "审计", "流程改善顾问"],
    },
  },
  2: {
    en: {
      career: [
        "Best fit: people-facing roles where care, service, relationship-building, and trust matter.",
        "They thrive when emotional labor is recognized instead of taken for granted.",
        "Avoid roles that constantly reward overgiving without boundaries.",
      ],
      jobs: ["Customer success manager", "HR partner", "Counsellor", "Nurse", "Community manager", "Client relationship manager"],
    },
    zh: {
      career: ["最适合需要关怀、服务、建立关系和信任的人际岗位。", "当情感劳动被看见，而不是被理所当然消耗时，他们最能发挥。", "避免长期奖励过度付出、没有边界的岗位。"],
      jobs: ["客户成功经理", "人力资源伙伴", "咨询辅导员", "护理人员", "社群经理", "客户关系经理"],
    },
  },
  3: {
    en: {
      career: [
        "Best fit: goal-driven roles with measurable outcomes, visibility, and room to grow.",
        "They need ambitious but meaningful targets, not empty status games.",
        "They should choose work where authenticity and long-term value matter as much as speed.",
      ],
      jobs: ["Sales leader", "Founder", "Marketing strategist", "Product manager", "Business development manager", "Performance coach"],
    },
    zh: {
      career: ["最适合目标明确、有可衡量成果、有曝光和成长空间的岗位。", "他们需要有野心但有意义的目标，而不是空洞的地位游戏。", "应该选择重视真实和长期价值，而不只是速度的工作。"],
      jobs: ["销售主管", "创业者", "市场策略", "产品经理", "业务发展经理", "绩效教练"],
    },
  },
  4: {
    en: {
      career: [
        "Best fit: roles that use originality, emotional insight, aesthetics, storytelling, or brand meaning.",
        "They need enough creative ownership plus clear deadlines and decision rules.",
        "They should avoid environments that flatten identity or treat nuance as inefficiency.",
      ],
      jobs: ["Designer", "Writer", "Brand strategist", "Therapist", "Creative director", "UX researcher"],
    },
    zh: {
      career: ["最适合运用原创性、情感洞察、审美、叙事或品牌意义的岗位。", "他们需要足够创意所有权，也需要清楚期限和决策规则。", "应避免压扁个性、把细腻视为低效率的环境。"],
      jobs: ["设计师", "写作者", "品牌策略", "治疗师", "创意总监", "用户体验研究员"],
    },
  },
  5: {
    en: {
      career: [
        "Best fit: knowledge-heavy roles requiring research, systems thinking, privacy, and independent focus.",
        "They need protected deep-work time and clear requests, not constant interruptions.",
        "They should choose roles that require sharing insight, so expertise becomes useful impact.",
      ],
      jobs: ["Data analyst", "Software engineer", "Researcher", "Cybersecurity analyst", "Strategist", "Technical architect"],
    },
    zh: {
      career: ["最适合重知识、研究、系统思考、隐私和独立专注的岗位。", "他们需要受保护的深度工作时间和清楚需求，而不是不断被打断。", "应选择需要分享洞察的岗位，让专业变成有用影响。"],
      jobs: ["数据分析师", "软件工程师", "研究员", "网络安全分析师", "策略顾问", "技术架构师"],
    },
  },
  6: {
    en: {
      career: [
        "Best fit: roles involving risk, reliability, planning, troubleshooting, safety, or team protection.",
        "They need transparent leadership and dependable systems.",
        "They should avoid chaotic cultures where decisions change without explanation.",
      ],
      jobs: ["Project manager", "Risk analyst", "Operations coordinator", "Security specialist", "Legal assistant", "Emergency planner"],
    },
    zh: {
      career: ["最适合涉及风险、可靠性、计划、排查、安全或团队保护的岗位。", "他们需要透明领导和可靠系统。", "应避免决策无解释频繁改变的混乱文化。"],
      jobs: ["项目经理", "风险分析师", "运营协调", "安全专员", "法律助理", "应急规划"],
    },
  },
  7: {
    en: {
      career: [
        "Best fit: roles with variety, ideas, fast learning, networking, and possibility creation.",
        "They need freedom plus clear finish lines, otherwise energy scatters.",
        "They should choose work where optimism is useful but follow-through is measured.",
      ],
      jobs: ["Entrepreneur", "Innovation lead", "Event producer", "Travel or lifestyle marketer", "Creative strategist", "Partnerships manager"],
    },
    zh: {
      career: ["最适合有变化、点子、快速学习、人脉和创造可能性的岗位。", "他们需要自由，也需要清楚完成线，否则能量会分散。", "应选择乐观有用、但也衡量完成度的工作。"],
      jobs: ["创业者", "创新负责人", "活动制作", "旅游或生活方式营销", "创意策略", "合作伙伴经理"],
    },
  },
  8: {
    en: {
      career: [
        "Best fit: roles with authority, negotiation, crisis handling, protection, and decisive ownership.",
        "They need autonomy, direct communication, and real stakes.",
        "They should avoid highly political environments where power is hidden and honesty is punished.",
      ],
      jobs: ["General manager", "Founder", "Negotiator", "Lawyer", "Crisis manager", "Sales director"],
    },
    zh: {
      career: ["最适合有权责、谈判、危机处理、保护他人和决断所有权的岗位。", "他们需要自主、直接沟通和真实利害关系。", "应避免权力隐藏、诚实被惩罚的高度政治环境。"],
      jobs: ["总经理", "创业者", "谈判代表", "律师", "危机管理", "销售总监"],
    },
  },
  9: {
    en: {
      career: [
        "Best fit: roles requiring mediation, steady support, coordination, patience, and inclusive leadership.",
        "They need calm structure, clear priorities, and managers who actively invite their voice.",
        "They should avoid roles where conflict is constant but never resolved.",
      ],
      jobs: ["Mediator", "People operations", "Account manager", "Teacher", "Wellness coach", "Program coordinator"],
    },
    zh: {
      career: ["最适合需要调解、稳定支持、协调、耐心和包容式领导的岗位。", "他们需要平稳结构、清楚优先级，以及会主动邀请他们发声的管理者。", "应避免冲突不断但从不解决的岗位。"],
      jobs: ["调解员", "人事运营", "客户经理", "教师", "身心健康教练", "项目协调员"],
    },
  },
};

const pizzaDimensions = {
  en: [
    { key: "structure", label: "Structure", note: "standards, safety, readiness", types: [1, 6], color: "#1f5f52" },
    { key: "connection", label: "Connection", note: "care, belonging, harmony", types: [2, 9], color: "#d85c45" },
    { key: "drive", label: "Drive", note: "achievement, power, action", types: [3, 8], color: "#d7a642" },
    { key: "depth", label: "Depth", note: "identity, insight, meaning", types: [4, 5], color: "#315c8c" },
    { key: "freedom", label: "Freedom", note: "options, novelty, expansion", types: [7], color: "#7a5ca8" },
  ],
  zh: [
    { key: "structure", label: "结构", note: "标准、安全、准备", types: [1, 6], color: "#1f5f52" },
    { key: "connection", label: "连接", note: "关怀、归属、和谐", types: [2, 9], color: "#d85c45" },
    { key: "drive", label: "驱动力", note: "成就、力量、行动", types: [3, 8], color: "#d7a642" },
    { key: "depth", label: "深度", note: "身份、洞察、意义", types: [4, 5], color: "#315c8c" },
    { key: "freedom", label: "自由", note: "选择、新鲜、扩展", types: [7], color: "#7a5ca8" },
  ],
};

const typeInfo = {
  1: {
    en: {
      name: "Type 1 - The Reformer",
      short: "Principled, responsible, improvement-oriented, and guided by a strong inner standard.",
      desire: "To be good, ethical, accurate, and aligned with what feels right.",
      fear: "Being corrupt, careless, wrong, or morally flawed.",
      strengths: "Reliable judgment, discipline, fairness, quality control, and willingness to improve systems.",
      blind: "Harsh self-criticism, resentment, perfectionism, and difficulty relaxing when things are imperfect.",
      growth: "Practice self-compassion, make room for good-enough progress, and notice joy before everything is fixed.",
      work: "They bring standards and integrity. They thrive when expectations are clear and feedback is respectful.",
    },
    zh: {
      name: "1号 - 改革者",
      short: "有原则、负责、重视改进，并由强烈的内在标准引导。",
      desire: "希望自己是好的、正直的、准确的，并符合内心认为正确的标准。",
      fear: "害怕自己堕落、粗心、犯错，或在道德上有缺陷。",
      strengths: "判断可靠、自律、公平、注重品质，也愿意改善系统。",
      blind: "容易自我批判、压抑不满、追求完美，在事情不够好时难以放松。",
      growth: "练习善待自己，允许足够好的进步，在一切变完美前也看见快乐。",
      work: "他们带来标准和诚信。清楚的期待与尊重式反馈能让他们发挥最好。",
    },
  },
  2: {
    en: {
      name: "Type 2 - The Helper",
      short: "Warm, generous, relationship-focused, and highly tuned to what others need.",
      desire: "To be loved, needed, appreciated, and emotionally connected.",
      fear: "Being unwanted, replaceable, or loved only when useful.",
      strengths: "Empathy, encouragement, generosity, social awareness, and practical care.",
      blind: "Neglecting personal needs, indirect expectations, people-pleasing, and burnout from overgiving.",
      growth: "Name your own needs directly, receive care without earning it, and help without losing yourself.",
      work: "They build trust and morale. They do best where care is valued but boundaries are respected.",
    },
    zh: {
      name: "2号 - 助人者",
      short: "温暖、慷慨、重视关系，并很容易察觉他人的需要。",
      desire: "希望被爱、被需要、被欣赏，并与人有情感连接。",
      fear: "害怕不被需要、可有可无，或只有在有用时才被爱。",
      strengths: "同理心、鼓励他人、慷慨、社交敏锐，以及实际照顾能力。",
      blind: "忽略自己的需要、期待别人自动理解、讨好他人，以及过度付出导致疲惫。",
      growth: "直接表达自己的需要，允许自己被照顾，在帮助别人时也保留自己。",
      work: "他们建立信任和团队温度。在重视关怀但也尊重界限的环境中表现最好。",
    },
  },
  3: {
    en: {
      name: "Type 3 - The Achiever",
      short: "Adaptive, driven, image-aware, and energized by meaningful goals.",
      desire: "To be valuable, successful, admired, and effective.",
      fear: "Being worthless, failing publicly, or having no achievement to show.",
      strengths: "Focus, execution, confidence, adaptability, and ability to motivate momentum.",
      blind: "Overidentifying with performance, emotional avoidance, comparison, and impatience with slower rhythms.",
      growth: "Separate worth from output, slow down for honest feeling, and let authenticity matter as much as winning.",
      work: "They move projects forward quickly. They need goals that are meaningful, not only impressive.",
    },
    zh: {
      name: "3号 - 成就者",
      short: "适应力强、有冲劲、重视形象，并从有意义的目标中获得能量。",
      desire: "希望有价值、成功、被欣赏，并且有效率。",
      fear: "害怕没有价值、公开失败，或没有成就可以证明自己。",
      strengths: "专注、执行力、自信、适应力，以及带动进展的能力。",
      blind: "把自我价值和表现绑得太紧、逃避情绪、与人比较，对慢节奏缺乏耐心。",
      growth: "把价值感和产出分开，放慢速度感受真实情绪，让真诚和成功同样重要。",
      work: "他们能快速推进项目。他们需要的不只是亮眼目标，也要有真正意义。",
    },
  },
  4: {
    en: {
      name: "Type 4 - The Individualist",
      short: "Expressive, sensitive, identity-seeking, and drawn to emotional depth.",
      desire: "To be authentic, significant, and true to a unique inner self.",
      fear: "Having no identity, being ordinary, or being emotionally unseen.",
      strengths: "Creativity, emotional honesty, nuance, empathy for pain, and aesthetic sensitivity.",
      blind: "Envy, mood absorption, idealizing what is missing, and withdrawing when misunderstood.",
      growth: "Stay present with ordinary life, act before the perfect feeling arrives, and let belonging be simple.",
      work: "They bring originality and depth. They thrive where expression is valued and feedback is not flattening.",
    },
    zh: {
      name: "4号 - 自我型",
      short: "表达力强、敏感、寻找身份认同，并被情感深度吸引。",
      desire: "希望真实、有独特意义，并忠于内在的自己。",
      fear: "害怕没有身份、太普通，或情感上不被看见。",
      strengths: "创造力、情感诚实、细腻、能理解痛苦，以及审美敏感度。",
      blind: "容易羡慕、沉浸情绪、理想化缺失的东西，在不被理解时退缩。",
      growth: "留在平凡生活中，在完美感觉到来前先行动，也允许归属感变得简单。",
      work: "他们带来原创性和深度。在重视表达、反馈不压扁个性的环境中最能发挥。",
    },
  },
  5: {
    en: {
      name: "Type 5 - The Investigator",
      short: "Observant, private, knowledge-seeking, and careful with energy.",
      desire: "To be capable, informed, independent, and prepared.",
      fear: "Being helpless, invaded, depleted, or incompetent.",
      strengths: "Analysis, concentration, objectivity, conceptual depth, and calm problem solving.",
      blind: "Withholding, isolation, overpreparing, emotional distance, and delaying action until fully certain.",
      growth: "Share before you feel completely ready, let trusted people closer, and treat action as another way to learn.",
      work: "They excel at research and strategy. They need protected focus time and clear boundaries.",
    },
    zh: {
      name: "5号 - 探索者",
      short: "观察力强、重视私人空间、追求知识，并谨慎分配精力。",
      desire: "希望自己有能力、有知识、独立，并做好准备。",
      fear: "害怕无助、被侵入、被耗尽，或显得无能。",
      strengths: "分析力、专注、客观、概念深度，以及冷静解决问题。",
      blind: "保留太多、孤立、过度准备、情感距离，以及等到完全确定才行动。",
      growth: "在还没完全准备好时也分享，让信任的人靠近，把行动也当成学习方式。",
      work: "他们擅长研究和策略。需要受保护的专注时间和清楚边界。",
    },
  },
  6: {
    en: {
      name: "Type 6 - The Loyalist",
      short: "Committed, alert, responsible, and focused on safety, trust, and readiness.",
      desire: "To feel secure, supported, prepared, and able to trust.",
      fear: "Being without guidance, betrayed, unsafe, or unprepared for danger.",
      strengths: "Loyalty, risk awareness, teamwork, troubleshooting, and steady commitment.",
      blind: "Worst-case thinking, suspicion, reassurance loops, and difficulty trusting inner authority.",
      growth: "Build trust in your own judgment, distinguish real risk from imagined risk, and take one steady step.",
      work: "They are excellent planners and team guardians. Consistency and transparency help them relax into confidence.",
    },
    zh: {
      name: "6号 - 忠诚者",
      short: "忠诚、警觉、负责，重视安全、信任与准备。",
      desire: "希望感到安全、被支持、有准备，并能够信任。",
      fear: "害怕没有指引、被背叛、不安全，或面对危险时没有准备。",
      strengths: "忠诚、风险意识、团队合作、排查问题，以及稳定承诺。",
      blind: "容易设想最坏情况、怀疑、反复寻求保证，并难以信任自己的判断。",
      growth: "建立对自己判断的信任，区分真实风险和想象风险，然后稳定前进一步。",
      work: "他们是优秀的计划者和团队守护者。稳定与透明能帮助他们放松并更有信心。",
    },
  },
  7: {
    en: {
      name: "Type 7 - The Enthusiast",
      short: "Curious, optimistic, quick-moving, and motivated by freedom and possibility.",
      desire: "To be satisfied, free, stimulated, and open to options.",
      fear: "Being trapped, deprived, bored, or stuck in pain.",
      strengths: "Vision, energy, humor, reframing, idea generation, and resilience.",
      blind: "Avoiding limits, scattered focus, impatience with discomfort, and leaving hard feelings unfinished.",
      growth: "Stay with one meaningful thing, let discomfort teach you, and choose depth over endless options.",
      work: "They spark innovation and morale. They need room to explore plus gentle accountability to finish.",
    },
    zh: {
      name: "7号 - 享乐者",
      short: "好奇、乐观、行动快，并被自由和可能性驱动。",
      desire: "希望满足、自由、被新鲜感激发，并保留选择。",
      fear: "害怕被困住、被剥夺、无聊，或停留在痛苦中。",
      strengths: "愿景、能量、幽默、重新诠释、产生点子，以及复原力。",
      blind: "逃避限制、注意力分散、难以忍受不舒服，容易把困难感受搁置。",
      growth: "留在一件有意义的事上，让不舒服成为老师，选择深度而不是无限选项。",
      work: "他们点燃创新和士气。需要探索空间，也需要温和的责任感来完成事情。",
    },
  },
  8: {
    en: {
      name: "Type 8 - The Challenger",
      short: "Direct, protective, intense, and motivated by autonomy and truth.",
      desire: "To be strong, self-directed, real, and in control of their own life.",
      fear: "Being controlled, betrayed, weak, or at the mercy of others.",
      strengths: "Courage, decisiveness, protection, strategic force, and willingness to face conflict.",
      blind: "Intensity that overwhelms others, vulnerability avoidance, impatience, and all-or-nothing reactions.",
      growth: "Let tenderness count as strength, pause before pushing, and invite collaboration without losing power.",
      work: "They handle pressure and defend people. They respect honesty, competence, and clear ownership.",
    },
    zh: {
      name: "8号 - 挑战者",
      short: "直接、有保护欲、强烈，并被自主和真实驱动。",
      desire: "希望强大、自主、真实，并掌控自己的人生。",
      fear: "害怕被控制、被背叛、显得软弱，或任人摆布。",
      strengths: "勇气、决断、保护他人、策略性力量，以及面对冲突的意愿。",
      blind: "强度可能压迫别人、逃避脆弱、缺乏耐心，以及非黑即白的反应。",
      growth: "把温柔也视为力量，推动前先暂停，在不失去力量的情况下邀请合作。",
      work: "他们能承受压力并保护他人。尊重诚实、能力和清楚的责任归属。",
    },
  },
  9: {
    en: {
      name: "Type 9 - The Peacemaker",
      short: "Calm, receptive, steady, and motivated by harmony and inner ease.",
      desire: "To feel peaceful, connected, stable, and undisturbed.",
      fear: "Loss, separation, conflict, or being forced into unwanted intensity.",
      strengths: "Patience, mediation, steadiness, inclusion, and ability to see many perspectives.",
      blind: "Self-forgetting, procrastination, conflict avoidance, and merging with others' priorities.",
      growth: "Let your preferences matter, act before everything feels settled, and use honest conflict to protect connection.",
      work: "They create calm and cohesion. They flourish when their voice is actively invited and decisions stay clear.",
    },
    zh: {
      name: "9号 - 和平者",
      short: "平静、接纳、稳定，并被和谐与内在安宁驱动。",
      desire: "希望平和、有连接、稳定，并不被打扰。",
      fear: "害怕失去、分离、冲突，或被迫进入不想要的强烈状态。",
      strengths: "耐心、调解、稳定、包容，以及看见多种观点的能力。",
      blind: "忘记自己、拖延、逃避冲突，容易与他人的优先事项合并。",
      growth: "让自己的偏好也重要，在一切完全安定前先行动，用诚实冲突保护连接。",
      work: "他们创造平静和凝聚力。当他们的声音被主动邀请、决策保持清楚时最能发挥。",
    },
  },
};

const prompts = {
  1: [
    ["I notice errors quickly and feel responsible for correcting them.", "我很快注意到错误，并觉得自己有责任修正。"],
    ["I feel uneasy when rules are ignored or standards slip.", "当规则被忽视或标准下降时，我会感到不安。"],
    ["I often compare what is happening with what should be happening.", "我常把正在发生的事和应该发生的事做比较。"],
    ["I push myself to do the right thing even when no one is watching.", "即使没人看见，我也会要求自己做正确的事。"],
    ["I can be hard on myself when I make a mistake.", "当我犯错时，我可能会对自己很严厉。"],
    ["I prefer clear procedures because they reduce careless outcomes.", "我喜欢清楚的流程，因为这样能减少粗心造成的结果。"],
    ["I feel frustrated when people do not take responsibilities seriously.", "当别人不认真看待责任时，我会感到挫折。"],
    ["I often see how something could be improved.", "我常看见事情可以如何改进。"],
    ["I hold back anger because I want to stay composed.", "我会压住愤怒，因为我想保持端正冷静。"],
    ["I respect people who are principled and consistent.", "我尊重有原则且前后一致的人。"],
    ["I feel proud when I make something more accurate or fair.", "当我让事情更准确或更公平时，我会感到自豪。"],
    ["I worry that relaxing too much will make me careless.", "我担心太放松会让我变得粗心。"],
    ["I often know the correct way to handle a situation.", "我通常知道处理事情的正确方式。"],
    ["I feel guilty when I do not meet my own expectations.", "当我达不到自己的期待时，我会感到内疚。"],
    ["I prefer honest criticism over vague praise.", "比起模糊的赞美，我更喜欢诚实的批评。"],
    ["I want my choices to reflect integrity.", "我希望自己的选择能体现正直。"],
    ["I notice when small shortcuts create bigger problems later.", "我会注意到小捷径之后可能造成更大的问题。"],
  ],
  2: [
    ["I naturally notice what other people need before they ask.", "我会自然地在别人开口前注意到他们需要什么。"],
    ["I feel most connected when I am helping someone.", "当我帮助别人时，我最能感到连接。"],
    ["I sometimes give more than I planned because I do not want to disappoint people.", "我有时会付出超过原本计划，因为不想让别人失望。"],
    ["I remember personal details that make people feel cared for.", "我会记得让别人感到被关心的个人细节。"],
    ["I feel hurt when my efforts are not appreciated.", "当我的付出没有被欣赏时，我会受伤。"],
    ["I find it easier to support others than to ask for support.", "比起请求支持，我更容易支持别人。"],
    ["I sense emotional shifts in a room quickly.", "我能很快察觉一个空间里的情绪变化。"],
    ["I want people close to me to know I am there for them.", "我希望亲近的人知道我会陪在他们身边。"],
    ["I sometimes struggle to know what I want apart from others' needs.", "有时除了别人的需要，我不太清楚自己真正想要什么。"],
    ["I feel energized when someone depends on me.", "当有人依靠我时，我会感到有能量。"],
    ["I try to make myself easy to love.", "我会努力让自己更容易被喜欢。"],
    ["I may hint at my needs instead of stating them directly.", "我可能会暗示自己的需要，而不是直接说出来。"],
    ["I can tell when someone needs encouragement.", "我能看出别人什么时候需要鼓励。"],
    ["I often step in to make people feel welcome.", "我常主动让别人感到被欢迎。"],
    ["I worry that saying no will damage the relationship.", "我担心说不之后会伤害关系。"],
    ["I feel valued when people come to me for comfort.", "当别人来找我寻求安慰时，我会感到有价值。"],
    ["I sometimes ignore my limits until I feel exhausted.", "我有时会忽略自己的界限，直到感到疲惫。"],
  ],
  3: [
    ["I quickly identify what success looks like in a situation.", "我能很快看出一个情境中的成功标准是什么。"],
    ["I feel motivated by goals, progress, and visible results.", "目标、进展和可见成果会激励我。"],
    ["I adapt my presentation to fit the audience or environment.", "我会调整自己的表现方式以适应对象或环境。"],
    ["I dislike feeling inefficient or unproductive.", "我不喜欢低效率或没有产出的感觉。"],
    ["I often measure myself by what I have achieved.", "我常用自己的成就来衡量自己。"],
    ["I can stay focused when there is a clear target.", "当目标清楚时，我能保持专注。"],
    ["I want others to see me as capable.", "我希望别人认为我有能力。"],
    ["I sometimes move past feelings so I can keep performing.", "我有时会越过情绪，好继续保持表现。"],
    ["I notice what gets recognition and adjust accordingly.", "我会注意什么会被认可，并相应调整。"],
    ["I become restless when progress is too slow.", "当进展太慢时，我会变得坐立不安。"],
    ["I like turning plans into measurable outcomes.", "我喜欢把计划转化为可衡量的成果。"],
    ["I feel embarrassed when I fail in front of others.", "当我在别人面前失败时，我会觉得难堪。"],
    ["I can motivate people by making the goal feel achievable.", "我能让目标感觉可达，从而激励别人。"],
    ["I sometimes avoid tasks where I might look incompetent.", "我有时会避开可能让我显得无能的任务。"],
    ["I value excellence and momentum.", "我重视卓越和推进感。"],
    ["I find it hard to rest without feeling behind.", "我很难休息而不觉得自己落后了。"],
    ["I want my life to show meaningful accomplishment.", "我希望自己的人生能体现有意义的成就。"],
  ],
  4: [
    ["I often search for what feels authentic and personally meaningful.", "我常寻找真实且对我个人有意义的东西。"],
    ["I notice subtle emotional tones that others may miss.", "我会注意到别人可能忽略的细微情绪。"],
    ["I sometimes feel different from the people around me.", "我有时觉得自己和周围的人不一样。"],
    ["I am drawn to beauty, symbolism, and emotional depth.", "我会被美感、象征意义和情感深度吸引。"],
    ["I can feel longing for something that seems missing.", "我可能会渴望某种似乎缺失的东西。"],
    ["I want my identity and choices to feel uniquely mine.", "我希望自己的身份和选择都是真正属于我的。"],
    ["I may withdraw when I feel misunderstood.", "当我觉得不被理解时，我可能会退缩。"],
    ["I value conversations that go beneath the surface.", "我重视能深入表面之下的对话。"],
    ["I can become absorbed in a mood or memory.", "我可能会沉浸在某种情绪或回忆中。"],
    ["I dislike being treated as ordinary or interchangeable.", "我不喜欢被当成普通或可替换的人。"],
    ["I express myself through style, taste, or creative choices.", "我会透过风格、品味或创意选择表达自己。"],
    ["I notice what is missing even when things are going well.", "即使事情顺利，我也会注意到缺少了什么。"],
    ["I feel alive when I can be emotionally honest.", "当我能情感真实时，我会感到鲜活。"],
    ["I sometimes compare my inner life to others' outer life.", "我有时会把自己的内在生活和别人的外在生活比较。"],
    ["I need space to process my feelings fully.", "我需要空间完整处理自己的感受。"],
    ["I am moved by art, music, stories, or atmosphere.", "艺术、音乐、故事或氛围很容易触动我。"],
    ["I want to be seen for who I truly am.", "我希望别人看见真实的我。"],
  ],
  5: [
    ["I need time alone to recharge and think clearly.", "我需要独处时间来恢复精力和清楚思考。"],
    ["I prefer to understand something before getting involved.", "在参与之前，我喜欢先理解事情。"],
    ["I protect my time, energy, and privacy carefully.", "我会谨慎保护自己的时间、精力和隐私。"],
    ["I often observe before I speak.", "我通常先观察再发言。"],
    ["I feel safer when I have enough information.", "当我有足够信息时，我会更有安全感。"],
    ["I can detach emotionally to analyze a problem.", "我能从情绪中抽离，去分析问题。"],
    ["I dislike being pressured to respond immediately.", "我不喜欢被逼着立刻回应。"],
    ["I enjoy becoming deeply knowledgeable about a topic.", "我享受深入掌握某个主题。"],
    ["I sometimes conserve energy by limiting social contact.", "我有时会减少社交接触来保存精力。"],
    ["I would rather be competent than popular.", "比起受欢迎，我更希望自己有能力。"],
    ["I often prepare privately before showing my work.", "我常在私下准备好之后才展示成果。"],
    ["I can feel invaded when people demand too much access to me.", "当别人要求太多接触时，我会觉得被侵入。"],
    ["I trust logic more than emotional pressure.", "比起情绪压力，我更信任逻辑。"],
    ["I may delay action until I feel fully ready.", "我可能会等到完全准备好才行动。"],
    ["I enjoy solving complex problems quietly.", "我享受安静地解决复杂问题。"],
    ["I keep some parts of myself private even with close people.", "即使面对亲近的人，我也会保留一部分自己。"],
    ["I feel capable when I can rely on my own understanding.", "当我能依靠自己的理解时，我会感到有能力。"],
  ],
  6: [
    ["I automatically think about what could go wrong.", "我会自动思考哪里可能出问题。"],
    ["I value people and systems that are dependable.", "我重视可靠的人和系统。"],
    ["I feel calmer when expectations and backup plans are clear.", "当期待和备用计划清楚时，我会更安心。"],
    ["I test trust before giving it fully.", "在完全信任之前，我会先测试信任是否可靠。"],
    ["I am loyal to people who have proven themselves.", "我会忠于那些证明过自己可靠的人。"],
    ["I ask questions to reduce uncertainty.", "我会通过提问来减少不确定性。"],
    ["I can be brave when someone I care about needs support.", "当我在乎的人需要支持时，我可以很勇敢。"],
    ["I sometimes replay decisions to make sure I did not miss anything.", "我有时会反复回想决定，确认自己没有漏掉什么。"],
    ["I notice inconsistencies that could become problems.", "我会注意到可能变成问题的不一致之处。"],
    ["I want leaders to be transparent and accountable.", "我希望领导者透明且负责任。"],
    ["I may seek reassurance when stakes feel high.", "当风险很高时，我可能会寻求保证。"],
    ["I feel responsible for protecting the group.", "我觉得自己有责任保护团队。"],
    ["I respect preparation more than blind confidence.", "比起盲目信心，我更尊重准备。"],
    ["I can become suspicious when people are vague.", "当别人含糊不清时，我可能会起疑。"],
    ["I feel torn between trusting authority and questioning it.", "我常在信任权威和质疑权威之间拉扯。"],
    ["I want to know where I stand with people.", "我想知道自己和别人之间的关系位置。"],
    ["I often imagine several possible outcomes before choosing.", "在选择前，我常会想象几种可能结果。"],
  ],
  7: [
    ["I look for options when life starts to feel restricted.", "当生活开始有受限感时，我会寻找更多选择。"],
    ["I am energized by new ideas, plans, and possibilities.", "新点子、计划和可能性会让我有能量。"],
    ["I can reframe difficulties into something more hopeful.", "我能把困难重新看成更有希望的事。"],
    ["I dislike feeling trapped in boredom or pain.", "我不喜欢被困在无聊或痛苦中。"],
    ["I often have more plans than time.", "我的计划常比时间更多。"],
    ["I bring lightness or humor into heavy situations.", "我会在沉重情境中带入轻松或幽默。"],
    ["I can become restless when there is no variety.", "没有变化时，我可能会坐立不安。"],
    ["I prefer to keep my future open.", "我喜欢让未来保持开放。"],
    ["I move quickly from one interesting thing to another.", "我会很快从一个有趣的事转向另一个。"],
    ["I sometimes avoid painful feelings by staying busy.", "我有时会通过忙碌来避开痛苦感受。"],
    ["I enjoy brainstorming and connecting ideas.", "我享受头脑风暴和连接想法。"],
    ["I resist commitments that feel limiting.", "我会抗拒让我觉得受限的承诺。"],
    ["I want life to feel expansive and alive.", "我希望生活感觉开阔且有生命力。"],
    ["I can inspire others with enthusiasm.", "我能用热情感染别人。"],
    ["I feel anxious when I have no enjoyable option ahead.", "当眼前没有令人期待的选择时，我会焦虑。"],
    ["I often choose possibility over predictability.", "我常选择可能性，而不是可预测性。"],
  ],
  8: [
    ["I respect directness and dislike hidden agendas.", "我尊重直接，也不喜欢隐藏动机。"],
    ["I move toward conflict when something important is at stake.", "当重要事情受到威胁时，我会走向冲突。"],
    ["I want control over my own life and choices.", "我希望掌控自己的人生和选择。"],
    ["I protect people who are being treated unfairly.", "我会保护受到不公平对待的人。"],
    ["I can be intense when I care about something.", "当我在乎某件事时，我可能会很强烈。"],
    ["I dislike feeling vulnerable or dependent.", "我不喜欢脆弱或依赖的感觉。"],
    ["I prefer honest disagreement to polite avoidance.", "比起礼貌回避，我更喜欢诚实的不同意见。"],
    ["I quickly sense who has power in a situation.", "我能很快感觉到一个情境中谁有力量。"],
    ["I can make decisions under pressure.", "我能在压力下做决定。"],
    ["I push back when someone tries to control me.", "当有人试图控制我时，我会反击。"],
    ["I value strength, courage, and loyalty.", "我重视力量、勇气和忠诚。"],
    ["I sometimes overwhelm others without intending to.", "我有时会在无意中压迫到别人。"],
    ["I would rather face the truth than pretend everything is fine.", "比起假装一切都好，我更愿意面对真相。"],
    ["I feel responsible for keeping myself and my people safe.", "我觉得自己有责任保护自己和自己人。"],
    ["I dislike being manipulated.", "我不喜欢被操控。"],
    ["I trust action more than empty talk.", "比起空谈，我更信任行动。"],
  ],
  9: [
    ["I can see many sides of an issue.", "我能看见一件事的多个角度。"],
    ["I prefer harmony and become uncomfortable with tension.", "我喜欢和谐，并会对紧张气氛感到不舒服。"],
    ["I sometimes go along with others to keep peace.", "我有时会顺着别人来维持和平。"],
    ["I need a steady pace to feel settled.", "我需要稳定节奏才会感到安定。"],
    ["I can forget my own priorities when others are forceful.", "当别人很强势时，我可能会忘记自己的优先事项。"],
    ["I am good at calming people down.", "我很擅长让别人冷静下来。"],
    ["I avoid conflict until it becomes hard to ignore.", "我会回避冲突，直到它难以忽视。"],
    ["I want everyone to feel included.", "我希望每个人都感到被包含。"],
    ["I can delay decisions because I do not want disruption.", "我可能会因为不想造成扰动而延迟决定。"],
    ["I feel most comfortable when life is peaceful.", "当生活平和时，我最舒服。"],
    ["I often minimize my anger or preferences.", "我常淡化自己的愤怒或偏好。"],
    ["I bring patience to tense situations.", "我能把耐心带入紧张情境。"],
    ["I dislike being rushed into intensity.", "我不喜欢被催促进入强烈状态。"],
    ["I can merge with routines that make life easier.", "我容易融入让生活更轻松的日常。"],
    ["I want connection without pressure.", "我想要没有压力的连接。"],
    ["I sometimes need help naming what I truly want.", "我有时需要帮助才能说出自己真正想要什么。"],
  ],
};

const questions = Object.entries(prompts)
  .flatMap(([type, items]) =>
    items.map((text, index) => ({
      id: `${type}-${index + 1}`,
      type: Number(type),
      en: text[0],
      zh: text[1],
    }))
  )
  .slice(0, TOTAL_QUESTIONS);

function shuffleIndexes() {
  const indexes = Array.from({ length: questions.length }, (_, index) => index);
  for (let index = indexes.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [indexes[index], indexes[swapIndex]] = [indexes[swapIndex], indexes[index]];
  }
  return indexes;
}

function savedQuestionOrder() {
  try {
    const order = JSON.parse(localStorage.getItem("enneagram-question-order") || "[]");
    const valid =
      Array.isArray(order) &&
      order.length === TOTAL_QUESTIONS &&
      new Set(order).size === TOTAL_QUESTIONS &&
      order.every((index) => Number.isInteger(index) && index >= 0 && index < TOTAL_QUESTIONS);
    return valid ? order : shuffleIndexes();
  } catch {
    return shuffleIndexes();
  }
}

const state = {
  lang: localStorage.getItem("enneagram-lang") || "en",
  tab: "test",
  current: Number(localStorage.getItem("enneagram-current") || 0),
  answers: JSON.parse(localStorage.getItem("enneagram-answers") || "{}"),
  questionOrder: savedQuestionOrder(),
};

const els = {
  langBtns: document.querySelectorAll(".lang-btn"),
  tabBtns: document.querySelectorAll(".tab-btn"),
  testPanel: document.getElementById("test-panel"),
  typesPanel: document.getElementById("types-panel"),
  introView: document.getElementById("intro-view"),
  questionView: document.getElementById("question-view"),
  resultView: document.getElementById("result-view"),
  startBtn: document.getElementById("start-btn"),
  prevBtn: document.getElementById("prev-btn"),
  resetBtn: document.getElementById("reset-btn"),
  retakeBtn: document.getElementById("retake-btn"),
  progressLabel: document.getElementById("progress-label"),
  progressPercent: document.getElementById("progress-percent"),
  progressFill: document.getElementById("progress-fill"),
  questionKicker: document.getElementById("question-kicker"),
  questionText: document.getElementById("question-text"),
  questionNote: document.getElementById("question-note"),
  answerGrid: document.getElementById("answer-grid"),
  resultTitle: document.getElementById("result-title"),
  resultSummary: document.getElementById("result-summary"),
  resultGuidance: document.getElementById("result-guidance"),
  resultManagement: document.getElementById("result-management"),
  scoreList: document.getElementById("score-list"),
  pizzaIndex: document.getElementById("pizza-index"),
  typeDirectory: document.getElementById("type-directory"),
  managementDirectory: document.getElementById("management-directory"),
};

function translatePage() {
  document.documentElement.lang = state.lang === "zh" ? "zh-Hans" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = copy[state.lang][key];
  });
  els.langBtns.forEach((btn) => btn.classList.toggle("active", btn.dataset.lang === state.lang));
  renderCurrentView();
  renderTypes();
  renderManagement();
}

function setTab(tab) {
  state.tab = tab;
  els.tabBtns.forEach((btn) => btn.classList.toggle("active", btn.dataset.tab === tab));
  document.querySelectorAll(".tab-panel").forEach((panel) => panel.classList.remove("active"));
  document.getElementById(`${tab}-panel`).classList.add("active");
}

function saveProgress() {
  localStorage.setItem("enneagram-lang", state.lang);
  localStorage.setItem("enneagram-current", String(state.current));
  localStorage.setItem("enneagram-answers", JSON.stringify(state.answers));
  localStorage.setItem("enneagram-question-order", JSON.stringify(state.questionOrder));
}

function answeredCount() {
  return Object.keys(state.answers).length;
}

function isComplete() {
  return answeredCount() >= TOTAL_QUESTIONS;
}

function renderCurrentView() {
  if (isComplete()) {
    showResult();
    return;
  }

  if (answeredCount() === 0 && state.current === 0) {
    els.introView.classList.remove("hidden");
    els.questionView.classList.add("hidden");
    els.resultView.classList.add("hidden");
    return;
  }

  els.introView.classList.add("hidden");
  els.questionView.classList.remove("hidden");
  els.resultView.classList.add("hidden");
  renderQuestion();
}

function renderQuestion() {
  const question = questions[state.questionOrder[state.current]];
  const langCopy = copy[state.lang];
  const progress = Math.round(((state.current + 1) / TOTAL_QUESTIONS) * 100);
  const funNote = langCopy.funNotes[state.current % langCopy.funNotes.length];

  if (state.lang === "zh") {
    els.progressLabel.textContent = `${langCopy.question}${state.current + 1}${langCopy.of}${TOTAL_QUESTIONS}题`;
    els.questionKicker.textContent = `${langCopy.question}${state.current + 1}题 - 已洗牌`;
  } else {
    els.progressLabel.textContent = `${langCopy.question} ${state.current + 1} ${langCopy.of} ${TOTAL_QUESTIONS}`;
    els.questionKicker.textContent = `${langCopy.question} ${state.current + 1} - shuffled`;
  }

  els.progressPercent.textContent = `${progress}%`;
  els.progressFill.style.width = `${progress}%`;
  els.questionText.textContent = question[state.lang];
  els.questionNote.textContent = funNote;
  els.prevBtn.disabled = state.current === 0;
  els.questionView.style.setProperty("--question-tilt", `${state.current % 2 === 0 ? -0.35 : 0.35}deg`);

  els.answerGrid.innerHTML = "";
  langCopy.answers.forEach((label, index) => {
    const value = index + 1;
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.type = "button";
    btn.setAttribute("role", "radio");
    btn.setAttribute("aria-checked", state.answers[question.id] === value ? "true" : "false");
    btn.classList.toggle("selected", state.answers[question.id] === value);
    btn.innerHTML = `<strong>${value}</strong><span>${label}</span>`;
    btn.addEventListener("click", () => answerQuestion(value));
    els.answerGrid.appendChild(btn);
  });
}

function answerQuestion(value) {
  const question = questions[state.questionOrder[state.current]];
  state.answers[question.id] = value;

  if (state.current < TOTAL_QUESTIONS - 1) {
    state.current += 1;
  }

  saveProgress();
  renderCurrentView();
}

function previousQuestion() {
  if (state.current > 0) {
    state.current -= 1;
    saveProgress();
    renderQuestion();
  }
}

function resetTest() {
  state.current = 0;
  state.answers = {};
  state.questionOrder = shuffleIndexes();
  saveProgress();
  renderCurrentView();
}

function calculateScores() {
  const totals = Object.fromEntries(Array.from({ length: 9 }, (_, i) => [i + 1, 0]));
  const counts = Object.fromEntries(Array.from({ length: 9 }, (_, i) => [i + 1, 0]));

  questions.forEach((question) => {
    const answer = state.answers[question.id] || 0;
    totals[question.type] += answer;
    counts[question.type] += 1;
  });

  return Object.keys(totals)
    .map((type) => ({
      type: Number(type),
      raw: totals[type],
      max: counts[type] * 5,
      percent: Math.round((totals[type] / (counts[type] * 5)) * 100),
    }))
    .sort((a, b) => b.percent - a.percent);
}

function wingForType(type, sortedScores) {
  const left = type === 1 ? 9 : type - 1;
  const right = type === 9 ? 1 : type + 1;
  const leftScore = sortedScores.find((score) => score.type === left)?.percent || 0;
  const rightScore = sortedScores.find((score) => score.type === right)?.percent || 0;
  return leftScore >= rightScore ? left : right;
}

function showResult() {
  const scores = calculateScores();
  const top = scores[0];
  const wing = wingForType(top.type, scores);
  const info = typeInfo[top.type][state.lang];
  const langCopy = copy[state.lang];
  const support = scores
    .slice(1, 3)
    .map((score) => typeInfo[score.type][state.lang].name)
    .join(state.lang === "zh" ? "、" : ", ");

  els.introView.classList.add("hidden");
  els.questionView.classList.add("hidden");
  els.resultView.classList.remove("hidden");
  els.resultTitle.textContent = `${langCopy.resultPrefix} ${info.name}`;
  els.resultSummary.textContent =
    state.lang === "zh"
      ? `${info.short} ${langCopy.likelyWing}：${typeInfo[wing][state.lang].name}。${langCopy.closestPatterns}：${support}。`
      : `${info.short} ${langCopy.likelyWing}: ${typeInfo[wing][state.lang].name}. Your ${langCopy.closestPatterns}: ${support}.`;
  els.resultGuidance.textContent = langCopy.resultGuidance;
  renderPizzaIndex(scores);
  renderResultManagement(top.type);

  els.scoreList.innerHTML = "";
  scores.forEach((score) => {
    const row = document.createElement("div");
    row.className = "score-row";
    row.innerHTML = `
      <span>${typeInfo[score.type][state.lang].name.replace("Type ", "T")}</span>
      <div class="score-track"><i style="width: ${score.percent}%"></i></div>
      <span>${score.percent}%</span>
    `;
    els.scoreList.appendChild(row);
  });
}

function listMarkup(items) {
  return `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function renderGuideSections(type) {
  const labels = copy[state.lang];
  const guide = managementGuide[type][state.lang];
  const career = careerGuide[type][state.lang];
  return `
    <div class="guide-section">
      <strong>${labels.communicateLabel}</strong>
      ${listMarkup(guide.communicate)}
    </div>
    <div class="guide-section">
      <strong>${labels.manageLabel}</strong>
      ${listMarkup(guide.manage)}
    </div>
    <div class="guide-section">
      <strong>${labels.feedbackLabel}</strong>
      <p>${guide.feedback}</p>
    </div>
    <div class="guide-section">
      <strong>${labels.conflictLabel}</strong>
      <p>${guide.conflict}</p>
    </div>
    <div class="guide-section guide-section-self">
      <strong>${labels.selfImproveLabel}</strong>
      ${listMarkup(guide.self)}
    </div>
    <div class="guide-section guide-section-career">
      <strong>${labels.careerLabel}</strong>
      ${listMarkup(career.career)}
    </div>
    <div class="guide-section">
      <strong>${labels.suitableJobsLabel}</strong>
      <div class="job-tags">${career.jobs.map((job) => `<span>${job}</span>`).join("")}</div>
    </div>
  `;
}

function renderResultManagement(type) {
  const info = typeInfo[type][state.lang];
  els.resultManagement.innerHTML = `
    <div class="result-type-chip">${info.name}</div>
    ${renderGuideSections(type)}
  `;
}

function pointOnCircle(center, radius, index, total) {
  const angle = -Math.PI / 2 + (index * Math.PI * 2) / total;
  return {
    x: center + Math.cos(angle) * radius,
    y: center + Math.sin(angle) * radius,
  };
}

function renderPizzaIndex(scores) {
  const scoreMap = Object.fromEntries(scores.map((score) => [score.type, score.percent]));
  const dimensions = pizzaDimensions[state.lang].map((dimension) => {
    const total = dimension.types.reduce((sum, type) => sum + (scoreMap[type] || 0), 0);
    return {
      ...dimension,
      percent: Math.round(total / dimension.types.length),
    };
  });

  const center = 150;
  const maxRadius = 116;
  const outer = dimensions.map((_, index) => pointOnCircle(center, maxRadius, index, dimensions.length));
  const slices = dimensions
    .map((dimension, index) => {
      const nextIndex = (index + 1) % dimensions.length;
      const radius = Math.max(28, (dimension.percent / 100) * maxRadius);
      const p1 = pointOnCircle(center, radius, index, dimensions.length);
      const p2 = pointOnCircle(center, radius, nextIndex, dimensions.length);
      return `
        <polygon
          class="pizza-slice"
          points="${center},${center} ${p1.x.toFixed(1)},${p1.y.toFixed(1)} ${p2.x.toFixed(1)},${p2.y.toFixed(1)}"
          fill="${dimension.color}"
          style="animation-delay: ${index * 0.09}s"
        />
      `;
    })
    .join("");
  const guides = outer
    .map((point, index) => {
      const next = outer[(index + 1) % outer.length];
      return `<polygon points="${center},${center} ${point.x.toFixed(1)},${point.y.toFixed(1)} ${next.x.toFixed(1)},${next.y.toFixed(1)}" />`;
    })
    .join("");

  els.pizzaIndex.innerHTML = `
    <div class="pizza-visual" aria-hidden="true">
      <svg viewBox="0 0 300 300" role="img">
        <g class="pizza-guides">${guides}</g>
        <circle class="pizza-crust" cx="${center}" cy="${center}" r="${maxRadius}" />
        <g>${slices}</g>
        <circle class="pizza-center" cx="${center}" cy="${center}" r="21" />
      </svg>
    </div>
    <div class="pizza-legend">
      ${dimensions
        .map(
          (dimension) => `
            <div class="pizza-metric" style="--metric-color: ${dimension.color}">
              <span>${dimension.label}</span>
              <strong>${dimension.percent}%</strong>
              <small>${dimension.note}</small>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderTypes() {
  const labels = copy[state.lang].detailLabels;
  els.typeDirectory.innerHTML = "";

  Object.entries(typeInfo).forEach(([type, translations]) => {
    const info = translations[state.lang];
    const card = document.createElement("article");
    card.className = "type-card";
    card.innerHTML = `
      <span class="type-number">${type}</span>
      <h2>${info.name}</h2>
      <p>${info.short}</p>
      <div class="detail-list">
        <div class="detail-item"><strong>${labels.desire}</strong><span>${info.desire}</span></div>
        <div class="detail-item"><strong>${labels.fear}</strong><span>${info.fear}</span></div>
        <div class="detail-item"><strong>${labels.strengths}</strong><span>${info.strengths}</span></div>
        <div class="detail-item"><strong>${labels.blind}</strong><span>${info.blind}</span></div>
        <div class="detail-item"><strong>${labels.growth}</strong><span>${info.growth}</span></div>
        <div class="detail-item"><strong>${labels.work}</strong><span>${info.work}</span></div>
        <div class="detail-item"><strong>${labels.stress}</strong><span>${typeDeepDive[type][state.lang].stress}</span></div>
        <div class="detail-item"><strong>${labels.gift}</strong><span>${typeDeepDive[type][state.lang].gift}</span></div>
        <div class="detail-item"><strong>${labels.practice}</strong><span>${typeDeepDive[type][state.lang].practice}</span></div>
      </div>
    `;
    els.typeDirectory.appendChild(card);
  });
}

function renderManagement() {
  els.managementDirectory.innerHTML = "";

  Object.entries(typeInfo).forEach(([type, translations]) => {
    const info = translations[state.lang];
    const card = document.createElement("article");
    card.className = "management-card";
    card.innerHTML = `
      <div class="management-card-header">
        <span class="type-number">${type}</span>
        <div>
          <h2>${info.name}</h2>
          <p>${info.short}</p>
        </div>
      </div>
      ${renderGuideSections(type)}
    `;
    els.managementDirectory.appendChild(card);
  });
}

els.langBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    state.lang = btn.dataset.lang;
    saveProgress();
    translatePage();
  });
});

els.tabBtns.forEach((btn) => btn.addEventListener("click", () => setTab(btn.dataset.tab)));
els.startBtn.addEventListener("click", () => {
  state.current = Math.min(state.current, TOTAL_QUESTIONS - 1);
  saveProgress();
  els.introView.classList.add("hidden");
  els.questionView.classList.remove("hidden");
  renderQuestion();
});
els.prevBtn.addEventListener("click", previousQuestion);
els.resetBtn.addEventListener("click", resetTest);
els.retakeBtn.addEventListener("click", resetTest);

translatePage();
