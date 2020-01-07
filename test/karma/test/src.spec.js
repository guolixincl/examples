describe('hello', function() {
  it('test add', function() {
    var a = add(3, 6);
    expect(a).toEqual(9);
  });

  it('test add', function() {
    var a = add(3, 6);
    expect(a).toEqual(10);
  });

  it("The 'toBe' matcher compares with ===", function() {
    var a = 12;
    var b = a;
    expect(a).toBe(b);
    expect(a).not.toBe(null);
  });

  it("The 'toEqual' for deep comparision", function() {
    var bigObject = {
      foo: ['bar', 'baz']
    };
    var anotherObject = {
      foo: 'bar'
    };
    expect(bigObject).toEqual({ foo: ['bar', 'baz'] });
    // expect(anotherObject).toEqual({ foo: ['bar', 'baz'] });
  });
});
