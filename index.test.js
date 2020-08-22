const SinglyLinkedList = require( "./index");


describe('LinkedList', function (){
  it('will reserve a linked list',function (){
      const list = new SinglyLinkedList()
      list.addFirst(4)
      list.addFirst(3)
      list.addFirst(2)
      list.addFirst(1)
      list.reverse()

      expect(list.getAtIndex(0)).toEqual(4);
      expect(list.getAtIndex(1)).toEqual(3);
      expect(list.getAtIndex(2)).toEqual(2);
      expect(list.getAtIndex(3)).toEqual(1);
  })

  it('returns null if the index is outside of bounds of list', function(){
    const list = new SinglyLinkedList()
    expect(list.getAtIndex(3)).toEqual(null)
  })
 
  it('it can get an index', function (){
    const list = new SinglyLinkedList()
    list.addFirst(1)
    list.addFirst(2)
    list.addFirst(3)
    list.addFirst(4)

    expect(list.getAtIndex(0)).toEqual(4);
    expect(list.getAtIndex(1)).toEqual(3);
    expect(list.getAtIndex(2)).toEqual(2);
    expect(list.getAtIndex(3)).toEqual(1);
 
  })
})