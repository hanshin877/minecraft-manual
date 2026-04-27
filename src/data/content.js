export const controls = [
  {
    id: 1,
    title: "이동하기",
    emoji: "🚶",
    keys: ["W", "A", "S", "D"],
    description: "W=앞으로, S=뒤로, A=왼쪽, D=오른쪽으로 움직여요",
    tip: "Shift 키를 누르면 살금살금 걸어요 (절벽에서 안 떨어져요!)"
  },
  {
    id: 2,
    title: "점프하기",
    emoji: "🦘",
    keys: ["Space"],
    description: "스페이스바를 누르면 점프해요",
    tip: "물에서 스페이스바를 누르면 위로 올라와요"
  },
  {
    id: 3,
    title: "블록 부수기",
    emoji: "⛏️",
    keys: ["마우스 왼쪽"],
    description: "마우스 왼쪽 버튼을 꾹 누르면 블록을 부숴요",
    tip: "적절한 도구를 쓰면 훨씬 빨리 부술 수 있어요"
  },
  {
    id: 4,
    title: "블록 놓기",
    emoji: "🧱",
    keys: ["마우스 오른쪽"],
    description: "마우스 오른쪽 버튼을 누르면 손에 든 블록을 놓아요",
    tip: "몸을 향해 놓으면 자기 자신에게 놓이지 않아요"
  },
  {
    id: 5,
    title: "인벤토리 열기",
    emoji: "🎒",
    keys: ["E"],
    description: "E 키를 누르면 가방(인벤토리)을 열어요",
    tip: "여기서 아이템을 정리하고 제작대를 사용해요"
  },
  {
    id: 6,
    title: "달리기",
    emoji: "🏃",
    keys: ["W 두번"],
    description: "W키를 빠르게 두 번 누르면 달려요",
    tip: "달리면 배가 더 빨리 고파요"
  },
  {
    id: 7,
    title: "웅크리기",
    emoji: "🙇",
    keys: ["Shift"],
    description: "Shift를 누르면 웅크려요 - 절벽에서 안 떨어져요",
    tip: "다리를 건설할 때 꼭 써요!"
  },
  {
    id: 8,
    title: "채팅/명령어",
    emoji: "💬",
    keys: ["T"],
    description: "T를 누르면 채팅창이 열려요",
    tip: "/gamemode creative 를 치면 창작 모드가 돼요"
  },
];

export const items = [
  {
    id: 1,
    category: "도구",
    emoji: "⛏️",
    name: "나무 곡괭이",
    description: "돌을 캘 수 있는 첫 번째 도구예요",
    howToGet: "나무 막대기 2개 + 나무 판자 3개로 만들어요",
    uses: "돌, 석탄 등 기본 광물 채굴",
    color: "#8B4513"
  },
  {
    id: 2,
    category: "도구",
    emoji: "🪓",
    name: "도끼",
    description: "나무를 빠르게 자르는 도구예요",
    howToGet: "나무 막대기 2개 + 나무 판자 3개로 만들어요",
    uses: "나무 블록을 빠르게 부수기",
    color: "#8B4513"
  },
  {
    id: 3,
    category: "도구",
    emoji: "🗡️",
    name: "검",
    description: "몬스터를 물리치는 무기예요",
    howToGet: "나무 막대기 1개 + 나무 판자 2개로 만들어요",
    uses: "몬스터 공격, 식물 자르기",
    color: "#C0C0C0"
  },
  {
    id: 4,
    category: "음식",
    emoji: "🍖",
    name: "익힌 돼지고기",
    description: "배고플 때 먹으면 체력이 많이 찬요",
    howToGet: "생 돼지고기를 화로에서 구워요",
    uses: "배고픔 8 회복",
    color: "#FF6B35"
  },
  {
    id: 5,
    category: "음식",
    emoji: "🍞",
    name: "빵",
    description: "밀로 만드는 기본 식량이에요",
    howToGet: "밀 3개로 만들어요",
    uses: "배고픔 5 회복",
    color: "#D4A574"
  },
  {
    id: 6,
    category: "블록",
    emoji: "🪨",
    name: "돌",
    description: "땅 아래에 있는 기본 블록이에요",
    howToGet: "곡괭이로 자연 석재를 캐면 조약돌이 돼요",
    uses: "건축, 화로 만들기",
    color: "#808080"
  },
  {
    id: 7,
    category: "블록",
    emoji: "🌲",
    name: "나무 원목",
    description: "나무에서 얻는 가장 기본 재료예요",
    howToGet: "나무를 손이나 도끼로 부수면 얻어요",
    uses: "나무 판자로 가공, 건축",
    color: "#5C4033"
  },
  {
    id: 8,
    category: "특수",
    emoji: "💎",
    name: "다이아몬드",
    description: "가장 귀한 광물이에요! 최강 도구를 만들 수 있어요",
    howToGet: "깊은 지하(Y=16 이하)에서 다이아몬드 곡괭이로 캐요",
    uses: "최강 갑옷, 도구, 무기 제작",
    color: "#00BFFF"
  },
  {
    id: 9,
    category: "특수",
    emoji: "🔥",
    name: "화로",
    description: "음식을 익히고 광물을 제련해요",
    howToGet: "조약돌 8개로 만들어요",
    uses: "음식 요리, 철/금 제련",
    color: "#808080"
  },
  {
    id: 10,
    category: "블록",
    emoji: "🛏️",
    name: "침대",
    description: "잠을 자면 낮이 되고 리스폰 위치가 바뀌어요",
    howToGet: "양털 3개 + 나무 판자 3개로 만들어요",
    uses: "밤 건너뛰기, 부활 위치 설정",
    color: "#FF6B6B"
  },
];

