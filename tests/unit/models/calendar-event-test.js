/* jshint expr:true */
import { expect } from 'chai';
import { describeModel, it } from 'ember-mocha';

describeModel(
  'calendar-event',
  'Unit | Model | calendar event',
  {
    // Specify the other units that are required for this test.
      needs: ['model:space']
  },
  function() {
    // Replace this with your real tests.
    beforeEach(function () {
      // runs before each test in this block

    });

    afterEach(function () {
      // runs after each test in this block

    });

    it('exists', function() {
      let model = this.subject();
      // var store = this.store();
      expect(model).to.be.ok;
    });
  }
);
