describe('Calculator Lab', function () {
  describe('valid inputs', function () {
    it('should add correctly', function () {
      expect(calculate('2 + 3')).toBe(5);
    });
    it('should subtract correctly', function () {
      expect(calculate('7 - 4')).toBe(3);
      expect(calculate('2 - 8')).toBe(-6);
    });
    it('should multiply correctly', function () {
      expect(calculate('5 * 6')).toBe(30);
    });
    it('should divide correctly', function () {
      expect(calculate('8 / 2')).toBe(4);
      expect(calculate('2 / 8')).toBe(0.25);
    });
    it('should calculate powers correctly', function () {
      expect(calculate('5 ^ 2')).toBe(25);
      expect(calculate('6 ^ 3')).toBe(216);
    });
    it('should calculate mod correctly', function () {
      expect(calculate('5 % 5')).toBe(0);
      expect(calculate('18 % 10')).toBe(8);
    });
    it('should calculate sqrt correctly', function () {
      expect(calculate('sqrt 49')).toBe(7);
      expect(calculate('sqrt 144')).toBe(12);
    });
  });
  describe('invalid inputs', function () {
    it('should fail and alert if too few inputs (test #1)', function () {
      const alert = spyOn(window, 'alert');
      expect(calculate('-')).toBeUndefined();
      expect(alert.calls.count()).toBe(1);
    });
    it('should fail and alert if too few inputs (test #2)', function () {
      const alert = spyOn(window, 'alert');
      expect(calculate('platypus')).toBeUndefined();
      expect(alert.calls.count()).toBe(1);
    });
    it('should fail and alert if too many inputs (test #1)', function () {
      const alert = spyOn(window, 'alert');
      expect(calculate('1 + 2 - 3 * 4 / 5')).toBeUndefined();
      expect(alert.calls.count()).toBe(1);
    });
    it('should fail and alert if too many inputs (test #2)', function () {
      const alert = spyOn(window, 'alert');
      expect(calculate('a b c d')).toBeUndefined();
      expect(alert.calls.count()).toBe(1);
    });
    it('should fail and alert if first input is not a number (test #1)', function () {
      const alert = spyOn(window, 'alert');
      expect(calculate('banana * 2')).toBeUndefined();
      expect(alert.calls.count()).toBe(1);
    });
    it('should fail and alert if first input is not a number (test #2)', function () {
      const alert = spyOn(window, 'alert');
      expect(calculate('pizza / 6')).toBeUndefined();
      expect(alert.calls.count()).toBe(1);
    });
    it('should fail and alert if second input is not a number (test #1)', function () {
      const alert = spyOn(window, 'alert');
      expect(calculate('4 - blahhhh')).toBeUndefined();
      expect(alert.calls.count()).toBe(1);
    });
    it('should fail and alert if second input is not a number (test #2)', function () {
      const alert = spyOn(window, 'alert');
      expect(calculate('4 + 1ab56c2')).toBeUndefined();
      expect(alert.calls.count()).toBe(1);
    });
  });
  describe('Further Study - factorial', function () {
    it('should calculate factorial correctly', function () {
      expect(calculate('! 5')).toBe(120);
      expect(calculate('! 2')).toBe(2);
    });
    it('should fail and alert if number is negative', function () {
      const alert = spyOn(window, 'alert');
      expect(calculate('! -3')).toBeUndefined();
      expect(alert.calls.count()).toBe(1);
    });
    it('should fail and alert if number is a decimal', function () {
      const alert = spyOn(window, 'alert');
      expect(calculate('! 0.15625')).toBeUndefined();
      expect(alert.calls.count()).toBe(1);
    });
  });
});
