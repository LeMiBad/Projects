import { createStore } from "effector"



const initialState = [
    {
        projectName: 'React-Game',
        projectUrl: 'https://lemibad.github.io/react-game/',
        images: [
            'https://user-images.githubusercontent.com/97335217/194321905-c3dff0bf-edd8-4f82-ab87-140b66b7f1f7.png',
            'https://user-images.githubusercontent.com/97335217/194321956-54defa6f-5b21-45ae-a742-525873699a4d.png',
            'https://user-images.githubusercontent.com/97335217/194322037-dffa2597-2efa-4c57-8df4-afed85f486ea.png',
            'https://user-images.githubusercontent.com/97335217/194322062-5be3eac6-9b43-4724-994d-90f066661094.png',
            'https://user-images.githubusercontent.com/97335217/194322116-c41e5208-d6cd-4e8c-8560-e9b3f87b3e37.png',
            'https://user-images.githubusercontent.com/97335217/194322137-d6e0749c-4cc9-44f9-b87b-f28a93c319ab.png',
            'https://user-images.githubusercontent.com/97335217/194322137-d6e0749c-4cc9-44f9-b87b-f28a93c319ab.png',
        ]
    },
    {
        projectName: 'NoteBook',
        projectUrl: 'https://lemibad.github.io/NoteBook/',
        images: [
            'https://user-images.githubusercontent.com/97335217/194322294-7d29676f-4c23-42df-a7d1-158e65bac4fa.png',
            'https://user-images.githubusercontent.com/97335217/194322340-d48ab869-c610-4296-bb6b-e6c8d2cfe106.png',
            'https://user-images.githubusercontent.com/97335217/194322362-c0c6bf69-27e0-4c6f-b7ec-27b3783bb30a.png',
            'https://user-images.githubusercontent.com/97335217/194322394-bdd482c9-128a-44e1-8fdc-9b65167a678f.png',
            'https://user-images.githubusercontent.com/97335217/194322426-89e8d614-3632-48c7-92cf-a77ef4bf2fea.png',
            'https://user-images.githubusercontent.com/97335217/194322454-654b6439-6dba-4522-8904-c452f0675839.png',
            'https://user-images.githubusercontent.com/97335217/194322616-784017c1-6430-4975-99a0-0a64edba6094.png',
        ]
    },
    {
        projectName: 'Gallery',
        projectUrl: 'https://lemibad.github.io/beautifulGallery/',
        images: [
            'https://user-images.githubusercontent.com/97335217/195083607-a3c706c6-98f3-47a9-8416-b3f42362ed07.png',
            'https://user-images.githubusercontent.com/97335217/195083628-1a156294-40c2-4142-ab31-7df56bcb01c2.png',
            'https://user-images.githubusercontent.com/97335217/195083652-fac15d9e-79ec-4bd8-896b-7efcf0586a25.png'
        ]
    }
]


export const $projectData = createStore(initialState)