export const recipes = [
  {
    id: 1,
    name: "나무 판자",
    emoji: "🪵",
    result: "나무 판자 4개",
    ingredients: ["나무 원목 1개"],
    grid: [
      ["나무원목", "", ""],
      ["", "", ""],
      ["", "", ""]
    ],
    tip: "첫 번째로 만들어야 할 아이템이에요!",
    category: "기본"
  },
  {
    id: 2,
    name: "막대기",
    emoji: "🥢",
    result: "막대기 4개",
    ingredients: ["나무 판자 2개"],
    grid: [
      ["판자", "", ""],
      ["판자", "", ""],
      ["", "", ""]
    ],
    tip: "도구를 만드는 데 꼭 필요해요",
    category: "기본"
  },
  {
    id: 3,
    name: "제작대",
    emoji: "🔨",
    result: "제작대 1개",
    ingredients: ["나무 판자 4개"],
    grid: [
      ["판자", "판자", ""],
      ["판자", "판자", ""],
      ["", "", ""]
    ],
    tip: "3x3 제작법을 쓰려면 꼭 필요해요",
    category: "기본"
  },
  {
    id: 4,
    name: "나무 곡괭이",
    emoji: "⛏️",
    result: "나무 곡괭이 1개",
    ingredients: ["나무 판자 3개", "막대기 2개"],
    grid: [
      ["판자", "판자", "판자"],
      ["", "막대기", ""],
      ["", "막대기", ""]
    ],
    tip: "돌을 캐려면 곡괭이가 꼭 필요해요",
    category: "도구"
  },
  {
    id: 5,
    name: "나무 검",
    emoji: "🗡️",
    result: "나무 검 1개",
    ingredients: ["나무 판자 2개", "막대기 1개"],
    grid: [
      ["", "판자", ""],
      ["", "판자", ""],
      ["", "막대기", ""]
    ],
    tip: "첫날 밤을 버티는 데 도움이 돼요",
    category: "무기"
  },
  {
    id: 6,
    name: "화로",
    emoji: "🔥",
    result: "화로 1개",
    ingredients: ["조약돌 8개"],
    grid: [
      ["돌", "돌", "돌"],
      ["돌", "", "돌"],
      ["돌", "돌", "돌"]
    ],
    tip: "음식을 익혀서 더 많은 체력을 회복해요",
    category: "기본"
  },
  {
    id: 7,
    name: "침대",
    emoji: "🛏️",
    result: "침대 1개",
    ingredients: ["양털 3개", "나무 판자 3개"],
    grid: [
      ["", "", ""],
      ["양털", "양털", "양털"],
      ["판자", "판자", "판자"]
    ],
    tip: "밤에 자면 몬스터가 안 나와요!",
    category: "기본"
  },
  {
    id: 8,
    name: "돌 곡괭이",
    emoji: "⛏️",
    result: "돌 곡괭이 1개",
    ingredients: ["조약돌 3개", "막대기 2개"],
    grid: [
      ["돌", "돌", "돌"],
      ["", "막대기", ""],
      ["", "막대기", ""]
    ],
    tip: "나무 곡괭이보다 훨씬 빠르고 튼튼해요",
    category: "도구"
  },
  {
    id: 9,
    name: "빵",
    emoji: "🍞",
    result: "빵 1개",
    ingredients: ["밀 3개"],
    grid: [
      ["", "", ""],
      ["밀", "밀", "밀"],
      ["", "", ""]
    ],
    tip: "밭을 만들어서 밀을 키우면 음식 걱정 없어요",
    category: "음식"
  },
  {
    id: 10,
    name: "사다리",
    emoji: "🪜",
    result: "사다리 3개",
    ingredients: ["막대기 7개"],
    grid: [
      ["막대기", "", "막대기"],
      ["막대기", "막대기", "막대기"],
      ["막대기", "", "막대기"]
    ],
    tip: "집을 높게 지을 때 유용해요",
    category: "건축"
  },
];

