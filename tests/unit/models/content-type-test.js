import { moduleForModel, test } from 'ember-qunit';

moduleForModel('content-type', 'Unit | Model | content type', {
  // Specify the other units that are required for this test.
  needs: ["model:space"]
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
