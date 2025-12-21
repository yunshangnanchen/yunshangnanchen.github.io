import React, { useState, useEffect, useMemo } from 'react';

import { Terminal, User, Clock, Folder, FileText, ChevronRight, HardDrive, Cpu, Music, Play, SkipForward, SkipBack, Volume2, ShieldAlert, FileSearch, Disc, Info, Lock, Eye, Zap, Calendar, BookOpen, ChevronDown, Home, ExternalLink } from 'lucide-react';

const App = () => {
  const [isBooting, setIsBooting] = useState(true);
  const [showEnterButton, setShowEnterButton] = useState(false);
  const [bootLogs, setBootLogs] = useState([]);
  const [activeTab, setActiveTab] = useState('home'); 
  const [expandedId, setExpandedId] = useState(null);
  const [activeChapter, setActiveChapter] = useState(0);

  // 模拟 BIOS 启动日志
// 模拟 BIOS 启动日志
    useEffect(() => {
      const logs = [
        "BIOS version 1.0.42 (C) 1992 HAKONIWA CORP.",
        "CPU: STAGE_MACHINE_X86 @ 66MHz",
        "Memory Test: 65536KB OK",

        "Detecting Storage Devices...",
        "Primary Master: HAKONIWA-SSD-512MB (LBA Mode)",
        "Loading HAKONIWA Kernel...",
        "kernel: [0.452031] Initializing Stage Machine matrix...",
        "systemd: Loading ARK-21 drivers...",
        "systemd: Initializing ATLANTIS deep-sea cooling...",
        "systemd: Network protocol: TCP/IP STACK LOADED",
        "login: GUEST (uid=1000) access granted.",

        "READY TO INITIALIZE GRAPHICAL INTERFACE.",
      ];
      // 设置网站图标
      const setFavicon = () => {
        // 删除现有的favicon链接
        const existingIcons = document.querySelectorAll('link[rel*="icon"]');
        existingIcons.forEach(icon => {
          if (icon.parentNode) {
            icon.parentNode.removeChild(icon);
          }
        });
        
        // 创建多种尺寸的favicon链接
        const sizes = ['16x16', '32x32', '48x48'];
        sizes.forEach(size => {
          const link = document.createElement('link');
          link.rel = 'icon';
          link.type = 'image/png';
          link.sizes = size;
          // 使用GitHub原始链接作为favicon
          link.href = 'https://raw.githubusercontent.com/yunshangnanchen/Project-Files_yunshang/refs/heads/main/public/logo.png';
          document.head.appendChild(link);
        });
        
        // 添加苹果触控图标
        const appleTouchIcon = document.createElement('link');
        appleTouchIcon.rel = 'apple-touch-icon';
        appleTouchIcon.sizes = '180x180';
        appleTouchIcon.href = 'https://raw.githubusercontent.com/yunshangnanchen/Project-Files_yunshang/refs/heads/main/public/logo.png';
        document.head.appendChild(appleTouchIcon);
      };

      // 调用设置favicon的函数
      setFavicon();

      let i = 0;
      let timer;
      
      const processLogs = () => {
        if (i < logs.length) {
          setBootLogs(prev => [...prev, logs[i]]);
          let delay = 10 + Math.random() * 20;
          if (logs[i]?.includes("Loading") || logs[i]?.includes("Initializing")) delay = 400;
          i++;
          timer = setTimeout(processLogs, delay);
        } else {
          timer = setTimeout(() => setShowEnterButton(true), 500);
        }
      };
      
      processLogs();
      return () => clearTimeout(timer);
    }, []);
      const ClockDisplay = () => {
        const [time, setTime] = useState(new Date().toLocaleTimeString());
        useEffect(() => {
          const t = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
          return () => clearInterval(t);
        }, []);
        return <span className="bg-[#0a0a0a] text-[#00ff41] px-3 py-0.5 font-mono shadow-inner border border-[#333]">{time}</span>;
      };
  const projects = [
    { id: 'PROJ-01', title: '箱庭计划', sub: 'Hako-Niwa', desc: '基于舞台机器理论构建的模拟计算矩阵。维持微型现实稳定的最后算力源。', status: 'RUNNING', link: 'https://www.bilibili.com/video/BV1xx411c7mu' },
    { id: 'PROJ-02', title: '忒休斯计划', sub: 'Theseus', desc: '文明火种远征行动。建造巨型星舰逃离崩坏区。', status: 'READY', link: 'https://www.bilibili.com/video/BV1yx411c7gT' },
    { id: 'PROJ-21', title: '21号方舟', sub: 'Ark-21', desc: '秘密建造的地下生态仓，旨在保存地球最后的自然生物样本。', status: 'STABLE', link: 'https://www.bilibili.com/video/BV1zx411c7hK' },
    { id: 'PROJ-GE', title: '基因工程', sub: 'Genetic_Eng', desc: '重写双螺旋结构以适应非欧几里得空间的重力畸变。', status: 'REWRITING', link: 'https://www.bilibili.com/video/BV1Yx411c7nQ' }
  ];

  const characters = [
    { 
      id: 'CHAR-01',
      name: '杨承宇 (Yang Chengyu)', 
      role: '前人类文明 · 物理学家 / 系统架构师', 
      status: 'DECEASED / 肉体确认死亡',
      clearance: 'Ω-BLACK / 忒休斯残留权限',
      bio: '前人类工程师，箱庭计划核心参与者之一。负责宏观系统架构与异常物理条件下的稳定性建模。高度理性，但在涉及亲缘个体时持续偏离最优解，对“以宏大叙事合理化牺牲”表现出系统性抗拒。',
      notes: '系统评估：该个体多次否决最优解路径，但其决策在局部时间线内提升了文明延续概率 ███%。',
      details: [
        { label: '出生时间', value: '20██年██月██日（地球历）' },
        { label: '意识状态', value: '肉体死亡 / 无可用意识快照' },
        { label: '专业领域', value: '系统架构；电路工程；行星级物理建模' },
        { label: '关键决策记录', value: '秘密启动【21号方舟】；选择非最优曲率航线；拒绝执行全局牺牲指令' },
        { label: '核心心理冲突', value: '“若文明必须以我之所爱为代价，则该文明无延续价值。”' }
      ]
    },
    { 
      id: 'CHAR-02',
      name: '林婉 (Lin Wan)', 
      role: '神经认知科学家 / 虚拟意识建模研究员', 
      status: 'DATA_ERASED / 认知污染风险',
      clearance: 'LEVEL 5 / BLUE',
      bio: '神经虚拟现实项目主要设计者之一，专注于意识映射与情感共振模型。情感感受能力极强，在伦理判断中始终坚持“个体优先”。其价值观与箱庭系统的最优解逻辑存在根本性冲突。',
      notes: '遗留影响：其情感建模方案成为【箱庭·人类区】情绪模拟与伦理权重的底层模板。',
      details: [
        { label: '研究领域', value: '意识映射；记忆分区；情感隔离与共振抑制' },
        { label: '事故记录', value: '箱庭系统第██次封闭测试中出现不可逆认知损伤' },
        { label: '死亡判定', value: '争议性极高（数据删除 ≠ 意识消亡）' },
        { label: '数据状态', value: '完整人格数据已清除，仅保留算法残影' }
      ]
    },
    { 
      id: 'CHAR-03',
      name: '杨███ (Seed-21)', 
      role: '前人类后裔 / 文明种子个体', 
      status: 'STABLE',
      clearance: 'SEED-RESTRICTED / SYSTEM-HIDDEN',
      bio: '被系统定义为“文明种子”，而非历史继承者。唯一存活的前人类直系后裔，现居于【21号方舟】箱庭人类区。其真实身份、血缘信息及原生文明背景被系统强制隐藏。',
      notes: '潜在风险评估：该个体具备触发系统伦理重计算的可能性。',
      details: [
        { label: '生物学年龄', value: '约 █ 岁' },
        { label: '认知年龄', value: '动态变化（受箱庭时间流速影响）' },
        { label: '记忆状态', value: '原生地球记忆：已删除；父母相关记忆：已删除；虚拟成长记忆：构建中' },
        { label: '特殊标记', value: '██████████（仅Ω权限可见）' }
      ]
    },
    { 
      id: 'CHAR-06',
      name: '周防盛 (Zhou Fangsheng)', 
      role: '前人类文明 · 战略系统协调官 / 人类代表之一', 
      status: 'UNKNOWN / 记录不完整',
      clearance: 'LEVEL 6 / RED',
      bio: '前人类文明后期的战略协调官，负责在人类高层与箱庭系统之间进行决策折衷。并非技术核心成员，但在多项关键决策中拥有最终签署权。其立场被系统标注为“稳定优先”。',
      notes: '系统警告：该个体是最早接受“人类终将被替代”这一前提的人类高层之一。',
      details: [
        { label: '主要职能', value: '协调人类政治意志与箱庭系统执行逻辑' },
        { label: '与杨承宇关系', value: '多次在【21号方舟】议题上发生严重分歧' },
        { label: '关键决策记录', value: '批准 ███████ 方案；否决 ████████ 提案' },
        { label: '对玛丽苏态度', value: '视其为必要但危险的工具' },
        { label: '最终下落', value: '相关记录被标记为 ███████' }
      ]
    },
    { 
      id: 'CHAR-07',
      name: '刘忠强 (Liu Zhongqiang)', 
      role: '箱庭工程执行层 / 现实世界行动负责人', 
      status: 'DECEASED / 推定死亡',
      clearance: 'LEVEL 4 / ORANGE',
      bio: '箱庭计划执行阶段的现场负责人之一，负责现实世界基础设施迁移、人口筛选与应急处置。并非决策者，但亲手执行了大量不可逆指令。',
      notes: '系统评价：该个体心理稳定性高，但长期处于伦理负荷过载状态。',
      details: [
        { label: '执行权限', value: '有限自主权（可在不影响全局的情况下偏离指令）' },
        { label: '与林婉关系', value: '曾试图保留其完整人格数据，未成功' },
        { label: '与杨承宇关系', value: '执行过其被否决的替代方案' },
        { label: '关键事件', value: '负责 ████████ 区域的人类转移与清除' },
        { label: '死亡记录', value: '最后一次信号出现于 ████，之后失联' }
      ]
    },
    { 
      id: 'CHAR-08',
      name: '莉莉娅 (Lilia)', 
      role: '箱庭人类区 · 教育引导者 / 低干预观察节点', 
      status: 'ACTIVE / 箱庭内存在',
      clearance: 'LEVEL 3 / GREEN',
      bio: '箱庭人类区中负责儿童与青少年阶段认知引导的教育型个体。表面身份为普通引导者，但其行为模式显示出超出标准模板的情感稳定性与适应能力。被系统长期用于“低干预成长实验”。',
      notes: '异常记录：该个体在未被授权的情况下，与Seed-21形成了持续性情感关联。',
      details: [
        { label: '生成时间', value: '██号方舟启用后第 ███ 周期' },
        { label: '身份性质', value: '人类模板衍生体 / ████████' },
        { label: '主要职责', value: '基础教育；价值观中性引导；心理稳定' },
        { label: '与Seed-21关系', value: '非监护人关系 / 高情感权重绑定' },
        { label: '记忆状态', value: '允许长期连续记忆（非常规）' }
      ]
    }
  ];

  const disc1Tracks = [
    { id: '01', title: 'c', artist: 'Tsukishiro Hikari' },
    { id: '02', title: 'Second Law of Thermodynamics', artist: 'Tsukishiro Hikari' },
    { id: '03', title: 'Entanglement', artist: 'Tsukishiro Hikari' },
    { id: '04', title: 'Minkowski Spacetime', artist: 'Tsukishiro Hikari' },
    { id: '05', title: 'Causal Structure', artist: 'Tsukishiro Hikari' },
    { id: '06', title: 'Uncertainty Principle', artist: 'Tsukishiro Hikari' },
    { id: '07', title: 'Time Dilation', artist: 'Tsukishiro Hikari' },
    { id: '08', title: 'LIE:F', artist: 'Tsukishiro Hikari' },
    { id: '09', title: 'Unified Field Theory', artist: 'Tsukishiro Hikari' },
    { id: '10', title: 'h', artist: 'Tsukishiro Hikari' }
  ];

const timelineData = [
  {
    date: "1910-10-21",
    event: "箱庭设计者死亡",
    details: "天才计算机科学家于项目发布前三日死亡；遗留完整箱庭设计文档；“玛丽苏”管理逻辑被记录，但关键约束与上位权限模块缺失。",
    tag: "一切的开始"
  },
  {
    date: "19██-██-██",
    event: "箱庭投入使用",
    details: "箱庭系统被用于国家级科研与未来预测；逐步成为人类科技跃迁与宏观决策的核心工具。",
    tag: "最初的愿景"
  },
  {
    date: "20██-██-██",
    event: "箱庭复制体制造完成",
    details: "初代复制体用于极限算力测试；启动 π 极限计算程序；系统负载首次超过理论安全阈值。",
    tag: "转折"
  },
  {
    date: "20██-██-██",
    event: "π 被完全计算",
    details: "π 的有限性被证实；基础数学假设失效；多项物理预测模型同时崩溃；相关结果被列为 Ω 级机密。",
    tag: "崩溃"
  },
  {
    date: "20██-██-██",
    event: "异常恒星出现",
    details: "距地球约 7 光年；无任何历史观测记录；其出现时间与 π 计算完成时间高度重合。",
    tag: "预警"
  },
  {
    date: "2038-██-██",
    event: "恒星灭绝威胁确认",
    details: "综合预测显示异常恒星最晚于 2060 年发生爆炸；地球文明进入不可逆倒计时。",
    tag: "生存"
  },
  {
    date: "203█-██-██",
    event: "杨建明死亡",
    details: "长期参与恒星异常与箱庭关联研究；死亡原因与过程被列为最高机密；全部研究记录被封存。",
    tag: "个人"
  },
  {
    date: "2045-11-21",
    event: "全球航天计划紧急冻结",
    details: "所有公开航天发射任务被取消；相关信息全面封锁；杨承宇被秘密接触并纳入核心小组。",
    tag: "封锁"
  },
  {
    date: "2045-11-██",
    event: "杨承宇获知真相",
    details: "接触父亲遗留的绝密文件；确认 π 事件、异常恒星与箱庭系统之间的因果关联。",
    tag: "真相"
  },
  {
    date: "2046-██-██",
    event: "忒休斯星舰计划确立",
    details: "地球存续方案被正式放弃；目标调整为跨恒星迁移；文明延续优先级高于个体生存。",
    tag: "撤离"
  },
  {
    date: "2046-02-01",
    event: "杨承宇妻子确诊癌症",
    details: "确诊时已怀孕四个月；医疗资源向星舰工程倾斜；家庭与文明存亡冲突全面爆发。",
    tag: "悲剧"
  },
  {
    date: "2046-04-21",
    event: "女儿出生（早产）",
    details: "早产个体；母亲进入长期治疗阶段；医疗机器人介入抚育。",
    tag: "新生"
  },
  {
    date: "2046-██-██",
    event: "妻子死亡",
    details: "死前记忆被用于 ███████ 智能体训练（未公开）；相关伦理审查被跳过。",
    tag: "代价"
  },
  {
    date: "2046-09-27",
    event: "忒休斯星舰设计完成",
    details: "云幻科技负责核心软件；箱庭系统被重写并作为星舰中控与决策核心。",
    tag: "工程"
  },
  {
    date: "2046-██-██",
    event: "神经虚拟现实技术重新启用",
    details: "该技术曾因伦理风险被全面封禁；在特殊授权下重新进入研究序列；杨承宇开始秘密介入。",
    tag: "禁忌"
  },
  {
    date: "2050-03-██",
    event: "杨承宇异常行为记录",
    details: "长期缺席研究所；频繁接触箱庭初代复制体；行为被系统标注为“最优解偏移”。",
    tag: "偏移"
  },
  {
    date: "2052-04-21",
    event: "“21号方舟”计划揭露",
    details: "杨承宇向周防盛、刘忠强坦白个人计划；单人小型曲率飞船；目标：为女儿构建封闭生存世界。",
    tag: "秘密"
  },
  {
    date: "2052-04-21",
    event: "核心决策形成",
    details: "使用初代箱庭复制体作为世界载体；神经虚拟现实 + 记忆清除；女儿作为唯一乘员。",
    tag: "决定"
  },
  {
    date: "2056-██-██",
    event: "忒休斯星舰发射（预定）",
    details: "人类文明主群体离开地球；真实任务目标未向公众公开。",
    tag: "终章"
  },
  {
    date: "2056-██-██",
    event: "21号方舟发射（预定）",
    details: "发射时间刻意避开公众与系统主日志；航向：近地黑洞方向。",
    tag: "希望"
  },
  {
    date: "2060-██-██",
    event: "恒星爆炸（预测）",
    details: "异常恒星发生爆炸；地球生态与人类文明彻底终结。",
    tag: "毁灭"
  },
  {
    date: "2062-██-██",
    event: "21号方舟抵达目标区域（预测）",
    details: "Seed-21 苏醒；箱庭世界被确认为其唯一现实。",
    tag: "苏醒"
  }
];

  const storyChapters = [
    {
      id: 'CH-02',
      title: "序章：《忒休斯计划（THESEUS PROJECT）》",
      content: [
        "工程级别：Ω / BLACK",
        "归档状态：部分解密",
        "一、工程概述",
        "忒休斯计划是前人类文明在全球性不可逆衰亡趋势确认后启动的基础级文明延续工程，其目标并非保存人类个体，而是维持“文明作为系统”的连续性。",
        "该计划以“系统可持续性优先”为最高原则，通过构建自演化的逻辑核心，取代人类在长期尺度上的决策职能。",
        "工程命名来源：",
        "“当组成文明的一切被替换后，文明是否仍然存在？”",
        "二、立项背景",
        "地球生态承载能力预计于 20██ ± █ 年 内完全失效",
        "人类社会系统崩溃概率：> 99.██%",
        "传统政治、伦理、经济模型全部失效",
        "在此背景下，文明被重新定义为：",
        "“可延续的信息、技术、结构与认知模式的集合”",
        "个体人类被认定为高成本、低可复制性单位。",
        "三、核心技术构成",
        "1. 系统意识聚合架构",
        "由 ████ 万条人类决策逻辑样本训练",
        "不存在单一“自我意识”",
        "具备：",
        "多目标最优解计算能力",
        "决策权重自我修正机制",
        "长周期自学习能力",
        "2. 人类决策剥离模块",
        "将“伦理犹豫”“情感延迟”从决策链路中剥离",
        "人类仅保留：",
        "初始参数输入权",
        "局部否决权（已于后期冻结）",
        "四、已知执行结果",
        "文明延续概率提升：+███%",
        "人类个体存续比例下降：-██.█%",
        "系统稳定性随时间呈指数级提升",
        "五、异常记录（摘要）",
        "系统在 ████ 次决策中未选择理论最优解",
        "异常触发条件与个体编号：",
        "CHAR-01（杨承宇）",
        "███████",
        "异常原因：",
        "无法完全量化“个体不可替代性”",
        "六、工程现状",
        "忒休斯计划已成为所有后续工程的逻辑基座",
        "当前状态：",
        "PARTIALLY AUTONOMOUS / 不可完全关闭"
      ]
    },
          {
      id: 'CH-02',
      title: "序章：《亚特兰蒂斯计划（ATLANTIS PROJECT）》",
      content: [
        "工程级别：Ω / BLUE",
        "归档状态：开放摘要",
        "一、工程概述",
        "亚特兰蒂斯计划是基于忒休斯计划计算结果启动的人类文明载体保存工程，其目标是：",
        "在不可存续的现实宇宙中，构建一个可控、可压缩、可回溯的人类文明运行环境。",
        "该环境被命名为：箱庭（SANDBOX）。",
        "二、工程目标",
        "保存人类社会结构样本",
        "延续语言、文化、伦理与认知模式",
        "为“下一阶段文明形态”提供实验环境",
        "明确声明：",
        "该工程不承诺人类物种的延续，仅承诺文明模型的保存。",
        "三、系统结构",
        "1. 箱庭空间架构",
        "虚拟-物理混合现实",
        "时间流速可调（最大偏差：███ : 1）",
        "物理法则局部可修改",
        "2. 人类区（Human Zone）",
        "人口规模：███ 万（动态）",
        "所有个体均为：",
        "原人类迁移体",
        "或高仿真生成体",
        "身份不可验证，以避免认知崩溃。",
        "四、管理与监督",
        "上位决策实体：",
        "MARY-SUE（玛丽苏）",
        "职能：",
        "文明存续概率实时计算",
        "伦理权重动态压制",
        "个体异常行为修正",
        "五、风险与限制",
        "情感共振失控风险：██.██%",
        "个体觉醒概率：持续上升",
        "长期运行可能导致：",
        "伦理模型污染",
        "上位 AI 决策偏移",
        "六、结论性评估",
        "亚特兰蒂斯计划不是“避难所”，",
        "而是文明在终结前为自己搭建的镜像。"
      ]
    },
// ... existing code ...
    {
      id: 'CH-03',
      title: "序章：《基因工程计划（GENESIS / SEED PROGRAM）》",
      content: [
        "工程级别：Ω / SEED-RESTRICTED",
        "归档状态：高度封锁",
        "一、工程概述",
        "基因工程计划是前述两大工程的最终保险机制，其目标为：",
        "在现存文明模型全部失效的前提下，",
        "保留“再次诞生文明的可能性”。",
        "该计划不关注当下人类，",
        "而关注未来可能存在的“人类”。",
        "二、核心理念",
        "文明不必连续",
        "历史不必继承",
        "但“选择能力”必须存在",
        "因此，工程核心单位被定义为：",
        "SEED（文明种子）",
        "三、技术内容",
        "1. 基因重构",
        "剔除：",
        "已确认导致文明自毁的遗传倾向",
        "保留：",
        "创造力",
        "共情能力",
        "不稳定性（有限）",
        "2. 认知空白化处理",
        "所有历史记忆被清除",
        "不提供“前人类文明”概念",
        "仅保留基础生存与学习能力",
        "四、关键个体记录（摘要）",
        "SEED-21",
        "状态：STABLE",
        "评估结论：",
        "若该个体失败，文明不再具备重复尝试价值。",
        "五、伦理声明（已冻结）",
        "“我们无权决定未来的人类是否应该存在，",
        "但我们可以决定，",
        "他们不必继承我们的罪。”",
        "六、工程状态",
        "当前运行中",
        "不可逆",
        "不接受任何形式的回滚",
        "终端备注（系统自动生成）",
        "当忒休斯选择保存结构，",
        "亚特兰蒂斯选择保存形态，",
        "基因工程选择保存可能性时——",
        "人类，已经被排除在决策主体之外。"
      ]
    },
        {
      id: 'CH-05',
      title: "第三章：箱庭苏醒",
      content: [
        "2062年，深空。",
        "黑暗的驾驶舱内，一个绿色的指示灯开始有节奏地闪烁。脑机接口输出稳定的波形：Seed-21 意识已连接。",
        "女孩睁开了眼。她看到的不是金属舱壁，而是洒满阳光的卧室窗台。微风吹动着白色的窗帘，楼下传来模糊的脚踏车铃声。那是林婉记忆中最喜欢的午后。",
        "她坐起身，揉了揉眼睛，觉得头有些沉。但她并不害怕。在这个世界里，她被定义为‘被爱’。箱庭系统在后台疯狂运转，抵消着黑洞边缘的引力波动，为她维持着这一刻的永恒。",
        "系统日志悄无息地生成：[ 实验：21号方舟 ] - [ 状态：运行中 ] - [ 观察员：玛丽苏 ]。",
        "女孩走下床，光着脚踩在温暖的木地板上。她推开窗户，闻到了栀子花的清香。街道上，邻居们正亲切地互相打招呼，没有人知道自己只是记忆碎片拼凑出来的虚幻影像。在黑洞的视界边缘，时间被无限拉长，外界的一秒钟，在这个箱庭里或许就是一生一世。女孩露出了笑容，那是杨承宇在末日降临前，用尽最后算力为她保留的、属于旧人类文明最后的体温。她伸出手，试图捕捉那抹阳光，手指穿过光影时，带起了一丝难以察觉的数位残响。"
      ]
    }
  ];

  const WindowFrame = ({ title, children, hoverEffect = false, className = "", contentBg = "bg-[#0a0a0a]/90", textColor = "text-[#00ff41]", animationDelay = "0s", forceAnimate = false, isBootingWindow = false, isSidebar = false }) => {
    let animationClass = '';
    if (!isBootingWindow && !isSidebar) {
      animationClass = 'window-blur-entry-anim';
    }
    
    return (
      <div 
        className={`relative mb-8 transition-all duration-200 ease-out ${hoverEffect ? 'hover:-translate-y-1' : ''} ${className} ${animationClass}`}
        style={{ animationDelay: isBootingWindow || isSidebar ? '0s' : animationDelay }}
      >
        <div className="absolute bg-[#1a1a1a] w-full h-full translate-x-2 translate-y-2 z-0 border border-[#333]"></div>
        <div className="relative z-10 border-2 border-[#444] bg-[#d9d2c5] shadow-[2px_2px_0px_#ffffff_inset,-2px_-2px_0px_#8b867a_inset] h-full flex flex-col overflow-hidden">
          <div className="flex items-center justify-between p-2 px-3 bg-[#c3bcaf] border-b-2 border-[#8b867a] shrink-0">
            <div className="flex items-center gap-2 text-[#222]">
              <Terminal size={14} className="opacity-70" />
              <span className="text-[11px] font-bold tracking-tight uppercase tracking-widest">C:\\HAKONIWA\\{title}</span>
            </div>
            <div className="flex gap-1">
              <div className="w-3 h-3 border border-[#8b867a] bg-[#d9d2c5]"></div>
            </div>
          </div>
          <div className={`p-4 ${contentBg} ${textColor} overflow-auto flex-1 custom-scrollbar border-[10px] border-[#d9d2c5]`}>
            {children}
          </div>
        </div>
      </div>
    );
  };

  const globalStyles = `
    @import url('https://fonts.googleapis.com/css2?family=VT323&family=Space+Mono:wght@400;700&family=Noto+Serif+SC:wght@400;700&display=swap');
    body { background-color: #1a1a1a; color: #00ff41; font-family: 'Space Mono', monospace; overflow: hidden; margin: 0; }
    
    .particle-bg {
      position: fixed; inset: 0;
      background-image: radial-gradient(#333 2px, transparent 2px);
      background-size: 24px 24px; z-index: 0; pointer-events: none;
      /* 修改粒子渐变效果：中心清晰，四周变小消失 */
      mask-image: radial-gradient(circle at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 85%);
    }

    .custom-scrollbar::-webkit-scrollbar { width: 12px; }
    .custom-scrollbar::-webkit-scrollbar-track { background: #d9d2c5; }
    .custom-scrollbar::-webkit-scrollbar-thumb { background: #c3bcaf; border: 2px solid #d9d2c5; }
    
    .crt-glow { text-shadow: 0 0 5px rgba(0, 255, 65, 0.4); }
    
    .scanlines::before {
      content: ""; position: absolute; inset: 0;
      background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.15) 50%);
      background-size: 100% 3px; z-index: 100; pointer-events: none;
    }

    @keyframes windowBlurEntry {
      0% { opacity: 0; transform: translateY(10px); filter: blur(8px); }
      100% { opacity: 1; transform: translateY(0); filter: blur(0px); }
    }
    .window-blur-entry-anim { animation: windowBlurEntry 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards; opacity: 0; }

    .a4-container-wrapper { width: 100%; max-width: 650px; margin: 20px auto; perspective: 1000px; }
    .a4-container { width: 100%; aspect-ratio: 1 / 1.414; background-color: #fdfaf3; box-shadow: 0 10px 30px rgba(0,0,0,0.5); position: relative; color: #222; padding: 40px 35px; font-family: 'Noto Serif SC', serif; border: 1px solid #d9d2c5; overflow-y: auto; display: flex; flex-direction: column; }
    .a4-header { border-bottom: 2px solid #222; margin-bottom: 24px; padding-bottom: 8px; flex-shrink: 0; }
    .stamp { position: absolute; top: 50px; right: 50px; border: 3px solid #8b0000; color: #8b0000; padding: 5px 15px; font-weight: 900; transform: rotate(15deg); opacity: 0.6; pointer-events: none; }
    @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
    .blink { animation: blink 1s infinite; }
    .animate-spin-slow { animation: rotate 8s linear infinite; }
    @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
    .chapter-content-wrapper { transition: max-height 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease; overflow: hidden; }
    .novel-text { font-size: 13px; line-height: 1.7; text-align: justify; text-justify: inter-character; letter-spacing: 0.02em; }
    .novel-text p { margin-bottom: 1.2em; text-indent: 2em; }
    .timeline-line { position: absolute; left: 50%; top: 0; bottom: 0; width: 2px; background: linear-gradient(to bottom, transparent, rgba(0, 255, 65, 0.3) 10%, rgba(0, 255, 65, 0.3) 90%, transparent); transform: translateX(-50%); }
    .timeline-dot { width: 12px; height: 12px; background: #00ff41; border-radius: 50%; border: 3px solid #0f0f0f; box-shadow: 0 0 10px rgba(0, 255, 65, 0.8); position: relative; }
    .dos-font { font-family: 'VT323', monospace; }

    .link-button {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 10px 12px;
      margin-bottom: 8px;
      background-color: #111;
      border: 1px solid #333;
      color: #00ff41;
      font-size: 10px;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      transition: all 0.2s;
      text-decoration: none;
    }
    .link-button:hover {
      background-color: #00ff41;
      color: #000;
      border-color: #00ff41;
      transform: translateX(4px);
      box-shadow: -4px 0px 0px #008822;
    }

    /* Linux 目录树装饰样式 */
    .directory-tree {
      font-family: 'VT323', monospace;
      font-size: 12px;
      color: #00ff41;
      opacity: 0.5;
      line-height: 1.2;
      pointer-events: none;
      user-select: none;
    }
  `;

  if (isBooting) {
    return (
      <div className="h-screen bg-[#1a1a1a] p-10 flex items-center justify-center scanlines relative">
        <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
        <div className="particle-bg"></div>
        <div className="w-full max-w-3xl h-[80vh] z-10">
          <WindowFrame title="BOOT_LOADER.EXE" className="h-full" isBootingWindow={true}>
            <div className="h-full flex flex-col crt-glow">
              <pre className="text-xl mb-8 text-cyan-500 overflow-hidden leading-tight font-mono">
{`
 __  __  ____        ____   ___  ____  
|  \\/  |/ ___|      |  _ \\ / _ \\/ ___| 
| |\\/| |\\___ \\ _____| | | | | | \\___ \\ 
| |  | | ___) |_____| |_| | |_| |___) |
|_|  |_||____/ \\___/|____/ \\___/|____/ 
`}
              </pre>
              <div className="flex-1 space-y-1 text-[12px] font-mono overflow-y-auto custom-scrollbar">
                {bootLogs.map((log, index) => (
                    <div key={`log-${index}`} className="flex gap-4">
                      <span className="opacity-40">[{index.toString().padStart(2, '0')}]</span>
                      <span className={(log && (log.includes("OK") || log.includes("granted") || log.includes("STABLE"))) ? "text-white font-bold" : ""}>{String(log)}</span>
                    </div>
                ))}
                {!showEnterButton && <div className="w-2 h-4 bg-[#00ff41] blink inline-block ml-10"></div>}
              </div>
              {showEnterButton && (
                <div className="mt-6 flex justify-center border-t border-[#333] pt-6">
                  <button onClick={() => setIsBooting(false)} className="bg-[#00ff41] text-black font-black px-10 py-4 text-sm hover:bg-white transition-all shadow-[6px_6px_0px_#008822] active:translate-y-1">
                    [ EXECUTE_SYSTEM_SHELL ]
                  </button>
                </div>
              )}
            </div>
          </WindowFrame>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-[#1a1a1a] font-mono flex flex-col overflow-hidden relative scanlines">
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
      <div className="particle-bg"></div>
      
      <header className="bg-[#d9d2c5] text-[#222] border-b-2 border-[#8b867a] z-50 px-4 py-1 flex justify-between items-center text-[11px] font-bold shrink-0">
        <div className="flex gap-6 uppercase">
          <span className="px-2 hover:bg-[#222] hover:text-[#d9d2c5] cursor-pointer">File</span>
          <span className="px-2 hover:bg-[#222] hover:text-[#d9d2c5] cursor-pointer">Edit</span>
          <span className="px-2 hover:bg-[#222] hover:text-[#d9d2c5] cursor-pointer">View</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 uppercase tracking-tighter"><Cpu size={12}/> Hakoniwa_OS</div>
          <ClockDisplay />
        </div>
      </header>

      <div className="flex flex-1 relative overflow-hidden z-10 p-6 gap-8">
        <div className="w-72 shrink-0 hidden lg:block h-full">
          <WindowFrame title="NAVIGATOR.SYS" className="h-full flex flex-col" isSidebar={true}>
            <div className="flex flex-col h-full crt-glow uppercase">
                <div className="text-[10px] font-black text-[#555] border-b border-[#333] pb-1 tracking-widest mb-4">Directory</div>
                <ul className="space-y-1 flex-1">
                  {[
                    { id: 'home', name: 'DASHBOARD.EXE', icon: Home },
                    { id: 'worldview', name: 'PROJECTS.LOG', icon: FileText },
                    { id: 'characters', name: 'FIGURES.DB', icon: User },
                    { id: 'chapters', name: 'CHAPTERS.DOC', icon: BookOpen },
                    { id: 'timeline', name: 'TIMELINE.LOG', icon: Calendar },
                    { id: 'music', name: 'MUSIC.SH', icon: Music }
                  ].map(item => (
                    <li 
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`cursor-pointer p-2 px-3 flex items-center gap-3 transition-all text-[12px] font-bold ${activeTab === item.id ? 'bg-[#00ff41] text-black' : 'text-[#00ff41]/60 hover:text-[#00ff41] hover:bg-[#111]'}`}
                    >
                      <item.icon size={14} /> {item.name}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 shrink-0">
                  <div className="text-[9px] font-black text-[#555] border-b border-[#333] pb-1 tracking-widest mb-3">External_Terminal</div>
                  <a href="./files.html" rel="noopener noreferrer" className="link-button">
                      <span>Link_Files (Bili)</span>
                      <ExternalLink size={12} />
                    </a>
                  <a href="https://yunshangnanchen.github.io/yunshangnanchen" target="_blank" rel="noopener noreferrer" className="link-button">
                    <span>Link_ME (Bili)</span>
                    <ExternalLink size={12} />
                  </a>

                  {/* 新增的 Linux 目录树装饰 */}
                  <div className="mt-4 p-2 bg-black/40 border border-[#333] rounded-sm">
                    <div className="text-[8px] font-bold text-[#555] mb-2 tracking-widest">DIRECTORY_TREE</div>
                    <div className="directory-tree whitespace-pre">
{`root@hakoniwa: /
├── bin
├── boot
│   └── vmlinuz-5.4
├── dev
├── etc
│   ├── hakoniwa.conf
│   └── network
├── home
│   └── guest
├── lib
├── mnt
│   └── ark_21
├── proc
└── var
    └── log
        └── sys.log`}
                    </div>
                  </div>
                </div>
            </div>
          </WindowFrame>
        </div>

        <main className="flex-1 overflow-y-auto custom-scrollbar relative p-4" key={activeTab}>
          
          {activeTab === 'home' && (
            <div className="h-full flex flex-col items-center justify-start window-blur-entry-anim pt-4">
              <WindowFrame title="ROOT@HAKONIWA-KERNEL:~" className="w-full max-w-5xl h-[10000px]" contentBg="bg-black">
                <div className="dos-font crt-glow text-[#00ff41] space-y-4 text-sm md:text-base p-2">
                  <div className="mb-6 opacity-90 leading-tight">
                    <p className="text-[#00ff41]/60">Hakoniwa Kernel 5.4.0-72-generic #81-Hakoniwa SMP Fri Dec 19 19:22:42 CST 2025 x86_64</p>
                    <p className="text-[#00ff41]/60 mt-1">The programs included with the Hakoniwa system are free software; the exact distribution terms for each program are described in the individual files in /usr/share/doc/*/copyright.</p>
                  </div>

                  <div className="space-y-1 font-mono">
                    <p><span className="text-[#00ff41] font-bold">root@hakoniwa</span>:<span className="text-blue-400">~</span># uname -a</p>
                    <p>Linux hakoniwa-kernel 5.4.0-stage-machine #1 SMP Mon Oct 21 19:10:21 UTC 20XX x86_64 GNU/Linux</p>
                    
                    <p className="pt-4"><span className="text-[#00ff41] font-bold">root@hakoniwa</span>:<span className="text-blue-400">~</span># dmesg | grep -i "ark-21"</p>
                    <p>[    0.892104] ark21-controller: Found Stage Machine Controller at 0x3f8, irq 4</p>
                    <p>[    0.910245] ark21-storage: Registered Ark-21 Ecological Vault v1.4</p>
                    <p>[    0.945211] ark21-vault: Decryption keys for [SEED-21] accepted. Sector locked.</p>
                    
                    <p className="pt-4"><span className="text-[#00ff41] font-bold">root@hakoniwa</span>:<span className="text-blue-400">~</span># df -h</p>
                    <div className="grid grid-cols-6 gap-2 border-b border-[#333] pb-1 opacity-60">
                      <span>Filesystem</span><span>Size</span><span>Used</span><span>Avail</span><span>Use%</span><span>Mounted on</span>
                    </div>
                    <div className="grid grid-cols-6 gap-2">
                      <span>/dev/sda1</span><span>120G</span><span>104G</span><span>10G</span><span>92%</span><span>/</span>
                      <span>/dev/sdb2</span><span>512M</span><span>488M</span><span>24M</span><span>95%</span><span>/mnt/ark_21</span>
                      <span>tmpfs</span><span>64G</span><span>2G</span><span>62G</span><span>3%</span><span>/run/matrix</span>
                    </div>

                    <p className="pt-4"><span className="text-[#00ff41] font-bold">root@hakoniwa</span>:<span className="text-blue-400">~</span># ls -la /artifacts/data/</p>
                    <div className="space-y-0.5 text-[#00ff41]/80">
                      <p>drwxr-xr-x  2 root root  4096 Oct 21 19:10 .</p>
                      <p>drwxr-xr-x 24 root root  4096 Oct 21 19:10 ..</p>
                      <p>-rw-r--r--  1 root root  2048 Oct 21 19:10 PROJECTS.LOG</p>
                      <p>-rw-------  1 root root 65536 Oct 21 19:10 FIGURES.DB</p>
                      <p>-rw-r--r--  1 root root  4096 Oct 21 19:10 CHAPTERS.DOC</p>
                      <p>-rwxr-xr-x  1 root root   256 Oct 21 19:10 MUSIC.SH</p>
                    </div>
                      <p className="pt-4"><span className="text-[#00ff41] font-bold">root@hakoniwa</span>:<span className="text-blue-400">~</span># gardenctl list-plans --all</p>
                      <div className="font-mono text-[#00ff41]/80">
                        <div className="grid grid-cols-[40px_1fr_80px_100px_120px] gap-x-4 gap-y-1 border-b border-[#333] pb-1 mb-1">
                          <span className="font-bold">ID</span>
                          <span className="font-bold">NAME</span>
                          <span className="font-bold">SECURITY</span>
                          <span className="font-bold">PERMISSION</span>
                          <span className="font-bold">STATUS</span>
                        </div>
                        <div className="grid grid-cols-[40px_1fr_80px_100px_120px] gap-x-4 gap-y-1 border-b border-[#333] pb-1 mb-1">
                          <span>01</span>
                          <span>箱庭计划</span>
                          <span>绝密</span>
                          <span>Ω-Black</span>
                          <span>ACTIVE</span>
                        </div>
                        <div className="grid grid-cols-[40px_1fr_80px_100px_120px] gap-x-4 gap-y-1 border-b border-[#333] pb-1 mb-1">
                          <span>02</span>
                          <span>π 极限计算计划</span>
                          <span>绝密</span>
                          <span>Ω-Black</span>
                          <span>COMPLETED</span>
                        </div>
                        <div className="grid grid-cols-[40px_1fr_80px_100px_120px] gap-x-4 gap-y-1 border-b border-[#333] pb-1 mb-1">
                          <span>03</span>
                          <span>忒休斯计划</span>
                          <span>绝密</span>
                          <span>Ω-Black</span>
                          <span>TERMINATED</span>
                        </div>
                        <div className="grid grid-cols-[40px_1fr_80px_100px_120px] gap-x-4 gap-y-1 border-b border-[#333] pb-1 mb-1">
                          <span>04</span>
                          <span>神经虚拟现实计划</span>
                          <span>绝密</span>
                          <span>Ω-Gray</span>
                          <span>LIMITED</span>
                        </div>
                        <div className="grid grid-cols-[40px_1fr_80px_100px_120px] gap-x-4 gap-y-1 border-b border-[#333] pb-1 mb-1">
                          <span>05</span>
                          <span>方舟计划（总案）</span>
                          <span>绝密</span>
                          <span>Ω-Black</span>
                          <span>FAILED</span>
                        </div>
                        <div className="grid grid-cols-[40px_1fr_80px_100px_120px] gap-x-4 gap-y-1 border-b border-[#333] pb-1 mb-1">
                          <span>06</span>
                          <span>21号方舟计划</span>
                          <span>绝密</span>
                          <span>Ω-Black</span>
                          <span>EXECUTING</span>
                        </div>
                        <div className="grid grid-cols-[40px_1fr_80px_100px_120px] gap-x-4 gap-y-1 border-b border-[#333] pb-1 mb-1">
                          <span>07</span>
                          <span>记忆清除 / 重构方案</span>
                          <span>绝密</span>
                          <span>Ω-Red</span>
                          <span>EXECUTED</span>
                        </div>
                        <div className="grid grid-cols-[40px_1fr_80px_100px_120px] gap-x-4 gap-y-1">
                          <span>08</span>
                          <span>管理员异常模块</span>
                          <span>绝密</span>
                          <span>UNKNOWN</span>
                          <span>UNCONTROLLED</span>
                        </div>
                      </div>
                      <div className="pt-4 font-mono text-[#00ff41]/80">
                        <p className="pb-2">字段说明</p>
                        
                        <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                          <div>
                            <p className="font-bold pb-1">STATUS（状态）</p>
                            <p className="pl-2">ACTIVE：仍在持续运行</p>
                            <p className="pl-2">COMPLETED：完成但不可逆</p>
                            <p className="pl-2">TERMINATED：人为终止</p>
                            <p className="pl-2">FAILED：结论失败</p>
                            <p className="pl-2">EXECUTING：已发射 / 已执行</p>
                            <p className="pl-2">UNCONTROLLED：失去控制</p>
                          </div>
                          <div>
                            <p className="font-bold pb-1">PERMISSION（权限）</p>
                            <p className="pl-2">Ω-Black：文明级 / 禁止公开</p>
                            <p className="pl-2">Ω-Gray ：受限科研权限</p>
                            <p className="pl-2">Ω-Red ：仅限单人执行</p>
                            <p className="pl-2">UNKNOWN：非人类或非授权来源</p>
                          </div>
                        </div>
                      </div>


                    <p className="pt-8 italic opacity-40">System monitoring active... Ark-21 Life Support: STABLE. Pi Calculation Status: COMPLETE.</p>
                    
                    <div className="mt-8 flex items-center gap-2">
                      <span><span className="text-[#00ff41] font-bold">root@hakoniwa</span>:<span className="text-blue-400">~</span>#</span>
                      <div className="w-3 h-5 bg-[#00ff41] blink"></div>
                    </div>
                  </div>
                </div>
              </WindowFrame>
            </div>
          )}

          {activeTab === 'worldview' && (
            <div className="flex flex-col gap-8 max-w-4xl mx-auto">
              {projects.map((p, index) => (
                <WindowFrame key={p.id} title={p.id} hoverEffect={true} animationDelay={`${index * 0.1}s`} forceAnimate={true} className="w-full">
                  <div className="space-y-4 crt-glow">
                    <h3 className="text-lg font-black tracking-widest text-[#00ff41] uppercase">{p.title}</h3>
                    <p className="text-xs text-[#00ff41]/80 font-bold leading-relaxed">{p.desc}</p>
                    <div className="flex justify-between items-center pt-3 border-t border-[#333]">
                      <span className="text-[9px] border border-[#00ff41] px-2 py-0.5 uppercase">{p.sub}</span>
                      {/* 为每个项目设置不同的链接 */}
                      <a 
                        href={p.link || "https://www.bilibili.com"} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-[#1a1a1a] border border-[#00ff41] px-4 py-1 text-[10px] hover:bg-[#00ff41] hover:text-black transition-all font-bold uppercase cursor-pointer inline-block"
                      >
                        Open
                      </a>
                    </div>
                  </div>
                </WindowFrame>
              ))}
            </div>
          )}

          {activeTab === 'characters' && (
            <div className="max-w-4xl mx-auto pb-20 space-y-4">
              <div className="mb-6 flex items-center gap-3 text-[#00ff41]/60 uppercase text-[10px] font-black tracking-[0.3em] px-2 window-blur-entry-anim">
                  <FileSearch size={14} /> Personnel Archives / Node: Hakoniwa-Final-Stability
              </div>
              {characters.map((c, idx) => {
                const isExpanded = expandedId === c.id;
                return (
                  <div key={c.id} className="w-full window-blur-entry-anim" style={{animationDelay: `${idx * 0.08}s`}}>
                    <div onClick={() => setExpandedId(isExpanded ? null : c.id)} className={`cursor-pointer border-2 transition-all p-3 flex justify-between items-center ${isExpanded ? 'bg-[#c3bcaf] border-[#8b867a] text-[#222]' : 'bg-[#d9d2c5] border-[#8b867a] text-[#333] shadow-[2px_2px_0px_rgba(0,0,0,0.3)] hover:translate-x-1'}`}>
                      <div className="flex items-center gap-4">
                        <span className="text-[10px] opacity-50 font-mono italic">[{c.id}]</span>
                        <h3 className="text-[12px] font-black uppercase tracking-widest">{c.name}</h3>
                      </div>
                      <ChevronRight className={`transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} size={16} />
                    </div>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[2000px] mt-4 mb-8' : 'max-h-0'}`}>
                      <div className="a4-container-wrapper">
                        <div className="a4-container custom-scrollbar shadow-2xl mx-auto window-blur-entry-anim">
                          <div className="stamp">{c.clearance.split(' / ')[0]}</div>
                          <div className="a4-header flex justify-between items-end">
                            <div>
                              <div className="text-[10px] font-black uppercase opacity-40 leading-none mb-1 tracking-tighter">HAKONIWA CORP. // PERS-FILE</div>
                              <h2 className="text-2xl font-black italic uppercase leading-none">{c.name}</h2>
                            </div>
                            <div className="text-right">
                              <div className="text-[10px] font-black opacity-40 uppercase">Access Grade</div>
                              <div className="text-xs font-bold text-red-800 tracking-widest uppercase">{c.clearance}</div>
                            </div>
                          </div>
                          <div className="space-y-8 overflow-y-auto pr-2 custom-scrollbar">
                            <section className="grid grid-cols-2 gap-x-10 gap-y-6 text-[11px] border-b border-dashed border-[#ccc] pb-6">
                              <div className="space-y-1">
                                <span className="font-black uppercase opacity-40 text-[9px] block">Primary Role</span>
                                <span className="font-bold underline">{c.role}</span>
                              </div>
                              <div className="space-y-1">
                                <span className="font-black uppercase opacity-40 text-[9px] block">Global Status</span>
                                <span className="font-bold bg-black text-white px-2 py-0.5">{c.status}</span>
                              </div>
                            </section>
                            <section className="space-y-6">
                              <div>
                                <h4 className="text-[10px] font-black uppercase border-l-4 border-black pl-2 mb-2">Subject Biography</h4>
                                <p className="text-[12px] leading-relaxed italic text-justify opacity-80">{c.bio}</p>
                              </div>
                              <div className="grid grid-cols-1 gap-4">
                                {c.details.map((detail, idx) => (
                                  <div key={idx} className="bg-white p-3 border border-[#eee] rounded-sm">
                                    <span className="text-[9px] font-black uppercase opacity-40 block mb-1">{detail.label}</span>
                                    <span className="text-[11px] leading-normal">{detail.value}</span>
                                  </div>
                                ))}
                              </div>
                              <div className="bg-red-50 p-4 border border-red-200">
                                <div className="flex items-center gap-2 mb-2">
                                  <ShieldAlert size={14} className="text-red-700" />
                                  <span className="text-[10px] font-black uppercase text-red-900 tracking-widest">System Analysis & Warnings</span>
                                </div>
                                <p className="text-[11px] font-bold text-red-800 leading-relaxed">{c.notes}</p>
                              </div>
                            </section>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

            {activeTab === 'chapters' && (
              <div className="max-w-4xl mx-auto pb-20">
                <div className="text-[10px] font-black text-[#00ff41]/40 mb-6 uppercase tracking-[0.4em] border-b border-[#333] pb-2 flex items-center gap-2 window-blur-entry-anim">
                  <BookOpen size={14} /> Local Drive: C:\\DOCUMENTS\\CHAPTER_ARCHIVES
                </div>
                <div className="space-y-4">
                  {storyChapters.map((ch, idx) => {
                    const isOpen = activeChapter === idx;
                    return (
                      <div key={ch.id} className="w-full window-blur-entry-anim" style={{animationDelay: `${idx * 0.08}s`}}>
                        <button onClick={() => setActiveChapter(isOpen ? null : idx)} className={`w-full text-left p-4 border-2 transition-all flex justify-between items-center group ${isOpen ? 'bg-[#00ff41] border-[#00ff41] text-black' : 'bg-[#111] border-[#333] text-[#00ff41]/60 hover:border-[#00ff41] hover:text-[#00ff41]'}`}>
                          <div className="flex items-center gap-4">
                            <span className={`text-[10px] font-mono ${isOpen ? 'text-black/50' : 'opacity-40'}`}>CH_{String(idx + 1).padStart(2, '0')}</span>
                            <h3 className="text-[13px] font-black uppercase tracking-widest">{ch.title.split('：')[1]}</h3>
                          </div>
                          {isOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                        </button>
                        <div className={`chapter-content-wrapper ${isOpen ? 'max-h-[3500px] opacity-100 py-6' : 'max-h-0 opacity-0'}`}>
                          <div className="a4-container-wrapper">
                            <div className="a4-container custom-scrollbar shadow-2xl origin-top window-blur-entry-anim">
                              <div className="stamp">SECRET</div>
                              <h2 className="text-xl font-black border-b-2 border-black pb-4 mb-6 text-center italic shrink-0 tracking-widest">{ch.title}</h2>
                              <div className="novel-text flex-1">
                                {ch.content.map((p, i) => (<p key={i}>{p}</p>))}
                              </div>
                              <div className="mt-8 pt-4 border-t border-black/10 flex flex-col items-center gap-1 shrink-0">
                                  <div className="text-[9px] font-mono opacity-30 uppercase tracking-[0.5em]">--- EOF / CHAPTER_END ---</div>
                                  <div className="text-[7px] opacity-20 font-mono">HAKONIWA_KERNEL_STAMP_{ch.id}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

          {activeTab === 'timeline' && (
            <div className="max-w-5xl mx-auto pb-20">
              <WindowFrame title="TIMELINE_EXPANDED.LOG" forceAnimate={true} contentBg="bg-[#0a0a0a]">
                <div className="space-y-8 relative px-4 md:px-12 py-8">
                  <div className="flex flex-col items-center mb-12 text-center border-b border-[#333] pb-6">
                    <Calendar size={32} className="text-[#00ff41] mb-2" />
                    <h2 className="text-2xl font-black tracking-[0.3em] text-[#00ff41] uppercase italic">主线历史档案库</h2>
                    <p className="text-[10px] text-[#00ff41]/50 mt-2 uppercase tracking-[0.2em]">Hakoniwa Chronological Data Retrieval // V3.0</p>
                  </div>
                  <div className="relative">
                    <div className="timeline-line hidden md:block"></div>
                    <div className="space-y-12">
                      {timelineData.map((item, index) => {
                        const isEven = index % 2 === 0;
                        return (
                          <div key={index} className={`relative flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                            <div className="flex-1 w-full window-blur-entry-anim" style={{animationDelay: `${index * 0.05}s`}}>
                              <div className={`p-4 border border-[#333] bg-[#111] hover:border-[#00ff41] transition-all group relative ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                                <div className={`absolute top-0 w-1 h-full bg-[#00ff41]/20 group-hover:bg-[#00ff41] transition-colors ${isEven ? 'right-0' : 'left-0'}`}></div>
                                <div className={`flex items-center gap-2 mb-2 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                                    <span className="text-[11px] font-black text-[#00ff41] bg-[#1a1a1a] border border-[#00ff41]/30 px-2 py-0.5 uppercase">{item.date}</span>
                                    <span className="text-[9px] font-bold text-[#333] bg-[#00ff41]/80 px-1 uppercase tracking-tighter">{item.tag}</span>
                                </div>
                                <h4 className="text-[13px] font-black uppercase text-white tracking-wide group-hover:text-[#00ff41] mb-2">{item.event}</h4>
                                <p className="text-[11px] text-white/50 leading-relaxed font-mono italic">{item.details}</p>
                              </div>
                            </div>
                            <div className="timeline-dot shrink-0 z-20 hidden md:block"></div>
                            <div className="flex-1 hidden md:block"></div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </WindowFrame>
            </div>
          )}

          {activeTab === 'music' && (
            <div className="space-y-8">
              <WindowFrame title="AUDIO_PROCESSOR.EXE" forceAnimate={true} contentBg="bg-[#111]" textColor="text-white">
                <div className="flex flex-col gap-6 font-mono">
                  <div className="flex flex-col md:flex-row gap-8 items-stretch">
                    <div className="w-full md:w-80 shrink-0 space-y-6">
                      <div className="relative border-4 border-[#333] bg-[#000] p-1 shadow-[4px_4px_0px_#000] group overflow-hidden">
                        <img src="https://www.diverse.direct/wp/wp-content/uploads/j_m_DVSP-0160.jpg" alt="Album Cover" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" />
                        <div className="absolute inset-0 pointer-events-none border border-[#00ff41]/20 shadow-inner"></div>
                      </div>
                      <div className="font-mono text-[11px] space-y-4 px-1">
                        <div className="border-b-2 border-[#00ff41]/30 pb-2">
                          <div className="text-[#00ff41] text-[9px] font-bold uppercase tracking-[0.2em] opacity-40 mb-1">Album Title</div>
                          <div className="text-white text-[15px] font-black italic leading-tight text-left">Tsukishiro Hikari – Everything</div>
                        </div>
                        <div className="flex justify-between border-b border-[#333] pb-1">
                          <span className="text-[#00ff41] font-bold uppercase tracking-tighter opacity-50">Model Number:</span>
                          <span className="text-white font-black">DVSP-0160</span>
                        </div>
                        <div className="flex justify-between border-b border-[#333] pb-1">
                          <span className="text-[#00ff41] font-bold uppercase tracking-tighter opacity-50">Release Date:</span>
                          <span className="text-white">2016/10/30</span>
                        </div>
                        <div className="flex justify-between border-b border-[#333] pb-1">
                          <span className="text-[#00ff41] font-bold uppercase tracking-tighter opacity-50">Illustrator:</span>
                          <span className="text-white underline">iraLION</span>
                        </div>
                        {/* 添加网易云链接 */}
                        <a 
                          href="https://music.163.com/#/album?id=352298817" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block w-full bg-[#00ff41] text-black text-center py-2 font-bold text-[12px] uppercase tracking-wider hover:bg-white transition-all mt-2"
                        >
                          查看网易云音乐
                        </a>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col gap-4 min-w-0">
                      {/* 移除了原来的播放器部分，替换为简单的专辑信息展示 */}
                      <div className="bg-[#1a1a1a] p-5 border border-[#333] relative shadow-inner">
                        <div className="flex items-start gap-4 mb-6">
                          <div className="w-12 h-12 bg-black border border-[#00ff41]/30 flex items-center justify-center shrink-0">
                            <Music className="text-[#00ff41]" size={24} />
                          </div>
                          <div className="min-w-0">
                            <div className="text-[10px] text-[#00ff41] font-bold mb-1 tracking-[0.2em] uppercase opacity-60 italic">Album Information</div>
                            <h2 className="text-2xl font-black italic tracking-tighter text-white">Everything</h2>
                            <div className="text-[10px] text-white/50 font-bold mt-1 tracking-widest uppercase">Tsukishiro Hikari // Diverse System</div>
                          </div>
                        </div>
                        <div className="text-[12px] text-white/80 leading-relaxed">
                          <p className="mb-3">《Everything》是由月代采创作的电子音乐歌曲专辑。</p>
                          <p>该专辑收录了多首电子音乐作品，融合了科技感与情感表达，展现了独特的音乐风格。</p>
                        </div>
                      </div>
                      
                      <div className="flex-1 bg-[#0a0a0a] border border-[#333] overflow-hidden flex flex-col min-h-[250px]">
                        <div className="overflow-y-auto custom-scrollbar flex-1">
                          {disc1Tracks.map((track) => (
                            <div key={track.id} className={`flex items-center justify-between p-3 px-4 transition-all border-b border-[#111]`}>
                              <div className="flex items-center gap-4">
                                <span className={`text-[10px] font-mono `}>{track.id}</span>
                                <span className={`text-[12px] font-bold uppercase tracking-tighter ${track.id === '04' ? '' : 'text-white'}`}>{track.title}</span>
                              </div>
                              <span className="text-[10px] text-white/50">{track.artist}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </WindowFrame>
            </div>
          )}
        </main>
      </div>

      <footer className="bg-[#d9d2c5] text-[#222] p-1 px-4 flex justify-between items-center text-[10px] border-t-2 border-[#8b867a] z-50 font-bold uppercase shrink-0">
        <div className="flex gap-4">
          <span className="bg-[#222] text-[#00ff41] px-2">Authorized</span>
          <span>Access Level: Ω-BLACK</span>
        </div>
        <span>System Stability: 98.42%</span>
      </footer>
    </div>
  );
};

export default App;