export const monsters = [
  {
    id: 1,
    name: "좀비",
    emoji: "🧟",
    danger: 2,
    description: "밤에 나타나는 느린 몬스터예요",
    weakness: "낮(햇빛)에 불타요",
    attack: "근접 공격",
    drop: "썩은 살점, 가끔 철 주괴",
    tip: "검으로 치고 뒤로 물러나는 걸 반복하면 이겨요!",
    color: "#4CAF50"
  },
  {
    id: 2,
    name: "스켈레톤",
    emoji: "💀",
    danger: 3,
    description: "활을 쏘는 뼈다귀 몬스터예요",
    weakness: "햇빛에 불타요, 가까이 붙으면 약해요",
    attack: "화살 원거리 공격",
    drop: "뼈, 화살",
    tip: "가까이 붙어서 검으로 공격하면 활을 못 쏴요!",
    color: "#E0E0E0"
  },
  {
    id: 3,
    name: "크리퍼",
    emoji: "💣",
    danger: 4,
    description: "소리 없이 다가와서 폭발하는 제일 무서운 몬스터예요!",
    weakness: "고양이를 무서워해요",
    attack: "폭발! 건물도 부숴요",
    drop: "화약",
    tip: "쉬익 소리가 나면 빨리 도망가세요! 검으로 치고 바로 뒤로 달려요",
    color: "#4CAF50"
  },
  {
    id: 4,
    name: "거미",
    emoji: "🕷️",
    danger: 2,
    description: "벽을 타고 올라올 수 있어요",
    weakness: "낮에는 중립적이에요",
    attack: "물기 공격",
    drop: "거미줄, 거미 눈",
    tip: "높은 곳에 있어도 안전하지 않아요! 주변을 잘 살펴요",
    color: "#424242"
  },
  {
    id: 5,
    name: "엔더맨",
    emoji: "👾",
    danger: 3,
    description: "키가 아주 큰 검은 몬스터예요",
    weakness: "물을 싫어해요",
    attack: "쳐다보면 공격해요",
    drop: "엔더 진주",
    tip: "눈을 마주치지 마세요! 쳐다보면 화내요",
    color: "#7B1FA2"
  },
  {
    id: 6,
    name: "슬라임",
    emoji: "🟢",
    danger: 1,
    description: "통통 튀어다니는 초록색 몬스터예요",
    weakness: "특별한 약점 없음",
    attack: "점프해서 공격",
    drop: "슬라임 공",
    tip: "쓰러뜨리면 작은 슬라임으로 나뉘어요. 작은 건 별로 안 아파요",
    color: "#8BC34A"
  },
  {
    id: 7,
    name: "마녀",
    emoji: "🧙",
    danger: 3,
    description: "물약을 던지는 마녀예요",
    weakness: "근접 공격에 약해요",
    attack: "독 물약, 슬로우 물약 투척",
    drop: "물약 재료들",
    tip: "가까이 붙어서 검으로 빠르게 공격해요",
    color: "#512DA8"
  },
  {
    id: 8,
    name: "블레이즈",
    emoji: "🔥",
    danger: 4,
    description: "네더(지옥)에 사는 불 몬스터예요",
    weakness: "눈덩이로 공격하면 효과적이에요",
    attack: "불덩이 3개 연속 발사",
    drop: "블레이즈 막대",
    tip: "눈덩이를 많이 준비해서 가세요!",
    color: "#FF6F00"
  },
];

