const useGetPhotos = () => {
  return {
    data: [
      {
        id: 1,
        alt: 'testalt1',
        photographer: 'test photographer 1',
        src: {
          small: 'https://example.com/image1.jpg',
          large2x: 'https://example.com/imagel2.jpg'
        }
      },
      {
        id: 2,
        alt: 'testalt2',
        photographer: 'test photographer 2',
        src: {
          small: 'https://example.com/image2.jpg',
          large2x: 'https://example.com/imagel2.jpg'
        }
      }
    ],
    hasMore: true,
    loading: false,
    error: null
  }
}

export default useGetPhotos
