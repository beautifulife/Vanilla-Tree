export default {
  name: 'Vanilla Tree',
  children: [
    { name: 'hello1' },
    { name: 'wat1' },
    {
      name: 'child folder1',
      children: [
        {
          name: 'child folder2',
          children: [
            { name: 'hello3' },
            { name: 'wat3' }
          ]
        },
        { name: 'hello2' },
        { name: 'wat2' },
        {
          name: 'child folder2',
          children: [
            { name: 'hello3' },
            { name: 'wat3' }
          ]
        }
      ]
    }
  ]
}