export const survivalGuide = [
  {
    id: 1,
    day: "첫째 날",
    emoji: "🌅",
    title: "살아남기 위한 첫 번째 임무!",
    color: "#FF9800",
    steps: [
      { step: 1, icon: "🌲", text: "나무를 4~5개 베세요 (손으로도 가능해요)" },
      { step: 2, icon: "🪵", text: "인벤토리(E)를 열어서 나무 판자를 만드세요" },
      { step: 3, icon: "🔨", text: "제작대를 만들어서 땅에 놓으세요" },
      { step: 4, icon: "⛏️", text: "나무 곡괭이와 나무 검을 만드세요" },
      { step: 5, icon: "🪨", text: "돌을 10개 이상 캐세요" },
      { step: 6, icon: "🔥", text: "화로를 만드세요 (조약돌 8개)" },
      { step: 7, icon: "🏠", text: "해가 지기 전에 간단한 집을 만드세요!" },
    ],
    warning: "해가 지면 좀비와 스켈레톤이 나와요! 꼭 집을 만드세요"
  },
  {
    id: 2,
    day: "2~3일차",
    emoji: "🌤️",
    title: "기본을 다지는 시간!",
    color: "#4CAF50",
    steps: [
      { step: 1, icon: "🍖", text: "동물(소, 돼지, 닭)을 사냥해서 음식을 만드세요" },
      { step: 2, icon: "🌾", text: "밀 씨앗을 찾아서 밭을 만드세요" },
      { step: 3, icon: "⛏️", text: "돌 도구 세트를 만드세요 (곡괭이, 도끼, 검)" },
      { step: 4, icon: "🏠", text: "집을 더 튼튼하게 만드세요 (돌로)" },
      { step: 5, icon: "🛏️", text: "침대를 만드세요 (양털 3개 + 판자 3개)" },
      { step: 6, icon: "⬇️", text: "지하를 파기 시작해서 석탄과 철을 찾으세요" },
    ],
    warning: "배고픔 바가 비면 체력이 깎여요! 음식을 항상 챙기세요"
  },
  {
    id: 3,
    day: "4~7일차",
    emoji: "⛏️",
    title: "광산 탐험을 시작해요!",
    color: "#2196F3",
    steps: [
      { step: 1, icon: "🔦", text: "횃불을 많이 만드세요 (석탄 + 막대기)" },
      { step: 2, icon: "🪜", text: "사다리를 만들어서 깊이 내려가세요" },
      { step: 3, icon: "⚙️", text: "철을 캐서 철 갑옷과 철 도구를 만드세요" },
      { step: 4, icon: "💎", text: "더 깊이 내려가면 금과 다이아몬드가 있어요" },
      { step: 5, icon: "🗺️", text: "길을 잃지 않게 횃불로 표시하면서 다니세요" },
    ],
    warning: "지하에는 용암이 있어요! 조심조심 다니세요"
  },
  {
    id: 4,
    day: "안전 수칙",
    emoji: "⚠️",
    title: "꼭 기억하세요!",
    color: "#F44336",
    steps: [
      { step: 1, icon: "🛏️", text: "침대에서 자면 그곳이 부활 장소가 돼요" },
      { step: 2, icon: "💾", text: "중요한 아이템은 집에 보관하세요" },
      { step: 3, icon: "🔦", text: "어두운 곳엔 횃불을 켜세요 (몬스터 방지)" },
      { step: 4, icon: "🏃", text: "위험하면 도망가는 게 최선이에요" },
      { step: 5, icon: "🥗", text: "음식을 항상 20개 이상 가지고 다녀요" },
    ],
    warning: "죽으면 가지고 있던 아이템을 모두 떨어트려요!"
  },
];

