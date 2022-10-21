import { createEvent, createStore } from "effector"



const initialState = [
    {
        projectName: 'React-Game',
        projectUrl: 'https://lemibad.github.io/react-game/',
        images: [
            'https://user-images.githubusercontent.com/97335217/196065884-86243858-8fac-4cba-9ed1-83de5b9b7dff.png',
            'https://user-images.githubusercontent.com/97335217/196065894-d38bb9ff-9579-47ac-a5b1-3325ab8a83c6.png',
            'https://user-images.githubusercontent.com/97335217/196065915-8601deb1-b565-4a57-b23b-2c5027ec027c.png',
            'https://user-images.githubusercontent.com/97335217/196065918-0c6565e0-c4e0-40e2-8181-38ca49a67faf.png',
            'https://user-images.githubusercontent.com/97335217/196065929-25b14a75-01ad-4f1d-9220-c7358acc2ef2.png',
            'https://user-images.githubusercontent.com/97335217/196065970-b2a35f55-af34-4eb5-95e0-4b0fc93f169f.png',
            'https://user-images.githubusercontent.com/97335217/196065975-18161235-ae86-4f25-95c8-ceb06228e033.png',
        ],
        icons: {
            js: true,
            react: true,
            ts: true,
            redux: true,
            html: true,
            git: true,
            npm: true,
            sass: true,
            node: true,
        },
        desc: 'Это один из моих первых проектов на React, в котором я первый раз использовал стейт менеджер под названием Redux, В частности redux-toolkit. Для этой игры я придумал способ генерации игрового поля путём преобразования двухмерной матрица в jsx элементы'
    },
    {
        projectName: 'Snake-Game',
        projectUrl: 'https://lemibad.github.io/Snake/',
        images: [
            'https://user-images.githubusercontent.com/97335217/197139795-8ac36a5c-1d36-491f-b5cc-d47d070550cf.png',
            'https://user-images.githubusercontent.com/97335217/197139824-be6670b0-7d5a-45d1-bbef-269684caf947.png',
            'https://user-images.githubusercontent.com/97335217/197140011-67cf9565-1915-4cf3-b6ea-46b575ac47bd.png',
            'https://user-images.githubusercontent.com/97335217/197140092-07852d7e-1d7c-43b2-99ea-eca26b292de5.png',
            'https://user-images.githubusercontent.com/97335217/197140127-f36b8bed-80cd-4313-bb2d-db817dd5861b.png',
        ],
        icons: {
            js: true,
            react: true,
            ts: true,
            redux: false,
            html: true,
            git: true,
            npm: true,
            sass: true,
            node: true,
        },
        desc: 'Мне кажется, что каждый программист должен когда-нибудь написать свою змейку и вот она и есть. Красивая с анимациями)'
    },
    {
        projectName: 'NoteBook',
        projectUrl: 'https://lemibad.github.io/NoteBook/',
        images: [
            'https://user-images.githubusercontent.com/97335217/196070807-91adc226-158d-49ee-9ec1-1d4b6eda35ed.png',
            'https://user-images.githubusercontent.com/97335217/196070941-a11caa54-9a6e-4fce-9c60-3408759d524f.png',
            'https://user-images.githubusercontent.com/97335217/196070833-d9e4b063-34ff-4282-9051-51d256815e0f.png',
            'https://user-images.githubusercontent.com/97335217/196070869-29b0e26b-b56f-41a9-aca6-b6f79ea6e5b9.png',
            'https://user-images.githubusercontent.com/97335217/196070900-509b8356-f2ef-4cd1-90fc-3e26cf2a2f03.png',
        ],
        icons: {
            js: true,
            react: true,
            ts: true,
            redux: true,
            html: true,
            git: true,
            npm: true,
            sass: true,
            node: true,
        },
        desc: 'Этот проект я делал в качестве тестогово задания в течении конкурса в IT-компанию на позицию Frontend-developer, тут основной задачей стояло сделать авторизацию и регистрацию. Для этого я использовал стороннюю библиотеку для моковых данных и сделал API для соединения клиента с базой данных'
    },
    {
        projectName: 'Gallery',
        projectUrl: 'https://lemibad.github.io/beautifulGallery/',
        images: [
            'https://user-images.githubusercontent.com/97335217/196071111-544c5b9f-ea14-441e-8a21-31bcc7435134.png',
            'https://user-images.githubusercontent.com/97335217/196071130-75aa5c30-d529-4964-8f19-d63eb01a6398.png',
            'https://user-images.githubusercontent.com/97335217/196071147-2315b3a2-6246-4017-8e64-9d4562d138d3.png',
            'https://user-images.githubusercontent.com/97335217/196071177-610496f2-813a-4ca7-9f65-001fbfd5739b.png'
        ],
        icons: {
            js: true,
            react: false,
            ts: false,
            redux: false,
            html: true,
            git: true,
            npm: false,
            sass: true,
            node: false,
        },
        desc: 'Мне просто хотелось сделать что-то красивое и я нашёл туториал по тому, как делать красивые анимации на CSS + JS и путём комбинирования раличных советов получилось это'
    }
]


export const pickIndex = createEvent<number>()
export const $currentProject = createStore(initialState[0])
.on(pickIndex, (_, i) => initialState[i])

export const $projectData = createStore(initialState)