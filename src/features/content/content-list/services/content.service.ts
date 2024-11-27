const contentService = {
  get: async (id: string) => {
    return {
      id,
      title: 'Hello, World!',
      description: 'This is a description',
      content: `## This is a heading
 
This is a list in markdown:
 
- One
- Two
- Three`,
    };
  },
  list: async () => {
    return [
      {
        id: '1',
        title: 'First Post',
        description: 'This is a description',
        content: `## First Post This is the first post`,
      },
      {
        id: '2',
        title: 'Second Post',
        description: 'This is a description',
        content: `## Second Post This is the second post`,
      },
      {
        id: '3',
        title: 'Third Post',
        description: 'This is a description',
        content: `## Third Post This is the third post`,
      },
    ];
  },
};

export default contentService;