export const quizQuestions = [
  {
    id: 1,
    question: "마인크래프트에서 앞으로 이동하는 키는 무엇인가요?",
    emoji: "🎮",
    options: ["W", "A", "S", "D"],
    answer: 0,
    explanation: "W=앞, A=왼쪽, S=뒤, D=오른쪽이에요!"
  },
  {
    id: 2,
    question: "첫날 밤을 안전하게 보내려면 무엇을 만들어야 할까요?",
    emoji: "🌙",
    options: ["검", "집(쉘터)", "침대", "화로"],
    answer: 1,
    explanation: "집을 만들면 몬스터를 피할 수 있어요!"
  },
  {
    id: 3,
    question: "나무 판자 4개를 만들려면 무엇이 필요한가요?",
    emoji: "🪵",
    options: ["막대기 4개", "나무 원목 1개", "돌 4개", "나무 판자 2개"],
    answer: 1,
    explanation: "나무 원목 1개로 나무 판자 4개를 만들 수 있어요!"
  },
  {
    id: 4,
    question: "크리퍼는 어떤 공격을 하나요?",
    emoji: "💣",
    options: ["화살을 쏴요", "물어요", "폭발해요", "불을 뿜어요"],
    answer: 2,
    explanation: "크리퍼는 쉬익 소리를 내다가 폭발해요! 빨리 도망가세요!"
  },
  {
    id: 5,
    question: "화로를 만들려면 무엇이 몇 개 필요한가요?",
    emoji: "🔥",
    options: ["나무 판자 8개", "조약돌 8개", "돌 4개", "철 8개"],
    answer: 1,
    explanation: "조약돌 8개를 제작대에서 ㅁ 모양으로 놓으면 화로가 돼요!"
  },
  {
    id: 6,
    question: "인벤토리(가방)를 열려면 어떤 키를 눌러야 하나요?",
    emoji: "🎒",
    options: ["I", "E", "B", "Tab"],
    answer: 1,
    explanation: "E 키를 누르면 인벤토리가 열려요!"
  },
  {
    id: 7,
    question: "스켈레톤의 약점은 무엇인가요?",
    emoji: "💀",
    options: ["물", "햇빛", "돌", "검"],
    answer: 1,
    explanation: "스켈레톤은 낮에 햇빛을 받으면 불타요!"
  },
  {
    id: 8,
    question: "침대를 만들려면 무엇이 필요한가요?",
    emoji: "🛏️",
    options: ["철 3개 + 판자 3개", "양털 3개 + 판자 3개", "양털 6개", "판자 6개"],
    answer: 1,
    explanation: "양털 3개와 나무 판자 3개로 침대를 만들 수 있어요!"
  },
  {
    id: 9,
    question: "다이아몬드는 어디서 주로 발견되나요?",
    emoji: "💎",
    options: ["땅 위 동굴", "깊은 지하(Y=16 이하)", "바다 속", "산 정상"],
    answer: 1,
    explanation: "다이아몬드는 아주 깊은 곳(Y=16 이하)에서 발견돼요!"
  },
  {
    id: 10,
    question: "엔더맨이 화내는 이유는 무엇인가요?",
    emoji: "👾",
    options: ["공격했을 때", "눈을 마주쳤을 때", "가까이 다가갔을 때", "소리를 냈을 때"],
    answer: 1,
    explanation: "엔더맨은 눈을 마주치면 화내요! 쳐다보지 마세요!"
  },
  {
    id: 11,
    question: "절벽에서 떨어지지 않으려면 어떤 키를 눌러야 하나요?",
    emoji: "🏔️",
    options: ["Ctrl", "Alt", "Shift", "Space"],
    answer: 2,
    explanation: "Shift를 누르면 웅크려서 절벽 끝에서 안 떨어져요!"
  },
  {
    id: 12,
    question: "빵을 만들려면 무엇이 필요한가요?",
    emoji: "🍞",
    options: ["밀 2개", "밀 3개", "밀가루 1개", "밀 5개"],
    answer: 1,
    explanation: "밀 3개를 제작대에 나란히 놓으면 빵이 만들어져요!"
  },
  {
    id: 13,
    question: "달리기를 하려면 어떻게 해야 하나요?",
    emoji: "🏃",
    options: ["Ctrl + W", "W를 빠르게 두 번", "Shift + W", "Alt + W"],
    answer: 1,
    explanation: "W키를 빠르게 두 번 누르면 달려요!"
  },
  {
    id: 14,
    question: "블레이즈(Blaze)의 약점은 무엇인가요?",
    emoji: "🔥",
    options: ["물", "눈덩이", "검", "화살"],
    answer: 1,
    explanation: "눈덩이를 던지면 블레이즈에게 효과적이에요!"
  },
  {
    id: 15,
    question: "나무 곡괭이를 만들려면 무엇이 필요한가요?",
    emoji: "⛏️",
    options: ["판자 2개 + 막대기 3개", "판자 3개 + 막대기 2개", "돌 3개 + 막대기 2개", "판자 4개"],
    answer: 1,
    explanation: "나무 판자 3개 + 막대기 2개로 나무 곡괭이를 만들 수 있어요!"
  },
];

