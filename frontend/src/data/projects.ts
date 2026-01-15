/* CHANGE NOTE
Why: Define PAD team projects and personal projects data
What changed: Added Like a Dream exhibition wedding project as main PAD team project
Behaviour/Assumptions: Projects can be filtered by contributor or isTeamProject
Rollback: Revert to previous version
— mj
*/

import { Project, MemberId } from '@/types';

export const projects: Project[] = [
    // PAD Team Projects
    {
        slug: 'like-a-dream',
        title: 'Like a Dream',
        description: 'An exhibition wedding by Mj and Sol. A special wedding told through an exhibition.',
        longDescription: `안녕하세요! 여러분을 명준과 솔의 결혼전시에 초대합니다.

결혼을 전시로 한다는 게 무슨 말인지 궁금하실 것 같습니다. 시작은 하나의 질문이었습니다.

'우리에게 결혼의 의미는 무엇일까?'

질문에 대한 답을 결혼식을 통해 나누고 싶었습니다. 그래서 '전시'라는 방식을 선택했습니다. 전시의 형태라면 저희의 메시지를 더 잘 전달할 수 있을 것이라 생각했기 때문입니다.

이번 결혼식에서 저희는 전시 작가가 되어보기로 했습니다. 오시는 분들을 생각하며 최선을 다해 전시를 준비했습니다. 이곳에 오셔서 저희의 꿈 같은 이야기를 천천히 즐겨주시면 됩니다.

서로가 서로의 꿈을 이뤄주는 영혼의 동반자가 되도록 노력하겠습니다.

2023년 7월 8일 토요일 @구캔갤러리

---

## 전시 구성

### 1부: I dreamed a dream 꿈을 꾸다
누구나 자신만의 세계가 있다. 어린아이 같이 해맑았던 우리는 이제 사진 속에서만 남아있다. 10년 후에는 무엇이 되어있을까? 어떤 희망이 우리를 자라게 할까? 그때를 돌아보면 우리는 항상 미래를 꿈꾸면서 살았던 것 같다. 전시공간1을 통해 솔과 명준이 그려온 이야기를 생생하게 느낄 수 있다.

### 2부: Like a dream 꿈만 같은
요즘같이 날씨가 좋은 날을 기적이라고 불러도 괜찮을 것 같다. 하늘하늘 구름이 이리저리 움직여 머리 위에 떠 있고, 싱그러운 태양은 적당한 각도로 세상의 어둠을 몰아낸다. 우리가 사랑한 순간순간은 언제든 변할 수도 있었지만 운명은 우리가 계속 서로의 곁에 있도록 허락해주었다. 누군가를 만날 때 한 번쯤은 그런 필연적인 순간이 있다. 전시공간2를 통해 꿈만 같은 우리의 만남 그리고 당신의 만남도 잠시 떠올려볼 수 있다.

### 3부: Life is but a dream 인생은 한바탕 꿈
인생을 잘 산다는 게 뭘까? 누구나 '잘 산다'에 대한 기준이 있을 것이다. 사회적인 성공과 성취, 경제적인 안정을 꿈꾸는 사람도 있다. 우리는 도전과 모험을 꿈꾼다. 이 모험과 도전에는 어려움이 닥칠 수도 있다. 하지만 꿈꾸지 않는다면 인생에서 어떤 것을 바라봐야 하는가? 불가능한 것을 이루는 유일한 방법은 가능하다고 믿는 것이다. 전시공간3에서는 우리가 그리는 비전과 미래를 나눠보고자 한다.

---

## 작가 소개

### 이명준
혼자가 더 편하다고 생각했습니다. 진심으로 저를 이해해주는 사람은 없다고 믿어 왔습니다. 보이지 않아서 사랑이 없다고 여겼습니다. 그렇지만 사실은 누구보다 모든 것을 터놓고 싶은 사람을 애타게 찾았는지 모르겠습니다.

지금은 저보다 저를 더 잘 아는 사람이 있습니다. 부족한 저를 보듬어주는 모습을 보면서 편협하게 믿어온 생각을 내려놓았습니다. 이제는 제 내면의 모습을 보여줄 수 있는 한 사람을 위해 평생 헌신하려고 합니다.

### 김솔
삶에 있어 무엇보다 '진심'을 소중하게 여깁니다. 진심을 오해하는 누군가로부터 스스로를 지키기 위해 저의 생각과 기준을 더 견고하게 만들어 왔는지도 모르겠습니다. 이러한 나의 모습에도 늘 같은 사랑을 주는 사람을 만났습니다. 마음을 알아주는 사람을 보며 내가 머물러있던 범주 너머의 삶을 상상해보게 되었습니다. 안개같이 보이지 않는 두려운 길 위에서도 씩씩하게, 함께 춤추며 노래하는 삶을 살아가려고 합니다.`,
        thumbnail: '/projects/like-a-dream-thumb.png',
        techStack: ['Exhibition Design', 'Storytelling', 'Curation'],
        contributors: ['mj', 'sol'],
        links: {
            live: 'https://energetic-bucket-84a.notion.site/Like-a-Dream-21f8b07d876e43ed85a051c9ededcbeb',
        },
        isTeamProject: true,
        featured: true,
        date: '2023.07.08',
    },
    {
        slug: 'english-tutor',
        title: 'English Tutor',
        description: 'Chat with AI tutor.',
        longDescription: `Chat with AI tutor for English conversation practice.`,
        thumbnail: '/projects/english-tutor-thumb.png',
        techStack: ['Next.js', 'OpenAI', 'TypeScript', 'MongoDB'],
        contributors: ['mj'],
        links: {
            demo: '/tutor',
        },
        isTeamProject: false,  // MJ's personal project, not PAD team project
        featured: true,
        date: '2024',
    },
    // Add more team projects here...
];

// Helper functions
export const getProjectBySlug = (slug: string): Project | undefined =>
    projects.find((p) => p.slug === slug);

export const getTeamProjects = (): Project[] =>
    projects.filter((p) => p.isTeamProject);

export const getMemberProjects = (memberId: MemberId): Project[] =>
    projects.filter((p) => p.contributors.includes(memberId));

export const getFeaturedProjects = (): Project[] =>
    projects.filter((p) => p.featured);
