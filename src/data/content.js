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
  // ── 도구 ──────────────────────────────────────────────
  { id: 1,  category: "도구", emoji: "⛏️", name: "나무 곡괭이",   description: "돌을 캘 수 있는 가장 기본 곡괭이예요",          howToGet: "나무 판자 3개 + 막대기 2개로 만들어요",    uses: "돌, 석탄 채굴",                         color: "#8B4513" },
  { id: 2,  category: "도구", emoji: "⛏️", name: "돌 곡괭이",    description: "나무보다 훨씬 빠르고 철도 캘 수 있어요",         howToGet: "조약돌 3개 + 막대기 2개로 만들어요",      uses: "철, 라피스라줄리 채굴",                  color: "#808080" },
  { id: 3,  category: "도구", emoji: "⛏️", name: "철 곡괭이",    description: "금, 에메랄드도 캘 수 있는 곡괭이예요",          howToGet: "철 주괴 3개 + 막대기 2개로 만들어요",     uses: "금, 에메랄드, 레드스톤 채굴",            color: "#C0C0C0" },
  { id: 4,  category: "도구", emoji: "⛏️", name: "다이아 곡괭이", description: "가장 강한 곡괭이! 흑요석도 캘 수 있어요",        howToGet: "다이아몬드 3개 + 막대기 2개로 만들어요",  uses: "흑요석, 모든 광물 채굴",                color: "#00BFFF" },
  { id: 5,  category: "도구", emoji: "🪓", name: "나무 도끼",    description: "나무를 빠르게 자르는 도구예요",                  howToGet: "나무 판자 3개 + 막대기 2개로 만들어요",   uses: "나무 블록 빠르게 부수기",               color: "#8B4513" },
  { id: 6,  category: "도구", emoji: "🪓", name: "철 도끼",      description: "나무를 아주 빠르게 자를 수 있어요",              howToGet: "철 주괴 3개 + 막대기 2개로 만들어요",     uses: "나무 블록 채굴, 무기로도 사용 가능",    color: "#C0C0C0" },
  { id: 7,  category: "도구", emoji: "🌱", name: "나무 괭이",    description: "흙을 갈아서 밭을 만드는 도구예요",               howToGet: "나무 판자 2개 + 막대기 2개로 만들어요",   uses: "농경지(밭) 만들기",                     color: "#8B4513" },
  { id: 8,  category: "도구", emoji: "🌱", name: "철 괭이",      description: "밭을 빠르게 만드는 도구예요",                    howToGet: "철 주괴 2개 + 막대기 2개로 만들어요",     uses: "농경지 만들기, 일부 블록 채굴",         color: "#C0C0C0" },
  { id: 9,  category: "도구", emoji: "🪣", name: "나무 삽",      description: "흙, 모래, 자갈을 빠르게 파는 도구예요",          howToGet: "나무 판자 1개 + 막대기 2개로 만들어요",   uses: "흙/모래/자갈 채굴",                     color: "#8B4513" },
  { id: 10, category: "도구", emoji: "🪣", name: "철 삽",        description: "흙을 아주 빠르게 팔 수 있어요",                  howToGet: "철 주괴 1개 + 막대기 2개로 만들어요",     uses: "흙/모래/자갈 빠른 채굴",                color: "#C0C0C0" },
  { id: 11, category: "도구", emoji: "🎣", name: "낚싯대",       description: "물고기를 잡을 수 있는 도구예요",                 howToGet: "막대기 3개 + 실 2개로 만들어요",          uses: "물고기 낚기, 아이템 끌어당기기",       color: "#8B4513" },
  { id: 12, category: "도구", emoji: "✂️", name: "가위",         description: "양털을 자르고 나뭇잎을 캘 수 있어요",            howToGet: "철 주괴 2개로 만들어요",                  uses: "양털 채집, 나뭇잎/거미줄 채취",        color: "#C0C0C0" },
  { id: 13, category: "도구", emoji: "🪣", name: "양동이",       description: "물이나 용암을 담을 수 있어요",                   howToGet: "철 주괴 3개로 만들어요",                  uses: "물/용암 운반, 물고기 담기",             color: "#C0C0C0" },
  { id: 14, category: "도구", emoji: "🔭", name: "망원경",       description: "멀리 있는 것을 확대해서 볼 수 있어요",           howToGet: "수정 조각 1개 + 구리 주괴 2개로 만들어요",uses: "원거리 사물 확대 관찰",                 color: "#B87333" },

  // ── 무기 ──────────────────────────────────────────────
  { id: 15, category: "무기", emoji: "🗡️", name: "나무 검",      description: "가장 기본적인 전투 무기예요",                    howToGet: "나무 판자 2개 + 막대기 1개로 만들어요",   uses: "몬스터 공격(공격력 4)",                 color: "#8B4513" },
  { id: 16, category: "무기", emoji: "🗡️", name: "돌 검",        description: "나무 검보다 강한 검이에요",                      howToGet: "조약돌 2개 + 막대기 1개로 만들어요",      uses: "몬스터 공격(공격력 5)",                 color: "#808080" },
  { id: 17, category: "무기", emoji: "🗡️", name: "철 검",        description: "초반 최고의 검이에요",                           howToGet: "철 주괴 2개 + 막대기 1개로 만들어요",     uses: "몬스터 공격(공격력 6)",                 color: "#C0C0C0" },
  { id: 18, category: "무기", emoji: "🗡️", name: "다이아 검",    description: "가장 강한 검! 몬스터가 무서워해요",              howToGet: "다이아몬드 2개 + 막대기 1개로 만들어요",  uses: "몬스터 공격(공격력 7)",                 color: "#00BFFF" },
  { id: 19, category: "무기", emoji: "🏹", name: "활",            description: "멀리서 화살로 공격하는 원거리 무기예요",          howToGet: "막대기 3개 + 실 3개로 만들어요",          uses: "원거리 공격, 스켈레톤 대처에 유리",    color: "#8B4513" },
  { id: 20, category: "무기", emoji: "🏹", name: "화살",          description: "활에 사용하는 탄환이에요",                       howToGet: "부싯돌 1개 + 막대기 1개 + 깃털 1개",     uses: "활로 발사",                              color: "#808080" },
  { id: 21, category: "무기", emoji: "🛡️", name: "방패",          description: "공격을 막아주는 방어구예요",                     howToGet: "나무 판자 6개 + 철 주괴 1개로 만들어요",  uses: "오른쪽 클릭으로 공격 막기",            color: "#8B4513" },
  { id: 22, category: "무기", emoji: "🔱", name: "삼지창",        description: "던지거나 근접 공격 모두 가능한 무기예요",         howToGet: "드라운드(익사한 좀비)를 처치하면 얻어요", uses: "원거리·근접 모두 가능",                color: "#4682B4" },

  // ── 갑옷 ──────────────────────────────────────────────
  { id: 23, category: "갑옷", emoji: "🪖", name: "가죽 투구",    description: "가장 기본적인 머리 보호구예요",                  howToGet: "가죽 5개로 만들어요",                     uses: "머리 방어",                             color: "#8B4513" },
  { id: 24, category: "갑옷", emoji: "🦺", name: "가죽 흉갑",    description: "몸을 보호해주는 기본 갑옷이에요",                howToGet: "가죽 8개로 만들어요",                     uses: "몸통 방어",                             color: "#8B4513" },
  { id: 25, category: "갑옷", emoji: "👖", name: "가죽 레깅스",  description: "다리를 보호해주는 갑옷이에요",                   howToGet: "가죽 7개로 만들어요",                     uses: "다리 방어",                             color: "#8B4513" },
  { id: 26, category: "갑옷", emoji: "👟", name: "가죽 부츠",    description: "발을 보호해주는 기본 신발이에요",                howToGet: "가죽 4개로 만들어요",                     uses: "발 방어",                               color: "#8B4513" },
  { id: 27, category: "갑옷", emoji: "🪖", name: "철 투구",      description: "가죽보다 훨씬 튼튼한 투구예요",                  howToGet: "철 주괴 5개로 만들어요",                  uses: "머리 방어(방어력 ++)  ",                color: "#C0C0C0" },
  { id: 28, category: "갑옷", emoji: "🦺", name: "철 흉갑",      description: "초반 생존에 필수적인 갑옷이에요",                howToGet: "철 주괴 8개로 만들어요",                  uses: "몸통 방어(방어력 +++)",                 color: "#C0C0C0" },
  { id: 29, category: "갑옷", emoji: "👖", name: "철 레깅스",    description: "다리를 튼튼하게 보호해줘요",                     howToGet: "철 주괴 7개로 만들어요",                  uses: "다리 방어",                             color: "#C0C0C0" },
  { id: 30, category: "갑옷", emoji: "👟", name: "철 부츠",      description: "튼튼한 철로 만든 신발이에요",                    howToGet: "철 주괴 4개로 만들어요",                  uses: "발 방어",                               color: "#C0C0C0" },

  // ── 음식 ──────────────────────────────────────────────
  { id: 31, category: "음식", emoji: "🍖", name: "익힌 돼지고기", description: "배를 많이 채워주는 음식이에요",                 howToGet: "생 돼지고기를 화로에서 구워요",           uses: "배고픔 8 회복",                         color: "#FF6B35" },
  { id: 32, category: "음식", emoji: "🥩", name: "스테이크",      description: "가장 배부른 음식 중 하나예요",                   howToGet: "생 소고기를 화로에서 구워요",             uses: "배고픔 8 회복",                         color: "#8B0000" },
  { id: 33, category: "음식", emoji: "🍗", name: "익힌 닭고기",   description: "닭을 잡아서 구운 음식이에요",                    howToGet: "생 닭고기를 화로에서 구워요",             uses: "배고픔 6 회복",                         color: "#FFD700" },
  { id: 34, category: "음식", emoji: "🍞", name: "빵",            description: "밀로 만드는 기본 식량이에요",                    howToGet: "밀 3개로 제작대에서 만들어요",            uses: "배고픔 5 회복",                         color: "#D4A574" },
  { id: 35, category: "음식", emoji: "🍎", name: "황금 사과",     description: "먹으면 흡수와 재생 효과가 생겨요!",              howToGet: "사과 1개를 금 주괴 8개로 감싸서 만들어요",uses: "배고픔 4 회복 + 재생/흡수 효과",       color: "#FFD700" },
  { id: 36, category: "음식", emoji: "🥧", name: "호박 파이",     description: "달콤한 파이예요",                                howToGet: "호박 + 달걀 + 설탕으로 만들어요",         uses: "배고픔 8 회복",                         color: "#FF8C00" },
  { id: 37, category: "음식", emoji: "🍪", name: "쿠키",          description: "달콤한 쿠키예요 (앵무새도 좋아해요)",            howToGet: "밀 2개 + 코코아 열매 1개로 만들어요",    uses: "배고픔 2 회복 (8개 생성)",              color: "#8B4513" },
  { id: 38, category: "음식", emoji: "🎂", name: "케이크",        description: "생일 케이크! 7번 먹을 수 있어요",                howToGet: "밀 3개 + 달걀 1개 + 우유 3개 + 설탕 2개",uses: "배고픔 2씩 × 7조각 회복",              color: "#FFF8DC" },

  // ── 블록/건축 ─────────────────────────────────────────
  { id: 39, category: "블록", emoji: "🌲", name: "나무 원목",     description: "나무에서 얻는 가장 기본 재료예요",               howToGet: "나무를 손이나 도끼로 부수면 얻어요",      uses: "나무 판자 제작, 건축",                  color: "#5C4033" },
  { id: 40, category: "블록", emoji: "🪨", name: "조약돌",        description: "돌을 캐면 나오는 가장 흔한 블록이에요",          howToGet: "돌을 곡괭이로 캐면 얻어요",               uses: "화로, 도구, 건축",                      color: "#808080" },
  { id: 41, category: "블록", emoji: "🪟", name: "유리",          description: "투명한 블록이에요, 빛이 통과해요",               howToGet: "모래를 화로에서 구우면 얻어요",           uses: "창문, 건축 장식",                       color: "#87CEEB" },
  { id: 42, category: "블록", emoji: "🚪", name: "나무 문",       description: "집 출입구를 만드는 문이에요",                    howToGet: "나무 판자 6개로 만들어요",                uses: "집 출입, 몬스터 차단",                  color: "#8B4513" },
  { id: 43, category: "블록", emoji: "🪵", name: "울타리",        description: "동물을 가두고 경계를 만드는 블록이에요",          howToGet: "나무 판자 4개 + 막대기 2개로 만들어요",   uses: "동물 농장, 집 울타리",                  color: "#8B4513" },
  { id: 44, category: "블록", emoji: "💡", name: "횃불",          description: "어둠을 밝히고 몬스터를 막아줘요",                howToGet: "석탄/목탄 1개 + 막대기 1개로 만들어요",  uses: "조명, 몬스터 스폰 방지",               color: "#FFA500" },
  { id: 45, category: "블록", emoji: "🛏️", name: "침대",         description: "잠을 자면 낮이 되고 부활 지점이 바뀌어요",        howToGet: "양털 3개 + 나무 판자 3개로 만들어요",     uses: "밤 건너뛰기, 부활 위치 설정",           color: "#FF6B6B" },

  // ── 재료 ──────────────────────────────────────────────
  { id: 46, category: "재료", emoji: "⚙️", name: "철 주괴",       description: "도구와 갑옷의 핵심 재료예요",                    howToGet: "철광석을 화로에서 제련하면 얻어요",       uses: "도구, 갑옷, 레일 등 제작",             color: "#C0C0C0" },
  { id: 47, category: "재료", emoji: "🌕", name: "금 주괴",        description: "빠른 도구와 황금 갑옷을 만들어요",               howToGet: "금광석을 화로에서 제련하면 얻어요",       uses: "황금 도구, 갑옷, 시계, 레일 제작",     color: "#FFD700" },
  { id: 48, category: "재료", emoji: "📄", name: "종이",           description: "책과 지도를 만드는 재료예요",                    howToGet: "사탕수수 3개로 만들어요",                 uses: "책, 지도, 현수막 제작",                 color: "#FFFACD" },
  { id: 49, category: "재료", emoji: "📚", name: "책",             description: "인챈트 테이블과 책장을 만드는 재료예요",          howToGet: "종이 3개 + 가죽 1개로 만들어요",          uses: "책장, 인챈트 테이블, 책과 깃펜 제작",  color: "#8B4513" },
  { id: 50, category: "재료", emoji: "🧵", name: "실",             description: "활, 낚싯대, 양탄자를 만들어요",                  howToGet: "거미나 동굴 거미를 잡으면 얻어요",        uses: "활, 낚싯대, 현수막, 양탄자 제작",      color: "#F5F5F5" },

  // ── 특수/마법 ─────────────────────────────────────────
  { id: 51, category: "특수", emoji: "💎", name: "다이아몬드",    description: "가장 귀한 광물! 최강 장비를 만들 수 있어요",     howToGet: "깊은 지하(Y=16 이하)에서 철 곡괭이 이상으로 캐요", uses: "최강 도구, 무기, 갑옷 제작",   color: "#00BFFF" },
  { id: 52, category: "특수", emoji: "🔥", name: "화로",           description: "음식을 익히고 광물을 제련해요",                  howToGet: "조약돌 8개로 만들어요",                   uses: "음식 요리, 철/금/유리 제련",           color: "#808080" },
  { id: 53, category: "특수", emoji: "✨", name: "인챈트 테이블", description: "도구와 갑옷에 마법을 부여해요",                  howToGet: "다이아몬드 2개 + 흑요석 4개 + 책 1개",   uses: "아이템에 특수 마법 부여",              color: "#4B0082" },
  { id: 54, category: "특수", emoji: "⚒️", name: "모루",          description: "아이템을 수리하고 마법 책을 합칠 수 있어요",      howToGet: "철 블록 3개 + 철 주괴 4개로 만들어요",    uses: "아이템 수리, 이름 변경, 마법 합치기", color: "#808080" },
  { id: 55, category: "특수", emoji: "🧭", name: "나침반",        description: "월드 스폰 지점을 가리켜요",                       howToGet: "철 주괴 4개 + 레드스톤 가루 1개로 만들어요",uses: "집 방향 찾기",                        color: "#C0C0C0" },
  { id: 56, category: "특수", emoji: "🗺️", name: "지도",          description: "돌아다닌 지형을 그림으로 보여줘요",               howToGet: "종이 8개 + 나침반 1개로 만들어요",        uses: "지형 탐색, 위치 확인",                  color: "#8B4513" },

  // ── 레드스톤 ──────────────────────────────────────────
  { id: 57, category: "레드스톤", emoji: "🔴", name: "레드스톤 가루",  description: "전기처럼 신호를 전달하는 가루예요",          howToGet: "레드스톤 광석을 철 곡괭이로 캐면 얻어요",  uses: "레드스톤 회로, 각종 장치 제작",       color: "#FF0000" },
  { id: 58, category: "레드스톤", emoji: "🕹️", name: "레버",         description: "켜고 끌 수 있는 스위치예요",                  howToGet: "막대기 1개 + 조약돌 1개로 만들어요",      uses: "문, 피스톤 등 작동",                   color: "#808080" },
  { id: 59, category: "레드스톤", emoji: "🔘", name: "버튼",          description: "누르면 잠깐 신호를 보내는 버튼이에요",          howToGet: "나무 판자 1개 또는 돌 1개로 만들어요",    uses: "문, 함정 등 작동",                      color: "#808080" },
  { id: 60, category: "레드스톤", emoji: "📡", name: "피스톤",        description: "블록을 밀어내는 기계예요",                      howToGet: "나무 판자 3개 + 조약돌 4개 + 철 1개 + 레드스톤 1개", uses: "블록 이동, 자동 문 제작",    color: "#808080" },
];