export const communityLinks = [
  {
    category: "유튜브 채널",
    emoji: "▶️",
    color: "#FF0000",
    links: [
      {
        name: "잠뚜덥",
        desc: "한국 최고 마인크래프트 유튜버! 재밌는 영상 많아요",
        emoji: "⭐",
        url: "https://www.youtube.com/@jamdud0",
        badge: "인기"
      },
      {
        name: "양띵",
        desc: "마인크래프트 레전드 유튜버! 다양한 콘텐츠",
        emoji: "🐑",
        url: "https://www.youtube.com/@yangdding",
        badge: "레전드"
      },
      {
        name: "도티",
        desc: "어린이 친구들이 좋아하는 마인크래프트 채널",
        emoji: "👦",
        url: "https://www.youtube.com/@DOTY",
        badge: "어린이 추천"
      },
      {
        name: "잠뚜룹",
        desc: "귀엽고 재미있는 마인크래프트 콘텐츠",
        emoji: "🎮",
        url: "https://www.youtube.com/@jamduroop",
        badge: "인기"
      },
    ]
  },
  {
    category: "커뮤니티",
    emoji: "💬",
    color: "#4ade80",
    links: [
      {
        name: "마인크래프트 위키 (한국어)",
        desc: "모든 아이템, 블록, 레시피 정보가 다 있어요",
        emoji: "📖",
        url: "https://minecraft.wiki/w/Minecraft_Wiki",
        badge: "필수"
      },
      {
        name: "마인크래프트 공식 사이트",
        desc: "마인크래프트 공식 홈페이지",
        emoji: "🌐",
        url: "https://www.minecraft.net/ko-kr",
        badge: "공식"
      },
      {
        name: "네이버 마인크래프트 카페",
        desc: "한국 마인크래프트 유저들의 커뮤니티",
        emoji: "☕",
        url: "https://cafe.naver.com/minecraftpe",
        badge: "커뮤니티"
      },
    ]
  },
  {
    category: "도움이 되는 사이트",
    emoji: "🛠️",
    color: "#f59e0b",
    links: [
      {
        name: "Crafting Calculator",
        desc: "레시피를 쉽게 찾아볼 수 있어요",
        emoji: "⚒️",
        url: "https://minecraft.wiki/w/Crafting",
        badge: "레시피"
      },
      {
        name: "마인크래프트 씨드 사이트",
        desc: "좋은 월드 씨앗을 찾을 수 있어요",
        emoji: "🌱",
        url: "https://www.chunkbase.com/",
        badge: "월드"
      },
    ]
  },
];

