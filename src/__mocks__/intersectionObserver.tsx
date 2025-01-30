// Mock IntersectionObserver
class MockIntersectionObserver {
  constructor(
    callback: IntersectionObserverCallback,
    options?: IntersectionObserverInit
  ) {}
  observe(target: Element) {
    return null
  }
  unobserve(target: Element) {
    return null
  }
  disconnect() {
    return null
  }
  takeRecords(): IntersectionObserverEntry[] {
    return []
  }
}

// Assign the mock to the global object
global.IntersectionObserver = MockIntersectionObserver as any

// Export the mock for use in tests
export default MockIntersectionObserver
