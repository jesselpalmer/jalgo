var chai = require('chai')
var csjs = require('../lib')

describe('Library tests', function () {
  describe('Algorithms', function () {
    describe('binarySearch test', function () {
      it('should only contain one element', function () {
        var binarySearch = csjs.binarySearch
  
        chai.expect(binarySearch(['air man', 'bubble man', 'wood man'], 'bubble man')).equal(1)
      })
    })
  
    describe('euclideanAlgorithm test', function () {
      it('should find the select element', function () {
        var euclideanAlgorithm = csjs.euclideanAlgorithm
  
        chai.expect(euclideanAlgorithm(1995, 2000)).equal(5)
      })
    })
  
    describe('linearSearch test', function () {
      it('should find the select element', function () {
        var linearSearch = csjs.linearSearch
  
        chai.expect(linearSearch(['air man', 'bubble man', 'wood man'], 'air man')).equal(0)
      })
    })
  
    describe('selectionSort test', function () {
      it('should find the select element', function () {
        var selectionSort = csjs.selectionSort
        var orignialArray = ['bubble man', 'air man', 'wood man']
        var sortedArray = ['air man', 'bubble man', 'wood man']
  
        chai.expect(selectionSort(orignialArray).toString()).equal(sortedArray.toString())
      })
    })
  })
})