export const recipes = [
  // ── 기본 재료 ─────────────────────────────────────────
  {
    id: 1, name: "나무 판자", emoji: "🪵", result: "나무 판자 4개", category: "기본",
    ingredients: ["나무 원목 1개"],
    grid: [["원목","",""],["","",""],["","",""]],
    tip: "첫 번째로 만들어야 할 아이템이에요!"
  },
  {
    id: 2, name: "막대기", emoji: "🥢", result: "막대기 4개", category: "기본",
    ingredients: ["나무 판자 2개 (세로로)"],
    grid: [["판자","",""],["판자","",""],["","",""]],
    tip: "모든 도구의 손잡이 재료예요"
  },
  {
    id: 3, name: "제작대", emoji: "🔨", result: "제작대 1개", category: "기본",
    ingredients: ["나무 판자 4개"],
    grid: [["판자","판자",""],["판자","판자",""],["","",""]],
    tip: "3×3 제작을 하려면 꼭 필요해요"
  },
  {
    id: 4, name: "화로", emoji: "🔥", result: "화로 1개", category: "기본",
    ingredients: ["조약돌 8개"],
    grid: [["돌","돌","돌"],["돌","","돌"],["돌","돌","돌"]],
    tip: "음식 굽기·광물 제련에 필수예요"
  },
  {
    id: 5, name: "침대", emoji: "🛏️", result: "침대 1개", category: "기본",
    ingredients: ["양털 3개", "나무 판자 3개"],
    grid: [["","",""],["양털","양털","양털"],["판자","판자","판자"]],
    tip: "밤을 건너뛰고 부활 위치도 바꿀 수 있어요"
  },
  {
    id: 6, name: "종이", emoji: "📄", result: "종이 3개", category: "기본",
    ingredients: ["사탕수수 3개"],
    grid: [["","",""],["수수","수수","수수"],["","",""]],
    tip: "강가나 호수 옆에서 사탕수수를 찾아요"
  },
  {
    id: 7, name: "책", emoji: "📚", result: "책 1개", category: "기본",
    ingredients: ["종이 3개", "가죽 1개"],
    grid: [["종이","",""],["종이","",""],["가죽","",""]],
    tip: "소를 잡으면 가죽을 얻을 수 있어요"
  },
  {
    id: 8, name: "사다리", emoji: "🪜", result: "사다리 3개", category: "기본",
    ingredients: ["막대기 7개"],
    grid: [["막대","","막대"],["막대","막대","막대"],["막대","","막대"]],
    tip: "높은 곳을 오를 때 벽에 붙여서 사용해요"
  },
  {
    id: 9, name: "상자", emoji: "📦", result: "상자 1개", category: "기본",
    ingredients: ["나무 판자 8개"],
    grid: [["판자","판자","판자"],["판자","","판자"],["판자","판자","판자"]],
    tip: "아이템 27개를 보관할 수 있어요. 두 개 붙이면 54칸!"
  },
  {
    id: 10, name: "용광로(제련로)", emoji: "🏭", result: "용광로 1개", category: "기본",
    ingredients: ["매끄러운 돌 8개"],
    grid: [["매끈돌","매끈돌","매끈돌"],["매끈돌","","매끈돌"],["매끈돌","매끈돌","매끈돌"]],
    tip: "화로보다 두 배 빠르게 제련해요"
  },

  // ── 도구 ──────────────────────────────────────────────
  {
    id: 11, name: "나무 곡괭이", emoji: "⛏️", result: "나무 곡괭이 1개", category: "도구",
    ingredients: ["나무 판자 3개", "막대기 2개"],
    grid: [["판자","판자","판자"],["","막대",""],["","막대",""]],
    tip: "첫날 꼭 만들어야 할 도구예요"
  },
  {
    id: 12, name: "돌 곡괭이", emoji: "⛏️", result: "돌 곡괭이 1개", category: "도구",
    ingredients: ["조약돌 3개", "막대기 2개"],
    grid: [["돌","돌","돌"],["","막대",""],["","막대",""]],
    tip: "나무 곡괭이보다 훨씬 빠르고 철도 캐요"
  },
  {
    id: 13, name: "철 곡괭이", emoji: "⛏️", result: "철 곡괭이 1개", category: "도구",
    ingredients: ["철 주괴 3개", "막대기 2개"],
    grid: [["철","철","철"],["","막대",""],["","막대",""]],
    tip: "금, 에메랄드, 레드스톤도 캘 수 있어요"
  },
  {
    id: 14, name: "다이아 곡괭이", emoji: "⛏️", result: "다이아 곡괭이 1개", category: "도구",
    ingredients: ["다이아몬드 3개", "막대기 2개"],
    grid: [["다이아","다이아","다이아"],["","막대",""],["","막대",""]],
    tip: "흑요석까지 캘 수 있는 최강 곡괭이!"
  },
  {
    id: 15, name: "나무 도끼", emoji: "🪓", result: "나무 도끼 1개", category: "도구",
    ingredients: ["나무 판자 3개", "막대기 2개"],
    grid: [["판자","판자",""],["판자","막대",""],["","막대",""]],
    tip: "나무를 손으로 캘 때보다 훨씬 빨라요"
  },
  {
    id: 16, name: "철 도끼", emoji: "🪓", result: "철 도끼 1개", category: "도구",
    ingredients: ["철 주괴 3개", "막대기 2개"],
    grid: [["철","철",""],["철","막대",""],["","막대",""]],
    tip: "무기로도 사용할 수 있어요 (검보다 공격력 높음)"
  },
  {
    id: 17, name: "나무 삽", emoji: "🪣", result: "나무 삽 1개", category: "도구",
    ingredients: ["나무 판자 1개", "막대기 2개"],
    grid: [["","판자",""],["","막대",""],["","막대",""]],
    tip: "흙, 모래, 자갈을 빠르게 파요"
  },
  {
    id: 18, name: "철 삽", emoji: "🪣", result: "철 삽 1개", category: "도구",
    ingredients: ["철 주괴 1개", "막대기 2개"],
    grid: [["","철",""],["","막대",""],["","막대",""]],
    tip: "나무 삽보다 훨씬 빠르게 흙을 파요"
  },
  {
    id: 19, name: "나무 괭이", emoji: "🌱", result: "나무 괭이 1개", category: "도구",
    ingredients: ["나무 판자 2개", "막대기 2개"],
    grid: [["판자","판자",""],["","막대",""],["","막대",""]],
    tip: "밭을 만들어 밀, 당근, 감자를 키워요"
  },
  {
    id: 20, name: "낚싯대", emoji: "🎣", result: "낚싯대 1개", category: "도구",
    ingredients: ["막대기 3개", "실 2개"],
    grid: [["","","막대"],["","막대","실"],["막대","","실"]],
    tip: "물에 드리우면 물고기를 잡을 수 있어요"
  },
  {
    id: 21, name: "가위", emoji: "✂️", result: "가위 1개", category: "도구",
    ingredients: ["철 주괴 2개"],
    grid: [["","철",""],["철","",""],["","",""]],
    tip: "양을 죽이지 않고 양털만 얻을 수 있어요"
  },
  {
    id: 22, name: "양동이", emoji: "🪣", result: "양동이 1개", category: "도구",
    ingredients: ["철 주괴 3개"],
    grid: [["철","","철"],["","철",""],["","",""]],
    tip: "물, 용암, 우유를 담을 수 있어요"
  },

  // ── 무기 ──────────────────────────────────────────────
  {
    id: 23, name: "나무 검", emoji: "🗡️", result: "나무 검 1개", category: "무기",
    ingredients: ["나무 판자 2개", "막대기 1개"],
    grid: [["","판자",""],["","판자",""],["","막대",""]],
    tip: "첫날 밤을 버티는 데 도움이 돼요"
  },
  {
    id: 24, name: "돌 검", emoji: "🗡️", result: "돌 검 1개", category: "무기",
    ingredients: ["조약돌 2개", "막대기 1개"],
    grid: [["","돌",""],["","돌",""],["","막대",""]],
    tip: "나무 검보다 공격력이 높아요"
  },
  {
    id: 25, name: "철 검", emoji: "🗡️", result: "철 검 1개", category: "무기",
    ingredients: ["철 주괴 2개", "막대기 1개"],
    grid: [["","철",""],["","철",""],["","막대",""]],
    tip: "초반 최고의 검! 대부분의 몬스터를 이겨요"
  },
  {
    id: 26, name: "다이아 검", emoji: "🗡️", result: "다이아 검 1개", category: "무기",
    ingredients: ["다이아몬드 2개", "막대기 1개"],
    grid: [["","다이아",""],["","다이아",""],["","막대",""]],
    tip: "가장 강한 검! 몬스터가 한 방에 쓰러져요"
  },
  {
    id: 27, name: "활", emoji: "🏹", result: "활 1개", category: "무기",
    ingredients: ["막대기 3개", "실 3개"],
    grid: [["","막대","실"],["막대","","실"],["","막대","실"]],
    tip: "스켈레톤 같은 원거리 몬스터에게 특히 효과적이에요"
  },
  {
    id: 28, name: "화살", emoji: "🏹", result: "화살 4개", category: "무기",
    ingredients: ["부싯돌 1개", "막대기 1개", "깃털 1개"],
    grid: [["","부싯돌",""],["","막대",""],["","깃털",""]],
    tip: "닭을 잡으면 깃털, 자갈을 캐면 부싯돌을 얻어요"
  },
  {
    id: 29, name: "방패", emoji: "🛡️", result: "방패 1개", category: "무기",
    ingredients: ["나무 판자 6개", "철 주괴 1개"],
    grid: [["판자","철","판자"],["판자","판자","판자"],["","판자",""]],
    tip: "왼손에 들고 오른쪽 클릭하면 공격을 막아요"
  },

  // ── 갑옷 ──────────────────────────────────────────────
  {
    id: 30, name: "가죽 투구", emoji: "🪖", result: "가죽 투구 1개", category: "갑옷",
    ingredients: ["가죽 5개"],
    grid: [["가죽","가죽","가죽"],["가죽","","가죽"],["","",""]],
    tip: "소를 잡으면 가죽을 얻어요"
  },
  {
    id: 31, name: "가죽 흉갑", emoji: "🦺", result: "가죽 흉갑 1개", category: "갑옷",
    ingredients: ["가죽 8개"],
    grid: [["가죽","","가죽"],["가죽","가죽","가죽"],["가죽","가죽","가죽"]],
    tip: "갑옷 중 가장 방어력이 높은 부위예요"
  },
  {
    id: 32, name: "가죽 레깅스", emoji: "👖", result: "가죽 레깅스 1개", category: "갑옷",
    ingredients: ["가죽 7개"],
    grid: [["가죽","가죽","가죽"],["가죽","","가죽"],["가죽","","가죽"]],
    tip: "다리를 보호해줘요"
  },
  {
    id: 33, name: "가죽 부츠", emoji: "👟", result: "가죽 부츠 1개", category: "갑옷",
    ingredients: ["가죽 4개"],
    grid: [["","",""],["가죽","","가죽"],["가죽","","가죽"]],
    tip: "혼 신발로 발을 보호해요"
  },
  {
    id: 34, name: "철 투구", emoji: "🪖", result: "철 투구 1개", category: "갑옷",
    ingredients: ["철 주괴 5개"],
    grid: [["철","철","철"],["철","","철"],["","",""]],
    tip: "가죽보다 훨씬 튼튼해요"
  },
  {
    id: 35, name: "철 흉갑", emoji: "🦺", result: "철 흉갑 1개", category: "갑옷",
    ingredients: ["철 주괴 8개"],
    grid: [["철","","철"],["철","철","철"],["철","철","철"]],
    tip: "초반 생존에 가장 중요한 갑옷이에요"
  },
  {
    id: 36, name: "철 레깅스", emoji: "👖", result: "철 레깅스 1개", category: "갑옷",
    ingredients: ["철 주괴 7개"],
    grid: [["철","철","철"],["철","","철"],["철","","철"]],
    tip: "다리 방어구예요"
  },
  {
    id: 37, name: "철 부츠", emoji: "👟", result: "철 부츠 1개", category: "갑옷",
    ingredients: ["철 주괴 4개"],
    grid: [["","",""],["철","","철"],["철","","철"]],
    tip: "발 방어구예요"
  },

  // ── 건축 ──────────────────────────────────────────────
  {
    id: 38, name: "횃불", emoji: "💡", result: "횃불 4개", category: "건축",
    ingredients: ["석탄 또는 목탄 1개", "막대기 1개"],
    grid: [["","석탄",""],["","막대",""],["","",""]],
    tip: "어두운 곳에 설치하면 몬스터가 스폰되지 않아요"
  },
  {
    id: 39, name: "나무 문", emoji: "🚪", result: "나무 문 3개", category: "건축",
    ingredients: ["나무 판자 6개"],
    grid: [["판자","판자",""],["판자","판자",""],["판자","판자",""]],
    tip: "오른쪽 클릭으로 열고 닫을 수 있어요"
  },
  {
    id: 40, name: "울타리", emoji: "🪵", result: "울타리 3개", category: "건축",
    ingredients: ["나무 판자 4개", "막대기 2개"],
    grid: [["판자","막대","판자"],["판자","막대","판자"],["","",""]],
    tip: "동물을 가둘 때 울타리 문도 함께 만들어요"
  },
  {
    id: 41, name: "울타리 문", emoji: "🚧", result: "울타리 문 1개", category: "건축",
    ingredients: ["막대기 4개", "나무 판자 2개"],
    grid: [["막대","판자","막대"],["막대","판자","막대"],["","",""]],
    tip: "동물 농장 입구에 설치해요"
  },
  {
    id: 42, name: "나무 계단", emoji: "🪜", result: "나무 계단 4개", category: "건축",
    ingredients: ["나무 판자 6개"],
    grid: [["판자","",""],["판자","판자",""],["판자","판자","판자"]],
    tip: "점프 없이 오르내릴 수 있어요"
  },
  {
    id: 43, name: "나무 반블록", emoji: "🪵", result: "나무 반블록 6개", category: "건축",
    ingredients: ["나무 판자 3개"],
    grid: [["","",""],["","",""],["판자","판자","판자"]],
    tip: "지붕이나 계단을 만들 때 많이 써요"
  },
  {
    id: 44, name: "유리판", emoji: "🪟", result: "유리판 16개", category: "건축",
    ingredients: ["유리 6개"],
    grid: [["유리","유리","유리"],["유리","유리","유리"],["","",""]],
    tip: "창문을 만들 때 사용해요. 유리는 모래를 화로에서 구워요"
  },
  {
    id: 45, name: "사다리", emoji: "🪜", result: "사다리 3개", category: "건축",
    ingredients: ["막대기 7개"],
    grid: [["막대","","막대"],["막대","막대","막대"],["막대","","막대"]],
    tip: "벽면에 설치해서 오를 수 있어요"
  },

  // ── 음식 ──────────────────────────────────────────────
  {
    id: 46, name: "빵", emoji: "🍞", result: "빵 1개", category: "음식",
    ingredients: ["밀 3개"],
    grid: [["","",""],["밀","밀","밀"],["","",""]],
    tip: "밭에서 밀을 키우면 음식 걱정 없어요"
  },
  {
    id: 47, name: "황금 사과", emoji: "🍎", result: "황금 사과 1개", category: "음식",
    ingredients: ["사과 1개", "금 주괴 8개"],
    grid: [["금","금","금"],["금","사과","금"],["금","금","금"]],
    tip: "재생 효과가 생겨요! 위험할 때 먹으면 목숨을 구해요"
  },
  {
    id: 48, name: "호박 파이", emoji: "🥧", result: "호박 파이 1개", category: "음식",
    ingredients: ["호박 1개", "달걀 1개", "설탕 1개"],
    grid: [["","",""],["호박","달걀","설탕"],["","",""]],
    tip: "배고픔을 많이 회복해줘요"
  },
  {
    id: 49, name: "쿠키", emoji: "🍪", result: "쿠키 8개", category: "음식",
    ingredients: ["밀 2개", "코코아 열매 1개"],
    grid: [["","",""],["밀","코코아","밀"],["","",""]],
    tip: "정글에서 코코아 열매를 찾을 수 있어요"
  },

  // ── 레드스톤 ──────────────────────────────────────────
  {
    id: 50, name: "레버", emoji: "🕹️", result: "레버 1개", category: "레드스톤",
    ingredients: ["막대기 1개", "조약돌 1개"],
    grid: [["","막대",""],["","돌",""],["","",""]],
    tip: "켜면 계속 신호가 가고, 끄면 신호가 멈춰요"
  },
  {
    id: 51, name: "나무 버튼", emoji: "🔘", result: "나무 버튼 1개", category: "레드스톤",
    ingredients: ["나무 판자 1개"],
    grid: [["","",""],["","판자",""],["","",""]],
    tip: "누르면 잠깐 신호를 보내요"
  },
  {
    id: 52, name: "레드스톤 횃불", emoji: "🔴", result: "레드스톤 횃불 1개", category: "레드스톤",
    ingredients: ["레드스톤 가루 1개", "막대기 1개"],
    grid: [["","레드",""],["","막대",""],["","",""]],
    tip: "계속 신호를 내보내는 레드스톤 부품이에요"
  },
  {
    id: 53, name: "피스톤", emoji: "📡", result: "피스톤 1개", category: "레드스톤",
    ingredients: ["나무 판자 3개", "조약돌 4개", "철 주괴 1개", "레드스톤 1개"],
    grid: [["판자","판자","판자"],["돌","철","돌"],["돌","레드","돌"]],
    tip: "레드스톤 신호를 받으면 블록을 밀어내요"
  },

  // ── 특수/기타 ─────────────────────────────────────────
  {
    id: 54, name: "나침반", emoji: "🧭", result: "나침반 1개", category: "기타",
    ingredients: ["철 주괴 4개", "레드스톤 가루 1개"],
    grid: [["","철",""],["철","레드","철"],["","철",""]],
    tip: "월드 스폰 지점을 가리켜요. 집을 잃었을 때 유용해요"
  },
  {
    id: 55, name: "지도", emoji: "🗺️", result: "지도 1개", category: "기타",
    ingredients: ["종이 8개", "나침반 1개"],
    grid: [["종이","종이","종이"],["종이","나침반","종이"],["종이","종이","종이"]],
    tip: "들고 다니면 지형이 그려져요"
  },
  {
    id: 56, name: "인챈트 테이블", emoji: "✨", result: "인챈트 테이블 1개", category: "기타",
    ingredients: ["책 1개", "다이아몬드 2개", "흑요석 4개"],
    grid: [["","책",""],["다이아","흑요","다이아"],["흑요","흑요","흑요"]],
    tip: "책장 15개로 둘러싸면 더 강한 마법을 부여할 수 있어요"
  },
  {
    id: 57, name: "모루", emoji: "⚒️", result: "모루 1개", category: "기타",
    ingredients: ["철 블록 3개", "철 주괴 4개"],
    grid: [["철블","철블","철블"],["","철",""],["철","철","철"]],
    tip: "도구를 수리하고 이름을 바꿀 수 있어요"
  },
  {
    id: 58, name: "책장", emoji: "📖", result: "책장 1개", category: "기타",
    ingredients: ["책 3개", "나무 판자 6개"],
    grid: [["판자","판자","판자"],["책","책","책"],["판자","판자","판자"]],
    tip: "인챈트 테이블 옆에 두면 더 강한 마법 부여가 가능해요"
  },
  {
    id: 59, name: "양탄자", emoji: "🟫", result: "양탄자 3개", category: "기타",
    ingredients: ["양털 2개"],
    grid: [["","",""],["양털","양털",""],["","",""]],
    tip: "바닥 장식에 사용해요. 양털 색에 따라 색이 달라요"
  },
  {
    id: 60, name: "눈덩이", emoji: "⛄", result: "(눈 블록)", category: "기타",
    ingredients: ["눈덩이 4개"],
    grid: [["","",""],["눈","눈",""],["눈","눈",""]],
    tip: "블레이즈를 공격할 때 눈덩이가 효과적이에요!"
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

