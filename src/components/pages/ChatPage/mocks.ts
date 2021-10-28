export const emptyResponse = [];

interface Messages {
  type: string;
  source: string;
  text: string;
  title?: string;
  size?: number;
}

export interface Response {
  name: string;
  gender: string;
  id: string;
  lastSeen: string;
  messages: Messages[];
}

export const filledResponse: Response[] = [
  {
    name: 'Konstantin Konstantinopolski',
    gender: 'male',
    id: '000001',
    lastSeen: '10',
    messages: [
      {
        type: 'text',
        source: 'incoming',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
      },
      {
        type: 'text',
        source: 'outcoming',
        text: 'SeSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.  accusantium doloremque laudantium, totam re',
      },
      {
        type: 'file',
        source: 'incoming',
        text: 'Pepega.png',
        size: 4414141,
        title: 'Pepega.png',
      },
      {
        type: 'text',
        source: 'incoming',
        text: 'SeSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
      },
      {
        type: 'text',
        source: 'outcoming',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusanti',
      },
    ],
  },
  {
    name: 'Marina Joe',
    gender: 'female',
    id: '000002',
    lastSeen: '3',
    messages: [
      {
        type: 'text',
        source: 'incoming',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
      },
      {
        type: 'text',
        source: 'outcoming',
        text: 'SeSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.  accusantium doloremque laudantium, totam re',
      },
      {
        type: 'text',
        source: 'outcoming',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusanti',
      },
      {
        type: 'text',
        source: 'incoming',
        text: 'SeSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
      },
      {
        type: 'file',
        source: 'outcoming',
        text: 'Pepega.png',
        size: 4414141,
        title: 'Pepega.png',
      },
    ],
  },
  {
    name: 'Ernest Gillroy',
    gender: 'male',
    id: '000003',
    lastSeen: '45',
    messages: [
      {
        type: 'text',
        source: 'incoming',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
      },
      {
        type: 'text',
        source: 'outcoming',
        text: 'SeSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.  accusantium doloremque laudantium, totam re',
      },
      {
        type: 'text',
        source: 'incoming',
        text: 'SeSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
      },
      {
        type: 'text',
        source: 'outcoming',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusanti',
      },
    ],
  },
  {
    name: 'Konstantin Konstantinopolski',
    gender: 'male',
    id: '000004',
    lastSeen: '55',
    messages: [
      {
        type: 'text',
        source: 'incoming',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
      },
      {
        type: 'text',
        source: 'outcoming',
        text: 'SeSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.  accusantium doloremque laudantium, totam re',
      },
      {
        type: 'text',
        source: 'outcoming',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusanti',
      },
      {
        type: 'text',
        source: 'incoming',
        text: 'SeSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
      },
    ],
  },
];
